
const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const devServer = require('webpack-dev-server');
const dist = path.join(__dirname, '../dist');

module.exports = webpackMerge(baseConfig, {
  output: {
    filename: '[name].js',
    path: dist
  },
  module: {
    rules: [
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
      }
    ]
  },
  devtool: 'eval',
  devServer: {
    port: 3333,
    contentBase: dist,
    historyApiFallback: true,
    compress: false,
    inline: true,
    hot: true,
    stats: {
      chunks: false
    }
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
});
