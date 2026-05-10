// src/components/About.jsx
import './About.css'
import aboutVideo from '../assets/about-video.mp4'
import graphIcon from '../assets/Icons/graph.svg'
import trashBinIcon from '../assets/Icons/trash-bin.svg'
import achievementIcon from '../assets/Icons/achievement.svg'
import digitalMarketingIcon from '../assets/Icons/digital-marketing.svg'

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
                <img src={graphIcon} alt="" />
              </span>
              <span>AI Sorting Accuracy</span>
            </li>
            <li>
              <span className="about-ops-icon" aria-hidden="true">
                <img src={trashBinIcon} alt="" />
              </span>
              <span>Smart Bin Capacity Alerts</span>
            </li>
            <li>
              <span className="about-ops-icon" aria-hidden="true">
                <img src={achievementIcon} alt="" />
              </span>
              <span>Rewards &amp; User Engagement</span>
            </li>
            <li>
              <span className="about-ops-icon" aria-hidden="true">
                <img src={digitalMarketingIcon} alt="" />
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
