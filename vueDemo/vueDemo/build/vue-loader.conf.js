'use strict'
const utils = require('./utils')
const config = require('../config')
const cssnext = require('postcss-cssnext')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

module.exports = {
  postcss: [cssnext()],
  // postcss: [
  //   require('autoprefixer')({
  //     browsers: ['last 2 versions']
  //   }),
  //   require('precss')({
  //     browsers: ['last 2 versions']
  //   })],
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
