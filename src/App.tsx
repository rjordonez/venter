import { Routes, Route } from 'react-router-dom'
import Landing from './landing/index'
import AppShell from './app/index'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/app/*" element={<AppShell />} />
    </Routes>
  )
}
