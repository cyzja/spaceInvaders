/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const { getLoader, loaderByName } = require('@craco/craco')
const absolutePaths = [
  path.join(__dirname, '../spaceInvaders/'),
]
module.exports = {
  webpack: {
    alias: {},
    plugins: [],
    configure: (webpackConfig, { env, paths }) => {
      const { isFound, match } = getLoader(webpackConfig, loaderByName('babel-loader'))
      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include]
        match.loader.include = [...include, ...absolutePaths]
      }
      return webpackConfig
    },
  },
}
