import Hero from './components/Hero'
import Testimonials from './components/Testimonials'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import PricingPage from './PricingPage'
import FAQ from './components/FAQ'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'

export default function Landing() {
  return (
    <>
      <Hero />
      <Testimonials />
      <Features />
      <HowItWorks />
      <PricingPage />
      <FAQ />
      <CTABanner />
      <Footer />
    </>
  )
}
