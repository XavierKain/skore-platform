import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-sm">S</div>
          <span className="text-xl font-bold">Skore Platform</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <Link href="#features" className="hover:text-white transition-colors">Features</Link>
          <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="#how-it-works" className="hover:text-white transition-colors">How it works</Link>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/login" className="text-sm text-slate-300 hover:text-white transition-colors px-4 py-2">
            Sign in
          </Link>
          <Link href="/signup" className="text-sm bg-blue-600 hover:bg-blue-500 transition-colors px-4 py-2 rounded-lg font-medium">
            Get started free
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-8 pt-24 pb-20 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-sm text-blue-300 mb-8">
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
          Powered by skore — the open-source ML evaluation library
        </div>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          ML Evaluation
          <br />
          <span className="text-blue-400">Made Simple</span>
        </h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
          Upload your dataset, choose your model, and get professional evaluation reports in seconds.
          Accuracy, F1, cross-validation — all in one place.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors">
            Start free trial — no credit card
          </Link>
          <Link href="#how-it-works" className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors">
            See how it works →
          </Link>
        </div>
        <p className="text-sm text-slate-400 mt-4">Then €15/month. Cancel anytime.</p>
      </section>

      {/* Stats */}
      <section className="border-y border-white/10 py-12">
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "10k+", label: "Models evaluated" },
            { value: "500+", label: "Data scientists" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "<2s", label: "Avg evaluation time" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-blue-400">{stat.value}</div>
              <div className="text-slate-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-8 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Everything you need</h2>
        <p className="text-slate-400 text-center mb-16 max-w-xl mx-auto">
          Professional ML evaluation without the infrastructure headaches.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "📊",
              title: "Rich Metrics",
              desc: "Accuracy, F1-score, precision, recall, ROC-AUC, cross-validation — all computed automatically with skore.",
            },
            {
              icon: "⚡",
              title: "Instant Reports",
              desc: "Upload CSV, select model, get a beautiful interactive report in under 2 seconds. Share with a link.",
            },
            {
              icon: "🤖",
              title: "Multi-Model Support",
              desc: "Logistic Regression, Random Forest, XGBoost, SVM, Decision Tree — all sklearn models supported.",
            },
            {
              icon: "📈",
              title: "Interactive Charts",
              desc: "Confusion matrices, learning curves, feature importance plots — all interactive, all exportable.",
            },
            {
              icon: "🔐",
              title: "Secure & Private",
              desc: "Your data never leaves our encrypted infrastructure. SOC2-ready architecture from day one.",
            },
            {
              icon: "🔌",
              title: "REST API",
              desc: "Integrate evaluations into your CI/CD pipeline with our clean FastAPI-powered REST API.",
            },
          ].map((f) => (
            <div key={f.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-colors">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-white/5 py-24">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">3 steps to ML insights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Upload your CSV", desc: "Drop your labeled dataset. We support any sklearn-compatible format." },
              { step: "02", title: "Choose your model", desc: "Select from our library of supported models or let us recommend one." },
              { step: "03", title: "Get your report", desc: "Instant metrics, charts, and actionable insights ready to share." },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="text-6xl font-black text-blue-500/20 mb-4">{s.step}</div>
                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-slate-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="max-w-6xl mx-auto px-8 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
        <p className="text-slate-400 mb-8">One plan. Everything included. No surprises.</p>
        <div className="inline-block bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-left max-w-sm w-full">
          <div className="text-4xl font-black mb-1">€15<span className="text-lg font-normal text-blue-200">/month</span></div>
          <p className="text-blue-200 mb-6">Professional plan — everything included</p>
          <ul className="space-y-3 mb-8">
            {["Unlimited evaluations", "All ML models", "API access", "Report sharing", "Priority support", "Export to PDF/CSV"].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="text-green-400">✓</span> {item}
              </li>
            ))}
          </ul>
          <Link href="/signup" className="block w-full bg-white text-blue-900 font-bold py-3 rounded-xl text-center hover:bg-blue-50 transition-colors">
            Start 14-day free trial
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-slate-500 text-sm">
        <p>© 2024 Skore Platform. Built with ❤️ for Data Scientists.</p>
        <div className="flex gap-6 justify-center mt-3">
          <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms</Link>
          <Link href="https://github.com/XavierKain/skore-platform" className="hover:text-white transition-colors">GitHub</Link>
        </div>
      </footer>
    </div>
  );
}
