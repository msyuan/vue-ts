/*
 * @Description:
 * @Author: your name
 * @Date: 2020-06-05 10:58:22
 * @LastEditTime: 2020-08-23 11:26:40
 * @LastEditors: Please set LastEditors
 * @FilePath: \vuets\vue.config.js
 */
const path = require('path')
const resolve = function(dir) {
  return path.join(__dirname, dir)
}
// const webpack = require('webpack')

const isProd = process.env.NODE_ENV === 'production'
const isDev = process.env.NODE_ENV === 'development'
/* const productionGzipExtensions = ['js', 'css']
const CompressionWebpackPlugin = require('compression-webpack-plugin') */
const extensionsValue = ['.ts', '.tsx', '.js', '.vue', '.json']

module.exports = {
  publicPath: isProd ? './' : '/',
  // outputDir: "dist",
  assetsDir: 'static',
  lintOnSave: true, // 是否开启eslint保存检测
  productionSourceMap: false, // 是否在构建生产包时生成sourcdeMap
  chainWebpack: config => {
    // 修复HMR
    // config.resolve.symlinks(true)
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@v', resolve('src/views'))
      .set('@c', resolve('src/components'))
      .set('@u', resolve('src/utils'))
      .set('@s', resolve('src/service'))
    // config.optimization.runtimeChunk("single")
    config.optimization.minimizer('terser').tap((args) => {
      // 去除生产环境console
      args[0].terserOptions.compress.drop_console = true
      return args
    })
    // 生产环境
    if (isProd) {
      // 打包生产.gz压缩包
      config.plugins.push(new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240, // 对超过10k的数据压缩
        minRatio: 0.8,
        deleteOriginalAssets: false // 不删除源文件
      }))
    }
  },
 	// 如果你需要基于环境有条件地配置行为, 通过这个，你可以直接修改配置，会通过webpack-merge 合并到最终的配置中
  configureWebpack: config => {
    config.resolve.extensions = extensionsValue // 可不写的扩展名
    // config.plugins.push(
    // 	new webpack.HotModuleReplacementPlugin()
    // )
  },
  devServer: {
    host: '0.0.0.0',
    port: '8085',
    hot: true,
    open: true,
    overlay: {
      warning: false,
      error: true
    },
    // 跨域代理
    proxy: {
		  '/users': {
        // 目标代理服务器地址
        target: 'http://192.168.2.102:3000/users',
        // 允许跨域
        changeOrigin: true,
        ws: true
        // pathRewrite: {
        // 	"^/api": ""
        // }
		  }
    }
  },
  // css相关配置
  css: {
		 // 是否启用CSS modules
		 // modules: true,
    // 是否使用css分离插件 ExtractTextPlugin  -vue-cli3默认true, 是分隔的
    // extract: true
    // 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能
    // sourceMap: false,
    // 向 CSS 相关的 loader 传递选项(支持 css-loader postcss-loader sass-loader less-loader)
		 // loaderOptions: { css: {}, less: {} }

  },

  // 可以用来传递任何第三方插件选项
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: undefined,
      patterns: []
    }
  }
};
