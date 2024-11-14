// vue.config.js
module.exports = {
  chainWebpack: config => {
    // Utilisation de vue-svg-loader pour tous les fichiers .svg
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
