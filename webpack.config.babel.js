
import path from 'path'
import webpack from 'webpack'
import devServer from 'webpack-dev-server'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import AssembleWebpack from './config/assemble.plugin'
import projectPaths from './config/paths.config'
import pagesConfig from './config/pages.config'
import scriptsConfig from './config/scripts.config'
import styleConfig from './config/style.config'
import fileConfig from './config/file.config'

const styles = {
  test: /\.scss$/,
  use: [{ loader: 'style-loader', options: { sourceMap: true }}, MiniCssExtractPlugin.loader].concat(styleConfig)
};

const baseConfig = {
  entry: {
    main: [
      path.resolve(__dirname, `${projectPaths.src}/app.js`)
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, projectPaths.dist),
    publicPath: '/'
  },
  devServer: {
    port: 3333,
    publicPath: '/',
    contentBase: path.resolve(__dirname, projectPaths.src),
    watchContentBase: true,
    hotOnly: true,
    overlay: true,
    stats: 'errors-only'
  },
  devtool: 'eval',
  module: {
    rules: [
      scriptsConfig,
      styles,
      {
        test: /\.(hbs)$/,
        use: [
          {
            loader: 'handlebars-loader'
          },
          {
            loader: path.resolve('./config/assemble.loader.js')
          }
        ]
      }
    ]
  },
  plugins: [
    new AssembleWebpack({
      baseLayout: `${projectPaths.docs}/layouts/*.hbs`,
      basePages: [`${projectPaths.docs}/pages/**/*.hbs`],
      partialsLayout: [`${projectPaths.src}/modules/**/*.hbs`],
    }),
    //new HtmlWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ]
}

baseConfig.plugins = baseConfig.plugins.concat(pagesConfig);
baseConfig.module.rules = baseConfig.module.rules.concat(fileConfig);

export default baseConfig
