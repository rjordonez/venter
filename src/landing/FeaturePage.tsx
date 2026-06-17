import { useParams, Link } from 'react-router-dom'

const LockIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="profit-lock-svg">
    <rect x="5" y="11" width="14" height="10" rx="2" stroke="white" strokeWidth="1.5"/>
    <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

function LockedPanel({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="fp-locked-panel">
      <div className="fp-bg-content">
        {children}
      </div>
      <div className="profit-glass-overlay">
        <LockIcon />
        <p className="profit-glass-title">{title}</p>
        <Link to="/pricing" className="profit-glass-btn">Start free trial</Link>
      </div>
    </div>
  )
}

const ArbRows = [
  { market: 'Fed cuts rates in July?',       k: '62¢', p: '41¢', edge: '+8.0%' },
  { market: 'Bitcoin above $120k by Aug?',   k: '33¢', p: '28¢', edge: '+5.2%' },
  { market: 'Trump EO this week?',           k: '57¢', p: '46¢', edge: '+6.6%' },
  { market: 'S&P 500 above 5800 EOY?',       k: '71¢', p: '62¢', edge: '+4.8%' },
  { market: 'US recession by Q3?',           k: '29¢', p: '22¢', edge: '+7.1%' },
  { market: 'Ethereum above $4k?',           k: '44¢', p: '38¢', edge: '+5.9%' },
  { market: 'CPI below 3% in June?',         k: '68¢', p: '57¢', edge: '+6.3%' },
  { market: 'Dem wins 2026 Senate?',         k: '51¢', p: '43¢', edge: '+5.5%' },
]

const EVRows = [
  { market: 'Fed cuts rates in July?',     ev: '+9.1%', prob: '48%', price: '41¢' },
  { market: 'Bitcoin above $120k by Aug?', ev: '+6.4%', prob: '36%', price: '28¢' },
  { market: 'Trump EO this week?',         ev: '+7.8%', prob: '64%', price: '57¢' },
  { market: 'S&P 500 above 5800 EOY?',     ev: '+5.3%', prob: '71%', price: '62¢' },
  { market: 'US recession by Q3?',         ev: '+8.2%', prob: '27%', price: '22¢' },
  { market: 'Ethereum above $4k?',         ev: '+6.1%', prob: '42%', price: '38¢' },
  { market: 'CPI below 3% in June?',       ev: '+5.7%', prob: '65%', price: '57¢' },
  { market: 'Dem wins 2026 Senate?',       ev: '+4.9%', prob: '49%', price: '43¢' },
]

const AlertRows = [
  { title: '🔥 +11.2% ARB', body: 'Fed July cut: Kalshi vs Polymarket', time: 'just now' },
  { title: '+9.1% EV',      body: 'Fed cuts rates in July, 41¢ Kalshi', time: '3m' },
  { title: '+7.8% EV',      body: 'Trump EO this week, 57¢ Kalshi',     time: '8m' },
  { title: '🔥 +8.4% ARB', body: 'Bitcoin $120k: Kalshi vs Polymarket', time: '14m' },
  { title: '+6.4% EV',      body: 'Bitcoin above $120k, 28¢ Polymarket', time: '21m' },
  { title: '+5.3% EV',      body: 'S&P 500 above 5800, 62¢ Kalshi',     time: '35m' },
]

const ScannerRows = [
  { market: 'Fed cuts rates in July?',     ev: '+9.1%', platform: 'Kalshi',     price: '41¢', type: 'EV' },
  { market: 'Bitcoin above $120k by Aug?', ev: '+8.0%', platform: 'Polymarket', price: '28¢', type: 'ARB' },
  { market: 'Trump EO this week?',         ev: '+7.8%', platform: 'Kalshi',     price: '57¢', type: 'EV' },
  { market: 'S&P 500 above 5800 EOY?',     ev: '+5.3%', platform: 'Kalshi',     price: '62¢', type: 'EV' },
  { market: 'US recession by Q3?',         ev: '+7.1%', platform: 'Polymarket', price: '22¢', type: 'ARB' },
  { market: 'Ethereum above $4k?',         ev: '+6.1%', platform: 'Manifold',   price: '38¢', type: 'EV' },
  { market: 'CPI below 3% in June?',       ev: '+5.7%', platform: 'Kalshi',     price: '57¢', type: 'EV' },
  { market: 'Dem wins 2026 Senate?',       ev: '+4.9%', platform: 'Polymarket', price: '43¢', type: 'EV' },
]

const features: Record<string, {
  label: string
  labelClass: string
  title: string
  sub: string
  bullets: string[]
  lockedTitle: string
  panel: React.ReactNode
}> = {
  'market-scanner': {
    label: 'MARKET SCANNER',
    labelClass: 'bento-label-blue',
    title: 'Find the edge before anyone else',
    sub: 'Scans every contract across all major platforms in real time. Filter by EV, category, or platform to surface the best opportunities instantly.',
    bullets: [
      'Real-time scan across Kalshi, Polymarket, and more',
      'Filter by EV %, category, or resolution date',
      'Sort by edge size or volume',
      'One-click bet slip from any result',
    ],
    lockedTitle: 'Sign up to access the live scanner',
    panel: (
      <>
        <div className="fp-bg-header">Live Market Scanner</div>
        <div className="fp-bg-table-header">
          <span style={{ flex: 2 }}>Market</span><span>Platform</span><span>Price</span><span>Edge</span>
        </div>
        {ScannerRows.map((r, i) => (
          <div key={i} className="profit-bg-row fp-bg-row-border">
            <span className="profit-bg-label" style={{ flex: 2 }}>{r.market}</span>
            <span className="profit-bg-value" style={{ minWidth: 72, fontSize: '0.75rem' }}>{r.platform}</span>
            <span className="profit-bg-value" style={{ minWidth: 36 }}>{r.price}</span>
            <span className="profit-bg-value" style={{ color: '#38bdf8', minWidth: 52 }}>{r.ev}</span>
          </div>
        ))}
      </>
    ),
  },
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
    lockedTitle: 'Sign up to see live arbitrage opportunities',
    panel: (
      <>
        <div className="fp-bg-header">Live Arbitrage Opportunities</div>
        <div className="fp-bg-table-header">
          <span>Market</span><span>Kalshi</span><span>Poly</span><span>Edge</span>
        </div>
        {ArbRows.map((r, i) => (
          <div key={i} className="profit-bg-row fp-bg-row-border">
            <span className="profit-bg-label" style={{ flex: 2 }}>{r.market}</span>
            <span className="profit-bg-value" style={{ minWidth: 36 }}>{r.k}</span>
            <span className="profit-bg-value" style={{ minWidth: 36 }}>{r.p}</span>
            <span className="profit-bg-value green" style={{ minWidth: 48 }}>{r.edge}</span>
          </div>
        ))}
      </>
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
    lockedTitle: 'Sign up to see your edge feed',
    panel: (
      <>
        <div className="fp-bg-header">+EV Market Feed</div>
        <div className="fp-bg-table-header">
          <span>Market</span><span>True prob</span><span>Price</span><span>EV</span>
        </div>
        {EVRows.map((r, i) => (
          <div key={i} className="profit-bg-row fp-bg-row-border">
            <span className="profit-bg-label" style={{ flex: 2 }}>{r.market}</span>
            <span className="profit-bg-value" style={{ minWidth: 44 }}>{r.prob}</span>
            <span className="profit-bg-value" style={{ minWidth: 36 }}>{r.price}</span>
            <span className="profit-bg-value" style={{ color: '#818cf8', minWidth: 52 }}>{r.ev}</span>
          </div>
        ))}
      </>
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
    lockedTitle: 'Sign up to enable live alerts',
    panel: (
      <>
        <div className="fp-bg-header">Recent Alerts</div>
        {AlertRows.map((n, i) => (
          <div key={i} className="fp-bg-alert-row">
            <div className="alert-app-icon" style={{ flexShrink: 0 }}>V</div>
            <div className="alert-body" style={{ flex: 1 }}>
              <div className="alert-title-row">{n.title}</div>
              <div className="alert-text">{n.body}</div>
            </div>
            <div className="alert-time">{n.time}</div>
          </div>
        ))}
      </>
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
    lockedTitle: 'Connect your accounts to see your dashboard',
    panel: (
      <>
        <div className="fp-bg-header">Portfolio Overview</div>
        <div className="profit-bg-row">
          <span className="profit-bg-label">Est. monthly profit</span>
          <span className="profit-bg-value green">$1,240</span>
        </div>
        <div className="profit-bg-row">
          <span className="profit-bg-label">Est. annual profit</span>
          <span className="profit-bg-value green large">$14,880</span>
        </div>
        <div className="profit-bg-divider" />
        <div className="profit-bg-row">
          <span className="profit-bg-label">ROI this month</span>
          <span className="profit-bg-value">+18.4%</span>
        </div>
        <div className="profit-bg-row">
          <span className="profit-bg-label">Win rate</span>
          <span className="profit-bg-value">71%</span>
        </div>
        <div className="profit-bg-row">
          <span className="profit-bg-label">Trades placed</span>
          <span className="profit-bg-value">38</span>
        </div>
        <div className="profit-bg-row">
          <span className="profit-bg-label">Avg. edge per trade</span>
          <span className="profit-bg-value">+6.2%</span>
        </div>
        <div className="profit-bg-divider" />
        <div className="profit-bg-bar-group">
          {[32, 48, 24, 60, 40, 52, 36, 70, 44, 80, 56, 90].map((h, i) => (
            <div key={i} className="profit-bg-bar" style={{
              height: h,
              background: i % 2 === 0 ? 'rgba(99,102,241,0.6)' : 'rgba(16,185,129,0.6)'
            }} />
          ))}
        </div>
      </>
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
    lockedTitle: 'Sign up to unlock your bonuses',
    panel: (
      <>
        <div className="fp-bg-header">Available Promotions</div>
        {[
          { platform: 'Kalshi',     bonus: '$200', label: 'Welcome Bonus',   logo: '/kalshi.png',     status: 'Extractable' },
          { platform: 'Polymarket', bonus: '$150', label: 'Deposit Match',   logo: '/polymarket.png', status: 'In progress' },
          { platform: 'Manifold',   bonus: '$50',  label: 'Referral Bonus',  logo: '/manifold.jpg',   status: 'Available' },
          { platform: 'Limitless',  bonus: '$100', label: 'New User Promo',  logo: '/limitless-logo.png', status: 'Available' },
        ].map((p, i) => (
          <div key={i} className="profit-bg-row fp-bg-row-border" style={{ gap: '0.75rem' }}>
            <img src={p.logo} alt={p.platform} style={{ width: 22, height: 22, borderRadius: 5, objectFit: 'contain' }} />
            <span className="profit-bg-label" style={{ flex: 1 }}>{p.platform}: {p.label}</span>
            <span className="profit-bg-value green">{p.bonus}</span>
          </div>
        ))}
        <div className="profit-bg-divider" />
        <div className="profit-bg-row">
          <span className="profit-bg-label">Total extractable value</span>
          <span className="profit-bg-value green large">$500</span>
        </div>
      </>
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

        <div className="fp-right">
          <LockedPanel title={f.lockedTitle}>
            {f.panel}
          </LockedPanel>
        </div>
      </div>
    </section>
  )
}
