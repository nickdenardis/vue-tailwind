module.exports = {
  title: "VueWind",
  themeConfig: {
    nav: [
      {
        text: "VuePress",
        link: "https://vuepress.vuejs.org/"
      },
      {
        text: "Tailwind CSS",
        link: "https://tailwindcss.com/"
      }
    ],
    sidebar: [["/", "Home"]]
  },
  postcss: {
    plugins: [
      require("tailwindcss")("./tailwind.config.js"),
      require("autoprefixer")
    ]
  }
};
