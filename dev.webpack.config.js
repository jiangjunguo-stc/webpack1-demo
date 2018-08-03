const path = require('path')
const merge = require('merge')
const webpack = require('webpack')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const baseWebpackConfig = require('./base.webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HelloworldPlugin = require('./config/helloworldPlugin')

const HOST = '127.0.0.1'
const PORT = 12301

const createNotifierCallback = () => {
  // const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()
    console.log(filename)
    // notifier.notify({
    //   title: packageConfig.name,
    //   message: severity + ': ' + error.name,
    //   subtitle: filename || '',
    //   icon: path.join(__dirname, 'logo.png')
    // })
  }
}

const devWebpackConfig = merge(baseWebpackConfig, {
  // cheap-module-eval-source-map is faster for development
  devtool: 'cheap-module-eval-source-map',  // 映射关系
  devServer: {
    clientLogLevel: 'warning', // 日志等级，启动时
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join('/', 'index.html') } // path.posix 完整路径 任意的 404 响应可以提供为 index.html 页面
      ]
    },
    hot: true,
    contentBase: false,
    compress: true,
    host: HOST,
    port: PORT,
    open: true,    // 启动完成自动打开页面
    overlay: true, // 报错显示
    publicPath: '/',
    proxy: {},     // 配置别名代理 { /api: 'http://localhost:3000' }
    quiet: true,   // 静默错误loader
    watchOptions: {
      poll: true   // 监控
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    new HelloworldPlugin({
      path: ['//g.alicdn.com/platform/c/??babel-polyfill/6.26.0/dist/polyfill.min.min.js,fastclick/1.0.6/lib/fastclick.min.js']
    }),
    new ExtractTextPlugin('app.css'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [`Your application is running here: http://${HOST}:${PORT}`],
      },
      onErrors: createNotifierCallback()
    })
  ]
})

module.exports = devWebpackConfig