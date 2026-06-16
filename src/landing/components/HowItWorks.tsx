const stats = [
  { value: '+7.2%',  label: 'Average edge per trade' },
  { value: '$1,240', label: 'Avg. monthly profit' },
  { value: '100k+',  label: 'Active traders' },
]

export default function HowItWorks() {
  return (
    <section className="section how-it-works" id="how-it-works">
      <div className="section-inner">
        <div className="hiw-stats">
          {stats.map(s => (
            <div key={s.label} className="hiw-stat">
              <div className="hiw-stat-value">{s.value}</div>
              <div className="hiw-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="platforms-wrap">
          <p className="platforms-label">Works on all major prediction market platforms</p>
          <div className="platforms">
            {[
              { name: 'Kalshi',     src: '/kalshi.png' },
              { name: 'Polymarket', src: '/polymarket.png' },
              { name: 'Manifold',   src: '/manifold.jpg' },
              { name: 'PredictIt',  src: '/predictit-logo.png' },
              { name: 'Metaculus',  src: '/metaculus-logo.png' },
              { name: 'Limitless',  src: '/limitless-logo.png' },
            ].map(p => (
              <img key={p.name} src={p.src} alt={p.name} className="platform-logo-sq" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
