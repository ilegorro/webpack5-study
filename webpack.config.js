const MiniCssExtractPlugin = require('mini-css-extract-plugin')

let mode = 'development'

if (process.env.NODE_ENV === 'production') {
  mode = 'production'
}

module.exports = {
  mode: mode,

  module: {
    rules: [
      {
        test: /\.s?css$/i, // .css or .scss at the end of string case insensitive
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  plugins: [new MiniCssExtractPlugin()],

  devtool: 'source-map', // or false
  devServer: {
    static: './dist',
    // hot: true, // true by default
  },
}
