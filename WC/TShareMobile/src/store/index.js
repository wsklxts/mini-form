import Vue from 'vue'
import Vuex from 'vuex'
import setCookie from "@/common/setCookie"

Vue.use(Vuex)


let cookie=setCookie.getCookie("isAutoLogin")

const store = new Vuex.Store({
  state: {
    isLogin: cookie
  },
  mutations: {
    isAutoLogin(state,data){
      setCookie.setCookie("isAutoLogin",data,3)
      state.isLogin = data;

    }
  },
  getters: {
    "GET_MSG": function(state) {
      console.log('获取', state.user_name)
      return state.user_name
    }
  },
  actions: {
    "SET_MSG": function(state, user_name) {
      console.log('获取', state.user_name)
      store.commit("SET_MSG", user_name)
    }
  }
})
export default store
