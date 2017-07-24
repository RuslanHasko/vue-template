import Vue from 'vue'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'

import App from './App'
import router from './router/index'
import store from './store/store'

Vue.config.productionTip = false

Vue.use(Router)
sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
