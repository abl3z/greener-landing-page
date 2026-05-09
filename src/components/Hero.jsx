// src/components/Hero.jsx
import './Hero.css'

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
                  <svg viewBox="0 0 24 24" focusable="false">
                    <path d="M4 14l4-4 3 3 6-6 3 3" />
                    <path d="M4 19h16" />
                  </svg>
                </span>
                <span>AI Sorting Accuracy</span>
              </li>
              <li>
                <span className="hero-metric-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false">
                    <path d="M12 5a4 4 0 0 0-4 4v3.5L6.5 15v1h11v-1L16 12.5V9a4 4 0 0 0-4-4z" />
                    <path d="M10.5 18a1.5 1.5 0 0 0 3 0" />
                    <path d="M16.8 6.2l1.4-1.4" />
                  </svg>
                </span>
                <span>Smart Bin Capacity Alerts</span>
              </li>
              <li>
                <span className="hero-metric-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false">
                    <path d="M7 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    <path d="M17 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                    <path d="M3.5 19a3.5 3.5 0 0 1 7 0" />
                    <path d="M13 19a4 4 0 0 1 8 0" />
                  </svg>
                </span>
                <span>Rewards &amp; User Engagement</span>
              </li>
              <li>
                <span className="hero-metric-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false">
                    <rect x="4" y="5" width="16" height="12" rx="2" />
                    <path d="M8 20h8" />
                    <path d="M9 9h6" />
                    <path d="M9 12h4" />
                  </svg>
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
