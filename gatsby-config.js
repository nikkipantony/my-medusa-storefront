require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

// require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Medusa Gatsby Starter`,
    description: `Kick off your next, great e-commerce project with this default starter with Medusa, Gatsby and common dev tools.`,
    author: `@medusajs`,
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "info",
        path: `${__dirname}/src/content/info/`,
      },
    },
    {
      resolve: `gatsby-source-medusa`,
      options: {
        storeUrl: process.env.GATSBY_MEDUSA_BACKEND_URL,
      },
    },
  ],
}
