import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import VueRouter from 'vue-router'
import routes from 'routes'
import stores from 'stores'
import {
  tPage,
  tHeader,
  tFlex,
  tGroup,
  tCell,
  sLogo,
  tPopup,
  tInput,
  tButton
} from 'components'

Vue.component('tPage', tPage)
Vue.component('tHeader', tHeader)
Vue.component('tFlex', tFlex)
Vue.component('tGroup', tGroup)
Vue.component('tCell', tCell)
Vue.component('sLogo', sLogo)
Vue.component('tPopup', tPopup)
Vue.component('tInput', tInput)
Vue.component('tButton', tButton)
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
