import splitter from 'dividing/bin/splitter'

var routes = [{
    path: '/',
    redirect: '/hello/turbo/index'
  },{
    path: '/hello/turbo/index',
    name: '/hello/turbo/index',
    component: () => {
      return splitter('hello/turbo/index')
    }
  }
]

export default routes