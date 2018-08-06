import Vue from 'vue'
import Vuex from 'vuex'
import setCookie from "@/common/setCookie"
import * as types from './type'

Vue.use(Vuex)


let cookie=setCookie.getCookie("isAutoLogin")

const store = new Vuex.Store({
  state: {
    userInfo:{
      global_empname:""
    },
    isLogin: cookie,
    loading:false,
    loadingText:"加载中...",
  },
  mutations: {
    isAutoLogin(state,data){
      setCookie.setCookie("isAutoLogin",data,3)
      state.isLogin = data;
    },
    userInfo(state,data){
      state.userInfo.global_empname=data
    },

    /*loading*/
    [types.HIDE_LOADING](state){
      state.loading=false;
    },
    [types.SHOW_LOADING](state,t){
      state.loadingText= t || "加载中..."
      state.loading=true;
    },
  },
  getters: {

  },
  actions: {
    /*loading*/
    hideLoading:({commit})=>{
      commit(types.HIDE_LOADING)
    },
    showLoading:({commit},t)=>{
      commit(types.SHOW_LOADING,t)
    },
  }
})
export default store
