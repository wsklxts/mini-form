/**
 * Created by Administrator on 2018/9/24.
 */


export function show(filedsWrap,direction,u){
  //1、定义一片雪花模板

  var color=["red","orange","green","pink","blue","black","gray"]
  var flake= $('<p class="tinyBall"></p>')

  var endLeft =parseInt(Math.random()*100+(-50))
    var endTop =parseInt(Math.random()*100+(-50))

    //随机生成雪花下落持续时间
    //var durationTime = 5000 * Math.random();
    var durationTime =1000;

    //随机生成雪花下落 开始 时的透明度
    var startOpacity = 0.7 + 0.3 * Math.random();

    //随机生成雪花下落 结束 时的透明度
    var endOpacity = 0.2 + 0.2 * Math.random();

    //3、克隆一个雪花模板,定义雪花的初始样式，拼接到页面中

  flake.clone().appendTo($("body")).css({
      "left": direction==1 ? filedsWrap.offset().left+filedsWrap.width()/2 :u.originalPosition.left+u.item.width()/2,
      "top": direction==1 ? filedsWrap.offset().top+filedsWrap.height()/2 :u.originalPosition.top+u.item.height()/2,
      "background":color[parseInt(Math.random()*color.length-1)]
    })

  .animate({ //执行动画
      "left":direction==1 ? endLeft+filedsWrap.offset().left+filedsWrap.width()/2 :filedsWrap.offset().left+filedsWrap.width()/2,
      //"left":direction==1 ? $(window).width()/2 :filedsWrap.offset().left+filedsWrap.width()/2,
      //"opacity": endOpacity,
      "top": direction==1 ? endTop+filedsWrap.offset().top+filedsWrap.height()/2  :filedsWrap.offset().top+filedsWrap.height()/2,
      //"top": direction==1 ? $(window).height()/2  :filedsWrap.offset().top+filedsWrap.height()/2,
      }, durationTime, function() {
        $(this).remove();
        if(direction != 0){
          filedsWrap.remove()
      }
  });
}
