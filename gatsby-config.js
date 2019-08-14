module.exports = {
  pathPrefix: '/Noise-map-generator',
  siteMetadata: {
    title: 'Noise generator',
    siteUrl: 'https://xallt.github.io',
    description: 'Online interactive noise texture generator'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-glslify',
    'gatsby-plugin-sass'
  ]
}