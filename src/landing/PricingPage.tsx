import './landing.css'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
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
    price: '$49',
    period: 'per month',
    desc: 'Everything you need to trade consistently with a real edge.',
    features: [
      'Unlimited Market Scanner',
      'Real-time Arbitrage Finder',
      'Positive EV feed — live',
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
    price: '$149',
    period: 'per month',
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
  return (
    <div className="pricing-content">
        <div className="pricing-header">
          <h1 className="pricing-title">Simple, transparent pricing</h1>
          <p className="pricing-sub">Start free. Upgrade when you're ready to go all in.</p>
        </div>

        <div className="pricing-grid">
          {plans.map(plan => (
            <div key={plan.name} className={`pricing-card ${plan.highlighted ? 'pricing-card-pro' : ''}`}>
              {plan.highlighted && <div className="pricing-popular">Most popular</div>}
              <div className="pricing-plan-name">{plan.name}</div>
              <div className="pricing-price">
                {plan.price}
                <span className="pricing-period"> / {plan.period}</span>
              </div>
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
            </div>
          ))}
        </div>

        <p className="pricing-fine">No contracts. Cancel anytime. 7-day free trial on Pro.</p>
      </div>
  )
}
