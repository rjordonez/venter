import { useState } from 'react'

const faqs = [
  {
    q: 'How does Venter actually work?',
    a: 'Venter continuously scans prediction market platforms and compares contract prices against our probability models and cross-platform prices. When a market is mispriced we surface it in your dashboard with the expected value clearly shown.',
  },
  {
    q: 'Which prediction market platforms do you support?',
    a: "Currently we support Kalshi, Polymarket, Manifold Markets, PredictIt, Metaculus, and Limitless. We're adding new platforms every quarter. You only need accounts on the platforms you want to trade.",
  },
  {
    q: 'How much time does this take per day?',
    a: "Most users spend 15-30 minutes per day. Our alerts notify you when high-edge markets open. You review the opportunity, decide to take it, and move on.",
  },
  {
    q: 'Will I make money every single day?',
    a: "No, and anyone who says otherwise is lying. Individual markets are uncertain. What Venter guarantees is a mathematical edge: over enough trades, positive expected value adds up to real profit.",
  },
  {
    q: "How do I know this isn't a scam?",
    a: 'Our results are verified by Pikkit, an independent third-party bet tracker. We publish real user P&L, not cherry-picked screenshots. We also offer a 7-day free trial with no credit card required.',
  },
  {
    q: 'What if I want to cancel?',
    a: "Cancel any time, no questions asked. We don't lock you into annual plans or charge cancellation fees. Your subscription stops at the end of your billing period.",
  },
]

const links = [
  { img: '/discord.png', label: 'Discord Community', arrow: true },
  { img: '/x-logo.jpg',  label: 'X / Twitter',       arrow: true },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="section" id="faq">
      <div className="section-inner">
        <div className="faq-two-col">

          {/* Left */}
          <div className="faq-left">
            <div className="faq-left-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke="#818cf8" strokeWidth="1.5"/>
                <path d="M10 9v5M10 6.5v.5" stroke="#818cf8" strokeWidth="1.75" strokeLinecap="round"/>
              </svg>
            </div>
            <h2 className="faq-left-heading">Sound too good<br />to be true?<br />Let us answer<br />your questions.</h2>
            <div className="faq-support-links">
              {links.map(l => (
                <a key={l.label} href="#" className="faq-support-link">
                  {l.img && <img src={l.img} alt={l.label} className="faq-support-logo" />}
                  {l.label}
                  {l.arrow && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ marginLeft: 4 }}>
                      <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div key={i} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <svg
                    className={`faq-chevron ${open === i ? 'open' : ''}`}
                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                  >
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {f.q}
                </button>
                {open === i && <div className="faq-answer">{f.a}</div>}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
