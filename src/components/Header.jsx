import { useEffect, useRef, useState } from 'react'
import './Header.css'
import defaultLogo from '../assets/greener-logo.png'
import scrolledLogo from '../assets/G-logo.png'
import { smoothScrollToId } from '../utils/smoothScroll'

const HEADER_LOGOS = {
  default: defaultLogo,
  scrolled: scrolledLogo
}

function Header() {
  const headerRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const menuToggleRef = useRef(null)
  const wasMenuOpenRef = useRef(false)
  const [theme, setTheme] = useState('dark')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [menuTop, setMenuTop] = useState(76)

  useEffect(() => {
    let frameId = null

    const updateTheme = () => {
      frameId = null
      // Toggle compact header state after user starts scrolling.
      setIsScrolled(window.scrollY > 24)
      const sampleX = Math.floor(window.innerWidth / 2)
      const sampleY = 92
      const sampleNode = document.elementFromPoint(sampleX, sampleY)
      const themedSection = sampleNode?.closest?.('[data-header-theme]')
      const nextTheme = themedSection?.getAttribute('data-header-theme') || 'dark'
      setTheme(nextTheme === 'light' ? 'light' : 'dark')
    }

    const queueUpdate = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateTheme)
      }
    }

    updateTheme()
    window.addEventListener('scroll', queueUpdate, { passive: true })
    window.addEventListener('resize', queueUpdate)

    return () => {
      window.removeEventListener('scroll', queueUpdate)
      window.removeEventListener('resize', queueUpdate)
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 860px)')
    const handleMedia = event => {
      setIsMobile(event.matches)
      if (!event.matches) {
        setIsMenuOpen(false)
      }
    }

    handleMedia(mediaQuery)
    mediaQuery.addEventListener('change', handleMedia)
    return () => mediaQuery.removeEventListener('change', handleMedia)
  }, [])

  useEffect(() => {
    if (!isMobile || !isMenuOpen) return

    const updateMenuTop = () => {
      if (!headerRef.current) return
      setMenuTop(Math.ceil(headerRef.current.getBoundingClientRect().bottom))
    }

    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        return
      }

      if (event.key !== 'Tab' || !mobileMenuRef.current) return
      const focusable = mobileMenuRef.current.querySelectorAll(
        'button, [href], [tabindex]:not([tabindex="-1"])'
      )
      if (!focusable.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.body.style.overflow = 'hidden'
    updateMenuTop()
    window.addEventListener('resize', updateMenuTop)
    window.addEventListener('scroll', updateMenuTop, { passive: true })
    document.addEventListener('keydown', handleKeyDown)

    const initialFocus = mobileMenuRef.current?.querySelector('button')
    initialFocus?.focus()

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('resize', updateMenuTop)
      window.removeEventListener('scroll', updateMenuTop)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen, isMobile])

  useEffect(() => {
    if (wasMenuOpenRef.current && !isMenuOpen) {
      menuToggleRef.current?.focus()
    }
    wasMenuOpenRef.current = isMenuOpen
  }, [isMenuOpen])

  const scrollToId = sectionId => {
    setIsMenuOpen(false)
    smoothScrollToId(sectionId)
  }

  const navItems = [
    { label: 'About', targetId: 'about' },
    { label: 'Problem', targetId: 'problem' },
    { label: 'Solution', targetId: 'solution' }
  ]

  return (
    <nav
      ref={headerRef}
      className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}
      data-theme={theme}
      aria-label="Primary"
    >
      <button className="header-logo-btn" onClick={() => scrollToId('home')} aria-label="Back to top">
        {/* Soft crossfade swap: full logo at top, icon-only logo after scroll. */}
        <span className="header-logo-stack" aria-hidden="true">
          <img
            src={HEADER_LOGOS.default}
            alt=""
            className={`header-logo header-logo-default ${isScrolled ? 'is-hidden' : ''}`}
          />
          <img
            src={HEADER_LOGOS.scrolled}
            alt=""
            className={`header-logo header-logo-scrolled ${isScrolled ? 'is-visible' : ''}`}
          />
        </span>
        <span className="sr-only">Greener</span>
      </button>

      <div className="header-right">
        <ul className="header-nav" aria-label="Section links">
          {navItems.map(item => (
            <li key={item.label}>
              <button
                className="header-nav-link"
                onClick={() => scrollToId(item.targetId)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="header-contact-btn"
          onClick={() => scrollToId('contact')}
        >
          Contact Us
        </button>
      </div>

      {isMobile && (
        <button
          ref={menuToggleRef}
          className={`header-menu-toggle ${isMenuOpen ? 'is-open' : ''}`}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu-panel"
          onClick={() => setIsMenuOpen(previous => !previous)}
        >
          <span />
          <span />
          <span />
        </button>
      )}

      {isMobile && (
        <div
          className={`header-mobile-overlay ${isMenuOpen ? 'is-open' : ''}`}
          aria-hidden={!isMenuOpen}
          onMouseDown={() => setIsMenuOpen(false)}
        >
          <div className="header-mobile-backdrop" />
          <div
            id="mobile-menu-panel"
            ref={mobileMenuRef}
            className={`header-mobile-panel ${isMenuOpen ? 'is-open' : ''}`}
            style={{ top: `${menuTop}px` }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            onMouseDown={event => event.stopPropagation()}
          >
            <ul className="header-mobile-nav" aria-label="Mobile section links">
              {navItems.map((item, index) => (
                <li key={item.label} style={{ animationDelay: `${index * 40}ms` }}>
                  <button className="header-mobile-link" onClick={() => scrollToId(item.targetId)}>
                    {item.label}
                  </button>
                </li>
              ))}
              <li style={{ animationDelay: '120ms' }}>
                <button className="header-mobile-contact" onClick={() => scrollToId('contact')}>
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Header
