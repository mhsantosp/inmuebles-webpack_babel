const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: false,
        removeComments: false,
        removeRedundantAttributes: false,
        removeScriptTypeAttributes: false,
        removeStyleLinkTypeAttributes: false,
        useShortDoctype: false
      }
    })
  ]
};