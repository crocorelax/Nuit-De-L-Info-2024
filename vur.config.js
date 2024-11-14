// vue.config.js
module.exports = {
    chainWebpack: config => {
      config.module
        .rule('svg')
        .test(/\.(svg)(\?v=\d+\.\d+\.\d+)?$/)
        .use('vue-svg-loader')
        .loader('vue-svg-loader');
    }
  }
  