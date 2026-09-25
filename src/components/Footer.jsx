import { Link } from 'react-router-dom'
import { footerLinks, offices } from '../data'
import Flag from './Flag'
import logo from '../assets/cgbs white.png'
import './Footer.css'

// TODO: replace "#" with the company's LinkedIn / YouTube / X page URLs
const socials = [
  {
    key: 'linkedin',
    name: 'LinkedIn',
    href: '#',
    path: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.03-3.06-1.86-3.06-1.87 0-2.15 1.46-2.15 2.96V21H9z',
  },
  {
    key: 'youtube',
    name: 'YouTube',
    href: '#',
    path: 'M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6z',
  },
  {
    key: 'x',
    name: 'X (Twitter)',
    href: '#',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
]

const pathFor = (label) => {
  const map = {
    'SAP Solutions': '/sap#sap-solutions',
    'SAP Managed Services': '/sap#sap-ams',
    'Cloud & Infrastructure': '/digital-services#digital-infra',
    'Cybersecurity': '/digital-services#cybersecurity',
    'Data & AI': '/digital-services#data-ai',
    'Digital Workplace': '/digital-services#digital-workplace',
    'CarinAI': '/products#carinai',
    'VegAI': '/products#vegai',
    'SmartOps': '/products#smartops',
    'About Us': '/about',
    'Blogs / FAQ': '/resources#blogs',
    'Case Studies': '/resources#case-studies',
    'Contact': '/contact',
  }
  return map[label] || '/'
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-xl footer__top">
        <div className="footer__brand">
          <img src={logo} alt="Canopus GBS" className="footer__logo" />
          <p className="footer__tagline">
            AI Transformation Partner for Enterprise Growth — SAP, Cloud, Cybersecurity, Data & AI,
            and proprietary AI products under one roof.
          </p>
          <div className="footer__social">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className={`footer__social-link footer__social-link--${s.key}`}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="footer__cols">
          {Object.entries(footerLinks).map(([col, links]) => (
            <div className="footer__col" key={col}>
              <h4>{col}</h4>
              <ul>
                {links.map((link) => (
                  <li key={link}>
                    <Link to={pathFor(link)}>{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container-xl footer__offices">
        <div className="footer__offices-head">
          <h3 className="footer__offices-title">{offices.title}</h3>
          <p className="footer__offices-sub">{offices.subtitle}</p>
        </div>

        <div className="footer__offices-grid">
          {offices.list.map((o) => (
            <address className="footer__office" key={o.address[0]}>
              <div className="footer__office-country">
                <Flag code={o.flag} className="footer__flag" />
                {o.country}
              </div>
              <div className="footer__office-company">{o.company}</div>
              <p className="footer__office-address">
                {o.address.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </p>
              <a className="footer__office-contact" href={`tel:${o.phone.replace(/[^\d+]/g, '')}`}>
                <span>Phone:</span> {o.phone}
              </a>
              {o.email && (
                <a className="footer__office-contact" href={`mailto:${o.email}`}>
                  <span>Email:</span> {o.email}
                </a>
              )}
            </address>
          ))}
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container-xl footer__bottom-inner">
          <span>&copy; {new Date().getFullYear()} Canopus GBS. All rights reserved.</span>
          <div className="footer__legal">
            <a href="#home">Privacy Policy</a>
            <a href="#home">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
