// src/components/Impact.jsx
import './Impact.css'
import impactVideo from '../assets/impact-video.mp4'
import { useState } from 'react'
import { database, ref, push } from "../firebase/firebaseConfig"

function Impact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleSubmit = e => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    const formRef = ref(database, 'impact_requests')
    push(formRef, formData)
      .then(() => {
        setStatusMessage({
          type: 'success',
          text: '✅ Thank you! Your message has been sent.'
        })
        setFormData({ name: '', email: '', organization: '', message: '' })
        setErrors({})
      })
      .catch(error => {
        console.error('❌ Submission error:', error)
        setStatusMessage({
          type: 'error',
          text: 'Something went wrong. Please try again later.'
        })
      })
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
            Whether you're a student, an organization, or someone who cares — tell us how you'd like to contribute to a greener future.
          </p>

          {statusMessage.text && (
            <div className={`impact-message ${statusMessage.type}`}>
              {statusMessage.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="impact-form" noValidate>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="input-error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              <p className="field-note">
                * If you're an organization, please use your official company email
              </p>
              {errors.email && <span className="input-error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <input
                type="text"
                name="organization"
                placeholder="Organization Name (Optional)"
                value={formData.organization}
                onChange={handleChange}
              />
              <p className="field-note">
                * Organizations: Please use your company name (e.g. EcoPlast Inc.)
              </p>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <span className="input-error">{errors.message}</span>}
            </div>

            <button type="submit">Join the Movement</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Impact
