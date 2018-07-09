
import path from 'path'
import projectPaths from './paths.config'

const styles = [
    {
      loader: 'css-loader',
      options: {
        sourceMap: true
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        ident: 'postcss',
        sourceMap: true,
        plugins: (loader) => [
          require('postcss-cssnext')(),
          require('postcss-initial')()
        ]
      }
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
        path: path.resolve(__dirname, projectPaths.root)
      }
    }
]

export default styles
