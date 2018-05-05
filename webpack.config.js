
const path = require('path');
const webpack = require('webpack');
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
    hotOnly: true
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
        loader: 'handlebars-loader',
        query: {
          partialDirs: [
            path.join(__dirname, './docs', 'layouts'),
            path.join(__dirname, './src', 'pages'),
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

baseConfig.plugins = baseConfig.plugins.concat(pages);

module.exports = baseConfig;
