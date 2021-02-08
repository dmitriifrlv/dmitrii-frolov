module.exports = {
  siteMetadata: {
    title: "Dmitrii Frolov",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-fontawesome-css",
    "gatsby-plugin-react-helmet",
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: ['https://i.ibb.co/QNK74tj/1.jpg', 'https://i.ibb.co/qxMsjDv/2.jpg', 'https://i.ibb.co/L0SXWMn/3.jpg'],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      }
    }
  ],
};


// pathPrefix: "/dmitrii-frolov",

// domains: ['https://i.ibb.co/QNK74tj/1.jpg', 'https://i.ibb.co/qxMsjDv/2.jpg', 'https://i.ibb.co/L0SXWMn/3.jpg'],

// domains: ['./src/images/1.jpg', './src/images/2.jpeg', './src/images/3.jpeg'],