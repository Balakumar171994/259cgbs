import sap from '../assets/partner/SAP.png'
import aws from '../assets/partner/AWS.jpg'
import kyndryl from '../assets/partner/kindryl.jpg'
import suse from '../assets/partner/suse.png'
import ibm from '../assets/partner/IBM.jpg'
import docusign from '../assets/partner/docusign.png'
import motadata from '../assets/partner/motadata.png'
import monday from '../assets/partner/monday.com.png'
import azure from '../assets/partner/azure.png'
import microsoft from '../assets/partner/microsoft.png'
import upguard from '../assets/partner/upguard.jpg'
import mscMalaysia from '../assets/partner/malaysia.jpg'
import iso9001 from '../assets/partner/ISO 9001.png'
import iso27001 from '../assets/partner/ISO 27001.png'
import smartIndustry from '../assets/partner/Smart industry.png'
import nasscom from '../assets/partner/Nasscom.png'
import './Partners.css'

const technologyPartners = [
  { name: 'SAP', logo: sap },
  { name: 'AWS', logo: aws },
  { name: 'Kyndryl', logo: kyndryl },
  { name: 'SUSE', logo: suse },
  { name: 'IBM', logo: ibm },
  { name: 'Docusign', logo: docusign },
  { name: 'Motadata', logo: motadata },
  { name: 'monday.com', logo: monday },
  { name: 'Microsoft Azure', logo: azure },
  { name: 'Microsoft', logo: microsoft },
]

const certifications = [
  { name: 'UpGuard', logo: upguard },
  { name: 'MSC Malaysia Status Company', logo: mscMalaysia },
  { name: 'ISO 9001:2015 Certified', logo: iso9001 },
  { name: 'ISO 27001 Certified', logo: iso27001 },
  { name: 'Smart Industry Readiness Index', logo: smartIndustry },
  { name: 'NASSCOM Certified Member', logo: nasscom },
]

export default function Partners() {
  return (
    <section id="partners" className="partners">
      <div className="container-xl partners__inner">
        <h2 className="partners__title">
          Partners &amp; Technology <span className="partners__highlight">Ecosystem</span>
        </h2>

        <div className="partners__logos">
          {/* Two copies side by side; the track scrolls by one copy and repeats */}
          <div className="partners__viewport" role="region" aria-label="Technology partners">
            <ul className="partners__track">
              {[...technologyPartners, ...technologyPartners].map((p, i) => (
                <li
                  key={i}
                  className="partners__slide"
                  aria-hidden={i >= technologyPartners.length}
                >
                  <img src={p.logo} alt={p.name} className="partners__logo" loading="lazy" />
                </li>
              ))}
            </ul>
          </div>

          <ul className="partners__certs" aria-label="Certifications and memberships">
            {certifications.map((c) => (
              <li key={c.name} className="partners__cert">
                <img src={c.logo} alt={c.name} className="partners__logo" loading="lazy" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
