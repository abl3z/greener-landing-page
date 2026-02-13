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
      </div>
    </footer>
  )
}

export default Footer
