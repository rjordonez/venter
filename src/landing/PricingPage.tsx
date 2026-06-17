import './landing.css'
import { useState } from 'react'

const platformLogos = [
  { name: 'Kalshi',     src: '/kalshi.png' },
  { name: 'Polymarket', src: '/polymarket.png' },
  { name: 'Manifold',   src: '/manifold.jpg' },
  { name: 'Limitless',  src: '/limitless-logo.png' },
]

const plans = [
  {
    name: 'Free',
    dayMonthly: null,
    dayYearly: null,
    fullMonthly: null,
    desc: 'Get started with daily picks and see the edge for yourself.',
    features: [
      'Daily +EV picks via email',
      'Market Scanner (3 markets/day)',
      'Basic EV calculator',
      'Discord community access',
    ],
    cta: 'Get started free',
    href: '/app',
    highlighted: false,
  },
  {
    name: 'Pro',
    dayMonthly: '1.63',
    dayYearly: '1.30',
    fullMonthly: '1.63',
    desc: 'Everything you need to trade consistently with a real edge.',
    features: [
      'Unlimited Market Scanner',
      'Real-time Arbitrage Finder',
      'Positive EV feed (live)',
      'Promo Optimizer',
      'Live push alerts',
      'Portfolio Tracker',
      'Free 1:1 coaching call',
      '24/7 live chat support',
    ],
    cta: 'Start 7-day free trial',
    href: '/app',
    highlighted: true,
  },
  {
    name: 'Elite',
    dayMonthly: '4.97',
    dayYearly: '3.97',
    fullMonthly: '4.97',
    desc: 'For serious traders who want every edge on every platform.',
    features: [
      'Everything in Pro',
      'API access',
      'Priority alerts (sub-1s)',
      'Custom market filters',
      'Dedicated account manager',
      'Weekly strategy calls',
    ],
    cta: 'Contact us',
    href: 'mailto:hello@venter.io',
    highlighted: false,
  },
]

export default function PricingPage() {
  const [yearly, setYearly] = useState(true)

  return (
    <div className="pricing-content">
      <div className="pricing-header">
        <h1 className="pricing-title">Simple, transparent pricing</h1>
        <p className="pricing-sub">Start free. Upgrade when you're ready to go all in.</p>

        <div className="pricing-toggle">
          <button
            className={`pricing-toggle-btn ${!yearly ? 'active' : ''}`}
            onClick={() => setYearly(false)}
          >Monthly</button>
          <button
            className={`pricing-toggle-btn ${yearly ? 'active' : ''}`}
            onClick={() => setYearly(true)}
          >
            Yearly
            <span className="pricing-toggle-badge">Save 20%</span>
          </button>
        </div>
      </div>

      <div className="pricing-grid">
        {plans.map(plan => (
          <div key={plan.name} className={`pricing-card ${plan.highlighted ? 'pricing-card-pro' : ''}`}>
            {plan.highlighted && <div className="pricing-popular">Most popular</div>}
            <div className="pricing-plan-name">{plan.name}</div>

            {plan.dayMonthly ? (
              <div className="pricing-price-block">
                <div className="pricing-price-row">
                  <span className="pricing-day-price">
                    ${yearly ? plan.dayYearly : plan.dayMonthly}
                  </span>
                  {yearly && (
                    <span className="pricing-day-original">${plan.fullMonthly}</span>
                  )}
                </div>
                <div className="pricing-day-label">
                  per day, billed {yearly ? 'yearly' : 'monthly'}
                </div>
              </div>
            ) : (
              <div className="pricing-price-block">
                <div className="pricing-day-price">$0</div>
                <div className="pricing-day-label">free forever</div>
              </div>
            )}

            <p className="pricing-desc">{plan.desc}</p>

            <a href={plan.href} className={`pricing-cta ${plan.highlighted ? 'pricing-cta-pro' : ''}`}>
              {plan.cta}
            </a>

            <ul className="pricing-features">
              {plan.features.map(f => (
                <li key={f} className="pricing-feature">
                  <span className="pricing-check">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="pricing-card-logos">
              {platformLogos.map(p => (
                <img key={p.name} src={p.src} alt={p.name} className="pricing-card-logo" />
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="pricing-fine">No contracts. Cancel anytime. 7-day free trial on Pro.</p>
    </div>
  )
}
