import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "DatGamer56's PC Guide",
  description: "A comprehensive and modern guide to building a PC",
  head: [['link', { rel: 'icon', href: '/assets/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guides', link: '/guides' },
      { text: 'Contribute', link: '/contributing' },
      {
        text: 'Categories',
        items: [
          { text: 'Tower', link: '/pages/tower/' },
          { text: 'Peripherals', link: '/pages/peripherals/' },
          { text: 'Other', link: '/pages/other/' },
        ]
      }
    ],
    logo: '/assets/logo.png',
    sidebar: [
      {
        items: [
          { text: '📌 Getting Started', link: '/pages/getting-started/' },
          { text: '📃 Guides', link: '/pages/guides/' },
          { text: '🤝 Contribute', link: '/pages/contributing/' },
          { text: '📖 Glossary', link: '/pages/glossary/' },
        ]
      },
      {
        text: 'List of Parts',
        items: [
          {
            text: 'Tower',
            collapsed: false,
            items: [
              { text: '🧠 CPUs', link: '/pages/tower/cpu/' },
              { text: '❄ CPU Coolers', link: '/pages/tower/cooler/' },
              { text: '⚡ Motherboards', link: '/pages/tower/mobo/' },
              { text: '💾 Memory', link: '/pages/tower/ram/' },
              { text: '🗃 Storage', link: '/pages/tower/storage/' },
              { text: '💻 Graphics Cards', link: '/pages/tower/gpu/' },
              { text: '📦 Cases', link: '/pages/tower/case/' },
              { text: '🔌 Power Supplies', link: '/pages/tower/psu/' },
              { text: '💨 Case Fans', link: '/pages/tower/fans/' },
              { text: '➰ Cable Extensions', link: '/pages/tower/extensions/' },
            ]
          },
          {
            text: 'Peripherals',
            collapsed: false,
            items: [
              { text: '🖥 Monitors', link: '/pages/peripherals/monitor/' },
              { text: '🖱 Mice', link: '/pages/peripherals/mouse/' },
              { text: '⌨ Keyboards', link: '/pages/peripherals/kb/' },
              { text: '🔊 Audio', link: '/pages/peripherals/audio/' },
            ]
          },
          {
            text: 'Other',
            collapsed: false,
            items: [
              { text: 'NAS', link: '/pages/other/nas/' },
              { text: 'Accessories', link: '/pages/other/accessories/' },
            ]
          }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/aosceola56/ultimate-pc-guide' },
      { icon: 'discord', link: 'https://discord.com/invite/ztt' },
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Made with ❤ from DatGamer56',
      copyright: 'Copyright © 2025 aosceola56 - <a href="https://github.com/aosceola56/ultimate-pc-guide/blob/main/LICENSE" target="_blank" referrer="noreferrer noopener">MIT License</a>'
    }
  }
})
