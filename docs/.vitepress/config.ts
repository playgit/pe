import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "PE Product Leadership Playbook",
  description: "Accelerating Value Creation Through Product Excellence",
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Frameworks', link: '/frameworks/' },
      { text: 'Tools', link: '/tools/' },
      { text: 'Metrics', link: '/metrics/' },
      { text: 'Implementation', link: '/implementation/' }
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Overview', link: '/' },
          { text: 'Why This Matters', link: '/why-this-matters' }
        ]
      },
      {
        text: 'Core Value Drivers',
        items: [
          { text: 'Value Creation & Growth', link: '/value-drivers/value-creation' },
          { text: 'Operational Excellence', link: '/value-drivers/operational-excellence' },
          { text: 'Investment Thesis Alignment', link: '/value-drivers/investment-thesis' },
          { text: 'Exit Strategy Preparation', link: '/value-drivers/exit-strategy' }
        ]
      },
      {
        text: 'Key Frameworks',
        items: [
          { text: 'Value Alignment Framework', link: '/frameworks/value-alignment' },
          { text: '100-Day Value Creation', link: '/frameworks/100-day-framework' }
        ]
      },
      {
        text: 'Tools & Templates',
        items: [
          { text: 'Strategic Planning', link: '/tools/strategic-planning' },
          { text: 'Execution & Monitoring', link: '/tools/execution-monitoring' },
          { text: 'Communication & Reporting', link: '/tools/communication-reporting' }
        ]
      },
      {
        text: 'Core Metrics',
        items: [
          { text: 'Value Creation Metrics', link: '/metrics/value-creation' },
          { text: 'Operational Excellence', link: '/metrics/operational-excellence' },
          { text: 'Exit Readiness', link: '/metrics/exit-readiness' }
        ]
      },
      {
        text: 'Implementation',
        items: [
          { text: 'Getting Started', link: '/implementation/getting-started' },
          { text: 'Success Factors', link: '/implementation/success-factors' },
          { text: 'Common Pitfalls', link: '/implementation/pitfalls' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username/pe-product-playbook' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/your-profile' }
    ],
    footer: {
      message: 'Built for product leaders driving value creation in PE-backed companies.',
      copyright: 'Copyright © 2024'
    }
  }
})