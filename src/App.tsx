import { Routes, Route } from 'react-router-dom'
import LandingLayout from './landing/LandingLayout'
import Landing from './landing/index'
import PricingPage from './landing/PricingPage'
import EstimatePage from './landing/EstimatePage'
import FeaturePage from './landing/FeaturePage'
import CalculatorsPage from './landing/CalculatorsPage'
import AppShell from './app/index'

export default function App() {
  return (
    <Routes>
      <Route element={<LandingLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/features/:id" element={<FeaturePage />} />
        <Route path="/calculators" element={<CalculatorsPage />} />
      </Route>
      <Route path="/estimate" element={<EstimatePage />} />
      <Route path="/app/*" element={<AppShell />} />
    </Routes>
  )
}
