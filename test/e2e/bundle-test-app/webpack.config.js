const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReplacePlugin = require('webpack-plugin-replace');

module.exports = [
  {
    mode: 'production',
    // stats: 'errors-warnings',
    entry: './src/main.js',
    target: 'electron-main',
    output: {
      libraryTarget: 'commonjs2',
      filename: 'main.js',
    },
    optimization: {
      minimize: false,
    },
    plugins: [
      new HtmlWebpackPlugin(),
      new webpack.DefinePlugin({
        'process.type': '"browser"',
        module: '{ require: (m) => require(m) }',
      }),
    ],
    externals: ['electron'],
  },
  {
    mode: 'production',
    // stats: 'errors-warnings',
    entry: './src/renderer.js',
    target: 'electron-renderer',
    output: {
      filename: 'renderer.js',
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.type': '"renderer"',
      }),
    ],
  },
];
