import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vuex from 'vuex'

import createStore from './store/store.js'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuex)
const store = createStore()
window.store = store
new Vue({
  render: h => h(App),
  store
}).$mount('#app')
