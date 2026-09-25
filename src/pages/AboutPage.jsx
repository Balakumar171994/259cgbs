import { pageHeaders } from '../data'
import PageHeader from '../components/PageHeader'
import About from '../components/About'
import Pillars from '../components/Pillars'
import ImpactStats from '../components/ImpactStats'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

export default function AboutPage() {
  return (
    <>
      <PageHeader {...pageHeaders.about} />
      <About />
      <Pillars />
      <ImpactStats />
      <Testimonials />
      <CTA />
    </>
  )
}
