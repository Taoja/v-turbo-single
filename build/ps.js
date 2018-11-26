const path = require('path')
const config = require('../webpack.config')
const { packages, pages } = require('./fs.js')
function resolve (e) {
  return path.resolve(config.dir, e)
}
const packageList = function (e) {
  if (e.length === 0) {
    e = packages
  }
  var package = {}
  pages.forEach(function (a) {
    if (e.includes(a.package)) {
      package[`${a.package}/${a.module}/${a.page}`] = resolve(`src/modules/${a.package}/${a.module}/${a.page}/index.js`)
    }
  })

  package['js/stores'] = resolve('src/store/index.js')
  package['js/routes'] = resolve('src/router/index.js')
  package['js/main'] = resolve('src/index.js')
  package['js/components'] = resolve('src/components/index.js')
  return package
}

module.exports = packageList
