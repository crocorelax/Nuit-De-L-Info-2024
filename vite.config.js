// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('svg')
      .test(/\.svg$/)
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .options({
        svgo: {
          plugins: [
            { removeTitle: true },
            { removeDimensions: true },
            { cleanupIDs: false }
          ]
        }
      });
  }
};
