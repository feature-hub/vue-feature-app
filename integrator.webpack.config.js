// @ts-check

const path = require('path');
const webpack = require('webpack');

/**
 * @type {webpack.Configuration}
 */
module.exports = {
  devtool: false,
  mode: 'development',
  entry: path.join(__dirname, 'src/integrator/index.ts'),
  output: {
    filename: './build/integrator.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  }
};
