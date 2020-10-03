// vue.config.js
module.exports = {
  chainWebpack: config => {
    // Inline SVGs
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
    .use('babel-loader')
    .loader('babel-loader')
    .end()
    .use('vue-svg-loader')
    .loader('vue-svg-loader');
  }
};
