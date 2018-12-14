import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router'
import stores from './store'

Vue.use(Vuex)
const store = new Vuex.Store(stores)

const router = new VueRouter({
  routes
})

window._vm = new Vue({
  el: '#entry',
  template: '<App />',
  store,
  router,
  components: {App}
})
