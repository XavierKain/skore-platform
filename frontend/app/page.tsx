import Link from "next/link";

/* ─── SVG icon primitives (no emoji) ─── */
function IconBarChart() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
    </svg>
  );
}
function IconRefreshCw() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
      <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/>
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
    </svg>
  );
}
function IconLayers() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
    </svg>
  );
}
function IconUpload() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
      <polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/>
      <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>
    </svg>
  );
}
function IconCpu() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/>
      <line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/>
      <line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/>
      <line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/>
      <line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>
    </svg>
  );
}
function IconFileText() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
    </svg>
  );
}
function IconStar() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}
function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}
function IconArrowRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  );
}
function IconGithub() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}
function IconChevronDown() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  );
}

/* ─── Dashboard ASCII Mockup ─── */
function DashboardMockup() {
  return (
    <div className="w-full rounded-2xl overflow-hidden border border-[#1E40AF]/40 shadow-2xl shadow-blue-900/40 bg-[#0F172A]">
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#1E3A8A]/40 border-b border-[#1E40AF]/30">
        <span className="w-3 h-3 rounded-full bg-red-500/70"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500/70"></span>
        <span className="w-3 h-3 rounded-full bg-green-500/70"></span>
        <span className="ml-4 font-mono-roboto text-xs text-blue-300/60">skore-platform · evaluation report</span>
      </div>

      {/* Sidebar + main */}
      <div className="flex min-h-[420px]">
        {/* Sidebar */}
        <div className="w-48 bg-[#0F172A] border-r border-[#1E40AF]/20 p-4 hidden sm:block">
          <p className="font-mono-roboto text-[10px] text-blue-400/60 uppercase tracking-widest mb-4">Navigation</p>
          {["Dashboard", "Evaluations", "Reports", "API Docs", "Settings"].map((item, i) => (
            <div key={item} className={`flex items-center gap-2 px-3 py-2 rounded-lg mb-1 font-mono-roboto text-xs ${i === 2 ? "bg-[#1E40AF] text-white" : "text-blue-300/50 hover:text-blue-300/80"}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60"></span>
              {item}
            </div>
          ))}
          <div className="mt-8 p-3 bg-[#F59E0B]/10 rounded-lg border border-[#F59E0B]/20">
            <p className="font-mono-roboto text-[10px] text-[#F59E0B]">Pro Plan</p>
            <p className="font-mono-roboto text-[9px] text-[#F59E0B]/60 mt-1">Unlimited eval</p>
          </div>
        </div>

        {/* Main panel */}
        <div className="flex-1 p-5 overflow-hidden">
          {/* Metric cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
            {[
              { label: "Accuracy", value: "94.2%", color: "#3B82F6", trend: "+2.1%" },
              { label: "F1-Score", value: "0.931", color: "#10B981", trend: "+0.04" },
              { label: "CV Mean", value: "92.7%", color: "#8B5CF6", trend: "±1.3%" },
              { label: "ROC-AUC", value: "0.978", color: "#F59E0B", trend: "binary" },
            ].map(m => (
              <div key={m.label} className="bg-[#1E3A8A]/20 border border-[#1E40AF]/30 rounded-xl p-3">
                <p className="font-mono-roboto text-[9px] text-blue-300/50 uppercase tracking-wider">{m.label}</p>
                <p className="font-exo text-xl font-bold mt-1" style={{ color: m.color }}>{m.value}</p>
                <p className="font-mono-roboto text-[9px] text-blue-300/40 mt-0.5">{m.trend}</p>
              </div>
            ))}
          </div>

          {/* Fake chart bars */}
          <div className="bg-[#1E3A8A]/10 border border-[#1E40AF]/20 rounded-xl p-4 mb-4">
            <p className="font-mono-roboto text-[10px] text-blue-300/50 mb-3">Cross-Validation Scores (5-fold)</p>
            <div className="flex items-end gap-2 h-20">
              {[88, 94, 91, 96, 93].map((v, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <span className="font-mono-roboto text-[8px] text-blue-300/50">{v}%</span>
                  <div className="w-full rounded-sm" style={{ height: `${(v / 100) * 56}px`, background: `linear-gradient(180deg, #3B82F6, #1E40AF)` }}></div>
                  <span className="font-mono-roboto text-[8px] text-blue-300/30">F{i + 1}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Feature importance mini */}
          <div className="bg-[#1E3A8A]/10 border border-[#1E40AF]/20 rounded-xl p-4">
            <p className="font-mono-roboto text-[10px] text-blue-300/50 mb-3">Feature Importance</p>
            {[
              { name: "income", val: 82 },
              { name: "experience_years", val: 67 },
              { name: "education_years", val: 54 },
              { name: "age", val: 38 },
            ].map(f => (
              <div key={f.name} className="flex items-center gap-3 mb-2">
                <span className="font-mono-roboto text-[9px] text-blue-300/50 w-28 truncate">{f.name}</span>
                <div className="flex-1 h-2 bg-[#1E40AF]/20 rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-[#1E40AF] to-[#3B82F6]" style={{ width: `${f.val}%` }}></div>
                </div>
                <span className="font-mono-roboto text-[9px] text-blue-300/50">{f.val}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Accordion FAQ item (client-side would need "use client" — use details/summary instead) ─── */
function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border border-[#1E40AF]/20 rounded-xl overflow-hidden">
      <summary className="flex items-center justify-between px-6 py-5 cursor-pointer bg-white hover:bg-[#F8FAFC] transition-colors duration-200 select-none list-none">
        <span className="font-exo font-semibold text-[#1E3A8A]">{q}</span>
        <span className="text-[#1E40AF] group-open:rotate-180 transition-transform duration-200">
          <IconChevronDown />
        </span>
      </summary>
      <div className="px-6 py-5 bg-[#F8FAFC] border-t border-[#1E40AF]/10">
        <p className="font-mono-roboto text-sm text-[#1E3A8A]/70 leading-relaxed">{a}</p>
      </div>
    </details>
  );
}

/* ─── Main page ─── */
export default function LandingPage() {
  return (
    <div className="font-mono-roboto bg-[#F8FAFC] text-[#1E3A8A]">

      {/* ── NAVBAR ── */}
      <header className="sticky top-0 z-50 bg-[#F8FAFC]/90 backdrop-blur-md border-b border-[#1E40AF]/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 cursor-pointer">
            <div className="w-8 h-8 bg-[#1E40AF] rounded-lg flex items-center justify-center">
              <span className="font-exo text-white font-bold text-sm">S</span>
            </div>
            <span className="font-exo font-bold text-lg text-[#1E3A8A]">Skore Platform</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {[
              { label: "Features", href: "#features" },
              { label: "How it works", href: "#how-it-works" },
              { label: "Pricing", href: "#pricing" },
              { label: "FAQ", href: "#faq" },
            ].map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#1E3A8A]/70 hover:text-[#1E40AF] transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden sm:block text-sm font-medium text-[#1E3A8A]/70 hover:text-[#1E40AF] transition-colors duration-200 px-4 py-2 cursor-pointer"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="text-sm font-bold bg-[#F59E0B] hover:bg-[#D97706] text-white px-5 py-2.5 rounded-lg transition-colors duration-200 cursor-pointer shadow-sm"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════
          § 1 — HERO
      ══════════════════════════════════════ */}
      <section className="hero-gradient relative overflow-hidden min-h-[88vh] flex items-center">
        {/* Geometric accent shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1E40AF]/20 rounded-full blur-[120px] pointer-events-none" aria-hidden="true"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#3B82F6]/10 rounded-full blur-[80px] pointer-events-none" aria-hidden="true"></div>
        <div className="absolute top-1/4 left-1/4 w-px h-32 bg-[#3B82F6]/30 rotate-45 pointer-events-none" aria-hidden="true"></div>
        <div className="absolute bottom-1/3 right-1/3 w-px h-24 bg-[#F59E0B]/20 -rotate-45 pointer-events-none" aria-hidden="true"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#1E40AF]/30 border border-[#3B82F6]/40 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse"></span>
              <span className="font-mono-roboto text-xs text-blue-200">Built on skore · probabl-ai</span>
            </div>

            <h1 className="font-exo font-bold text-5xl md:text-6xl xl:text-7xl text-white leading-[1.05] mb-6">
              ML Evaluations.
              <br />
              <span className="text-[#F59E0B]">Automated.</span>
              <br />
              Beautiful.
            </h1>

            <p className="font-mono-roboto text-lg text-blue-200/80 max-w-lg mb-10 leading-relaxed">
              Turn your skore analysis into shareable reports in seconds.
              Accuracy, F1, cross-validation — presented beautifully.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white font-exo font-bold px-8 py-4 rounded-xl text-lg transition-colors duration-200 cursor-pointer shadow-lg shadow-amber-500/25"
              >
                Start Free Trial
                <IconArrowRight />
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#3B82F6]/50 hover:border-[#3B82F6] text-white font-exo font-semibold px-8 py-4 rounded-xl text-lg transition-colors duration-200 cursor-pointer"
              >
                Open Dashboard
              </Link>
            </div>

            <p className="font-mono-roboto text-sm text-blue-300/50 mt-5">
              14-day free trial · No credit card required · Then €15/month
            </p>
          </div>

          {/* Right: mockup */}
          <div className="relative">
            <div className="absolute -inset-4 bg-[#1E40AF]/20 rounded-3xl blur-2xl pointer-events-none" aria-hidden="true"></div>
            <div className="relative">
              <DashboardMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          § 2 — SOCIAL PROOF BAND
      ══════════════════════════════════════ */}
      <section className="bg-[#1E40AF] py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-white">
          <div className="flex items-center gap-2">
            <IconGithub />
            <span className="font-mono-roboto text-sm font-medium">601 GitHub stars</span>
          </div>
          <div className="w-px h-4 bg-white/20 hidden sm:block" aria-hidden="true"></div>
          <span className="font-mono-roboto text-sm text-blue-100">Built on <strong className="text-white">skore</strong> by probabl-ai</span>
          <div className="w-px h-4 bg-white/20 hidden sm:block" aria-hidden="true"></div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[#F59E0B]"><IconStar /></span>
            ))}
            <span className="font-mono-roboto text-sm ml-1 text-blue-100">Loved by data scientists</span>
          </div>
          <div className="w-px h-4 bg-white/20 hidden sm:block" aria-hidden="true"></div>
          <span className="font-mono-roboto text-sm text-blue-100">scikit-learn · pandas · FastAPI</span>
        </div>
      </section>

      {/* ══════════════════════════════════════
          § 3 — FEATURES
      ══════════════════════════════════════ */}
      <section id="features" className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-mono-roboto text-sm text-[#3B82F6] uppercase tracking-widest mb-3">What you get</p>
            <h2 className="font-exo font-bold text-4xl md:text-5xl text-[#1E3A8A]">Everything you need to ship ML insights</h2>
            <p className="font-mono-roboto text-[#1E3A8A]/60 mt-4 max-w-xl mx-auto">
              Professional evaluation infrastructure without the setup hell.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="group bg-white border border-[#1E40AF]/10 rounded-2xl p-8 hover:border-[#1E40AF]/40 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-[#1E40AF]/10 rounded-xl flex items-center justify-center text-[#1E40AF] mb-6 group-hover:bg-[#1E40AF] group-hover:text-white transition-colors duration-300">
                <IconBarChart />
              </div>
              <h3 className="font-exo font-bold text-xl text-[#1E3A8A] mb-3">Automated Reports</h3>
              <p className="font-mono-roboto text-sm text-[#1E3A8A]/60 leading-relaxed">
                Upload a CSV and get a complete evaluation report instantly. Accuracy, F1-score, precision, recall, ROC-AUC — all computed and visualised automatically.
              </p>
              <ul className="mt-5 space-y-2">
                {["Interactive charts", "PDF & JSON export", "Shareable links"].map(item => (
                  <li key={item} className="flex items-center gap-2 text-xs font-mono-roboto text-[#1E3A8A]/70">
                    <span className="text-[#1E40AF]"><IconCheck /></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="group bg-[#1E40AF] border border-[#1E40AF] rounded-2xl p-8 hover:bg-[#1E3A8A] hover:shadow-xl hover:shadow-blue-900/30 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-[#F59E0B] group-hover:text-white transition-colors duration-300">
                <IconRefreshCw />
              </div>
              <h3 className="font-exo font-bold text-xl text-white mb-3">Cross-Validation Analysis</h3>
              <p className="font-mono-roboto text-sm text-blue-100/80 leading-relaxed">
                5-fold stratified CV runs automatically. See variance across folds, spot overfitting, and trust your evaluation with statistically robust estimates.
              </p>
              <ul className="mt-5 space-y-2">
                {["5-fold stratified", "Per-fold breakdown", "Std deviation tracking"].map(item => (
                  <li key={item} className="flex items-center gap-2 text-xs font-mono-roboto text-blue-100/80">
                    <span className="text-[#F59E0B]"><IconCheck /></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="group bg-white border border-[#1E40AF]/10 rounded-2xl p-8 hover:border-[#1E40AF]/40 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-[#1E40AF]/10 rounded-xl flex items-center justify-center text-[#1E40AF] mb-6 group-hover:bg-[#1E40AF] group-hover:text-white transition-colors duration-300">
                <IconLayers />
              </div>
              <h3 className="font-exo font-bold text-xl text-[#1E3A8A] mb-3">Multi-Algorithm Support</h3>
              <p className="font-mono-roboto text-sm text-[#1E3A8A]/60 leading-relaxed">
                Compare across 6 sklearn models in one click. Random Forest, XGBoost, SVM, Logistic Regression, Decision Tree, and KNN — all with auto-preprocessing.
              </p>
              <ul className="mt-5 space-y-2">
                {["6 sklearn models", "Auto feature encoding", "Side-by-side comparison"].map(item => (
                  <li key={item} className="flex items-center gap-2 text-xs font-mono-roboto text-[#1E3A8A]/70">
                    <span className="text-[#1E40AF]"><IconCheck /></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Secondary features grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {[
              { icon: "🔐", title: "Encrypted Storage", desc: "Data encrypted at rest & in transit. Deleted post-evaluation." },
              { icon: "🔌", title: "REST API", desc: "Clean FastAPI endpoints. Integrate into any CI/CD pipeline." },
              { icon: "📊", title: "Confusion Matrix", desc: "Full confusion matrix with per-class precision & recall." },
              { icon: "🏷️", title: "Feature Importance", desc: "Know which features matter. Built-in for tree models." },
            ].map(f => (
              <div key={f.title} className="bg-white border border-[#1E40AF]/10 rounded-xl p-5 hover:border-[#1E40AF]/30 transition-colors duration-200 cursor-pointer">
                <span className="text-2xl mb-3 block" role="img" aria-label={f.title}>{f.icon}</span>
                <h4 className="font-exo font-semibold text-[#1E3A8A] mb-1">{f.title}</h4>
                <p className="font-mono-roboto text-xs text-[#1E3A8A]/60 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          § 4 — HOW IT WORKS
      ══════════════════════════════════════ */}
      <section id="how-it-works" className="py-24 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-mono-roboto text-sm text-[#3B82F6] uppercase tracking-widest mb-3">Simple workflow</p>
            <h2 className="font-exo font-bold text-4xl md:text-5xl text-white">From CSV to insights in 3 steps</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-14 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-[#1E40AF] via-[#3B82F6] to-[#1E40AF]" aria-hidden="true"></div>

            {[
              {
                step: "01",
                icon: <IconUpload />,
                title: "Upload your CSV",
                desc: "Drag & drop your labeled dataset. Any CSV with a target column works. We auto-detect feature types and handle missing values.",
                detail: "Supports up to 50MB · Auto-encoding · Missing value imputation",
              },
              {
                step: "02",
                icon: <IconCpu />,
                title: "Select your model",
                desc: "Pick from 6 scikit-learn models or let us recommend one based on your dataset size and class distribution.",
                detail: "Random Forest · XGBoost · SVM · LogReg · Tree · KNN",
              },
              {
                step: "03",
                icon: <IconFileText />,
                title: "Get your report",
                desc: "Receive a full interactive report in under 2 seconds. Share it with a link, export to JSON, or embed it in your docs.",
                detail: "Accuracy · F1 · CV · Feature importance · Confusion matrix",
              },
            ].map((s, i) => (
              <div key={s.step} className="relative">
                <div className="bg-[#1E3A8A]/30 border border-[#1E40AF]/30 rounded-2xl p-8 hover:border-[#3B82F6]/60 hover:bg-[#1E3A8A]/40 transition-all duration-300 cursor-pointer">
                  {/* Step badge */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#1E40AF] rounded-xl flex items-center justify-center text-white shrink-0">
                      {s.icon}
                    </div>
                    <span className="font-exo font-black text-4xl text-[#1E40AF]/30">{s.step}</span>
                  </div>
                  <h3 className="font-exo font-bold text-xl text-white mb-3">{s.title}</h3>
                  <p className="font-mono-roboto text-sm text-blue-200/70 leading-relaxed mb-4">{s.desc}</p>
                  <div className="bg-[#0F172A]/60 rounded-lg px-3 py-2">
                    <p className="font-mono-roboto text-xs text-[#3B82F6]/70">{s.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white font-exo font-bold px-8 py-4 rounded-xl text-lg transition-colors duration-200 cursor-pointer shadow-lg shadow-amber-500/20"
            >
              Try it now — it&apos;s free
              <IconArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          § 5 — SOCIAL PROOF / TESTIMONIALS
      ══════════════════════════════════════ */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-mono-roboto text-sm text-[#3B82F6] uppercase tracking-widest mb-3">Social proof</p>
            <h2 className="font-exo font-bold text-3xl md:text-4xl text-[#1E3A8A]">Trusted by data scientists</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "Finally a tool that makes ML evaluation presentable to stakeholders. The cross-validation charts are exactly what my team needed.",
                name: "Sarah L.",
                role: "Senior ML Engineer · fintech",
              },
              {
                quote: "I went from a raw CSV to a full skore report in 90 seconds. The REST API integration saved us weeks of dashboard dev.",
                name: "Marc T.",
                role: "Data Scientist · e-commerce",
              },
              {
                quote: "Skore Platform is the missing layer on top of scikit-learn. The feature importance + confusion matrix combo is a game-changer.",
                name: "Priya K.",
                role: "Lead Data Scientist · healthtech",
              },
            ].map(t => (
              <div key={t.name} className="bg-white border border-[#1E40AF]/10 rounded-2xl p-7 hover:border-[#1E40AF]/30 hover:shadow-md hover:shadow-blue-100 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#F59E0B]"><IconStar /></span>
                  ))}
                </div>
                <p className="font-mono-roboto text-sm text-[#1E3A8A]/80 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#1E40AF] rounded-full flex items-center justify-center">
                    <span className="font-exo text-white font-bold text-sm">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-exo font-semibold text-sm text-[#1E3A8A]">{t.name}</p>
                    <p className="font-mono-roboto text-xs text-[#1E3A8A]/50">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          § 6 — PRICING
      ══════════════════════════════════════ */}
      <section id="pricing" className="py-24 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-mono-roboto text-sm text-[#3B82F6] uppercase tracking-widest mb-3">Pricing</p>
            <h2 className="font-exo font-bold text-4xl md:text-5xl text-white">Simple, honest pricing</h2>
            <p className="font-mono-roboto text-blue-200/60 mt-4">One plan. Everything included. No per-seat nonsense.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Free */}
            <div className="bg-[#1E3A8A]/20 border border-[#1E40AF]/30 rounded-2xl p-8">
              <p className="font-exo font-bold text-lg text-white mb-1">Free Trial</p>
              <div className="mb-1">
                <span className="font-exo font-black text-5xl text-white">€0</span>
                <span className="font-mono-roboto text-blue-300/60 text-sm ml-2">/ 14 days</span>
              </div>
              <p className="font-mono-roboto text-sm text-blue-300/50 mb-8">No credit card required</p>
              <ul className="space-y-3 mb-8">
                {[
                  ["50 evaluations total", true],
                  ["5 ML models", true],
                  ["Basic metrics (accuracy, F1)", true],
                  ["1 user seat", true],
                  ["API access", false],
                  ["Report export", false],
                  ["Priority support", false],
                ].map(([label, included]) => (
                  <li key={label as string} className={`flex items-center gap-3 font-mono-roboto text-sm ${included ? "text-blue-200" : "text-blue-300/30 line-through"}`}>
                    <span className={included ? "text-[#3B82F6]" : "text-blue-300/20"}><IconCheck /></span>
                    {label as string}
                  </li>
                ))}
              </ul>
              <Link
                href="/signup"
                className="block w-full text-center border-2 border-[#1E40AF] hover:border-[#3B82F6] text-white font-exo font-bold py-3.5 rounded-xl transition-colors duration-200 cursor-pointer"
              >
                Start free trial
              </Link>
            </div>

            {/* Pro */}
            <div className="relative bg-gradient-to-br from-[#1E40AF] to-[#1E3A8A] border-2 border-[#3B82F6]/50 rounded-2xl p-8 shadow-2xl shadow-blue-900/50">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F59E0B] text-white font-exo font-bold text-xs px-4 py-1 rounded-full">
                MOST POPULAR
              </div>
              <p className="font-exo font-bold text-lg text-white mb-1">Professional</p>
              <div className="mb-1">
                <span className="font-exo font-black text-5xl text-white">€15</span>
                <span className="font-mono-roboto text-blue-200/60 text-sm ml-2">/ month</span>
              </div>
              <p className="font-mono-roboto text-sm text-blue-200/60 mb-8">Per user · billed monthly · cancel anytime</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Unlimited evaluations",
                  "All 6 ML models",
                  "Full metrics suite + cross-validation",
                  "REST API access",
                  "Report sharing & export (JSON/PDF)",
                  "Priority email support",
                  "Feature importance analysis",
                  "Audit logs",
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 font-mono-roboto text-sm text-white">
                    <span className="text-[#F59E0B]"><IconCheck /></span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/signup"
                className="block w-full text-center bg-[#F59E0B] hover:bg-[#D97706] text-white font-exo font-bold py-3.5 rounded-xl transition-colors duration-200 cursor-pointer shadow-md shadow-amber-500/20"
              >
                Start 14-day free trial
              </Link>
            </div>
          </div>

          {/* Enterprise row */}
          <div className="mt-8 max-w-3xl mx-auto bg-[#1E3A8A]/20 border border-[#1E40AF]/20 rounded-xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-exo font-bold text-white mb-1">Enterprise</p>
              <p className="font-mono-roboto text-sm text-blue-300/60">SSO · dedicated infra · custom models · 99.99% SLA · volume pricing</p>
            </div>
            <Link
              href="mailto:hello@skore-platform.io"
              className="shrink-0 border border-[#3B82F6]/40 hover:border-[#3B82F6] text-white font-exo font-semibold px-6 py-2.5 rounded-lg transition-colors duration-200 cursor-pointer whitespace-nowrap text-sm"
            >
              Contact sales
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          § 7 — FAQ
      ══════════════════════════════════════ */}
      <section id="faq" className="py-24 bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-mono-roboto text-sm text-[#3B82F6] uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="font-exo font-bold text-4xl text-[#1E3A8A]">Frequently asked questions</h2>
          </div>
          <div className="space-y-3">
            <FaqItem
              q="Do I need a credit card to start?"
              a="No. Your 14-day free trial requires absolutely no payment information. Upgrade to Pro only when you're ready."
            />
            <FaqItem
              q="What CSV format does Skore Platform accept?"
              a="Any CSV file with a header row. Your target column can have any name — you specify it in the UI. We support numerical and categorical features, and auto-handle missing values via median imputation."
            />
            <FaqItem
              q="Is my data secure and private?"
              a="All uploads are encrypted in transit (TLS) and at rest (AES-256). Your dataset is processed in memory and permanently deleted after evaluation completes. We never use your data for training."
            />
            <FaqItem
              q="Can I use the API in my CI/CD pipeline?"
              a="Yes. The FastAPI backend exposes a clean POST /evaluate endpoint that accepts multipart form data (file + model_type + target_column). Full OpenAPI docs are available at /docs. Pro plan includes API access."
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          § 8 — FINAL CTA
      ══════════════════════════════════════ */}
      <section className="bg-[#1E40AF] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-exo font-bold text-4xl md:text-5xl text-white mb-4">
            Ship better ML. Starting today.
          </h2>
          <p className="font-mono-roboto text-blue-100/80 text-lg mb-10 max-w-xl mx-auto">
            Join 500+ data scientists who already evaluate their models with Skore Platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white font-exo font-bold px-10 py-4 rounded-xl text-lg transition-colors duration-200 cursor-pointer shadow-xl shadow-amber-500/25"
            >
              Start Free Trial — No card needed
              <IconArrowRight />
            </Link>
            <Link
              href="https://github.com/XavierKain/skore-platform"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-exo font-semibold px-8 py-4 rounded-xl text-lg transition-colors duration-200 cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconGithub />
              View on GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0F172A] border-t border-[#1E40AF]/20 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-[#1E40AF] rounded-lg flex items-center justify-center">
              <span className="font-exo text-white font-bold text-xs">S</span>
            </div>
            <span className="font-exo font-bold text-white">Skore Platform</span>
          </div>

          <nav className="flex flex-wrap items-center gap-6 text-sm" aria-label="Footer navigation">
            {[
              { label: "Features", href: "#features" },
              { label: "Pricing", href: "#pricing" },
              { label: "Dashboard", href: "/dashboard" },
              { label: "API Docs", href: "http://localhost:8000/docs" },
              { label: "Privacy", href: "#" },
              { label: "Terms", href: "#" },
            ].map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono-roboto text-blue-300/50 hover:text-blue-300 transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <p className="font-mono-roboto text-xs text-blue-300/30">
            © 2024 Skore Platform · MIT License
          </p>
        </div>
      </footer>

    </div>
  );
}
