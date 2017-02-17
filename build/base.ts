import { resolve } from 'path'
const HtmlWebpackPlugin = require('html-webpack-plugin')

import * as paths from './paths'

export const baseConfig = {
  context: paths.source,

  entry: './index.ts',

  output: {
    filename: 'app.js',
    publicPath: '/',
  },

  resolve: {
    extensions: [
      '.webpack.js',
      '.web.js',
      '.js',
      '.ts'
    ],
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: [
         {
           loader: 'ng-annotate-loader',
           query: {
             add: true,
           },
         },
         'ts-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css/,
        loaders: [
          'style-loader',
          'css-loader',
        ]
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
    })
  ]
}
