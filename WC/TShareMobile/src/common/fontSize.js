/**
 * Created by Administrator on 2018/6/29.
 */
(function() {
  var newRem = function() {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 720*100 + "px";
  };
  window.addEventListener('resize', newRem, false);
  newRem();
})();
