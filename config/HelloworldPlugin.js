function HelloworldPlugin(options) {
  this.options = options;
}

HelloworldPlugin.prototype.apply = function(compiler) {
  var paths = this.options.path

  compiler.plugin('compilation', function(compilation, options) {
    compilation.plugin('html-webpack-plugin-before-html-processing', function(htmlPluginData, cb) {
      for (var i = 0; i < paths.length; i++) {
        htmlPluginData.assets.js.unshift(paths[i])
      }
      cb(null, htmlPluginData);
    })
  })
}

module.exports = HelloworldPlugin