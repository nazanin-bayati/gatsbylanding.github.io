module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-LN2843MG43", // Google Analytics / GA
   ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    {
        resolve: `gatsby-plugin-hotjar`,
        options: {
          includeInDevelopment: true, // optional parameter to include script in development
          id: 2324339,
          sv: 6
          }
        },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GraphCMS",
        fieldName: "gcms",
        url: "https://api-eu-central-1.graphcms.com/v2/ckmxg89z4phuu01xrf8u826lr/master",
      },
    },

    ],
}