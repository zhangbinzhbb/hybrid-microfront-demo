import Vue from 'vue'
import Element from 'element-ui'

import App from './App'
import router from './router'

new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
})
