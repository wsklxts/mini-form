/**
 * Created by Administrator on 2018/7/27.
 */



const setCookie={
  getCookie:function(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
    return (arr[2]);
  else
    return null;
  },
  setCookie:function(c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
  },
  delCookie:function (name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = this.setCookie(name);
    if (cval != null)
      document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
  }
}

export default setCookie


//获取cookie、
//export function getCookie(name) {
//  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
//  if (arr = document.cookie.match(reg))
//    return (arr[2]);
//  else
//    return null;
//}
//
////设置cookie,增加到vue实例方便全局调用
//export function addCookie (c_name, value, expiredays) {
//  var exdate = new Date();
//  exdate.setDate(exdate.getDate() + expiredays);
//  document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
//};
//
////删除cookie
//export function delCookie (name) {
//  var exp = new Date();
//  exp.setTime(exp.getTime() - 1);
//  var cval = getCookie(name);
//  if (cval != null)
//    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
//};
