// src/components/Hero.jsx
import './Hero.css'
import { smoothScrollToId } from '../utils/smoothScroll'

function Hero() {
  const scrollToId = sectionId => {
    smoothScrollToId(sectionId)
  }

  return (
    <section className="hero-section" id="home" data-header-theme="dark">
      <video autoPlay muted loop playsInline className="hero-bg">
        <source src="/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay" />

      <div className="hero-shell">
        <div className="hero-main">
          <p className="hero-kicker hero-fade hero-fade-1">SMART RECYCLING PLATFORM</p>
          <h1 className="hero-title hero-fade hero-fade-2">
            Greener - Smart Recycling, Powered by AI
          </h1>
          <p className="hero-description hero-fade hero-fade-3">
            Greener automates waste sorting, rewards users, enables real-time monitoring, and supports sustainable digital ads in one calm system.
          </p>
          <div className="hero-actions hero-fade hero-fade-4">
            <button className="hero-btn hero-btn-primary" onClick={() => scrollToId('contact')}>
              Schedule a Demo
            </button>
            <button className="hero-btn hero-btn-secondary" onClick={() => scrollToId('contact')}>
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
