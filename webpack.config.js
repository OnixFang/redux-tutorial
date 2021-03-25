const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './index.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
  },
};
