// src/components/Impact.jsx
import './Impact.css'
import impactVideo from '../assets/impact-video.mp4'
import { useState } from 'react'

function Impact() {
  const [formData, setFormData] = useState({ name: '', email: '', organization: '', message: '' })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
  e.preventDefault()
  console.log('Submitted:', formData)
  alert(`Thanks for reaching out! We'll be in touch.`)
  setFormData({ name: '', email: '', organization: '', message: '' })
}

  return (
    <section className="impact-container" id="impact">
      <video className="impact-video" autoPlay muted loop playsInline>
        <source src={impactVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="impact-overlay">
        <div className="impact-card">
          <h2 className="impact-title">Be Part of the Greener Impact</h2>
          <p className="impact-description">
            We’re building the future of sustainable cities. Whether you’re a student, an organization,
            or someone who cares — let us know.
          </p>
          <form onSubmit={handleSubmit} className="impact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="organization"
              placeholder="Organization (optional)"
              value={formData.organization}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit">Join the Movement</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Impact
