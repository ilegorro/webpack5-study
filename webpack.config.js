const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let mode = 'development'

if (process.env.NODE_ENV === 'production') {
  mode = 'production'
}

module.exports = {
  mode: mode,

  output: {
    path: path.resolve(__dirname, 'dist'), // optional if path is default

    assetModuleFilename: 'images/[hash][ext][query]',
    clean: true, // clean folder before build.
    // !index.html wil be removed if template is not used!
  },

  module: {
    rules: [
      // In order to import images in components.
      // Using images in css works well without this section
      {
        test: /\.(jpe?g|png|svg|gif)$/i,

        //type: 'asset/resource', // images in separate files

        // if images are small then 'inline' helps to reduce the number of requests
        // type: 'asset/inline', // images as base64 data

        type: 'asset', // automatic 'resource' or 'inline' for each resource according to the threshold condition

        // set threshold condition instead of default
        // parser: {
        //   dataUrlCondition: {
        //     maxSize: 30 * 1024,
        //   },
        // },
      },
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

  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devtool: 'source-map', // or false
  devServer: {
    static: './dist',
    // hot: true, // true by default
  },
}
