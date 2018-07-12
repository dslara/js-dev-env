
import path from 'path'
import PATHS from './paths.config'

const devServer = ({ port } = {}) => ({

  devServer: {
    port,
    publicPath: '/',
    contentBase: [
      path.resolve(__dirname, `../${PATHS.SRC}`)
    ],
    watchContentBase: true,
    hotOnly: true,
    overlay: true,
    stats: 'errors-only'
  },
  devtool: 'eval'
});

export default devServer
