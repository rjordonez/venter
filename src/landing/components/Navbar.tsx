import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const ChevronDown = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ marginLeft: 3, flexShrink: 0 }}>
    <path d="M3 4.5l3.5 3.5 3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ChevronLeft = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const tools = [
  { name: 'Market Scanner',    desc: 'Scan every market for mispriced contracts',    href: '/features/market-scanner', color: '#38bdf8' },
  { name: 'Arbitrage Finder',  desc: 'Lock in guaranteed profit across platforms',   href: '/features/arbitrage',       color: '#10b981' },
  { name: 'Positive EV',       desc: 'Bet where the crowd is systematically wrong',  href: '/features/ev',              color: '#818cf8' },
  { name: 'Promo Optimizer',   desc: 'Extract every dollar from platform bonuses',   href: '/features/promo',           color: '#fb923c' },
  { name: 'Live Alerts',       desc: 'Instant push alerts when edge markets open',   href: '/features/alerts',          color: '#2dd4bf' },
  { name: 'Portfolio Tracker', desc: 'Track ROI across every platform in one place', href: '/features/portfolio',       color: '#a78bfa' },
]

type Menu = 'closed' | 'main' | 'tools'

export default function Navbar() {
  const [menu, setMenu] = useState<Menu>('closed')

  useEffect(() => {
    document.body.style.overflow = menu !== 'closed' ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menu])

  const close = () => setMenu('closed')

  return (
    <>
      <nav className="nav">
        <div className="nav-left">
          <Link to="/" className="nav-logo">Venter</Link>

          <ul className="nav-links">
            {/* Tools with hover dropdown */}
            <li className="nav-dropdown-wrap">
              <span className="nav-link-with-chevron" style={{ cursor: 'default' }}>
                Tools <ChevronDown />
              </span>
              <div className="nav-dropdown">
                <div className="nav-dropdown-label">For Prediction Markets</div>
                <div className="nav-dropdown-grid">
                  {tools.map(t => (
                    <Link key={t.name} to={t.href} className="nav-dropdown-item">
                      <span className="nav-dropdown-dot" style={{ background: t.color }} />
                      <span>
                        <div className="nav-dropdown-name">{t.name}</div>
                        <div className="nav-dropdown-desc">{t.desc}</div>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </li>
            <li><Link to="/pricing">Pricing</Link></li>
          </ul>
        </div>

        <div className="nav-actions">
          <a href="/app" className="btn-ghost">Log in</a>
          <Link to="/pricing" className="btn-primary">Try for free</Link>
        </div>

        {/* Hamburger */}
        <button className="nav-hamburger" onClick={() => setMenu('main')} aria-label="Open menu">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
          </svg>
        </button>
      </nav>

      {/* Overlay */}
      {menu !== 'closed' && <div className="nav-overlay" onClick={close} />}

      {/* Drawer */}
      <div className={`nav-drawer ${menu !== 'closed' ? 'open' : ''}`}>
        {menu === 'main' && (
          <>
            <div className="nav-drawer-header">
              <Link to="/" className="nav-logo" onClick={close}>Venter</Link>
              <button className="nav-drawer-close" onClick={close}>✕</button>
            </div>
            <div className="nav-drawer-body">
              <button className="nav-drawer-link" style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', color: 'var(--text-1)', fontFamily: 'inherit' }} onClick={() => setMenu('tools')}>
                <span>Tools</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <Link to="/pricing" className="nav-drawer-link" onClick={close}>
                <span>Pricing</span>
              </Link>
              <div className="nav-drawer-divider" />
              <a href="/app" className="nav-drawer-link" onClick={close}>Log in</a>
              <Link to="/pricing" className="nav-drawer-link" style={{ color: 'var(--accent)', fontWeight: 600 }} onClick={close}>Try for free</Link>
            </div>
          </>
        )}

        {menu === 'tools' && (
          <>
            <div className="nav-drawer-header">
              <button className="nav-drawer-back" onClick={() => setMenu('main')}>
                <ChevronLeft /> Back
              </button>
              <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>Tools</span>
              <button className="nav-drawer-close" onClick={close}>✕</button>
            </div>
            <div className="nav-drawer-body">
              {tools.map(t => (
                <Link key={t.name} to={t.href} className="nav-drawer-tool" onClick={close}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className="nav-dropdown-dot" style={{ background: t.color }} />
                    <span className="nav-drawer-tool-name">{t.name}</span>
                  </div>
                  <div className="nav-drawer-tool-desc">{t.desc}</div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  )
}
