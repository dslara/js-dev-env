
const path = require('path')
const fs = require('fs')
const basePath = 'src/modules'
const files = fs.readdirSync(basePath)

let folderFilter = (item) => !path.extname(item)
let foldersFirstLevel = files.filter(folderFilter)
let partialsPath = []

getPartialsPath = (baseDir) => {

  foldersFirstLevel.forEach(folder => {
    partialsPath.push(`${baseDir}/${basePath}/${folder}/`)
  })

  return partialsPath
}

module.exports = getPartialsPath
