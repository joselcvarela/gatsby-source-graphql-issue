module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "gatsby",
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "swapi",
        fieldName: "Swapi",
        url: "https://swapi-graphql.netlify.app/.netlify/functions/index",
        // Additional options to pass to node-fetch
        fetchOptions: {},
      },
    },
  ],
};
