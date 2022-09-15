// eslint-disable-next-line @typescript-eslint/no-var-requires
const cypressTypeScriptPreprocessor = require("./cy-ts-preprocessor")

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
// module.exports = on => {
//   on("file:preprocessor", cypressTypeScriptPreprocessor)
// }


module.exports = (on, config) => {
  if (config.testingType === 'component') {
    const { startDevServer } = require('@cypress/webpack-dev-server')

    // Your project's Webpack configuration
    const webpackConfig = require('../../webpack.config.js')
   
    on('dev-server:start', (options) =>
      startDevServer({ options, webpackConfig })
    )
  }
}
