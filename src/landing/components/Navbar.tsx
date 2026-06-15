export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="nav-logo">
        <span className="nav-logo-mark">V</span>
        Venter
      </a>

      <ul className="nav-links">
        <li><a href="#tools">Tools</a></li>
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>

      <div className="nav-actions">
        <a href="/app" className="btn-ghost">Log in</a>
        <a href="/app" className="btn-primary">Try for free</a>
      </div>
    </nav>
  )
}
