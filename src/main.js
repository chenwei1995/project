// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://dev.fenzhitech.com/wbuild-gateway-pc'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  beforeCreate () {
    console.log(this.$router.history.current)
    let path = this.$router.history.current.path
    if (window.localStorage.getItem('token')) {
      if (path === '/') {
        this.$router.push('/index')
      }
    }
    if (!window.localStorage.getItem('token')) {
      this.$router.push('/')
    }
  },
  template: '<App/>',
  components: { App }
})
