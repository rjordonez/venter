import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="/" className="nav-logo" style={{ marginBottom: '0.5rem', display: 'inline-flex' }}>
              Venter
            </a>
            <p>
              Data-driven prediction market trading.
              Find mispriced contracts, trade with an edge,
              and let math do the work.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-btn" aria-label="Twitter">𝕏</a>
              <a href="#" className="social-btn" aria-label="Discord">💬</a>
              <a href="#" className="social-btn" aria-label="YouTube">▶</a>
              <a href="#" className="social-btn" aria-label="TikTok">♪</a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Tools</h5>
            <ul>
              <li><Link to="/features/market-scanner">Market Scanner</Link></li>
              <li><Link to="/features/arbitrage">Arbitrage Finder</Link></li>
              <li><Link to="/features/ev">Positive EV</Link></li>
              <li><Link to="/features/promo">Promo Optimizer</Link></li>
              <li><Link to="/features/alerts">Live Alerts</Link></li>
              <li><Link to="/features/portfolio">Portfolio Tracker</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Calculators</h5>
            <ul>
              <li><a href="#">EV Calculator</a></li>
              <li><a href="#">Arbitrage Calculator</a></li>
              <li><a href="#">Kelly Criterion</a></li>
              <li><a href="#">Odds Converter</a></li>
              <li><a href="#">Parlay Builder</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><a href="#">Getting Started</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Affiliates</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Venter, Inc. All rights reserved. 18+</p>
          <p>Prediction markets involve financial risk. Trade responsibly.</p>
        </div>

        <p className="footer-legal">
          Affiliate Disclosure: Venter may receive commissions for referrals to prediction market platforms.
          Past performance is not indicative of future results. Mathematical edges play out over large sample
          sizes. Individual outcomes vary. Please trade responsibly.
        </p>
      </div>
    </footer>
  )
}
