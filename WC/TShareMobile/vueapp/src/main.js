// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import App from './App'
import axios from 'axios'
import router from './router'
import {$http} from './common/http'
import FastClick from 'fastclick'
import "../static/common.css"
import "@/common/fontSize"


FastClick.attach(document.body);

Vue.config.productionTip = false




/* eslint-disable no-new */


Vue.prototype.$http=$http

new Vue({
  el: '#app',
  data:{v:new Vue()},
  router,
  store,
  components: { App },
  template: '<App/>'
})


//
//
//v.$nextTick(()=>{
//})

