module.exports = {
  siteMetadata: {
    url: `https://adedejistephen.com`,
    title: `My little Space`,
    titleTemplate: `%s · Adedeji Stephen`,
    description: `He's a full-stack software engineer from Nigeria with a keen interest in solving problems. I love working with Javascript (and friends), and I'm passionate about Cloud Native applications.`,
    twitterName: `ionwarez`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `static/images/boy.png`,
        name: `Adedeji Stephen · Software Engineer`,
        short_name: `Adedeji Stephen`,
        start_url: `/`,
        background_color: `#111A20`,
        theme_color: `#111A20`,
        display: `standalone`,
        cache_busting_mode: 'none',
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/articles`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
  ],
};
