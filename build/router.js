import Router from 'Router'

export default {
  install (Vue, options) {
    Vue.component('routerView', {
      data () {
        return {
          hasCached: [],  //页面是否已被加载过列表
          viewComponent: '', // 当前展示页面对象
          targetPath: '', // 当前路径
          pageList: {}, // 所有页面列表
          pageStack: [], // 页面栈
          beforeComponent: ''
        }
      },
      props: {
        enter: '',
        leave: ''
      },
      template: `
      <div>
      <transition
      :enter-active-class="enter"
      :leave-active-class="leave"
      >
        <component v-if="item" v-for="(item, index) in [viewComponent, beforeComponent]" :is="item"></component>
      </transition>
      </div>
      `,
      methods: {
        setPath (packages, modules, pages) {
          var path = `${packages}/${modules}/${pages}`
          this.pageList = require('routes').map((a) => {
            return `${a.package}/${a.module}/${a.page}`
          })
          if (this.pageList.includes(path)) {
            if (this.hasCached.includes(path)) {
              this.beforeComponent = this.viewComponent
              this.viewComponent = window.__pages[path].default
              this.targetPath = path
              this.addStack(path)
              setTimeout(() => {
                this.beforeComponent = ''
              },500)
            } else {
              this.loadPage(path).then(() => {
                this.beforeComponent = this.viewComponent
                this.viewComponent = window.__pages[path].default
                this.targetPath = path
                this.hasCached.push(path)
                this.addStack(path)
                setTimeout(() => {
                  this.beforeComponent = ''
                },500)
              }).catch(() => {
                history.back()
                throw Error('找不到该路由对应的页面！')
              })
            }
          } else {
            history.back()
            throw Error('找不到该路由对应的页面！')
          }
        },
        loadPage (path) {
          return new Promise((a, b) => {
            var script = document.createElement('script')
            script.type = 'text/javascript'
            script.onload = () => {
              a()
              document.body.removeChild(script)
            }
            script.onerror = (err) => {
              b(err)
              document.body.removeChild(script)
            }
            script.src = `${path}.js`
            document.body.appendChild(script)
          })
        },
        addStack (path) {
          var from = this.pageStack[this.pageStack.length - 1]
          var goback = this.pageStack.includes(path) //判断栈内是否有去向页面来判断动画
          if (goback) {
            this.pageStack = this.pageStack.slice(0, this.pageStack.indexOf(path) + 1) //返回并删除栈后的页面
          } else {
            this.pageStack.push(path) //压栈
          }
          console.log(this.pageStack)
          this.$router._beforeEach(path, from, goback)
        }
      },
      created () {
        options && (window.location = `#${options}`)
        setTimeout(() => {
          this.$router.$rt = Router({
            '/:package/:module/:page': this.setPath
          }).configure({
            notfound () {
              history.back()
              throw Error('路由路径错误！')
            }
          }).init()
          this.$router.go = (index) => {
            let position = this.pageStack.length + index -1 //计算返回在栈中位置
            let path = this.pageStack[position] //获取去向名
            if (path) {
              this.$router.push(path) //跳转至去向页面
            }
          }
        }, 100)
      }
    }),
    Vue.prototype.$router = {
      _beforeEach: (to, from, dirct) => {
      },
      push (e) {
        this.$rt.setRoute(e)
      },
      beforeEach (callback) {
        this._beforeEach = callback
      }
    }
  }
}
