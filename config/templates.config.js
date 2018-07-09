
import path from 'path'
import projectPaths from './paths.config'

const templates = {
  test: /\.hbs$/,
  use: [
    {
      loader: 'html-loader'
    },
    {
      loader: path.resolve(__dirname, './assemble.config.js'),
      options: {
        layouts: path.resolve(__dirname, `${projectPaths.docs}/**/*.hbs`),
        partials: path.resolve(__dirname, `${projectPaths.src}/modules/**/*.hbs`),
        data: path.resolve(__dirname, `${projectPaths.src}/modules/**/*.json`)
      }
    }
  ]
};

export default templates
