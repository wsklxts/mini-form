// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import App from './App'
import axios from 'axios'
import router from './router'



Vue.config.productionTip = false

if(process.env.NODE_ENV=="development"){
  axios.defaults.baseURL="api"
}else if(process.env.NODE_ENV=="production"){
  axios.defaults.baseURL = 'http://localhost:8001/MobileService/Web/WebPage';
}



console.log(process.env.NODE_ENV);
//var root = process.env.API_ROOT


/* eslint-disable no-new */


Vue.prototype.axios=axios

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

