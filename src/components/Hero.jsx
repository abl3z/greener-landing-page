// src/components/Hero.jsx
import './Hero.css'
import logo from '../assets/greener-logo.png'

function Hero() {
  return (
    <header className="hero-container" id="home">
      <nav className="hero-header">
        <a href="#home">
          <img src={logo} alt="Greener Logo" className="hero-logo" />
        </a>
        <a href="mailto:gwsgreener@gmail.com" className="hero-contact">Contact Us</a>
      </nav>

      <video autoPlay muted loop playsInline className="hero-bg">
        <source src="/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-content">
        <h1 className="animate-text">
          Greener – Smart Waste <br className="mobile-break" /> Management System
        </h1>
        <p className="animate-sub">
          Meet GWS-360: AI-Powered Waste Classification & Smart Monitoring.
        </p>
        <a href="#about" className="cta">About Greener</a>
      </div>
    </header>
  )
}

export default Hero
