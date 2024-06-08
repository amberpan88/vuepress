const path = require("path")

module.exports = {
  title: "Knowledge Base",
  description: "一个实用的知识库",
  theme: "vuepress-theme-book",
  themeConfig: {
    logo: "/logo.png",
    searchPlaceholder: "Search...",
    lastUpdated: "Last Updated",
    docsRepo: "cyrilf/vuepress-theme-book/tree/master/packages/demo",
    docsDir: "docs",
    editLinks: false,
    editLinkText: "Edit this page on Github",
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Github",
        link:
          "https://github.com/amberpan88/vuepress"
      },
    ],
    sidebar: {
      "/": [
        {
          title: "",
          collapsable: false,
          sidebarDepth: 0,
          children: [["/", "Home"]]
        },
        {
          title: "",
          collapsable: true,
          sidebarDepth: 0,
          children: [["/theme-configuration", "Configuration 🔧"]]
        },
        {
          title: "Random",
          collapsable: false,
          children: [
            ["/random/dev", "Dev 💻"],
            ["/random/website", "Websites using this theme 👌"],
            ["/random/emoji", "Emoji 😃"],
            ["/random/lorem", "Lorem Ipsum 🌟"]
          ]
        },
        {
          title: "Extras",
          collapsable: false,
          children: [
            ["/extras/contributing", "Contributing ✨"],
            ["/extras/license", "License 📚"]
          ]
        }
      ]
    }
  },
  plugins: [
    [
      "vuepress-plugin-clean-urls",
      {
        normalSuffix: "/"
      }
    ]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, "../assets")
      }
    }
  }
}
