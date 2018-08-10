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
    showErrToast:false, //接口服务器错误
    showDataErrToast:false, //服务器返回成功但数据错误
    errMsgText:"",
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
    [types.SHOW_ERR_TOAST](state,e){
      state.errMsgText= "【错误码:"+ e.response.status +"】"+ e.response.data.Message || "加载中..."
      state.showErrToast=true;
    },

  },
  getters: {

  },
  actions: {
    /*loading*/
    hideLoading:({commit})=>{
      commit(types.HIDE_LOADING)
    },
    showErrToast:({commit},e)=>{
      commit(types.SHOW_ERR_TOAST,e)
    },
    showLoading:({commit},t)=>{
      commit(types.SHOW_LOADING,t)
    },
  }
})
export default store
