import { pageHeaders } from '../data'
import PageHeader from '../components/PageHeader'
import Services from '../components/Services'
import CTA from '../components/CTA'

export default function SapPage() {
  return (
    <>
      <PageHeader {...pageHeaders.sap} />
      <Services id="sap" ids={['sap-solutions', 'sap-ams']} showHead={false} />
      <CTA />
    </>
  )
}
