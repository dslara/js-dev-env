
import path from 'path'
import PATHS from './paths.config'

const templates = () => ({

  module: {
    rules: [
      {
        test: /\.hbs$/,
        use: [
          {
            loader: 'html-loader'
          },
          {
            loader: path.resolve(__dirname, './assemble.config.js'),
            options: {
              layouts: path.resolve(__dirname, `../${PATHS.DOCS}/**/*.hbs`),
              partials: path.resolve(__dirname, `../${PATHS.SRC}/modules/**/*.hbs`),
              data: path.resolve(__dirname, `../${PATHS.SRC}/modules/**/*.json`)
            }
          }
        ]
      }
    ]
  }
})

export default templates
