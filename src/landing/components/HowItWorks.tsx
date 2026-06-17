import { useEffect, useRef } from 'react'

const stats = [
  { value: '+7.2%',  label: 'Average edge per trade' },
  { value: '$1,240', label: 'Avg. monthly profit' },
  { value: '10k+',  label: 'Active traders' },
]

export default function HowItWorks() {
  const statsRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { statsRef.current?.classList.add('in-view'); observer.disconnect() } },
      { threshold: 0.4 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (window.innerWidth <= 768) return
    let lastY   = window.scrollY
    let current = 0
    let rafId: number

    const tick = () => {
      const y   = window.scrollY
      const vel = Math.abs(y - lastY)
      lastY     = y
      const target = Math.min(vel * 1.2, 20)
      current += (target - current) * 0.08
      innerRef.current!.style.transform = `translateY(${-current}px)`
      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <section className="section how-it-works" id="how-it-works">

      <div className="hiw-bar hiw-bar-top" />

      <div ref={innerRef} className="section-inner">
        <div ref={statsRef} className="hiw-stats">
          {stats.map((s, i) => (
            <div key={s.label} className="hiw-stat" style={{ '--i': i } as React.CSSProperties}>
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
              { name: 'Limitless',  src: '/limitless-logo.png' },
            ].map(p => (
              <img key={p.name} src={p.src} alt={p.name} className="platform-logo-sq" />
            ))}
          </div>
        </div>
      </div>

      <div className="hiw-bar hiw-bar-bot" />

    </section>
  )
}
