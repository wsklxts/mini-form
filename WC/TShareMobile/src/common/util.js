/**
 * Created by Administrator on 2018/8/7.
 */


export function getScrollTop(){
  var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
  if(document.body){
    bodyScrollTop = document.body.scrollTop;
  }
  if(document.documentElement){
    documentScrollTop = document.documentElement.scrollTop;
  }
  scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
  return scrollTop;
}

//文档的总高度

export function getScrollHeight(){
  var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
  if(document.body){
    bodyScrollHeight = document.body.scrollHeight;
  }
  if(document.documentElement){
    documentScrollHeight = document.documentElement.scrollHeight;
  }
  scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
  return scrollHeight;
}

//浏览器视口的高度

export function getWindowHeight(){
  var windowHeight = 0;
  if(document.compatMode == "CSS1Compat"){
    windowHeight = document.documentElement.clientHeight;
  }else{
    windowHeight = document.body.clientHeight;
  }
  return windowHeight;
}
//
//window.onscroll = function(){
////    if(getScrollTop() + getWindowHeight() == getScrollHeight()){
////    if(getScrollTop() + getWindowHeight() == getScrollHeight()){
////      console.log("已经到最底部了！!");
////    }
//};
