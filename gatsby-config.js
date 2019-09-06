module.exports = {
  pathPrefix: '/Noise-texture-generator',
  siteMetadata: {
    title: 'Noise generator',
    siteUrl: 'https://xallt.github.io',
    description: 'Online interactive noise texture generator'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-glslify',
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ]
}