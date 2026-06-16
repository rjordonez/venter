import { Link } from 'react-router-dom'

const ChevronDown = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ marginLeft: 3, flexShrink: 0 }}>
    <path d="M3 4.5l3.5 3.5 3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-left">
        <Link to="/" className="nav-logo">
          Venter
        </Link>

        <ul className="nav-links">
          <li>
            <a href="/#tools" className="nav-link-with-chevron">
              Tools <ChevronDown />
            </a>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <a href="/#resources" className="nav-link-with-chevron">
              Resources <ChevronDown />
            </a>
          </li>
        </ul>
      </div>

      <div className="nav-actions">
        <a href="/app" className="btn-ghost">Log in</a>
        <Link to="/pricing" className="btn-primary">Try for free</Link>
      </div>
    </nav>
  )
}
