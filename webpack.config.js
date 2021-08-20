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
        // or test: /\.(s[ac]|c)ss$/i, // supporting .sass, scss, css
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  plugins: [new MiniCssExtractPlugin()],

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devtool: 'source-map', // or false
  devServer: {
    static: './dist',
    // hot: true, // true by default
  },
}
