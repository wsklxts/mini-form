/**
 * Created by Administrator on 2018/8/1.
 */



import axios from 'axios';
import router from '../router'
import stores from "../store"
//axios.defaults.timeout = 5000;





if(process.env.NODE_ENV=="development"){
  axios.defaults.baseURL="api"
}else if(process.env.NODE_ENV=="production"){
  axios.defaults.baseURL = 'http://localhost:8001';
}


let ContentType="application/json"
var instance = axios.create({
  headers:{
    //'Content-type': ContentType
  },
});



//http request 拦截器
axios.interceptors.request.use(
  config => {
    // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
    //config.data = JSON.stringify(config.data);
    //config.headers = {
    //  'Content-Type':'application/x-www-form-urlencoded'
    //}
    // if(token){
    //   config.params = {'token':token}
    // }
    //stores.dispatch('showLoading')
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);


//http response 拦截器
axios.interceptors.response.use(
  response => {

    //if(response.data!=="" && response.data.data[1].isAutoLogin == "3"){
    //  router.replace({
    //    path: '/HelloWorld',
    //    query: {redirect: router.currentRoute.fullPath}
    //  })
    //
    //}
    //setTimeout(function(){
    //  console.log(3);
    //  stores.dispatch('hideLoading')
    //  //return response;
    //},2000)

    setTimeout(function(){
      stores.dispatch('hideLoading')
    },500)
    return response;
    //stores.dispatch('hideLoading')

  },
  error => {
    return Promise.reject(error)
  }
)

//export {axios}

/**
 * 封装get post方法
 * @param url
 * @param data
 * @returns {Promise}
 */




export const $http = {
  _paramFormat:function(c){
    return{
      contentType:c && c.ContentType? c.ContentType : "application/json",
      loading:c && c.loading ? c.loading : ""
    }
  },
  get: function(url,params={},config){
    const orm = this._paramFormat(config)
    stores.dispatch('showLoading',orm.loading)
    return new Promise((resolve,reject) => {
      axios.get(url,{params:params},{ headers:{"Content-Type":orm.contentType}})
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  post: function (url,data = {},config) {
    const orm = this._paramFormat(config)
    stores.dispatch('showLoading',orm.loading)
    return new Promise((resolve, reject) => {
      axios.post(url, data,{ headers:{"Content-Type":orm.contentType}})
        .then(response => {
          setTimeout(function(){
            resolve(response);
          },300)
        }, err => {
          reject(err)
        })
    })
  },

}




export function fetch(url,params={}){
  return new Promise((resolve,reject) => {
    axios.get(url,{
        params:params
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.post(url,data)
      .then(response => {
        resolve(response.data);
      },err => {
        reject(err)
      })
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.patch(url,data)
      .then(response => {
        resolve(response.data);
      },err => {
        reject(err)
      })
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.put(url,data)
      .then(response => {
        resolve(response.data);
      },err => {
        reject(err)
      })
  })
}
