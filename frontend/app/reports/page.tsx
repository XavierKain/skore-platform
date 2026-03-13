"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from "recharts";

interface Metrics {
  accuracy: number;
  f1_weighted: number;
  f1_macro: number;
  precision_weighted: number;
  recall_weighted: number;
  roc_auc?: number;
  cv_mean: number;
  cv_std: number;
  confusion_matrix?: number[][];
  classification_report?: Record<string, Record<string, number>>;
  feature_importances?: Record<string, number>;
  n_samples: number;
  n_features: number;
  n_classes: number;
}

interface Result {
  filename: string;
  model: string;
  metrics: Metrics;
  elapsed_seconds: number;
}

export default function ReportsPage() {
  const router = useRouter();
  const [result, setResult] = useState<Result | null>(null);
  const [user, setUser] = useState<{ name: string } | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("skore_user");
    if (!stored) { router.push("/login"); return; }
    setUser(JSON.parse(stored));

    const lastResult = localStorage.getItem("skore_last_result");
    if (lastResult) {
      setResult(JSON.parse(lastResult));
    }
  }, [router]);

  if (!user) return null;

  const radarData = result ? [
    { metric: "Accuracy", value: +(result.metrics.accuracy * 100).toFixed(1) },
    { metric: "F1 Score", value: +(result.metrics.f1_weighted * 100).toFixed(1) },
    { metric: "Precision", value: +(result.metrics.precision_weighted * 100).toFixed(1) },
    { metric: "Recall", value: +(result.metrics.recall_weighted * 100).toFixed(1) },
    { metric: "CV Score", value: +(result.metrics.cv_mean * 100).toFixed(1) },
  ] : [];

  const barData = result?.metrics.feature_importances
    ? Object.entries(result.metrics.feature_importances)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([name, value]) => ({ name, value: +(value * 100).toFixed(2) }))
    : [];

  const getScoreColor = (val: number) => {
    if (val >= 0.9) return "text-green-400";
    if (val >= 0.75) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-sm">S</div>
          <span className="text-lg font-bold">Skore Platform</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/dashboard" className="text-slate-400 hover:text-white">Dashboard</Link>
          <Link href="/reports" className="text-blue-400 font-medium">Reports</Link>
          <Link href="/pricing" className="text-slate-400 hover:text-white">Upgrade</Link>
        </nav>
        <span className="text-sm text-slate-400">👤 {user.name}</span>
      </header>

      <main className="max-w-6xl mx-auto px-8 py-10">
        {!result ? (
          <div className="text-center py-24">
            <div className="text-6xl mb-4">📊</div>
            <h2 className="text-xl font-bold mb-2">No reports yet</h2>
            <p className="text-slate-400 mb-6">Run your first evaluation to see results here.</p>
            <Link href="/dashboard" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
              → Run an evaluation
            </Link>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
              <div>
                <h1 className="text-2xl font-bold">Evaluation Report</h1>
                <p className="text-slate-400 text-sm mt-1">
                  {result.filename} · {result.model} · {result.metrics.n_samples} samples · {result.metrics.n_features} features · computed in {result.elapsed_seconds?.toFixed(2)}s
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    const dataStr = JSON.stringify(result, null, 2);
                    const blob = new Blob([dataStr], { type: "application/json" });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = `skore-report-${Date.now()}.json`;
                    a.click();
                  }}
                  className="text-sm border border-white/20 hover:border-white/40 px-4 py-2 rounded-lg transition-colors"
                >
                  Export JSON
                </button>
                <Link href="/dashboard" className="text-sm bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg transition-colors">
                  + New evaluation
                </Link>
              </div>
            </div>

            {/* Key metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: "Accuracy", value: result.metrics.accuracy, format: "%" },
                { label: "F1 Score (weighted)", value: result.metrics.f1_weighted, format: "%" },
                { label: "CV Mean", value: result.metrics.cv_mean, format: "%" },
                { label: "Precision", value: result.metrics.precision_weighted, format: "%" },
              ].map(({ label, value, format }) => (
                <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <div className={`text-3xl font-black mb-1 ${getScoreColor(value)}`}>
                    {(value * 100).toFixed(1)}{format}
                  </div>
                  <div className="text-sm text-slate-400">{label}</div>
                </div>
              ))}
            </div>

            {/* Charts row */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Radar chart */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="font-semibold mb-4">Metrics Overview</h3>
                <ResponsiveContainer width="100%" height={280}>
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="#374151" />
                    <PolarAngleAxis dataKey="metric" tick={{ fill: "#9ca3af", fontSize: 12 }} />
                    <Radar
                      name="Score"
                      dataKey="value"
                      stroke="#3b82f6"
                      fill="#3b82f6"
                      fillOpacity={0.3}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              {/* Feature importance */}
              {barData.length > 0 ? (
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="font-semibold mb-4">Feature Importance (Top 10)</h3>
                  <ResponsiveContainer width="100%" height={280}>
                    <BarChart data={barData} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis type="number" tick={{ fill: "#9ca3af", fontSize: 11 }} />
                      <YAxis type="category" dataKey="name" tick={{ fill: "#9ca3af", fontSize: 11 }} width={80} />
                      <Tooltip
                        contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "8px" }}
                        formatter={(v: number) => [`${v}%`, "Importance"]}
                      />
                      <Bar dataKey="value" fill="#3b82f6" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              ) : (
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="font-semibold mb-4">Cross-Validation Results</h3>
                  <div className="flex items-center justify-center h-[280px]">
                    <div className="text-center">
                      <div className="text-5xl font-black text-blue-400 mb-2">
                        {(result.metrics.cv_mean * 100).toFixed(1)}%
                      </div>
                      <div className="text-slate-400">CV Mean Score</div>
                      <div className="text-sm text-slate-500 mt-1">
                        ± {(result.metrics.cv_std * 100).toFixed(2)}% std
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* CV + Confusion Matrix */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Cross-validation detail */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="font-semibold mb-4">Cross-Validation (5-fold)</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-slate-400">Mean CV Score</span>
                    <span className={`font-bold ${getScoreColor(result.metrics.cv_mean)}`}>
                      {(result.metrics.cv_mean * 100).toFixed(2)}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-slate-400">Std Deviation</span>
                    <span className="font-bold text-slate-300">
                      ± {(result.metrics.cv_std * 100).toFixed(2)}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-slate-400">F1 Macro</span>
                    <span className={`font-bold ${getScoreColor(result.metrics.f1_macro)}`}>
                      {(result.metrics.f1_macro * 100).toFixed(2)}%
                    </span>
                  </div>
                  {result.metrics.roc_auc && (
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                      <span className="text-slate-400">ROC-AUC</span>
                      <span className={`font-bold ${getScoreColor(result.metrics.roc_auc)}`}>
                        {result.metrics.roc_auc.toFixed(4)}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Confusion matrix */}
              {result.metrics.confusion_matrix && (
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="font-semibold mb-4">Confusion Matrix</h3>
                  <div className="overflow-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr>
                          <th className="text-slate-500 text-left pb-2">Pred →</th>
                          {result.metrics.confusion_matrix[0].map((_, i) => (
                            <th key={i} className="text-slate-400 text-center pb-2">Class {i}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {result.metrics.confusion_matrix.map((row, i) => (
                          <tr key={i}>
                            <td className="text-slate-400 pr-4 py-1">Actual {i}</td>
                            {row.map((val, j) => (
                              <td key={j} className={`text-center py-1 px-3 rounded font-mono ${
                                i === j ? "bg-blue-500/20 text-blue-300 font-bold" : "text-slate-400"
                              }`}>
                                {val}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

            {/* Classification report */}
            {result.metrics.classification_report && (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="font-semibold mb-4">Classification Report</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-slate-400 border-b border-white/10">
                        <th className="text-left pb-3">Class</th>
                        <th className="text-center pb-3">Precision</th>
                        <th className="text-center pb-3">Recall</th>
                        <th className="text-center pb-3">F1-Score</th>
                        <th className="text-center pb-3">Support</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(result.metrics.classification_report)
                        .filter(([k]) => !["accuracy", "macro avg", "weighted avg"].includes(k))
                        .map(([cls, vals]) => (
                          <tr key={cls} className="border-b border-white/5">
                            <td className="py-2 text-slate-300">{cls}</td>
                            <td className="py-2 text-center">{(vals.precision * 100).toFixed(1)}%</td>
                            <td className="py-2 text-center">{(vals.recall * 100).toFixed(1)}%</td>
                            <td className="py-2 text-center font-medium text-blue-400">{(vals["f1-score"] * 100).toFixed(1)}%</td>
                            <td className="py-2 text-center text-slate-500">{vals.support}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
