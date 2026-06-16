import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './landing.css'

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
const nextStep: Record<string, Step> = { q0: 'q1', q1: 'q2', q2: 'email' }

export default function EstimatePage() {
  const navigate = useNavigate()
  const [step, setStep] = useState<Step>('q0')
  const [answers, setAnswers] = useState<number[]>([])
  const [email, setEmail] = useState('')
  const [selected, setSelected] = useState<number | null>(null)

  const qIndex = step === 'q0' ? 0 : step === 'q1' ? 1 : step === 'q2' ? 2 : -1
  const currentQ = qIndex >= 0 ? questions[qIndex] : null

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
    <div className="ep-root">
      {/* Logo */}
      <div className="ep-topbar">
        <button className="ep-logo" onClick={() => navigate('/')}>
          Venter
        </button>
      </div>


      <div className="ep-content">

        {/* ── Questions ── */}
        {currentQ && (
          <div className="ep-fade-in">
            <div className="ep-progress">
              <div className="ep-progress-track">
                <div className="ep-progress-fill" style={{ width: `${(qIndex / 3) * 100}%` }} />
              </div>
              <span className="ep-progress-label">{qIndex + 1} of 3</span>
            </div>

            <h1 className="ep-q">{currentQ.q}</h1>

            <div className="ep-options">
              {currentQ.options.map((opt, i) => (
                <button
                  key={opt}
                  className={`ep-option ${selected === i ? 'ep-option-selected' : ''}`}
                  onClick={() => {
                    setSelected(i)
                    setTimeout(() => choose(currentQ.multipliers[i]), 180)
                  }}
                >
                  <span className="ep-option-letter">{String.fromCharCode(65 + i)}</span>
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── Email ── */}
        {step === 'email' && (
          <div className="ep-fade-in">
            <div className="ep-check-badge">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Almost done
            </div>

            <h1 className="ep-headline">
              Drop your email and we'll show you<br />
              exactly how much you can make.
            </h1>

            <p className="ep-sub">Plus we'll send your first free picks today.</p>

            <form onSubmit={submitEmail} className="ep-email-form">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="ep-input"
                autoFocus
              />
              <button type="submit" className="ep-btn">Show me the money →</button>
            </form>

            <p className="ep-fine">No spam. Unsubscribe anytime.</p>
          </div>
        )}

        {/* ── Result ── */}
        {step === 'result' && profit && (
          <div className="ep-fade-in">
            <div className="ep-check-badge">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Based on your answers
            </div>

            <h1 className="ep-headline">
              Based on your trades, bankroll,<br />and experience, you can earn:
            </h1>

            <div className="ep-result-line">
              <span className="ep-result-amount">${profit.monthly.toLocaleString()}</span>
              <span className="ep-result-inline-text">
                <span className="ep-result-green">in estimated monthly profit</span> from trading mispriced prediction markets
              </span>
            </div>

            <div className="ep-platform-logos">
              <span className="ep-platform-pill">Kalshi</span>
              <span className="ep-platform-pill">Polymarket</span>
            </div>

            <p className="ep-plus-line">
              Plus, make <span className="ep-result-green">${profit.annual.toLocaleString()}/year</span> with consistent Arbitrage and Positive EV trades
            </p>

            <a href="/pricing" className="ep-btn" style={{ display: 'inline-block' }}>Try for free</a>

            <div className="ep-links">
              <button className="ep-link" onClick={() => navigate('/#tools')}>Learn how Positive EV works</button>
              <button className="ep-link" onClick={() => navigate('/#tools')}>Learn how Arbitrage works</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
