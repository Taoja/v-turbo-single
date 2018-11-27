import pages from 'pages'
import splitter from 'vue-splitter/bin/splitter'

var routes = pages.map((a) => {
  var path = a.package + '/' + a.module + '/' + a.page
  return {
    path: '/' + path,
    name: path,
    component: () => {
      return splitter(path)
    }
  }
})
routes.push({
  path: '/',
  redirect: '/main/main/home'
})

window.__routes = routes