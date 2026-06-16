import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import './landing.css'

export default function LandingLayout() {
  return (
    <div className="landing">
      <Navbar />
      <Outlet />
    </div>
  )
}
