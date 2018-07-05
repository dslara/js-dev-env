
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const devServer = require('webpack-dev-server');
const pages = require('./config/config.pages');

const baseConfig = {
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
    hotOnly: true,
    stats: 'errors-only',
  },
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ['env']
        }
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
        test: /\.hbs$/,
        use: [
          {
            loader: 'html-loader'
          },
          {
            loader: 'assemble-webpack-loader',
            options: {
              layouts: path.resolve('./docs/**/*.hbs'),
              partials: path.resolve('./src/modules/**/*.hbs')
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ].concat(pages)
}

module.exports = baseConfig;
