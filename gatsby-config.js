module.exports = {
  siteMetadata: {
    title: "Dmitrii Frolov",
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-scroll-indicator",
    "gatsby-plugin-fontawesome-css",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
