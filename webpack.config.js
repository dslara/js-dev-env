
const path = require('path');
const webpack = require('webpack');
const devServer = require('webpack-dev-server');
const pages = require('./config/config.pages');

module.exports = {
  mode: 'none',
  entry: {
    app: ['./src/app.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist')
  },
  devServer: {
    port: 3333,
    publicPath: '/',
    contentBase: path.resolve(__dirname, './src'),
    watchContentBase: true,
    hotOnly: true
  },
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ['es2015'] }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader', options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader', options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.woff2$/,
        loader: 'file-loader?name=fonts/[name].woff2'
      },
      {
        test: /\.ico$/,
        loader: 'file-loader?[name].ico'
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        query: {
          partialDirs: [
            path.join(__dirname, '../docs', 'layouts')
          ]
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ]
}

module.exports.plugins = module.exports.plugins.concat(pages)
