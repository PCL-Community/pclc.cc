import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PCL Community",
  description: "PCL 非官方社区",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '项目', link: '/projects' },
      { text: '关于', link: '/about' }
    ],

    sidebar: [
      /* {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      } */
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/PCL-Community' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/3546847192811755' }
    ]
  }
})
