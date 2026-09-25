import { serviceHub } from '../data'
import './ServiceHub.css'

// Line icons (24x24, stroke = currentColor)
const icons = {
  sap: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 12.5l9 5 9-5" />
      <path d="M3 17l9 5 9-5" />
    </>
  ),
  cloud: (
    <>
      <path d="M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.2 9.2 4.5 4.5 0 0 0 7 18z" />
      <path d="M9 21h6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  ai: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M10 10h4v4h-4z" />
      <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20h16" />
      <path d="M7 16v-5M12 16V6M17 16v-8" />
    </>
  ),
  headset: (
    <>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <path d="M4 14h3v5H5a1 1 0 0 1-1-1v-4zM20 14h-3v5h2a1 1 0 0 0 1-1v-4z" />
      <path d="M17 19c0 1.5-2 2-5 2" />
    </>
  ),
  erp: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
    </>
  ),
}

// Nodes sit on an ellipse around the hub (percent of the diagram box)
const RADIUS_X = 40
const RADIUS_Y = 39

function nodePosition(i, total) {
  const angle = (i / total) * Math.PI * 2 - Math.PI / 2
  return {
    x: 50 + RADIUS_X * Math.cos(angle),
    y: 50 + RADIUS_Y * Math.sin(angle),
  }
}

export default function ServiceHub() {
  const { items } = serviceHub

  return (
    <section id="our-services" className="service-hub">
      <div className="container-xl">
        <div className="service-hub__header">
          <span className="section-eyebrow service-hub__eyebrow">{serviceHub.eyebrow}</span>
          <h2 className="service-hub__title">
            {serviceHub.title}{' '}
            <span className="service-hub__highlight">{serviceHub.highlight}</span>
          </h2>
          <p className="service-hub__intro">{serviceHub.intro}</p>
        </div>

        <div className="service-hub__diagram">
          <svg
            className="service-hub__lines"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <ellipse
              className="service-hub__orbit"
              cx="50"
              cy="50"
              rx={RADIUS_X}
              ry={RADIUS_Y}
            />
            {items.map((item, i) => {
              const { x, y } = nodePosition(i, items.length)
              return (
                <line
                  key={item.label}
                  className="service-hub__line"
                  x1="50"
                  y1="50"
                  x2={x}
                  y2={y}
                />
              )
            })}
          </svg>

          <div className="service-hub__core">
            <span className="service-hub__pulse" />
            <span className="service-hub__pulse service-hub__pulse--delay" />
            <div className="service-hub__core-inner">
              <span className="service-hub__core-name">Canopus GBS</span>
            </div>
          </div>

          <ul className="service-hub__nodes">
            {items.map((item, i) => {
              const { x, y } = nodePosition(i, items.length)
              return (
                <li
                  key={item.label}
                  className="service-hub__node"
                  style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${0.1 + i * 0.1}s` }}
                >
                  <span
                    className={`service-hub__icon ${i % 2 ? 'service-hub__icon--alt' : ''}`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {icons[item.icon]}
                    </svg>
                  </span>
                  <span className="service-hub__label">{item.label}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
