const merge = require('webpack-merge')
import { resolve } from 'path'

import { baseConfig } from './base'
import * as paths from './paths'

export const devConfig = merge(baseConfig, {
  output: {
    pathinfo: true,
    path: paths.dist,
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.html$/,
        loaders: [
          {
            loader: 'file-loader',
            query: {
              name: '[name].[ext]'
            },
          },
          'extract-loader',
          'html-loader',
        ],
        exclude: [
          /node_modules/,
          resolve(__dirname, '../src/index.html')
        ],
      },
      {
        test: /\.(gif|jpg|jpeg|png)/,
        loader: 'url-loader',
        exclude: /node_modules/
      },
    ]
  },
  devServer: {
    port: parseInt(process.env.PORT || 8080, 10),
    proxy: {
      '/api': {
        target: 'http://localhost:8998',
        secure: false
      }
    },
    historyApiFallback: true
  }
})
