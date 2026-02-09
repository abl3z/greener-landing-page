import { useEffect, useRef, useState } from 'react'
import './Solution.css'
import featuresVideo from '../assets/features-bg.mp4'

function Solution() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      number: '01',
      title: 'Smart Recycling Intake',
      description: 'Users place waste through guided, smart intake points.',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M7 7h10v12H7z" />
          <path d="M9 7V5h6v2" />
          <path d="M9.5 10.5h5" />
          <path d="M10.5 13h3" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'AI Classification',
      description: 'AI identifies material types and routes each item correctly.',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12 4a6 6 0 0 1 6 6v2a6 6 0 1 1-12 0v-2a6 6 0 0 1 6-6z" />
          <path d="M9 10h6" />
          <path d="M9.5 13h5" />
          <path d="M12 18v2" />
          <path d="M8 20h8" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'User Rewards',
      description: 'Participants earn points and incentives for responsible sorting.',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12 21s-6-3.6-6-9a3 3 0 0 1 6-1 3 3 0 0 1 6 1c0 5.4-6 9-6 9z" />
          <path d="M10 12h4" />
          <path d="M12 10v4" />
        </svg>
      )
    },
    {
      number: '04',
      title: 'Analytics & Digital Ads',
      description: 'Dashboards connect impact metrics with measurable DOOH reach.',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M4 5h16v10H4z" />
          <path d="M8 19h8" />
          <path d="M12 15v4" />
          <path d="M7.5 11l2.5-2.5 2 2 3-3" />
        </svg>
      )
    }
  ]

  return (
    <section className="solution-section" id="solution" data-header-theme="dark" ref={sectionRef}>
      <video className="solution-bg" autoPlay muted loop playsInline>
        <source src={featuresVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="solution-overlay" />

      <div className="solution-shell">
        <h2 className={`solution-title ${isVisible ? 'is-visible' : ''}`}>Our Solution</h2>
        <div className="solution-underline" />

        <div className="solution-grid">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className={`solution-step ${isVisible ? 'is-visible' : ''}`}
              style={{ animationDelay: `${0.1 + index * 0.08}s` }}
            >
              <span className="solution-step-number" aria-hidden="true">
                {step.number}
              </span>
              <div className="solution-step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solution
