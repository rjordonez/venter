import { useState, useEffect } from 'react'

const questions = [
  {
    q: 'How many trades can you place per week?',
    options: ['1–3 trades', '4–10 trades', '10–20 trades', '20+ trades'],
    multipliers: [1, 2.8, 5.5, 10],
  },
  {
    q: "What's your starting bankroll?",
    options: ['Under $500', '$500 – $2k', '$2k – $10k', '$10k+'],
    multipliers: [1, 3.2, 9, 22],
  },
  {
    q: 'Experience with prediction markets?',
    options: ['Complete beginner', 'Placed a few bets', 'Active trader', 'Full-time trader'],
    multipliers: [1, 1.2, 1.5, 2],
  },
]

function calcProfit(answers: number[]) {
  const base = 48
  const monthly = Math.round(base * answers[0] * answers[1] * answers[2])
  return { monthly, annual: monthly * 12 }
}

type Step = 'q0' | 'q1' | 'q2' | 'email' | 'result'

interface Props {
  onClose: () => void
}

export default function ProfitModal({ onClose }: Props) {
  const [step, setStep] = useState<Step>('q0')
  const [answers, setAnswers] = useState<number[]>([])
  const [email, setEmail] = useState('')
  const [selected, setSelected] = useState<number | null>(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const qIndex = step === 'q0' ? 0 : step === 'q1' ? 1 : step === 'q2' ? 2 : -1
  const currentQ = qIndex >= 0 ? questions[qIndex] : null
  const nextStep: Record<string, Step> = { q0: 'q1', q1: 'q2', q2: 'email' }

  function choose(multiplier: number) {
    setSelected(null)
    setAnswers(prev => [...prev, multiplier])
    setStep(nextStep[step] as Step)
  }

  function submitEmail(e: React.FormEvent) {
    e.preventDefault()
    setStep('result')
  }

  const profit = step === 'result' ? calcProfit(answers) : null

  return (
    <div className="modal-backdrop" onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <div className="modal-box">
        {/* Close */}
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Question steps */}
        {currentQ && (
          <>
            <div className="modal-step-bar">
              {[0, 1, 2].map(n => (
                <div key={n} className={`modal-step-dot ${n <= qIndex ? 'active' : ''}`} />
              ))}
              <span className="modal-step-label">Step {qIndex + 1} of 3</span>
            </div>
            <h2 className="modal-q-title">{currentQ.q}</h2>
            <div className="modal-options">
              {currentQ.options.map((opt, i) => (
                <button
                  key={opt}
                  className={`modal-option ${selected === i ? 'selected' : ''}`}
                  onClick={() => {
                    setSelected(i)
                    setTimeout(() => choose(currentQ.multipliers[i]), 180)
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>
          </>
        )}

        {/* Email step */}
        {step === 'email' && (
          <>
            <div className="modal-email-icon">✉️</div>
            <h2 className="modal-q-title">One last thing</h2>
            <p className="modal-email-sub">
              Enter your email and we'll show you exactly how much you can make, plus send your first free picks today.
            </p>
            <form onSubmit={submitEmail} style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="modal-email-input"
                autoFocus
              />
              <button type="submit" className="btn-primary" style={{ padding: '0.8rem', fontSize: '0.9375rem' }}>
                Show me the money →
              </button>
            </form>
            <p className="modal-disclaimer">No spam. Unsubscribe anytime.</p>
          </>
        )}

        {/* Result step */}
        {step === 'result' && profit && (
          <>
            <div className="modal-result-badge">Your personalized estimate</div>
            <div className="modal-result-nums">
              <div className="modal-result-block">
                <span className="modal-result-num">${profit.monthly.toLocaleString()}</span>
                <span className="modal-result-period">per month</span>
              </div>
              <div className="modal-result-divider" />
              <div className="modal-result-block">
                <span className="modal-result-num modal-result-num-lg">${profit.annual.toLocaleString()}</span>
                <span className="modal-result-period">per year</span>
              </div>
            </div>
            <p className="modal-disclaimer" style={{ marginBottom: '1.25rem' }}>
              Based on a +6.2% avg. edge across verified Venter picks, scaled to your inputs. Individual results vary.
            </p>
            <a href="/app" className="btn-primary" style={{ display: 'block', textAlign: 'center', padding: '0.8rem', fontSize: '0.9375rem' }}>
              Start free trial →
            </a>
            <button className="btn-ghost" style={{ width: '100%', textAlign: 'center', marginTop: '0.5rem' }} onClick={onClose}>
              ← Back to home
            </button>
          </>
        )}
      </div>
    </div>
  )
}
