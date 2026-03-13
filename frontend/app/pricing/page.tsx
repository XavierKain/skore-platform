import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-sm">S</div>
          <span className="text-xl font-bold">Skore Platform</span>
        </Link>
        <div className="flex items-center gap-3">
          <Link href="/login" className="text-sm text-slate-300 hover:text-white px-4 py-2">Sign in</Link>
          <Link href="/signup" className="text-sm bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg font-medium">Get started</Link>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple pricing</h1>
          <p className="text-slate-400 text-lg">One plan. Everything included. Cancel anytime.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Free Trial */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="text-lg font-semibold mb-1">Free Trial</div>
            <div className="text-4xl font-black mb-1">€0<span className="text-lg font-normal text-slate-400">/14 days</span></div>
            <p className="text-slate-400 text-sm mb-6">No credit card required</p>
            <ul className="space-y-3 mb-8 text-sm">
              {[
                "50 evaluations",
                "5 models supported",
                "Basic metrics (accuracy, F1)",
                "1 user",
                "Community support",
              ].map(item => (
                <li key={item} className="flex items-center gap-3">
                  <span className="text-green-400">✓</span>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/signup" className="block w-full border border-white/20 hover:border-white/40 text-white font-semibold py-3 rounded-xl text-center transition-colors">
              Start free trial
            </Link>
          </div>

          {/* Pro */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 border border-blue-500 rounded-2xl p-8 relative">
            <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">POPULAR</div>
            <div className="text-lg font-semibold mb-1">Professional</div>
            <div className="text-4xl font-black mb-1">€15<span className="text-lg font-normal text-blue-200">/month</span></div>
            <p className="text-blue-200 text-sm mb-6">Per user, billed monthly</p>
            <ul className="space-y-3 mb-8 text-sm">
              {[
                "Unlimited evaluations",
                "All sklearn models",
                "Full metrics suite + cross-validation",
                "REST API access",
                "Report sharing & export",
                "Priority email support",
                "Custom model integration",
                "Audit logs",
              ].map(item => (
                <li key={item} className="flex items-center gap-3">
                  <span className="text-green-300">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/signup" className="block w-full bg-white text-blue-900 font-bold py-3 rounded-xl text-center hover:bg-blue-50 transition-colors">
              Start 14-day free trial
            </Link>
          </div>
        </div>

        {/* Enterprise */}
        <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <p className="text-slate-400">For large teams, custom integrations, and SLA guarantees.</p>
              <ul className="mt-3 text-sm text-slate-300 space-y-1">
                <li>• SSO / SAML authentication</li>
                <li>• Dedicated infrastructure</li>
                <li>• Custom model training</li>
                <li>• 99.99% SLA</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Custom</div>
              <Link href="mailto:hello@skore-platform.io" className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded-xl transition-colors whitespace-nowrap">
                Contact sales
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "Do I need a credit card to start?", a: "No! Your 14-day free trial requires no credit card. Upgrade anytime." },
              { q: "Can I cancel anytime?", a: "Yes. Cancel with one click from your dashboard. No questions asked." },
              { q: "What CSV format do you support?", a: "Any CSV with a target column. We auto-detect feature types and the target variable." },
              { q: "Is my data secure?", a: "All data is encrypted at rest and in transit. We never share your datasets. Files are deleted after evaluation." },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-semibold mb-2">{q}</h3>
                <p className="text-slate-400 text-sm">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
