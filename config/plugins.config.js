
import path from 'path'
import webpack from 'webpack'
import PATHS from './paths.config'
import pagesConfig from './pages.config'
import ExtraWatchWebpackPlugin from 'extra-watch-webpack-plugin'

const plugins = () => ({

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new ExtraWatchWebpackPlugin({
      files: [
        path.resolve(__dirname, `../${PATHS.SRC}/**/*.hbs`),
        path.resolve(__dirname, `../${PATHS.DOCS}/**/*.hbs`)
      ]
    })
  ].concat(pagesConfig)
});

export default plugins
