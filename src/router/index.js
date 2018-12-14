import splitter from 'vue-splitter/bin/splitter'

var routes = [{
    path: '/',
    redirect: '/main/main/home'
  },{
    path: '/main/main/home',
    name: '/main/main/home',
    component: () => {
      return splitter('main/main/home')
    }
  },{
    path: '/demo/demo/index',
    name: '/demo/demo/index',
    component: () => {
      return splitter('demo/demo/index')
    }
  }
]

export default routes