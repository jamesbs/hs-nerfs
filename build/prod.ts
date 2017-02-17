const merge = require('webpack-merge')
import { resolve } from 'path'

import { baseConfig } from './base'
import * as paths from './paths'

export const prodConfig = merge(baseConfig, {
  output: {
    path: paths.dist,
  },

  module: {
    loaders: [
      {
        test: /\.html$/,
        loaders: [
          'ngtemplate-loader',
          'html-loader',
        ],
        exclude: [
          /node_modules/,
          resolve(__dirname, '../src/index.html')
        ],
      },
      {
        test: /\.(gif|jpg|jpeg|png)/,
        loaders: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            query: {
              progressive: true,
              optimizationLevel: 1,
              interlaced: true,
            }
          }
        ],
        exclude: /node_modules/
      },
    ]
  }
})
