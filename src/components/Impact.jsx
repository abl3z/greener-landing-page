// src/components/Impact.jsx
import './Impact.css'
import impactVideo from '../assets/impact-video.mp4'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function Impact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' })
  const [isSending, setIsSending] = useState(false)

  const validateField = (fieldName, fieldValue) => {
    const value = fieldValue.trim()

    if (fieldName === 'name' && !value) return 'Name is required'
    if (fieldName === 'email') {
      if (!value) return 'Email is required'
      if (!EMAIL_REGEX.test(value)) return 'Please enter a valid email address'
    }
    if (fieldName === 'message' && !value) return 'Message is required'
    return ''
  }

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(previous => ({ ...previous, [name]: value }))

    setErrors(previous => {
      if (!previous[name]) return previous
      return { ...previous, [name]: validateField(name, value) }
    })

    if (statusMessage.text) {
      setStatusMessage({ type: '', text: '' })
    }
  }

  const validate = () => {
    const newErrors = {}
    ;['name', 'email', 'message'].forEach(fieldName => {
      const fieldError = validateField(fieldName, formData[fieldName])
      if (fieldError) {
        newErrors[fieldName] = fieldError
      }
    })
    return newErrors
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsSending(true)
    setStatusMessage({ type: '', text: '' })

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatusMessage({
        type: 'error',
        text: 'We could not send your message right now. Please try again in a moment.'
      })
      setIsSending(false)
      return
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: 'info@greenerjo.com',
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          organization: formData.organization.trim() || 'Not provided',
          message: formData.message.trim(),
          reply_to: formData.email.trim()
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY
        }
      )

      setStatusMessage({
        type: 'success',
        text: 'Thank you. Your message has been sent successfully.'
      })
      setFormData({ name: '', email: '', organization: '', message: '' })
      setErrors({})
    } catch (error) {
      console.error('Contact submission failed:', error)
      setStatusMessage({
        type: 'error',
        text: 'We could not send your message right now. Please try again in a moment.'
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section className="impact-container" id="contact" data-header-theme="dark">
      <video className="impact-video" autoPlay muted loop playsInline>
        <source src={impactVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="impact-overlay">
        <div className="impact-card">
          <h2 className="impact-title">Be Part of the Greener Impact</h2>
          <p className="impact-description">
            If you care about cleaner communities, we would love to work with you and turn shared responsibility into measurable impact.
          </p>

          {statusMessage.text && (
            <div className={`impact-message ${statusMessage.type}`}>
              {statusMessage.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="impact-form" noValidate>
            <div className={`form-group floating-field ${formData.name ? 'has-value' : ''}`}>
              <label htmlFor="contact-name">
                Your Name <span className="required-asterisk">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder=" "
                value={formData.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'contact-name-error' : undefined}
              />
              {errors.name && <span className="input-error" id="contact-name-error">{errors.name}</span>}
            </div>

            <div className={`form-group floating-field ${formData.email ? 'has-value' : ''}`}>
              <label htmlFor="contact-email">
                Your Email <span className="required-asterisk">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder=" "
                value={formData.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'contact-email-note contact-email-error' : 'contact-email-note'}
              />
              <p className="field-note" id="contact-email-note">
                If you're an organization, please use your official company email.
              </p>
              {errors.email && <span className="input-error" id="contact-email-error">{errors.email}</span>}
            </div>

            <div className={`form-group floating-field ${formData.organization ? 'has-value' : ''}`}>
              <label htmlFor="contact-organization">Organization Name (Optional)</label>
              <input
                id="contact-organization"
                type="text"
                name="organization"
                placeholder=" "
                value={formData.organization}
                onChange={handleChange}
                aria-describedby="contact-organization-note"
              />
              <p className="field-note" id="contact-organization-note">
                Organizations: Please use your company name (e.g. EcoPlast Inc.)
              </p>
            </div>

            <div className={`form-group floating-field ${formData.message ? 'has-value' : ''}`}>
              <label htmlFor="contact-message">
                Your Message <span className="required-asterisk">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder=" "
                rows="4"
                value={formData.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'contact-message-error' : undefined}
              ></textarea>
              {errors.message && <span className="input-error" id="contact-message-error">{errors.message}</span>}
            </div>

            <button type="submit" disabled={isSending} aria-busy={isSending}>
              {isSending ? (
                <span className="submit-loading">
                  <span className="submit-spinner" aria-hidden="true" />
                  Sending...
                </span>
              ) : (
                'Join the Movement'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Impact
