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
              <li><a href="#">Market Scanner</a></li>
              <li><a href="#">Arbitrage Finder</a></li>
              <li><a href="#">Positive EV</a></li>
              <li><a href="#">Promo Optimizer</a></li>
              <li><a href="#">Live Alerts</a></li>
              <li><a href="#">Portfolio Tracker</a></li>
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
          sizes — individual outcomes vary. Please trade responsibly.
        </p>
      </div>
    </footer>
  )
}
