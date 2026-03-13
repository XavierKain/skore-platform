"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

const MODELS = [
  { value: "logistic_regression", label: "Logistic Regression" },
  { value: "random_forest", label: "Random Forest" },
  { value: "xgboost", label: "XGBoost (GBM)" },
  { value: "svm", label: "Support Vector Machine" },
  { value: "decision_tree", label: "Decision Tree" },
  { value: "knn", label: "K-Nearest Neighbors" },
];

interface Report {
  id: string;
  filename: string;
  model: string;
  accuracy: number;
  f1: number;
  createdAt: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [model, setModel] = useState("random_forest");
  const [targetColumn, setTargetColumn] = useState("target");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [reports, setReports] = useState<Report[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem("skore_user");
    if (!stored) { router.push("/login"); return; }
    setUser(JSON.parse(stored));

    const storedReports = localStorage.getItem("skore_reports");
    if (storedReports) setReports(JSON.parse(storedReports));
  }, [router]);

  const handleEvaluate = async () => {
    if (!file) { setError("Please select a CSV file"); return; }
    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("model_type", model);
    formData.append("target_column", targetColumn);

    try {
      const res = await fetch(`${API_URL}/evaluate`, {
        method: "POST",
        body: formData,
      });
      
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.detail || "Evaluation failed");
      }
      
      const data = await res.json();
      const newReport: Report = {
        id: Date.now().toString(),
        filename: file.name,
        model: MODELS.find(m => m.value === model)?.label || model,
        accuracy: data.metrics.accuracy,
        f1: data.metrics.f1_weighted,
        createdAt: new Date().toISOString(),
      };
      
      const updatedReports = [newReport, ...reports];
      setReports(updatedReports);
      localStorage.setItem("skore_reports", JSON.stringify(updatedReports));
      localStorage.setItem("skore_last_result", JSON.stringify({ ...data, filename: file.name, model: newReport.model }));
      router.push("/reports");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Could not connect to API. Make sure the backend is running.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("skore_user");
    router.push("/");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Top bar */}
      <header className="border-b border-white/10 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-sm">S</div>
          <span className="text-lg font-bold">Skore Platform</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/dashboard" className="text-blue-400 font-medium">Dashboard</Link>
          <Link href="/reports" className="text-slate-400 hover:text-white transition-colors">Reports</Link>
          <Link href="/pricing" className="text-slate-400 hover:text-white transition-colors">Upgrade</Link>
        </nav>
        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-400">👤 {user.name}</span>
          <button onClick={handleLogout} className="text-sm text-slate-400 hover:text-white">Logout</button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-8 py-10">
        <h1 className="text-2xl font-bold mb-2">New Evaluation</h1>
        <p className="text-slate-400 mb-8">Upload your dataset and run a comprehensive ML evaluation with skore.</p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Upload form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="font-semibold mb-4">1. Configure Evaluation</h2>
            
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg px-4 py-3 text-sm mb-4">
                {error}
              </div>
            )}

            {/* File upload */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-300 mb-2">Dataset (CSV)</label>
              <div
                onClick={() => fileRef.current?.click()}
                className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-colors ${
                  file ? "border-blue-500 bg-blue-500/5" : "border-white/20 hover:border-white/40"
                }`}
              >
                <input
                  ref={fileRef}
                  type="file"
                  accept=".csv"
                  className="hidden"
                  onChange={e => setFile(e.target.files?.[0] || null)}
                />
                {file ? (
                  <div>
                    <div className="text-2xl mb-1">📄</div>
                    <div className="text-sm font-medium text-blue-400">{file.name}</div>
                    <div className="text-xs text-slate-500">{(file.size / 1024).toFixed(1)} KB</div>
                  </div>
                ) : (
                  <div>
                    <div className="text-2xl mb-1">📁</div>
                    <div className="text-sm text-slate-400">Click to upload CSV file</div>
                    <div className="text-xs text-slate-500 mt-1">Max 50MB</div>
                  </div>
                )}
              </div>
            </div>

            {/* Target column */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-300 mb-2">Target Column Name</label>
              <input
                type="text"
                value={targetColumn}
                onChange={e => setTargetColumn(e.target.value)}
                placeholder="target"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <p className="text-xs text-slate-500 mt-1">Name of the column to predict</p>
            </div>

            {/* Model selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-300 mb-2">ML Model</label>
              <div className="grid grid-cols-2 gap-2">
                {MODELS.map(m => (
                  <button
                    key={m.value}
                    onClick={() => setModel(m.value)}
                    className={`text-sm px-3 py-2 rounded-lg border transition-colors text-left ${
                      model === m.value
                        ? "border-blue-500 bg-blue-500/10 text-blue-400"
                        : "border-white/10 hover:border-white/30 text-slate-400"
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleEvaluate}
              disabled={loading || !file}
              className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Running evaluation...
                </>
              ) : (
                <>⚡ Run Evaluation</>
              )}
            </button>
          </div>

          {/* Info panel */}
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="font-semibold mb-4">What skore computes</h2>
              <div className="space-y-3">
                {[
                  { icon: "🎯", label: "Accuracy", desc: "Overall prediction correctness" },
                  { icon: "⚖️", label: "F1-Score", desc: "Harmonic mean of precision & recall" },
                  { icon: "📊", label: "Precision & Recall", desc: "Per-class performance breakdown" },
                  { icon: "🔄", label: "Cross-Validation", desc: "5-fold CV for robust estimates" },
                  { icon: "📈", label: "ROC-AUC", desc: "Binary classification curve" },
                  { icon: "🗂️", label: "Confusion Matrix", desc: "Prediction error breakdown" },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="text-lg">{item.icon}</span>
                    <div>
                      <div className="text-sm font-medium">{item.label}</div>
                      <div className="text-xs text-slate-500">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-4">
              <p className="text-sm text-blue-300 font-medium mb-2">💡 CSV Format Tips</p>
              <ul className="text-xs text-slate-400 space-y-1">
                <li>• First row should be column headers</li>
                <li>• Target column defaults to &quot;target&quot;</li>
                <li>• Numerical and categorical features supported</li>
                <li>• Missing values are auto-handled</li>
              </ul>
            </div>

            {/* Recent reports */}
            {reports.length > 0 && (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h2 className="font-semibold mb-4">Recent evaluations</h2>
                <div className="space-y-3">
                  {reports.slice(0, 3).map(r => (
                    <Link
                      key={r.id}
                      href="/reports"
                      className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <div>
                        <div className="text-sm font-medium">{r.filename}</div>
                        <div className="text-xs text-slate-500">{r.model}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-green-400">{(r.accuracy * 100).toFixed(1)}%</div>
                        <div className="text-xs text-slate-500">accuracy</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
