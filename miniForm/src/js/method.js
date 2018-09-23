/**
 * Created by Administrator on 2018/9/24.
 */



export function show(filedsWrap,direction){
  //1、定义一片雪花模板
  var flake = $("<div>").css({
    "position": "absolute",
    "color": "#000"
  }).html("❄");
  var color=["red","orange","yellow","green","pink","blue","black","gray"]
  flake= $('<p class="tinyBall" style="background:#000"></p>')


  //定义生成一片雪花的毫秒数
  var millisec = 180;

  var vanish=2000
  //2、设置第一个定时器，周期性定时器，每隔一段时间（millisec）生成一片雪花；
  var timer=setInterval(function() {
    //随机生成雪花下落 开始 时left的值，相当于开始时X轴的位置
    var startLeft = Math.random() * 10;
    setTimeout(()=>{
      clearInterval(timer)
      if(direction != 0){
        filedsWrap.remove()
      }
    },vanish)
    //随机生成雪花下落 结束 时left的值，相当于结束时X轴的位置
    //var endLeft = Math.random() * 300;
    var endLeft =parseInt(Math.random()*50+(-25))
    var endTop =parseInt(Math.random()*50+(-25))

    //随机生成雪花下落持续时间
    //var durationTime = 5000 * Math.random();
    var durationTime =1000;

    //随机生成雪花下落 开始 时的透明度
    var startOpacity = 0.7 + 0.3 * Math.random();

    //随机生成雪花下落 结束 时的透明度
    var endOpacity = 0.2 + 0.2 * Math.random();

    //3、克隆一个雪花模板,定义雪花的初始样式，拼接到页面中

    //console.log(filedsWrap.width()/2);
    flake.clone().appendTo(filedsWrap).css({
      //"left": direction==1 ? filedsWrap.width()/2 :endLeft,
      "left": direction==1 ? filedsWrap.width()/2 :endLeft,
      "opacity": startOpacity,
      //"font-size": flakeSize,
      "top": direction==1 ? filedsWrap.height()/2 :endTop,
      "background":color[parseInt(Math.random()*color.length-1)]
    }).animate({ //执行动画
      "left":direction==1 ? endLeft :filedsWrap.width()/2,
      "opacity": endOpacity,
      "top": direction==1 ? endTop :filedsWrap.height()/2,
    }, durationTime, function() {
      $(this).remove();
    });
  }, millisec);

  return vanish

}
