// src/components/Footer.jsx
import { useEffect, useRef, useState } from 'react'
import './Footer.css'
import logo from '../assets/greener-logo.png'

function Footer() {
  const footerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = footerRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.18 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <footer
      ref={footerRef}
      className={`footer ${isVisible ? 'is-visible' : ''}`}
      data-header-theme="dark"
    >
      <div className="footer-inner">
        <img src={logo} alt="Greener logo" className="footer-logo" />
        <p className="footer-tagline">Building smarter recycling systems for cleaner cities.</p>
        <div className="footer-contact-list">
          <div className="footer-email-wrap">
            <span className="footer-email-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                <rect x="3.5" y="6" width="17" height="12" rx="2.2" />
                <path d="M4.5 7l7.5 6 7.5-6" />
              </svg>
            </span>
            <a className="footer-email" href="mailto:info@greenerjo.com">
              info@greenerjo.com
            </a>
          </div>

          <div className="footer-email-wrap">
            <span className="footer-email-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                <path d="M8 4h8" />
                <rect x="7" y="2.8" width="10" height="18.4" rx="2.2" />
                <circle cx="12" cy="17.8" r="0.9" />
              </svg>
            </span>
            <a className="footer-email" href="tel:+962786660448">
              +962 786660448
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
