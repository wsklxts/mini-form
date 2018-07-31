'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: '"http://localhost:8001/api"',
  proxyTable: {
    '/api': {
      target: 'http://localhost:8001/MobileService/Web/WebPage',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }
  },
})
