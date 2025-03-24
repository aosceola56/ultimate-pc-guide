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
      { text: 'How to Contribute', link: '/contributing' },
      {
        text: 'Parts List',
        items: [
          { text: '🧠 CPUs', link: '/parts/cpu' },
          { text: '❄ CPU Coolers', link: '/parts/cooler' },
          { text: '⚡ Motherboards', link: '/parts/mobo' },
          { text: '💾 Memory', link: '/parts/ram' },
          { text: '🗃 Storage', link: '/parts/storage' },
          { text: '💻 Graphics Cards', link: '/parts/gpu' },
          { text: '📦 Cases', link: '/parts/case' },
          { text: '🔌 Power Supplies', link: '/parts/psu' },
        ]
      }
    ],
    logo: '/assets/logo.png',
    sidebar: [
      {
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Contribute', link: '/contributing' }
        ]
      },
      {
        text: 'List of Parts',
        items: [
          {
            text: 'Tower',
            items: [
              { text: '🧠 CPUs', link: '/parts/cpu' },
              { text: '❄ CPU Coolers', link: '/parts/cooler' },
              { text: '⚡ Motherboards', link: '/parts/mobo' },
              { text: '💾 Memory', link: '/parts/ram' },
              { text: '🗃 Storage', link: '/parts/storage' },
              { text: '💻 Graphics Cards', link: '/parts/gpu' },
              { text: '📦 Cases', link: '/parts/case' },
              { text: '🔌 Power Supplies', link: '/parts/psu' },
            ]
          }
        ]
      }
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
      copyright: 'v1.0.0 - MIT License'
    }
  }
})
