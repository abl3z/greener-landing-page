import './Problem.css'

function Problem() {
  const cards = [
    {
      value: '1.4 Million Tons',
      description: 'Non-hazardous waste generated annually',
      icon: (
        <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
          <path d="M10 48h44" />
          <path d="M14 45l6-8h8l5 8" />
          <path d="M31 45l4-10h8l5 10" />
          <path d="M22 36l4-4 4 4" />
          <path d="M39 33h8l3 4" />
          <path d="M12 45h40" />
        </svg>
      )
    },
    {
      value: '~90% of Waste',
      description: 'Sent to landfills without sorting',
      icon: (
        <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
          <path d="M8 47h48" />
          <path d="M12 47l8-7h18l8 7" />
          <path d="M10 34h20l3 6H10z" />
          <path d="M30 34h6" />
          <path d="M39 26h10v9H39z" />
          <path d="M49 31l5 5" />
          <circle cx="15" cy="42" r="2.5" />
          <circle cx="28" cy="42" r="2.5" />
        </svg>
      )
    },
    {
      value: 'Only 5–10% Recycled',
      description: 'Mostly through informal methods',
      icon: (
        <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
          <path d="M28 14l8-4 8 12" />
          <path d="M44 22l-5 1 3-4" />
          <path d="M48 33l-8 14H24" />
          <path d="M24 47l3-4-5 1" />
          <path d="M20 43L14 31l8-14" />
          <path d="M22 17l2 5-5-2" />
          <path d="M46 40l4 4" />
        </svg>
      )
    }
  ]

  return (
    <section className="problem-section" id="problem" data-header-theme="dark">
      <div className="problem-shell">
        <h2 className="problem-title problem-reveal problem-reveal-1">
          The Waste Management Crisis
        </h2>

        <div className="problem-grid">
          {cards.map((card, index) => (
            <article
              key={card.value}
              className={`problem-card problem-reveal problem-reveal-${index + 2}`}
            >
              <div className="problem-icon">{card.icon}</div>
              <h3>{card.value}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>

        <p className="problem-context problem-reveal problem-reveal-5">
          Data example: Amman, Jordan
        </p>

        <div className="problem-insight problem-reveal problem-reveal-6">
          Manual sorting is inefficient, waste streams are mixed, and institutions lack
          real-time data to act.
        </div>
      </div>
    </section>
  )
}

export default Problem
