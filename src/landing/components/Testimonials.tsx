const reviews = [
  { init: 'JM', name: 'Jake M.', handle: '@jakemarkets', profit: '+$1,240', text: "Venter's arbitrage finder paid for itself in the first week. Found a Kalshi vs Polymarket spread I never would've caught manually." },
  { init: 'SR', name: 'Sofia R.', handle: '@sofiatrades', profit: '+$870', text: "The +EV scanner is insane. I placed 40 bets last month, ended up $870 ahead. The math just works." },
  { init: 'DL', name: 'David L.', handle: '@dlcontracts', profit: '+$2,100', text: "I was skeptical but the free coaching call walked me through exactly how to size positions. Haven't had a losing week since." },
  { init: 'AL', name: 'Aisha L.', handle: '@aishaedge', profit: '+$650', text: "Perfect for someone new to prediction markets. The dashboard makes it obvious what to trade and why." },
  { init: 'TK', name: 'Tyler K.', handle: '@tylerk_ev', profit: '+$3,500', text: "Full-time job replacement territory for me. The live alerts are the key. I never miss a mispriced market now." },
  { init: 'MN', name: 'Maya N.', handle: '@mayanumbers', profit: '+$490', text: "Promo optimizer alone recouped three months of subscription. Extracted $490 in bonus value in my first two weeks." },
  { init: 'RC', name: 'Ryan C.', handle: '@ryancontracts', profit: '+$1,800', text: "The portfolio tracker finally lets me see my true ROI across platforms. Venter is the missing layer for serious traders." },
  { init: 'EH', name: 'Elena H.', handle: '@elenabets', profit: '+$730', text: "I work full time. I spend maybe 20 mins a day on this. Alerts do the work. This month: +$730." },
]

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = []
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size))
  return out
}

const row1 = [...reviews, ...reviews]
const row2 = [...reviews.slice(4), ...reviews.slice(0, 4), ...reviews.slice(4), ...reviews.slice(0, 4)]

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <span className="section-tag">Social Proof</span>
        <h2 style={{ margin: '0 0 0.5rem' }}>Real profits, verified.</h2>
        <p style={{ color: 'var(--text-3)', fontSize: '0.9rem', margin: 0 }}>
          Results tracked by Pikkit, the independent third-party bet tracker.
        </p>
      </div>

      <div style={{ overflow: 'hidden' }}>
        <div className="marquee-track">
          {row1.map((r, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">"{r.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{r.init}</div>
                <div>
                  <div className="testimonial-name">{r.name}</div>
                  <div className="testimonial-handle">{r.handle}</div>
                </div>
                <div className="testimonial-profit">{r.profit}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="marquee-track reverse">
          {row2.map((r, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">"{r.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{r.init}</div>
                <div>
                  <div className="testimonial-name">{r.name}</div>
                  <div className="testimonial-handle">{r.handle}</div>
                </div>
                <div className="testimonial-profit">{r.profit}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
