import { useState } from 'react'

export default function Hero() {
  const [email, setEmail] = useState('')

  return (
    <section className="hero">
      <div className="hero-glow" />

      <div className="hero-badge">
        <span className="hero-badge-dot" />
        Now live on Kalshi &amp; Polymarket
      </div>

      <h1>
        Make <span>$500–$1000+</span> weekly.<br />
        Use math, not gut feelings.
      </h1>

      <p className="hero-sub">
        Venter finds mispriced prediction markets across every platform — so you
        can place data-driven bets with a real edge, consistently.
      </p>

      <form
        className="hero-form"
        onSubmit={e => { e.preventDefault(); setEmail('') }}
      >
        <input
          type="email"
          placeholder="Your email..."
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="btn-primary">Get free picks</button>
      </form>

      <p className="hero-trust">Free daily edges. No credit card required.</p>

      <div className="hero-stats">
        <div className="hero-stat">
          <span className="hero-stat-num">100k+</span>
          <span className="hero-stat-label">Traders worldwide</span>
        </div>
        <div className="hero-stat">
          <span className="hero-stat-num">15+</span>
          <span className="hero-stat-label">Markets covered</span>
        </div>
        <div className="hero-stat">
          <span className="hero-stat-num">$2.4M+</span>
          <span className="hero-stat-label">Verified profit</span>
        </div>
        <div className="hero-stat">
          <span className="hero-stat-num">Real-time</span>
          <span className="hero-stat-label">Live odds scanning</span>
        </div>
      </div>
    </section>
  )
}
