const path = require('path')

module.exports = {
  components: 'src/components/**/*.{ts,tsx}',
  propsParser: require('react-docgen-typescript').parse,
  require: [path.join(__dirname, 'src/reset.css')],
  skipComponentsWithoutExample: true,
  theme: {
    fontFamily: {
      base: '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif',
    },
  },
  webpackConfig: require('react-scripts-ts/config/webpack.config.dev.js')
}
