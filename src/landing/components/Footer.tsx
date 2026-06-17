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
              <a href="#" className="social-btn" aria-label="X / Twitter">
                <img src="/x-logo.jpg" alt="X" style={{ width: 40, height: 40, borderRadius: 10, objectFit: 'cover' }} />
              </a>
              <a href="#" className="social-btn" aria-label="Discord">
                <img src="/discord.png" alt="Discord" style={{ width: 40, height: 40, borderRadius: 10, objectFit: 'contain' }} />
              </a>
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
              <li><Link to="/calculators">EV Calculator</Link></li>
              <li><Link to="/calculators">Arbitrage Calculator</Link></li>
              <li><Link to="/calculators">Kelly Criterion</Link></li>
              <li><Link to="/calculators">Odds Converter</Link></li>
              <li><Link to="/calculators">No-Vig Calculator</Link></li>
              <li><Link to="/calculators">Promo Calculator</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><a href="/#faq">FAQ</a></li>
              <li><a href="/#tools">Features</a></li>
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
