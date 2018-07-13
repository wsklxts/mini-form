/**
 * Created by Administrator on 2018/6/29.
 */
(function() {
  var newRem = function() {
    //var html = document.documentElement;
    //console.log(html.getBoundingClientRect().width/16);
    //html.style.fontSize = html.getBoundingClientRect().width / 16 + 'px';
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 720*100 + "px";
    alert(document.documentElement.clientWidth);
  };
  window.addEventListener('resize', newRem, false);
  newRem();
})();
