// module.exports={
//   //入口文件的配置项
//   entry:{},
//   //出口文件的配置项
//   output:{},
//   //模块：例如解读CSS,图片如何转换，压缩
//   module:{},
//   //插件，用于生产模版和各项功能
//   plugins:[],
//   //配置webpack开发服务功能
//   devServer:{}
// }


const path = require('path')    // 配置资源路径

function resolve (dir) {
  return path.join(__dirname, './', dir)
}

module.exports = {
  context: path.resolve(__dirname, './'),  // 主路径
  entry: {
    app: './src/main.js'  // 支持多入口, 还可以支持动态配置
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',   // name根据入口key匹配
    publicPath: '/'
  },
  resolve: {
    extensions: [' ', '.js', '.json'], // 忽略后缀名
    alias: {
      '@': resolve('src') // 设置别名
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src')]
      }
    ]
  }
}