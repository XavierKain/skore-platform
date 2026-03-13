import io
import time
import json
import warnings
from contextlib import asynccontextmanager
from fastapi import FastAPI, File, UploadFile, Form, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import pandas as pd
import numpy as np
from sklearn.model_selection import cross_val_score, train_test_split
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.impute import SimpleImputer
from sklearn.pipeline import Pipeline
from sklearn.metrics import (
    accuracy_score, f1_score, precision_score, recall_score,
    confusion_matrix, classification_report, roc_auc_score
)
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.svm import SVC
from sklearn.tree import DecisionTreeClassifier
from sklearn.neighbors import KNeighborsClassifier
import stripe
import sqlite3
from database import init_db, get_db, User, Report, SessionLocal
from sqlalchemy.orm import Session
import passlib.hash as ph
from typing import Optional

warnings.filterwarnings("ignore")

# Stripe configuration (mock)
stripe.api_key = "sk_test_placeholder_not_real"
STRIPE_WEBHOOK_SECRET = "whsec_placeholder_not_real"
PRICE_ID = "price_placeholder_15eur_monthly"


@asynccontextmanager
async def lifespan(app: FastAPI):
    init_db()
    print("✅ Skore Platform API started")
    yield
    print("👋 Skore Platform API stopped")


app = FastAPI(
    title="Skore Platform API",
    description="ML evaluation SaaS API powered by skore and scikit-learn",
    version="1.0.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://skore-platform.vercel.app", "*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MODEL_MAP = {
    "logistic_regression": LogisticRegression(max_iter=1000, random_state=42),
    "random_forest": RandomForestClassifier(n_estimators=100, random_state=42),
    "xgboost": GradientBoostingClassifier(n_estimators=100, random_state=42),
    "svm": SVC(probability=True, random_state=42),
    "decision_tree": DecisionTreeClassifier(random_state=42),
    "knn": KNeighborsClassifier(n_neighbors=5),
}


def preprocess_data(df: pd.DataFrame, target_column: str):
    """Auto-preprocess: encode categoricals, impute missing values."""
    if target_column not in df.columns:
        raise ValueError(f"Target column '{target_column}' not found. Available: {list(df.columns)}")

    X = df.drop(columns=[target_column])
    y = df[target_column]

    # Encode target
    le = LabelEncoder()
    y_encoded = le.fit_transform(y.astype(str))
    classes = le.classes_.tolist()

    # Encode categorical features
    for col in X.select_dtypes(include=["object", "category"]).columns:
        col_le = LabelEncoder()
        X[col] = col_le.fit_transform(X[col].astype(str))

    # Convert to float
    X = X.astype(float)

    return X, y_encoded, classes


@app.get("/")
async def root():
    return {
        "name": "Skore Platform API",
        "version": "1.0.0",
        "status": "running",
        "docs": "/docs",
    }


@app.get("/health")
async def health():
    return {"status": "ok", "time": time.time()}


@app.post("/evaluate")
async def evaluate(
    file: UploadFile = File(...),
    model_type: str = Form("random_forest"),
    target_column: str = Form("target"),
    cv_folds: int = Form(5),
):
    """
    Evaluate a CSV dataset with the specified ML model.
    Returns comprehensive metrics computed with skore-inspired evaluation.
    """
    start = time.time()

    if not file.filename.endswith(".csv"):
        raise HTTPException(status_code=400, detail="Only CSV files are supported")

    if model_type not in MODEL_MAP:
        raise HTTPException(
            status_code=400,
            detail=f"Unknown model. Choose from: {list(MODEL_MAP.keys())}"
        )

    # Read CSV
    content = await file.read()
    try:
        df = pd.read_csv(io.BytesIO(content))
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Failed to parse CSV: {str(e)}")

    if df.shape[0] < 20:
        raise HTTPException(status_code=400, detail="Dataset too small. Need at least 20 rows.")

    # Preprocess
    try:
        X, y, classes = preprocess_data(df, target_column)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

    n_samples, n_features = X.shape
    n_classes = len(np.unique(y))

    # Build pipeline with imputer + scaler + model
    base_model = MODEL_MAP[model_type]
    pipeline = Pipeline([
        ("imputer", SimpleImputer(strategy="mean")),
        ("scaler", StandardScaler()),
        ("model", base_model),
    ])

    # Train/test split
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42, stratify=y if n_classes > 1 else None
    )

    # Fit and evaluate
    pipeline.fit(X_train, y_train)
    y_pred = pipeline.predict(X_test)

    # Metrics
    accuracy = float(accuracy_score(y_test, y_pred))
    f1_weighted = float(f1_score(y_test, y_pred, average="weighted", zero_division=0))
    f1_macro = float(f1_score(y_test, y_pred, average="macro", zero_division=0))
    precision_weighted = float(precision_score(y_test, y_pred, average="weighted", zero_division=0))
    recall_weighted = float(recall_score(y_test, y_pred, average="weighted", zero_division=0))
    cm = confusion_matrix(y_test, y_pred).tolist()
    report = classification_report(y_test, y_pred, output_dict=True, zero_division=0)

    # ROC-AUC (binary only)
    roc_auc = None
    if n_classes == 2 and hasattr(pipeline, "predict_proba"):
        try:
            y_proba = pipeline.predict_proba(X_test)[:, 1]
            roc_auc = float(roc_auc_score(y_test, y_proba))
        except Exception:
            pass

    # Cross-validation
    cv_scoring = "accuracy"
    cv_scores = cross_val_score(pipeline, X, y, cv=cv_folds, scoring=cv_scoring)
    cv_mean = float(cv_scores.mean())
    cv_std = float(cv_scores.std())

    # Feature importances (if available)
    feature_importances = {}
    try:
        inner_model = pipeline.named_steps["model"]
        if hasattr(inner_model, "feature_importances_"):
            fi = inner_model.feature_importances_
            feature_names = list(X.columns)
            feature_importances = {
                name: float(importance)
                for name, importance in sorted(
                    zip(feature_names, fi), key=lambda x: x[1], reverse=True
                )[:15]
            }
        elif hasattr(inner_model, "coef_"):
            fi = np.abs(inner_model.coef_[0]) if inner_model.coef_.ndim > 1 else np.abs(inner_model.coef_)
            feature_names = list(X.columns)
            feature_importances = {
                name: float(importance)
                for name, importance in sorted(
                    zip(feature_names, fi), key=lambda x: x[1], reverse=True
                )[:15]
            }
    except Exception:
        pass

    elapsed = time.time() - start

    metrics = {
        "accuracy": accuracy,
        "f1_weighted": f1_weighted,
        "f1_macro": f1_macro,
        "precision_weighted": precision_weighted,
        "recall_weighted": recall_weighted,
        "roc_auc": roc_auc,
        "cv_mean": cv_mean,
        "cv_std": cv_std,
        "cv_folds": cv_folds,
        "cv_scores": [float(s) for s in cv_scores],
        "confusion_matrix": cm,
        "classification_report": report,
        "feature_importances": feature_importances,
        "n_samples": n_samples,
        "n_features": n_features,
        "n_classes": n_classes,
        "classes": [str(c) for c in classes],
    }

    return {
        "status": "success",
        "filename": file.filename,
        "model_type": model_type,
        "elapsed_seconds": round(elapsed, 3),
        "metrics": metrics,
    }


# --- Auth (mock/simple) ---

class UserCreate(BaseModel):
    name: str
    email: str
    password: str


class UserLogin(BaseModel):
    email: str
    password: str


@app.post("/auth/register")
async def register(data: UserCreate, db: Session = Depends(get_db)):
    existing = db.query(User).filter(User.email == data.email).first()
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")

    hashed = ph.bcrypt.hash(data.password)
    user = User(
        name=data.name,
        email=data.email,
        hashed_password=hashed,
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return {"id": user.id, "email": user.email, "name": user.name}


@app.post("/auth/login")
async def login(data: UserLogin, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == data.email).first()
    if not user or not ph.bcrypt.verify(data.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return {"id": user.id, "email": user.email, "name": user.name, "token": f"mock_token_{user.id}"}


# --- Stripe (mock) ---

@app.post("/stripe/create-checkout-session")
async def create_checkout_session(email: str = Form(...)):
    """Mock Stripe checkout session creation."""
    # In production: stripe.checkout.Session.create(...)
    return {
        "url": f"https://checkout.stripe.com/pay/mock_session_id?email={email}",
        "session_id": "mock_cs_test_placeholder",
    }


@app.post("/stripe/webhook")
async def stripe_webhook(request_body: dict):
    """Mock Stripe webhook handler."""
    event_type = request_body.get("type", "unknown")
    print(f"[Stripe Webhook] Event: {event_type}")

    if event_type == "checkout.session.completed":
        print("[Stripe] New subscription completed")
    elif event_type == "customer.subscription.deleted":
        print("[Stripe] Subscription cancelled")
    elif event_type == "invoice.payment_failed":
        print("[Stripe] Payment failed")

    return {"received": True}


@app.get("/models")
async def list_models():
    """List available ML models."""
    return {
        "models": [
            {"id": "logistic_regression", "name": "Logistic Regression", "type": "linear", "fast": True},
            {"id": "random_forest", "name": "Random Forest", "type": "ensemble", "fast": True},
            {"id": "xgboost", "name": "XGBoost (GBM)", "type": "boosting", "fast": True},
            {"id": "svm", "name": "Support Vector Machine", "type": "kernel", "fast": False},
            {"id": "decision_tree", "name": "Decision Tree", "type": "tree", "fast": True},
            {"id": "knn", "name": "K-Nearest Neighbors", "type": "instance", "fast": True},
        ]
    }
