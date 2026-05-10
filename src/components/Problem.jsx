import './Problem.css'
import garbageIcon from '../assets/Icons/garbage.svg'
import landfillIcon from '../assets/Icons/landfill.svg'
import recycleIcon from '../assets/Icons/recycle.svg'

function Problem() {
  const cards = [
    {
      value: '1.4 Million Tons',
      description: 'Non-hazardous waste generated annually',
      icon: <img src={garbageIcon} alt="" />
    },
    {
      value: '~90% of Waste',
      description: 'Sent to landfills without sorting',
      icon: <img src={landfillIcon} alt="" />
    },
    {
      value: 'Only 5–10% Recycled',
      description: 'Mostly through informal methods',
      icon: <img src={recycleIcon} alt="" />
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
