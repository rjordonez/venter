import { useNavigate } from 'react-router-dom'

export default function ProfitCard() {
  const navigate = useNavigate()

  return (
    <div className="profit-card-outer">

    {/* ── Platform logos – floating top-right corner ── */}
    <div className="profit-platform-logos">
      <img src="/kalshi.png"     alt="Kalshi"      className="profit-logo profit-logo-kalshi" />
      <img src="/polymarket.png" alt="Polymarket"  className="profit-logo profit-logo-poly"   />
    </div>

    <div className="profit-locked-card">
      {/* Blurred background content */}
      <div className="profit-bg-content" aria-hidden>
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
          <span className="profit-bg-label">Avg. edge per trade</span>
          <span className="profit-bg-value">+6.2%</span>
        </div>
        <div className="profit-bg-row">
          <span className="profit-bg-label">Trades per month</span>
          <span className="profit-bg-value">38</span>
        </div>
        <div className="profit-bg-bar-group">
          <div className="profit-bg-bar" style={{ height: 32, background: 'rgba(99,102,241,0.6)' }} />
          <div className="profit-bg-bar" style={{ height: 48, background: 'rgba(16,185,129,0.6)' }} />
          <div className="profit-bg-bar" style={{ height: 24, background: 'rgba(99,102,241,0.5)' }} />
          <div className="profit-bg-bar" style={{ height: 60, background: 'rgba(16,185,129,0.7)' }} />
          <div className="profit-bg-bar" style={{ height: 40, background: 'rgba(99,102,241,0.55)' }} />
          <div className="profit-bg-bar" style={{ height: 52, background: 'rgba(16,185,129,0.6)' }} />
        </div>
      </div>

      {/* Frosted glass overlay */}
      <div className="profit-glass-overlay">
        <svg className="profit-lock-svg" width="26" height="30" viewBox="0 0 26 30" fill="none">
          <rect x="1" y="12" width="24" height="17" rx="4" stroke="white" strokeWidth="1.75"/>
          <path d="M6 12V8.5a7 7 0 0114 0V12" stroke="white" strokeWidth="1.75" strokeLinecap="round"/>
          <circle cx="13" cy="20.5" r="2.5" fill="white"/>
        </svg>
        <h3 className="profit-glass-title">See how much money<br />you can make with Venter</h3>
        <button className="profit-glass-btn" onClick={() => navigate('/estimate')}>
          Estimate your profit
        </button>
      </div>
    </div>

    </div>
  )
}
