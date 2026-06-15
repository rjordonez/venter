const features = [
  {
    icon: '📡',
    title: 'Market Scanner',
    headline: 'Find mispriced markets',
    desc: 'We scan millions of contracts across Kalshi, Polymarket, Manifold, and more to surface markets where the odds don\'t match reality.',
  },
  {
    icon: '⚖️',
    title: 'Arbitrage Finder',
    headline: 'Bet both sides and win',
    desc: 'When platforms disagree on a market\'s price, you can bet both sides and lock in a guaranteed profit regardless of the outcome.',
  },
  {
    icon: '🎯',
    title: 'Positive EV Markets',
    headline: 'Bet with a real edge',
    desc: 'We surface contracts where the crowd is wrong. Place these consistently and your wins will outpace your losses over time.',
  },
  {
    icon: '💰',
    title: 'Promo Optimizer',
    headline: 'Maximize sign-up bonuses',
    desc: 'Platforms offer deposit bonuses when you join. We tell you exactly which markets to trade to extract maximum value.',
  },
  {
    icon: '🔔',
    title: 'Live Alerts',
    headline: 'Never miss a move',
    desc: 'Mispriced markets close fast. Get instant push alerts the moment a high-edge opportunity opens — on any device.',
  },
  {
    icon: '📊',
    title: 'Portfolio Tracker',
    headline: 'See your full edge',
    desc: 'Track open positions, ROI, and realized profit across every platform in one dashboard. Know your true edge at a glance.',
  },
]

export default function Features() {
  return (
    <section className="section" id="tools">
      <div className="section-inner">
        <span className="section-tag">Tools</span>
        <h2>Why Venter will<br />work for you</h2>
        <p className="section-sub">
          Whether you've never touched a prediction market or you're already trading
          daily — we have the tools to give you a consistent mathematical edge.
        </p>

        <div className="features-grid">
          {features.map(f => (
            <div key={f.title} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p className="feature-headline">{f.headline}</p>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
