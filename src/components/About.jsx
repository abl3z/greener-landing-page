// src/components/About.jsx
import './About.css'
import aboutVideo from '../assets/about-video.mp4'

function About() {
  return (
    <section className="about-container" id="about">
      <video className="about-bg" autoPlay muted loop playsInline>
        <source src={aboutVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="about-content">
        <h2 className="about-title">About Greener</h2>
        <p className="about-text">
          Greener is an AI-powered smart waste management system designed to automate
          waste classification, improve recycling efficiency, and promote sustainability
          through real-time monitoring and data analysis.
        </p>
      </div>
    </section>
  )
}

export default About
