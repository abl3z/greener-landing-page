// src/components/Hero.jsx
import './Hero.css'
import graphIcon from '../assets/Icons/graph.svg'
import trashBinIcon from '../assets/Icons/trash-bin.svg'
import achievementIcon from '../assets/Icons/achievement.svg'
import digitalMarketingIcon from '../assets/Icons/digital-marketing.svg'

function Hero() {
  const scrollToId = sectionId => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
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
            <button className="hero-btn hero-btn-secondary" onClick={() => scrollToId('impact')}>
              Partner With Us
            </button>
          </div>
        </div>

        <aside className="hero-visual">
          <div className="hero-visual-card hero-fade hero-fade-5">
            <h2>Live Operations &amp; Impact</h2>
            <p>Real-time insights across recycling, rewards, and advertising.</p>
            <ul className="hero-metrics">
              <li>
                <span className="hero-metric-icon" aria-hidden="true">
                  <img src={graphIcon} alt="" />
                </span>
                <span>AI Sorting Accuracy</span>
              </li>
              <li>
                <span className="hero-metric-icon" aria-hidden="true">
                  <img src={trashBinIcon} alt="" />
                </span>
                <span>Smart Bin Capacity Alerts</span>
              </li>
              <li>
                <span className="hero-metric-icon" aria-hidden="true">
                  <img src={achievementIcon} alt="" />
                </span>
                <span>Rewards &amp; User Engagement</span>
              </li>
              <li>
                <span className="hero-metric-icon" aria-hidden="true">
                  <img src={digitalMarketingIcon} alt="" />
                </span>
                <span>Measurable Digital Ads (DOOH)</span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Hero
