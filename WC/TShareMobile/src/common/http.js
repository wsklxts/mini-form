/**
 * Created by Administrator on 2018/8/1.
 */



import axios from 'axios';
import router from '../router'
//axios.defaults.timeout = 5000;





if(process.env.NODE_ENV=="development"){
  axios.defaults.baseURL="api"
}else if(process.env.NODE_ENV=="production"){
  axios.defaults.baseURL = 'http://localhost:8001';
}





//http request 拦截器
axios.interceptors.request.use(
  config => {
    // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
    //config.data = JSON.stringify(config.data);
    console.log(config);
    config.headers = {
      'Content-Type':'application/x-www-form-urlencoded'
    }
    // if(token){
    //   config.params = {'token':token}
    // }
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);


//http response 拦截器
axios.interceptors.response.use(
  response => {
    console.log(response);
    if(response.data && response.data.data[1].isAutoLogin == "3"){
      router.replace({
        path: '/HelloWorld',
        query: {redirect: router.currentRoute.fullPath}
      })
    }


    return response;
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
  get: function(url,params={}){
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
  },
  post: function (url,data = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, data)
        .then(response => {
          resolve(response);
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
