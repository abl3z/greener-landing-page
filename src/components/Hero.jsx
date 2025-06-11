// src/components/Hero.jsx
import './Hero.css'
import logo from '../assets/greener-logo.png'

function Hero() {
  return (
    <header className="hero-container" id="home">
      <nav className="hero-header">
        <button className="logo-btn" onClick={() => {
          const heroSection = document.getElementById('home');
          if (heroSection) {
            heroSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}>
          <img src={logo} alt="Greener Logo" className="hero-logo" />
        </button>

       <button
  className="hero-contact"
  onClick={() => {
    const impactSection = document.getElementById('impact');
    if (impactSection) {
      impactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }}
>
  Contact Us
</button>




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
        <button className="cta" onClick={() => {
          const aboutSection = document.getElementById('about')
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' })
          }
        }}>
          About Greener
        </button>
      </div>
    </header>
  )
}

export default Hero
