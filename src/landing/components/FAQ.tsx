import { useState } from 'react'

const faqs = [
  {
    q: 'How does Venter actually work?',
    a: 'Venter continuously scans prediction market platforms and compares contract prices against our probability models and cross-platform prices. When a market is mispriced — meaning the odds are better than they should be — we surface it in your dashboard with the expected value clearly shown.',
  },
  {
    q: 'Which prediction market platforms do you support?',
    a: 'Currently we support Kalshi, Polymarket, Manifold Markets, PredictIt, Metaculus, and Limitless. We\'re adding new platforms every quarter. You only need accounts on the platforms you want to trade.',
  },
  {
    q: 'How much time does this take per day?',
    a: 'Most users spend 15–30 minutes per day. Our alerts notify you when high-edge markets open. You review the opportunity, decide to take it, and move on. The math works in aggregate — you don\'t need to be glued to a screen.',
  },
  {
    q: 'Will I make money every single day?',
    a: 'No — and anyone who says otherwise is lying. Individual markets are uncertain. What Venter guarantees is a mathematical edge: over enough trades, positive expected value adds up to real profit. Think of it like a poker player who doesn\'t win every hand but wins consistently over time.',
  },
  {
    q: 'How do I know this isn\'t a scam?',
    a: 'Our results are verified by Pikkit, an independent third-party bet tracker. We publish real user P&L, not cherry-picked screenshots. We also offer a 7-day free trial with no credit card required — try it before you commit a single dollar.',
  },
  {
    q: 'What if I want to cancel?',
    a: 'Cancel any time, no questions asked. We don\'t lock you into annual plans or charge cancellation fees. Your subscription stops at the end of your billing period.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="section" id="faq">
      <div className="section-inner">
        <span className="section-tag">FAQ</span>
        <h2>Common questions</h2>

        <div className="faq-list">
          {faqs.map((f, i) => (
            <div key={i} className="faq-item">
              <button
                className="faq-question"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {f.q}
                <svg
                  className={`faq-chevron ${open === i ? 'open' : ''}`}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {open === i && <div className="faq-answer">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
