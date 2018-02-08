
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const pages = require('./pages');
const dist = path.join(__dirname, '../dist');

let renderedPages = [];

for (let i = 0; i < pages.length; i++) {
  let page = Object.assign({}, pages[i]);

  renderedPages.push(
    new HtmlWebpackPlugin({
      template: page.template,
      filename: page.output,
      title: page.content.title,
      description: page.content.description
    })
  );
}

const config = {
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
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        query: {
          partialDirs: [
            path.join(__dirname, '../src', 'layouts'),
            path.join(__dirname, '../src', 'components'),
            path.join(__dirname, '../src', 'pages')
          ]
        }
      }
    ]
  },
  devtool: 'source-map',
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
    new ExtractTextPlugin('main.css'),
  ]
};

config.plugins = config.plugins.concat(renderedPages);

module.exports = config;
