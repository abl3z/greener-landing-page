// src/components/About.jsx
import './About.css'
import aboutVideo from '../assets/about-video.mp4'

function About() {
  return (
    <section className="about-container" id="about" data-header-theme="dark">
      <video className="about-bg" autoPlay muted loop playsInline>
        <source src={aboutVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="about-layout">
        <div className="about-content">
          <h2 className="about-title">About Greener</h2>
          <p className="about-text">
            Greener is an AI-powered smart waste management system designed to automate
            waste classification, improve recycling efficiency, and promote sustainability
            through real-time monitoring and data analysis.
          </p>
        </div>

        <aside className="about-content about-ops">
          <h3 className="about-ops-title">Live Operations &amp; Impact</h3>
          <p className="about-ops-subtitle">
            Real-time insights across recycling, rewards, and advertising.
          </p>
          <ul className="about-ops-list">
            <li>
              <span className="about-ops-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false">
                  <path d="M4 14l4-4 3 3 6-6 3 3" />
                  <path d="M4 19h16" />
                </svg>
              </span>
              <span>AI Sorting Accuracy</span>
            </li>
            <li>
              <span className="about-ops-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false">
                  <path d="M12 5a4 4 0 0 0-4 4v3.5L6.5 15v1h11v-1L16 12.5V9a4 4 0 0 0-4-4z" />
                  <path d="M10.5 18a1.5 1.5 0 0 0 3 0" />
                  <path d="M16.8 6.2l1.4-1.4" />
                </svg>
              </span>
              <span>Smart Bin Capacity Alerts</span>
            </li>
            <li>
              <span className="about-ops-icon" aria-hidden="true">
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
              <span className="about-ops-icon" aria-hidden="true">
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
        </aside>
      </div>
    </section>
  )
}

export default About
//
