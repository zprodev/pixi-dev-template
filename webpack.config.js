const path = require('path');

module.exports = {
  entry: [
    path.resolve('src', 'index.js')
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
  },
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
