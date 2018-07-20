
import path from 'path'
import fs from 'fs'
import PATHS from './paths.config'

const getPartialsPath = (basePath = `${PATHS.SRC}/modules`) => {
  const files = fs.readdirSync(basePath)
  const folderFilter = (item) => !path.extname(item)
  const foldersFirstLevel = files.filter(folderFilter)
  return foldersFirstLevel.map(folder => path.resolve(__dirname, `../${basePath}/${folder}`))
}

const templates = () => ({

  module: {
    rules: [
      {
        test: /\.hbs$/,
        use: [
          {
            loader: 'handlebars-loader',
            query: {
              partialDirs: [].concat(
                getPartialsPath(),
                getPartialsPath(`${PATHS.SRC}/modules/component`)
              )
            }
          }
        ]
      }
    ]
  }
})

export default templates
