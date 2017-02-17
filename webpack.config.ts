import { devConfig, prodConfig } from './build'
import { resolver } from './env'
const webpack = require('webpack')
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


export default env => {
  let config = devConfig
  const environment = resolver(env)

  if(environment.isProd())
    config = prodConfig

  return config
}
