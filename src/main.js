import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './plugins'
import store from './store'
import axios from 'axios'
import { sync } from 'vuex-router-sync'

Vue.config.productionTip = false

sync(store, router)

window.axios = axios

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
}).$mount('#app')
