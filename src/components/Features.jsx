// src/components/Features.jsx
import './Features.css'
import featuresVideo from '../assets/features-bg.mp4'

function Features() {
  return (
    <section className="features-section" id="features" data-header-theme="dark">
      <video className="features-bg" autoPlay muted loop playsInline>
        <source src={featuresVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="features-overlay" />
      
      <div className="features-content">
        <h2 className="features-title">Key Features</h2>
        <div className="feature-grid">
          <FeatureCard
            title="AI Waste Classification"
            description="Classifies waste using advanced AI models trained on real-world data."
          />
          <FeatureCard
            title="Automated Sorting"
            description="Rotates bins automatically to match the classified waste type."
          />
          <FeatureCard
            title="Real-time Monitoring"
            description="Track bin fill levels and activity in real-time through the mobile app."
          />
          <FeatureCard
            title="Reward System"
            description="Encourages users to recycle through a point-based reward system."
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ title, description }) {
  return (
    <div className="feature-card">
      <div className="icon-circle" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Features
//