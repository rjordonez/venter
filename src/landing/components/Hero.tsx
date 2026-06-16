import { useState } from 'react'
import ProfitCard from './ProfitCard'
import DashboardPreview from './DashboardPreview'

const avatars = [
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/15.jpg',
]

export default function Hero() {
  const [email, setEmail] = useState('')

  return (
    <section className="hero">

      {/* ── Two-column top ── */}
      <div className="hero-cols">
        {/* Left */}
        <div className="hero-copy">
          {/* Avatars + trust — top */}
          <div className="hero-trust-row" style={{ marginBottom: '1.25rem' }}>
            <div className="hero-avatars">
              {avatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="trader"
                  className="hero-avatar"
                  style={{ zIndex: avatars.length - i, marginLeft: i === 0 ? 0 : -10 }}
                />
              ))}
            </div>
            <p className="hero-trust-text">
              Trusted by <strong>100k+</strong> traders worldwide
            </p>
          </div>

          <h1>
            Make <span>$500–$1000+</span><br />
            weekly. Use math,<br />
            not gut feelings.
          </h1>

          <p className="hero-sub">
            Get data-backed prediction market picks sent daily — free.
          </p>

          <form
            className="hero-form"
            onSubmit={e => { e.preventDefault(); setEmail('') }}
          >
            <div className="hero-form-inner">
              <input
                type="email"
                placeholder="Your email..."
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-primary">
                Send me free picks
              </button>
            </div>
          </form>
        </div>

        {/* Right — Profit estimator card */}
        <div className="hero-card-wrap">
          <ProfitCard />
        </div>
      </div>

      {/* ── Dashboard preview ── */}
      <DashboardPreview />

      {/* ── Trust bar ── */}
      <div className="hero-trust-bar">
        {[
          '7-Day Free Trial',
          'Free 1:1 Coaching',
          '15+ Platforms',
          "Industry's Fastest Data",
        ].map(item => (
          <div key={item} className="hero-trust-item">
            <span className="hero-trust-check">✓</span>
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}
