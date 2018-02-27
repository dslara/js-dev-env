
const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const pages = require('./pages');
const dist = path.join(__dirname, '../dist');

module.exports = webpackMerge(baseConfig, {
  entry: {
    app:  ['./src/app.js']
  },
  output: {
    path: dist,
    filename: './[name].js'
  },
  module: {
    rules: [
      { test: /\.woff2$/, loader: 'file-loader?name=fonts/[name].woff2' },
      { test: /\.ico$/, loader: 'file-loader?[name].ico' },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader', options: { sourceMap: true } },
            { loader: 'sass-loader', options: { sourceMap: true } }
          ]
        })
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('main.css'),
  ]
});

