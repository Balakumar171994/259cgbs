import { transformation } from '../data'
import './Transformation.css'

export default function Transformation() {
  return (
    <section id="digital-transformation" className="transformation">
      <div className="container-xl transformation__inner">
        <div className="transformation__text">
          <span className="section-eyebrow transformation__eyebrow">{transformation.eyebrow}</span>
          <h2 className="transformation__title">
            {transformation.title}{' '}
            <span className="transformation__highlight">{transformation.highlight}</span>
          </h2>
          <p className="transformation__intro">{transformation.intro}</p>
          <p className="transformation__lead">{transformation.lead}</p>
        </div>

        <ul className="transformation__list">
          {transformation.outcomes.map((item) => (
            <li className="transformation__item" key={item}>
              <span className="transformation__check" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
