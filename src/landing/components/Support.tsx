const channels = [
  { icon: '🎙️', title: 'Free 1:1 Coaching', desc: 'Tailored strategy for your bankroll & goals' },
  { icon: '💬', title: '24/7 Live Chat', desc: 'Real support whenever you need it' },
  { icon: '🎮', title: 'Discord Community', desc: '10k+ active traders sharing edges daily' },
  { icon: '▶️', title: 'Video Tutorials', desc: 'Step-by-step guides for every tool' },
]

export default function Support() {
  return (
    <section className="section">
      <div className="section-inner">
        <span className="section-tag">Support</span>
        <h2>It takes more than tools to win.<br />You need real people.</h2>
        <p className="section-sub">
          Math-driven trading requires consistency. We'll be there every step of
          the way — tailored to your experience, budget, and time.
        </p>

        <div className="support-grid">
          {channels.map(c => (
            <div key={c.title} className="support-card">
              <div className="support-icon">{c.icon}</div>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>

        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          padding: '1.75rem',
          maxWidth: 600,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '1.1rem' }}>💡</span>
            <strong style={{ fontSize: '0.9375rem' }}>Sound too good to be true?</strong>
          </div>
          <p style={{ color: 'var(--text-2)', fontSize: '0.9rem', margin: 0, lineHeight: 1.65 }}>
            We get it. Prediction markets aren't a lottery — they're closer to a stock market.
            When a contract is priced at 40¢ but the true probability is 60%, buying it at 40¢
            is a mathematically positive bet, every time. That's the entire premise of Venter.
          </p>
        </div>
      </div>
    </section>
  )
}
