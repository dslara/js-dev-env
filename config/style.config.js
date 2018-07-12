
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import path from 'path'
import PATHS from './paths.config'

const plugin = new MiniCssExtractPlugin({
  filename: "[name].css",
});

const styles = (env) => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 3,
              sourceMap: true
            }
          },
          {
            loader: 'resolve-url-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: () => [
                require('postcss-cssnext')(),
                require('postcss-initial')()
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              path: path.resolve(__dirname, `../${PATHS.ROOT}`)
            }
          }
        ]
      }
    ]
  },
  plugins: [plugin]
})

export default styles
