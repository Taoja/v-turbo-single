import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from '../build/router'
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
Vue.use(router, '/main/main/home')
const store = new Vuex.Store(stores)

window._vm = new Vue({
  el: '#entry',
  template: '<App />',
  store,
  components: {App}
})
