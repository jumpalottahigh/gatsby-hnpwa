module.exports = {
  siteMetadata: {
    title: `Gatsby HN PWA`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Gatsby HN PWA",
        short_name: "Gatsby HN PWA",
        start_url: "/",
        background_color: "#69a3d4",
        theme_color: "#0175d8",
        display: "minimal-ui",
        icons: [
          {
            // Everything in /static will be copied to an equivalent
            // directory in /public during development and build, so
            // assuming your favicons are in /static/favicons,
            // you can reference them here
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-source-hacker-news`,
  ],
}
