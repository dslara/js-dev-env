
import path from 'path'
import PATHS from './paths.config'

const base = () => ({

  entry: {
    main: [
      path.resolve(__dirname, `../${PATHS.SRC}/app.js`)
    ],
    hmr: [
      "webpack-dev-server/client?http://localhost:3333"
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, `../${PATHS.DIST}`),
    publicPath: '/'
  }
});

export default base
