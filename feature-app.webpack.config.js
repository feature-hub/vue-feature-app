// @ts-check

const path = require('path');
const webpack = require('webpack');
const {VueLoaderPlugin} = require('vue-loader');

/**
 * @type {webpack.Configuration}
 */
module.exports = {
  devtool: false,
  mode: 'production',
  entry: path.join(__dirname, 'src/feature-app/index.ts'),
  output: {
    libraryTarget: 'amd',
    filename: './build/feature-app.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {shadowMode: true}
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'vue-style-loader', options: {shadowMode: true}},
          'css-loader'
        ]
      }
    ]
  },
  plugins: [new VueLoaderPlugin()],
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx', '.vue']
  }
};
