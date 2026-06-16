const steps = [
  {
    n: '1',
    title: "Find Platforms' Pricing Mistakes",
    desc: "We analyze millions of contracts to find markets where one platform's price is wildly out of step with what the data says — or with what other platforms show.",
  },
  {
    n: '2',
    title: 'We Show You the Edge',
    desc: "These mispriced contracts appear in your real-time Venter dashboard. Each one is sorted by expected value, so the most profitable bets are always front and center.",
  },
  {
    n: '3',
    title: 'You Take the Position',
    desc: "Platforms reprice fast, so you need to act quickly. Over time your mathematical edge compounds — wins outpace losses and your bankroll grows.",
  },
]

export default function HowItWorks() {
  return (
    <section className="section how-it-works" id="how-it-works">
      <div className="section-inner">
        <span className="section-tag">The Method</span>
        <h2>How data-driven prediction<br />market trading actually works</h2>
        <p className="section-sub">
          It's not about predicting the future — it's about finding where the market's
          price is wrong. Math beats intuition every time.
        </p>

        <div className="steps">
          {steps.map(s => (
            <div key={s.n} className="step">
              <div className="step-number">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '3rem' }}>
          <p style={{ color: 'var(--text-3)', fontSize: '0.875rem', marginBottom: '1rem' }}>
            Works on all major prediction market platforms
          </p>
          <div className="platforms">
            {['Kalshi', 'Polymarket', 'Manifold', 'PredictIt', 'Metaculus', 'Limitless'].map(p => (
              <span key={p} className="platform-pill">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
