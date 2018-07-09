
const scripts = {
  test: /\.js$/,
  loader: "babel-loader",
  exclude: /node_modules/,
  options: { presets: ['env'] }
};

export default scripts
