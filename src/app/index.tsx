export default function AppShell() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#06070f',
      color: '#f9fafb',
      fontFamily: 'system-ui, sans-serif',
      flexDirection: 'column',
      gap: '1rem',
    }}>
      <div style={{
        width: 40, height: 40,
        background: '#6366f1',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
        fontWeight: 800,
      }}>V</div>
      <h2 style={{ margin: 0, fontWeight: 700 }}>Venter App</h2>
      <p style={{ color: '#6b7280', margin: 0, fontSize: '0.9rem' }}>
        Coming soon — app internals go here.
      </p>
      <a href="/" style={{ color: '#818cf8', fontSize: '0.875rem' }}>← Back to landing</a>
    </div>
  )
}
