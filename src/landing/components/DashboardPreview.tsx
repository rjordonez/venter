const rows = [
  { market: 'Fed cuts rates in July 2025?', kalshi: '41¢', poly: '37¢', ev: '+9.1%', type: 'ARB', tag: 'Economics' },
  { market: 'Bitcoin above $120k by Aug?', kalshi: '28¢', poly: '33¢', ev: '+6.4%', type: '+EV', tag: 'Crypto' },
  { market: 'Trump signs executive order this week?', kalshi: '62¢', poly: '57¢', ev: '+7.8%', type: 'ARB', tag: 'Politics' },
]

export default function DashboardPreview() {
  return (
    <div className="dashboard-container">
    <div className="dashboard-wrap">
      {/* Browser chrome */}
      <div className="dashboard-chrome">
        <div className="chrome-dots">
          <span /><span /><span />
        </div>
        <div className="chrome-bar">app.venter.io/scanner</div>
        <div className="chrome-spacer" />
      </div>

      {/* Dashboard body */}
      <div className="dashboard-body">
        {/* Sidebar */}
        <div className="dash-sidebar">
          {['Scanner', 'Arbitrage', '+EV Feed', 'Portfolio', 'Alerts', 'Promos'].map((item, i) => (
            <div key={item} className={`dash-nav-item ${i === 0 ? 'active' : ''}`}>
              <span className="dash-nav-icon">
                {['📡','⚖️','🎯','📊','🔔','💰'][i]}
              </span>
              {item}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="dash-main">
          <div className="dash-topbar">
            <div>
              <div className="dash-title">Market Scanner</div>
              <div className="dash-subtitle">247 live opportunities across 15 platforms</div>
            </div>
            <div className="dash-filters">
              <span className="dash-filter active">All</span>
              <span className="dash-filter">ARB</span>
              <span className="dash-filter">+EV</span>
            </div>
          </div>

          <table className="dash-table">
            <thead>
              <tr>
                <th>Market</th>
                <th>Kalshi</th>
                <th>Polymarket</th>
                <th>Edge</th>
                <th>Type</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i}>
                  <td>
                    <div className="dash-market-name">{r.market}</div>
                    <span className="dash-tag">{r.tag}</span>
                  </td>
                  <td className="dash-price">{r.kalshi}</td>
                  <td className="dash-price">{r.poly}</td>
                  <td className="dash-ev">{r.ev}</td>
                  <td>
                    <span className={`dash-type-badge ${r.type === 'ARB' ? 'arb' : 'ev'}`}>
                      {r.type}
                    </span>
                  </td>
                  <td>
                    <button className="dash-bet-btn">Bet →</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  )
}
