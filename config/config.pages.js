
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = [
  {
    output: './index.html',
    content: {
      title: 'Home',
      description: 'Home Page'
    },
    template: './docs/pages/index.hbs'
  }
]

let pages = [];

for (let i = 0; i < config.length; i++) {
  let page = Object.assign({}, config[i]);

  pages.push(
    new HtmlWebpackPlugin({
      template: page.template,
      filename: page.output,
      title: page.content.title,
      description: page.content.description
    })
  );
}

module.exports = pages;
