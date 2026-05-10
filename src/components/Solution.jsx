import { useEffect, useRef, useState } from 'react'
import './Solution.css'
import featuresVideo from '../assets/features-bg.mp4'
import trashBinIcon from '../assets/Icons/trash-bin.svg'
import aiModelIcon from '../assets/Icons/ai-model.svg'
import benefitIcon from '../assets/Icons/benefit.svg'
import digitalMarketingIcon from '../assets/Icons/digital-marketing.svg'

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
      icon: <img src={trashBinIcon} alt="" />
    },
    {
      number: '02',
      title: 'AI Classification',
      description: 'AI identifies material types and routes each item correctly.',
      icon: <img src={aiModelIcon} alt="" />
    },
    {
      number: '03',
      title: 'User Rewards',
      description: 'Participants earn points and incentives for responsible sorting.',
      icon: <img src={benefitIcon} alt="" />
    },
    {
      number: '04',
      title: 'Analytics & Digital Ads',
      description: 'Dashboards connect impact metrics with measurable DOOH reach.',
      icon: <img src={digitalMarketingIcon} alt="" />
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
