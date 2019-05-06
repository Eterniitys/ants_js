import Vue from 'vue'
import Vuetify from './plugins/vuetify'
import App from './App.vue'
import store from './store'
import router from './router'
import Axios from 'axios'

Vue.config.productionTip = false

new Vue({
  store,
  Vuetify,
  router,
	Axios,
  render: h => h(App)
}).$mount('#app')
