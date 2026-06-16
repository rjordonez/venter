import { useParams, Link } from 'react-router-dom'

const features: Record<string, {
  label: string
  labelClass: string
  title: string
  sub: string
  bullets: string[]
  mock: React.ReactNode
}> = {
  arbitrage: {
    label: 'ARBITRAGE',
    labelClass: 'bento-label-green',
    title: 'Bet both sides and win',
    sub: 'When Kalshi and Polymarket price the same market differently, you can bet both sides and lock in a guaranteed profit no matter which way it resolves.',
    bullets: [
      'Live arbitrage scanner across 15+ platforms',
      'Instant alerts when a spread opens',
      'Built-in position sizing calculator',
      'Tracks your guaranteed profit per trade',
    ],
    mock: (
      <div className="fp-mock-arb">
        <div className="fp-arb-header">Live Arbitrage Opportunities</div>
        {[
          { market: 'Fed cuts rates in July?', k: '62¢', p: '41¢', edge: '+8.0%' },
          { market: 'Bitcoin above $120k by Aug?', k: '33¢', p: '28¢', edge: '+5.2%' },
          { market: 'Trump EO this week?', k: '57¢', p: '46¢', edge: '+6.6%' },
        ].map((r, i) => (
          <div key={i} className="fp-arb-row">
            <span className="fp-arb-market">{r.market}</span>
            <span className="fp-arb-platform">
              <img src="/kalshi.png" alt="K" className="fp-arb-logo" /> {r.k}
            </span>
            <span className="fp-arb-platform">
              <img src="/polymarket.png" alt="P" className="fp-arb-logo" /> {r.p}
            </span>
            <span className="fp-arb-edge">{r.edge}</span>
            <button className="fp-arb-btn">Bet →</button>
          </div>
        ))}
      </div>
    ),
  },
  ev: {
    label: 'POSITIVE EV',
    labelClass: 'bento-label-purple',
    title: 'Bet with a real edge',
    sub: 'We surface contracts where the market price is wrong. Place these consistently and the math works in your favor. Wins outpace losses over time.',
    bullets: [
      'Scans millions of contracts daily',
      'Edge % calculated from true probability models',
      'Sortable by EV, platform, and category',
      'Historical accuracy tracked per model',
    ],
    mock: (
      <div className="fp-mock-ev">
        <div className="fp-arb-header">+EV Market Feed</div>
        {[
          { market: 'Fed cuts rates in July?', ev: '+9.1%', prob: '48%', price: '41¢' },
          { market: 'Bitcoin above $120k by Aug?', ev: '+6.4%', prob: '36%', price: '28¢' },
          { market: 'Trump EO this week?', ev: '+7.8%', prob: '64%', price: '57¢' },
          { market: 'S&P 500 above 5800 EOY?', ev: '+5.3%', prob: '71%', price: '62¢' },
        ].map((r, i) => (
          <div key={i} className="fp-arb-row">
            <span className="fp-arb-market">{r.market}</span>
            <span className="fp-ev-prob">{r.prob} true</span>
            <span className="fp-ev-price">{r.price}</span>
            <span className="fp-ev-badge">{r.ev} EV</span>
          </div>
        ))}
      </div>
    ),
  },
  alerts: {
    label: 'MOBILE',
    labelClass: 'bento-label-blue',
    title: 'Never miss a move',
    sub: "Mispriced markets close in minutes. Our live alert system pushes notifications the instant a high-edge opportunity opens so you can act before it's gone.",
    bullets: [
      'Push notifications on iOS and Android',
      'Filter by EV threshold, platform, or category',
      'Pre-filled bet slips from the alert',
      'Alert history with outcome tracking',
    ],
    mock: (
      <div className="fp-mock-alerts">
        {[
          { title: '🔥 +11.2% ARB Opportunity', body: 'Fed July cut: Kalshi vs Polymarket', time: 'just now', hot: true },
          { title: '+9.1% EV Market', body: 'Fed cuts rates in July, 41¢ on Kalshi', time: '3m ago', hot: false },
          { title: '+7.8% EV Market', body: 'Trump EO this week, 57¢ on Kalshi', time: '8m ago', hot: false },
        ].map((n, i) => (
          <div key={i} className={`fp-alert-notif ${n.hot ? 'fp-alert-hot' : ''}`}>
            <div className="alert-app-icon">V</div>
            <div className="alert-body">
              <div className="alert-title-row">{n.title}</div>
              <div className="alert-text">{n.body}</div>
            </div>
            <div className="alert-time">{n.time}</div>
          </div>
        ))}
      </div>
    ),
  },
  portfolio: {
    label: 'PORTFOLIO',
    labelClass: 'bento-label-teal',
    title: 'See your full edge',
    sub: 'Track every open position, realized profit, and your true ROI across all platforms in a single dashboard. Know exactly how your edge is compounding.',
    bullets: [
      'Syncs with Kalshi, Polymarket, and more',
      'Real-time P&L and ROI calculations',
      'Win rate and EV accuracy over time',
      'Export reports for tax purposes',
    ],
    mock: (
      <div className="fp-mock-port">
        <div className="fp-port-stats">
          {[
            { val: '+$1,240', label: 'This month', green: true },
            { val: '+18.4%', label: 'ROI', green: false },
            { val: '38', label: 'Trades', green: false },
            { val: '71%', label: 'Win rate', green: false },
          ].map((s, i) => (
            <div key={i} className="fp-port-stat">
              <div className={`port-stat-val ${s.green ? 'green' : ''}`}>{s.val}</div>
              <div className="port-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="port-chart" style={{ height: 80 }}>
          {[28, 42, 35, 55, 48, 70, 62, 88, 75, 95, 82, 100].map((h, i) => (
            <div key={i} className="port-bar" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    ),
  },
  promo: {
    label: 'PROMO OPTIMIZER',
    labelClass: 'bento-label-orange',
    title: 'Maximize your bonuses',
    sub: 'Every prediction market platform offers sign-up bonuses and deposit matches. We tell you exactly which trades to make to extract the full dollar value.',
    bullets: [
      'Tracks all active platform promotions',
      'Step-by-step bonus extraction instructions',
      'Calculates risk-free value per bonus',
      'Notifies you when new promos go live',
    ],
    mock: (
      <div className="fp-mock-promo">
        {[
          { platform: 'Kalshi', bonus: '$200', status: 'Extractable', logo: '/kalshi.png' },
          { platform: 'Polymarket', bonus: '$150', status: 'In progress', logo: '/polymarket.png' },
        ].map((p, i) => (
          <div key={i} className="fp-promo-row">
            <img src={p.logo} alt={p.platform} className="arb-logo" />
            <span className="fp-promo-platform">{p.platform}</span>
            <span className="fp-promo-bonus">{p.bonus}</span>
            <span className={`fp-promo-status ${i === 0 ? 'extractable' : 'progress'}`}>{p.status}</span>
          </div>
        ))}
      </div>
    ),
  },
}

export default function FeaturePage() {
  const { id } = useParams<{ id: string }>()
  const f = features[id ?? '']

  if (!f) {
    return (
      <section className="fp-wrap">
        <div className="fp-inner">
          <h2>Feature not found</h2>
          <Link to="/" className="fp-back">← Back to home</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="fp-wrap">
      <div className="fp-inner">
        {/* Left */}
        <div className="fp-left">
          <span className={`fp-label ${f.labelClass}`}>{f.label}</span>
          <h1 className="fp-title">{f.title}</h1>
          <p className="fp-sub">{f.sub}</p>
          <ul className="fp-bullets">
            {f.bullets.map(b => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <div className="fp-actions">
            <Link to="/pricing" className="btn-primary btn-large">View pricing</Link>
          </div>
        </div>

        {/* Right */}
        <div className="fp-right">
          {f.mock}
        </div>
      </div>
    </section>
  )
}
