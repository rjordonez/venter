import { useState } from 'react'

export default function CTABanner() {
  const [email, setEmail] = useState('')

  return (
    <div style={{ padding: '0 1.5rem 5rem' }}>
      <div className="cta-banner">
        <h2>Want free, profitable<br />picks sent to your inbox?</h2>
        <p>Join 100k+ traders getting daily +EV prediction market picks, free forever.</p>
        <form
          className="cta-form"
          onSubmit={e => { e.preventDefault(); setEmail('') }}
        >
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn-primary">Send me picks</button>
        </form>
      </div>
    </div>
  )
}
