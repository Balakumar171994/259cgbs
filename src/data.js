// Centralized content for the whole site. Edit copy/links here — components
// just render whatever this file exports.

export const nav = [
  { label: 'Home', href: '/' },
  {
    label: 'SAP',
    href: '/sap',
    dropdown: [
      { label: 'SAP Solutions', href: '/sap#sap-solutions' },
      { label: 'SAP Managed Services', href: '/sap#sap-ams' },
    ],
  },
  {
    label: 'Digital Services',
    href: '/digital-services',
    dropdown: [
      { label: 'Digital Infrastructure / Cloud', href: '/digital-services#digital-infra' },
      { label: 'Cybersecurity / Digital Trust', href: '/digital-services#cybersecurity' },
      { label: 'Data, Analytics / AI', href: '/digital-services#data-ai' },
      { label: 'Digital Workplace / Automation', href: '/digital-services#digital-workplace' },
    ],
  },
  {
    label: 'Innovation & Products',
    href: '/products',
    dropdown: [
      { label: 'CarinAI', href: '/products#carinai' },
      { label: 'VegAI', href: '/products#vegai' },
      { label: 'SmartOps', href: '/products#smartops' },
    ],
  },
  { label: 'About Us', href: '/about' },
  {
    label: 'Resources',
    href: '/resources',
    dropdown: [
      { label: 'Blogs / FAQ', href: '/resources#blogs' },
      { label: 'Case Studies', href: '/resources#case-studies' },
    ],
  },
]

export const hero = {
  title: ['Transform, Automate, & Innovate with', 'SAP & Next-Gen Digital Services'],
  subtitle:
    'Trusted Partner for S/4HANA, AMS, and BTP AI Automation — backed by multi-cloud infrastructure (AWS, Azure, GCP), Zero-Trust cybersecurity, and 24/7 managed IT operations.',
  description:
    'We help enterprises modernize their digital core, optimize IT operations, strengthen cybersecurity, unlock data-driven insights, and accelerate innovation through SAP, Cloud, AI, Automation, Data, ERP, and Managed Services.',
  primaryCta: { label: 'Explore Our Services', href: '/#our-services' },
  secondaryCta: { label: 'Talk to Our Experts', href: '/contact' },
  statsHeading: 'Technology Expertise. Enterprise Experience. Measurable Outcomes.',
  stats: [
    { value: '10+ Years', label: 'SAP & IT Experience' },
    { value: '270+', label: 'SAP & Cloud Consultants' },
    { value: '150+', label: 'Enterprise Projects' },
    { value: '100+', label: 'Global Enterprise Clients' },
    { value: '5', label: 'Operating Countries' },
  ],
}

export const transformation = {
  eyebrow: 'Digital Transformation',
  title: 'From Technology Complexity to',
  highlight: 'Connected Transformation',
  intro:
    'Modern enterprises need more than individual technology solutions. They need a connected digital ecosystem where SAP, Cloud, Cybersecurity, Data, AI, Infrastructure, and IT Operations work together.',
  lead: 'Canopus GBS brings these capabilities together to help organizations:',
  outcomes: [
    'Modernize legacy technology',
    'Transform enterprise applications',
    'Accelerate cloud adoption',
    'Automate business and IT processes',
    'Strengthen security and resilience',
    'Unlock the value of enterprise data',
    'Optimize IT performance and operations',
    'Build scalable foundations for future innovation',
  ],
}

export const serviceHub = {
  eyebrow: 'Our Services',
  title: 'One Digital Partner.',
  highlight: 'Multiple Transformation Capabilities.',
  intro:
    'From digital core transformation to intelligent IT operations, Canopus GBS brings the technologies, expertise, and managed capabilities enterprises need to modernize and scale:',
  items: [
    { label: 'SAP', icon: 'sap' },
    { label: 'Cloud & Infrastructure', icon: 'cloud' },
    { label: 'Cybersecurity', icon: 'shield' },
    { label: 'AI & Innovation', icon: 'ai' },
    { label: 'Data Analytics', icon: 'chart' },
    { label: 'Managed Services', icon: 'headset' },
    { label: 'ERP', icon: 'erp' },
  ],
}

export const industries = {
  eyebrow: 'Industries',
  title: 'Technology That Understands',
  highlight: 'Your Industry',
  intro:
    'Every industry has different processes, regulations, operational challenges, and technology priorities.',
  lead:
    'Canopus GBS combines industry understanding with technology expertise to deliver solutions aligned with real-world business requirements.',
  items: [
    { label: 'Manufacturing', icon: 'factory' },
    { label: 'Automotive', icon: 'car' },
    { label: 'Engineering', icon: 'wrench' },
    { label: 'Pharmaceuticals & Healthcare', icon: 'health' },
    { label: 'Logistics & Supply Chain', icon: 'truck' },
    { label: 'Retail & Consumer', icon: 'bag' },
    { label: 'Professional Services', icon: 'briefcase' },
    { label: 'Other Enterprise Industries', icon: 'building' },
  ],
}

export const whyCanopus = {
  eyebrow: "Why Canopus GBS",
  title: "Technology That Moves",
  highlight: "Business Forward",
  intro: [
    "Digital transformation is not just about adopting new technology. It is about creating a business that is more connected, intelligent, secure, and ready for what comes next.",
    "At Canopus GBS, we bring together enterprise technology, industry understanding, innovation, and managed expertise to help organizations transform with clarity and confidence.",
  ],
  points: [
    {
      icon: "link",
      title: "One Partner. Connected Capabilities.",
      text: "Bring SAP, Cloud, AI, Cybersecurity, Data, ERP, and Managed Services together through a unified transformation partner.",
    },
    {
      icon: "target",
      title: "Built Around Your Business",
      text: "We don't believe in one-size-fits-all technology. Our solutions are aligned with your business priorities, operational realities, and long-term growth.",
    },
    {
      icon: "route",
      title: "From Strategy to Scale",
      text: "From the first assessment to implementation, modernization, optimization, and ongoing management, we support your journey end-to-end.",
    },
    {
      icon: "bulb",
      title: "Innovation with Purpose",
      text: "We turn emerging technologies such as AI and automation into practical solutions that improve productivity, accelerate processes, and create measurable business value.",
    },
    {
      icon: "shield",
      title: "Secure by Design",
      text: "Security is integrated into transformation from the ground up—helping enterprises build resilient, trusted, and future-ready digital environments.",
    },
    {
      icon: "users",
      title: "Expertise That Delivers",
      text: "Our teams combine technology expertise, enterprise experience, and a collaborative approach to solve complex business and technology challenges.",
    },
    {
      icon: "refresh",
      title: "Always Evolving",
      text: "Transformation doesn't end at go-live. We continuously identify opportunities to optimize, automate, modernize, and innovate as your business evolves.",
    },
  ],
}

export const confidenceBanner = {
  title: "Transform with Confidence.",
  highlight: "Innovate with Purpose.",
  text: "Canopus GBS helps enterprises turn technology into a lasting business advantage.",
}

// Header text for each inner page
export const pageHeaders = {
  sap: {
    eyebrow: 'SAP',
    title: 'SAP Solutions &',
    highlight: 'Managed Services',
    text: 'S/4HANA, RISE with SAP, BTP and Clean Core transformation — backed by AMS, Basis, HANA and 24x7 support.',
  },
  digital: {
    eyebrow: 'Digital Services',
    title: 'Cloud, Security, Data &',
    highlight: 'Digital Workplace',
    text: 'AWS, Azure and GCP engineering, zero-trust security, data and applied AI, and workplace automation.',
  },
  products: {
    eyebrow: 'Innovation & Products',
    title: 'Innovation &',
    highlight: 'Products',
    text: 'CarinAI, VegAI and SmartOps — purpose-built platforms engineered specifically for the SAP ecosystem.',
  },
  about: {
    eyebrow: 'About Us',
    title: 'About',
    highlight: 'Canopus GBS',
    text: 'SAP-led transformation, modern digital services and proprietary AI products — from one partner.',
  },
  resources: {
    eyebrow: 'Resources',
    title: 'Insights &',
    highlight: 'Resources',
    text: 'Blogs, case studies and answers to the questions enterprises ask us most.',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Talk to',
    highlight: 'Our Experts',
    text: 'Tell us where you are in your transformation journey and our team will help you plan the next step.',
  },
}

export const pillars = [
  {
    title: 'Transform with SAP',
    tag: 'SAP-Led Modernization',
    bullets: [
      'S/4HANA migration with zero business disruption',
      'RISE with SAP & cloud landing zone strategy',
      'Clean core extensions on SAP BTP',
      'AMS backed by predictive, AI-driven monitoring',
    ],
  },
  {
    title: 'Modernize Digital Services',
    tag: 'Cloud, Security & Data',
    bullets: [
      'Multi-cloud infrastructure engineering',
      'Zero-trust cybersecurity & digital trust',
      'Data platforms, analytics & applied AI',
      'Digital workplace & workflow automation',
    ],
  },
  {
    title: 'Automate with AI Products',
    tag: 'Proprietary Innovation',
    bullets: [
      'CarinAI resolves SAP tickets autonomously',
      'VegAI predicts and prevents system downtime',
      'SmartOps unifies IT service, asset & ops data',
      'Purpose-built IP, not generic tooling',
    ],
  },
]

export const services = [
  {
    id: 'sap-solutions',
    title: 'SAP Solutions',
    desc: 'End-to-end S/4HANA transformation — greenfield, brownfield or selective data transition — engineered for a clean, extensible core.',
  },
  {
    id: 'sap-ams',
    title: 'SAP Managed Services',
    desc: 'SLA-driven Application Management Services with 24x7 Basis coverage and AI-augmented ticket resolution.',
  },
  {
    id: 'digital-infra',
    title: 'Digital Infrastructure / Cloud',
    desc: 'Cloud-native architecture, landing zones, and migration across AWS, Azure and GCP, built for scale and cost efficiency.',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity / Digital Trust',
    desc: 'Zero-trust security architecture, GRC frameworks, and continuous threat detection to protect what matters most.',
  },
  {
    id: 'data-ai',
    title: 'Data, Analytics / AI',
    desc: 'Modern data platforms, BI, and applied AI/ML models that turn enterprise data into decisions.',
  },
  {
    id: 'digital-workplace',
    title: 'Digital Workplace / Automation',
    desc: 'Microsoft 365, ITSM, and intelligent automation that make everyday work faster and friction-free.',
  },
]

export const products = [
  {
    id: 'carinai',
    name: 'CarinAI',
    tagline: 'AI-Powered SAP Automation',
    desc: 'A machine-learning engine that auto-resolves L1/L2 SAP tickets, cutting ticket volume and manual effort dramatically.',
    accent: 'from-navy to-navy-light',
  },
  {
    id: 'vegai',
    name: 'VegAI',
    tagline: 'Intelligent SAP Monitoring',
    desc: 'Predictive Basis monitoring that flags performance risk before it becomes downtime — proactive, not reactive AMS.',
    accent: 'from-navy-dark to-navy',
  },
  {
    id: 'smartops',
    name: 'SmartOps',
    tagline: 'Unified Digital Operations',
    desc: 'One platform bringing ITSM, ITAM, and ITOM together for full visibility across the enterprise IT estate.',
    accent: 'from-gold to-gold-light',
  },
]

export const stats2 = [
  { value: '60%', label: 'Faster Issue Resolution', note: 'Powered by CarinAI' },
  { value: '40%', label: 'Lower SAP Operations Cost', note: 'Via managed AMS' },
  { value: '99.9%', label: 'System Uptime', note: 'Across managed estates' },
  { value: '3x', label: 'Faster Migrations', note: 'Zero business disruption' },
]

export const testimonials = [
  {
    quote:
      'Canopus GBS ran our S/4HANA migration with remarkable discipline — clear documentation, minimal meetings, and they delivered exactly what was scoped, on time.',
    name: 'Rohan Mehta',
    role: 'CIO, Manufacturing Enterprise',
  },
  {
    quote:
      'What impressed us most was the AMS transition. Ticket volumes dropped within the first quarter once CarinAI was in place, and our team finally got out of firefighting mode.',
    name: 'Ananya Kapoor',
    role: 'VP IT Operations, Retail Group',
  },
  {
    quote:
      'A genuinely reliable partner across time zones. Their SAP Basis and cloud teams communicate proactively, which made an offshore engagement feel local.',
    name: 'David Chen',
    role: 'Head of Infrastructure, Logistics Firm',
  },
]

export const blogs = [
  {
    title: 'Five Signs Your SAP Landscape Is Ready for S/4HANA',
    excerpt: 'A practical readiness checklist for CIOs weighing greenfield vs. brownfield migration timing.',
    date: 'Jan 2026',
  },
  {
    title: 'Why Predictive AMS Beats Reactive Support',
    excerpt: 'How predictive monitoring with VegAI shifts AMS from firefighting to prevention.',
    date: 'Dec 2025',
  },
  {
    title: '2026 Outlook: Cloud, AI and the Clean Core',
    excerpt: 'What enterprise IT leaders should plan for in the next wave of SAP and cloud investment.',
    date: 'Dec 2025',
  },
]

export const caseStudies = [
  {
    title: 'Global Manufacturer Migrates 15TB to S/4HANA in 18 Weeks',
    outcome: '45% faster financial close, zero downtime cutover.',
  },
  {
    title: 'Retail Group Cuts SAP Ticket Volume by 60% with CarinAI',
    outcome: 'AI-driven auto-resolution freed up 3 FTEs for higher-value work.',
  },
  {
    title: 'Logistics Firm Achieves 99.9% Uptime with Predictive AMS',
    outcome: 'VegAI flagged 12 critical incidents before they impacted users.',
  },
]

export const faqs = [
  {
    q: 'Do you support both greenfield and brownfield S/4HANA migrations?',
    a: 'Yes — we assess your landscape and recommend greenfield, brownfield, or selective data transition based on your business goals and technical debt.',
  },
  {
    q: 'Can CarinAI and VegAI integrate with our existing AMS provider?',
    a: 'Both products are designed to sit natively on SAP BTP and integrate with standard ITSM tooling, so they can complement an existing AMS setup.',
  },
  {
    q: 'Do you offer services outside of the SAP ecosystem?',
    a: 'Yes — our Digital Services practice covers cloud infrastructure, cybersecurity, data & AI, and digital workplace, independent of SAP engagements.',
  },
]

export const about = {
  eyebrow: 'About Canopus GBS',
  title: 'Engineering Enterprise Transformation for Over a Decade',
  body: [
    'Canopus GBS is a global digital transformation and SAP consulting partner, helping enterprises modernize their core systems while building the digital capabilities that growth demands next.',
    'From SAP-led transformation to cloud, cybersecurity, data & AI, and our own suite of AI-powered products, we combine deep technical depth with a delivery model built for measurable outcomes — not just activity.',
  ],
  highlights: [
    { value: '10+', label: 'Years of SAP Experience' },
    { value: '270+', label: 'Certified Consultants' },
    { value: '150+', label: 'Enterprise Projects Delivered' },
    { value: '5', label: 'Global Delivery Hubs' },
  ],
}

export const finalCta = {
  eyebrow: 'Ready When You Are',
  title: 'Let\u2019s Engineer Your Next Phase of Growth',
  subtitle:
    'Whether it\u2019s an S/4HANA migration, a cloud transformation, or deploying CarinAI across your SAP estate — our team is ready to scope it with you.',
  primaryCta: { label: 'Book a Strategy Call', href: '/contact' },
  secondaryCta: { label: 'Talk to an Expert', href: '/contact' },
}

export const offices = {
  title: 'Global Offices',
  subtitle: 'Where you can find us',
  list: [
    {
      country: 'India',
      flag: 'in',
      company: 'Canopus GBS Pvt Ltd',
      address: ['Karle Town Centre SEZ, HUB 2, 1st Floor,', 'Bengaluru, Karnataka 560045, India'],
      phone: '080-4959 5366',
    },
    {
      country: 'USA',
      flag: 'us',
      company: 'Canopus GBS Inc',
      address: ['200 S Washington St, Suite 300,', 'Crawfordsville, Indiana 47933, USA'],
      phone: '+1 (737) 228-1454',
      email: 'Info_USA@canopusgbs.com',
    },
    {
      country: 'Malaysia',
      flag: 'my',
      company: 'Canopus GBS Sdn Bhd',
      address: [
        'Suite 3B-7-6, Level 7, Block 3B, Plaza Sentral,',
        'Jalan Stesen Sentral, Kuala Lumpur Sentral, 50470',
      ],
      phone: '+60 33010 1808',
    },
    {
      country: 'UAE',
      flag: 'ae',
      company: 'Canopus GBS FZCO',
      address: ['Building A2, Dubai Digital Park,', 'Dubai Silicon Oasis, Dubai, UAE'],
      phone: '+971 5595 34203',
    },
    {
      country: 'Singapore',
      flag: 'sg',
      company: 'Canopus GBS Pte Ltd',
      address: ['51 Changi Business Park Central 2,', 'The Signature, Singapore 486066'],
      phone: '+65 6701 8500',
    },
  ],
}

// TODO: replace "#" with the company's LinkedIn / YouTube / X page URLs
export const socials = [
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

export const footerLinks = {
  'SAP': ['SAP Solutions', 'SAP Managed Services'],
  'Digital Services': ['Cloud & Infrastructure', 'Cybersecurity', 'Data & AI', 'Digital Workplace'],
  'Products': ['CarinAI', 'VegAI', 'SmartOps'],
  'Company': ['About Us', 'Blogs / FAQ', 'Case Studies', 'Contact'],
}
