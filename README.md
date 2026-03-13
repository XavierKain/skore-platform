# 🎯 Skore Platform

> **ML Evaluation SaaS** — Professional model evaluation powered by [skore](https://github.com/probabl-ai/skore) and scikit-learn.

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.115-green)](https://fastapi.tiangolo.com)
[![Python](https://img.shields.io/badge/Python-3.11-blue)](https://python.org)
[![Docker](https://img.shields.io/badge/Docker-ready-blue)](https://docker.com)
[![Pricing](https://img.shields.io/badge/SaaS-€15%2Fmo-orange)](https://skore-platform.io/pricing)

---

## 🚀 What is Skore Platform?

**Skore Platform** is a SaaS web application that wraps the open-source [skore](https://github.com/probabl-ai/skore) ML evaluation library into a professional, user-friendly dashboard.

**Target users:** Data Scientists, ML Engineers, AI teams  
**Pricing:** €15/month (14-day free trial, no credit card)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎯 **ML Evaluation** | Upload CSV, select model, get instant evaluation |
| 📊 **Rich Metrics** | Accuracy, F1, precision, recall, ROC-AUC, cross-validation |
| 🗂️ **Confusion Matrix** | Visual breakdown of prediction errors |
| 📈 **Feature Importance** | Understand which features matter most |
| 🤖 **Multi-Model** | 6 sklearn models: LogReg, Random Forest, XGBoost, SVM, Decision Tree, KNN |
| 🔐 **Auth** | Email/password authentication with SQLite persistence |
| 💳 **Stripe-ready** | Pricing page + webhook structure for €15/mo billing |
| 🐳 **Docker** | Full docker-compose stack for one-command deployment |
| 🔌 **REST API** | FastAPI with OpenAPI docs at `/docs` |

---

## 🏗️ Architecture

```
skore-platform/
├── frontend/                 # Next.js 14 (App Router)
│   ├── app/
│   │   ├── page.tsx          # Landing page
│   │   ├── login/            # Auth pages
│   │   ├── signup/
│   │   ├── dashboard/        # Main evaluation UI
│   │   ├── reports/          # Results & charts
│   │   ├── pricing/          # Pricing page
│   │   └── api/
│   │       └── stripe-webhook/  # Stripe webhook handler
│   └── ...
├── backend/                  # FastAPI (Python)
│   ├── main.py               # API endpoints
│   ├── database.py           # SQLAlchemy models
│   ├── requirements.txt
│   └── Dockerfile
├── docker-compose.yml        # Full stack deployment
└── README.md
```

---

## 🛠️ Setup

### Prerequisites
- Node.js 20+
- Python 3.11+
- Docker & docker-compose (for containerized setup)

---

### 🐳 Quick Start with Docker (recommended)

```bash
git clone https://github.com/XavierKain/skore-platform.git
cd skore-platform

# Copy env files
cp backend/.env.example backend/.env
cp frontend/.env.local.example frontend/.env.local

# Start everything
docker-compose up --build
```

- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- API Docs: http://localhost:8000/docs

---

### 💻 Local Development

#### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

#### Frontend

```bash
cd frontend
npm install
cp .env.local.example .env.local
npm run dev
```

---

## 🔌 API Reference

### `POST /evaluate`
Evaluate a dataset with a chosen ML model.

**Form data:**
- `file` — CSV file
- `model_type` — one of: `logistic_regression`, `random_forest`, `xgboost`, `svm`, `decision_tree`, `knn`
- `target_column` — name of the target column (default: `target`)
- `cv_folds` — number of cross-validation folds (default: 5)

**Response:**
```json
{
  "status": "success",
  "filename": "dataset.csv",
  "model_type": "random_forest",
  "elapsed_seconds": 1.23,
  "metrics": {
    "accuracy": 0.94,
    "f1_weighted": 0.93,
    "f1_macro": 0.91,
    "precision_weighted": 0.94,
    "recall_weighted": 0.94,
    "roc_auc": 0.98,
    "cv_mean": 0.92,
    "cv_std": 0.02,
    "confusion_matrix": [[45, 3], [2, 50]],
    "classification_report": {...},
    "feature_importances": {"feature_1": 0.35, ...},
    "n_samples": 500,
    "n_features": 12,
    "n_classes": 2
  }
}
```

### `GET /models`
List available ML models.

### `POST /auth/register`
Register a new user.

### `POST /auth/login`
Authenticate a user.

### `POST /stripe/create-checkout-session`
Create a Stripe checkout session (mock).

### `POST /stripe/webhook`
Handle Stripe webhook events (mock).

---

## 💳 Pricing

| Plan | Price | Features |
|------|-------|----------|
| Free Trial | €0 / 14 days | 50 evaluations, 5 models, basic metrics |
| Professional | **€15/month** | Unlimited evaluations, all models, API, export, priority support |
| Enterprise | Custom | SSO, dedicated infra, custom models, 99.99% SLA |

---

## 🧪 Sample CSV Format

```csv
feature_1,feature_2,feature_3,target
1.5,2.3,0.8,0
2.1,0.9,1.4,1
...
```

- Any column can be the target (configure via UI or API)
- Categorical features are auto-encoded
- Missing values are auto-imputed

---

## 🔧 Environment Variables

### Backend (`.env`)
| Variable | Description | Default |
|----------|-------------|---------|
| `DATABASE_URL` | SQLite DB path | `sqlite:///./skore_platform.db` |
| `STRIPE_SECRET_KEY` | Stripe secret key | `sk_test_placeholder` |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook secret | `whsec_placeholder` |
| `STRIPE_PRICE_ID` | Stripe price ID for €15/mo | `price_placeholder` |
| `SECRET_KEY` | JWT secret key | Change in production! |

### Frontend (`.env.local`)
| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_URL` | Backend API URL | `http://localhost:8000` |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe public key | `pk_test_placeholder` |

---

## 🚀 Deployment

### Vercel (Frontend) + Railway (Backend)

```bash
# Frontend → Vercel
cd frontend && vercel deploy

# Backend → Railway
railway init && railway up
```

### Docker Production

```bash
docker-compose -f docker-compose.yml up -d
```

---

## 📜 License

MIT License — built on top of the open-source [skore](https://github.com/probabl-ai/skore) library by Probabl AI.

---

## 🙏 Credits

Built with:
- [skore](https://github.com/probabl-ai/skore) — ML evaluation library
- [scikit-learn](https://scikit-learn.org) — ML models
- [FastAPI](https://fastapi.tiangolo.com) — Python API
- [Next.js](https://nextjs.org) — React framework
- [Tailwind CSS](https://tailwindcss.com) — Styling
- [Recharts](https://recharts.org) — Charts
