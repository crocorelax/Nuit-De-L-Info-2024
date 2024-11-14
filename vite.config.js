// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('svg')
      .exclude.add(/\.svg$/)
      .end();
    config.module
      .rule('vue-svg-loader')
      .test(/\.svg$/)
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .end();
  }
};
