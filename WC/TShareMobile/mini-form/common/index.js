/**
 * Created by Administrator on 2018/9/5.
 */




$(function(){

  mini.parse();



  var control = document.getElementsByClassName('controlsWrap')[0];
  var formBuild = document.getElementsByClassName('formBuild')[0];
  var test = document.getElementsByClassName('test')[0];
  //var mini = document.getElementsByClassName('mini-panel-body')[0];

  var clone=null
  var before=null

  $(formBuild).sortable({
    opacity: 0.9,
    connectWith: $(formBuild),
    cancel: '',
    cursor: 'move',
    placeholder: '',
    revert: 150,
    beforeStop: (evt, ui) => (evt, ui),
    distance: 3,
    update: function(event, ui) {

    },
  })
  var toCancel

  $(control).sortable({
    helper:"clone",
    opacity: 0.9,
    connectWith: $(formBuild),
    scroll: false,
    cursor: 'move',
    placeholder: '',
    start:function(event,ui){
      console.log("start");
      ui.item.show().addClass('moving')
      tt=ui.item.parent()
      toCancel=true
    },
    stop:function(e,u){
      console.log("stop");
      tt.sortable("cancel")
    },
    revert: 150,
    beforeStop: function(e,u){
      console.log("beforeStop");
      toCancel=false
    },
    distance: 3,
    update: function(event, ui) {
      if(ui.item.parent()[0] === formBuild){
        makeControl(ui)
      }
    },
    over:function(e,u){
      console.log("over");
    },
  })

  function makeControl(u){
    console.log(u);
    var type=$(u.item).attr("id");
    var miniC=mini.get(type)
    var filedsWrap=$("<li></li>")
    var fields=$(`<div class=${miniC.name}> </div>`)
    var attrs={}
    var button=$("<div class='buttonWrap'><div class='buttonadd'>+</div>  <div class='buttonsub'>-</div> </div>")
    switch(miniC.name){
      case "mini-textbox":
        fields.attr("emptyText","请输入")
        attrs.lable=$('<lable>单行输入框：</lable>')
        break;
      case "mini-textarea":
        fields.attr("emptyText","请输入")
        attrs.lable=$('<lable>多行输入框：</lable>')
        break;
      case "mini-radiobuttonlist":
        fields.attr("data",'[{text:"选项1",id:1},{text:"选项2",id:2},{text:"选项3",id:3}]')
        attrs.lable=$('<lable>单选框：</lable>')
        break;
      case "lineFeed":
        console.log(u.item[0]);
        $(formBuild).append($(u.item[0]).clone())
        break;
    }




    filedsWrap.hover(function(e){
      console.log($(this));
      button.css("display","block")
    },function(){
      button.css("display","none")
    })
    filedsWrap.on("click",".buttonadd, .buttonsub",function(){
      if($(this).hasClass("buttonadd")){

      }
      if($(this).hasClass("buttonsub")){

      }
    })



    //$(formBuild).append(filedsWrap)


    mini.parse();
  }



})
