import { defineConfig } from 'vitepress'

// https://vitepress.dev/zh/reference/site-config
export default defineConfig({
  title: "PCL Community",
  description: "PCL 非官方社区",
  head: [['link', { rel: 'icon', href: '/img/logo.png' }]],
  lang: "zh-CN",
  themeConfig: {

    logo: '/img/logo.png',

    nav: [
      { text: '主页', link: '/' },
      { text: '项目', link: '/projects' },
      { text: '更新日志', items: [
        { text: "PCL-CE 更新日志", link: "/changelog/pcl-ce.md"}
      ] },
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
    ],

    footer: {
      message: '本站由 VitePress 强力驱动',
      copyright: 'Copyright © PCL Community'
    }
  }
})
