const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    path.resolve('src', 'index.js')
  ],
  output: {
    path: path.resolve('dist'),
    filename: '[hash].js'
  },
  module: {
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: "assets" },
      ],
    }),
  ],
  resolve: {
    modules: [
      path.resolve('src'),
      'node_modules'
    ]
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },    
    port: 8000,
    open: true,
    watchFiles: ['src/*', 'assets/*'],
    hot: true,
  }
};
