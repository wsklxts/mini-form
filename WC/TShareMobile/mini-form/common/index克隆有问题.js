/**
 * Created by Administrator on 2018/9/5.
 */



$(function(){

  //mini.parse();



  var control = document.getElementsByClassName('controlsWrap')[0];
  var formBuild = document.getElementsByClassName('formBuild')[0];
  var test = document.getElementsByClassName('test')[0];
  //var mini = document.getElementsByClassName('mini-panel-body')[0];

  var clone=null
  var before=null
  var buttonWrapS=false
  var button=null
  var placeholderIndex

  $(formBuild).sortable({
    opacity: 0.9,
    connectWith: $(formBuild),
    cursor: 'move',
    placeholder: 'controlP',
    revert: 150,

    start:function(event,ui){
      console.log("start");
      $(".buttonWrap").css("display","none")
      buttonWrapS=true
    },
    beforeStop: (evt, ui) => (evt, ui),
    distance: 3,
    update: function(event, ui) {

    },
    stop:function(){
      buttonWrapS=false
    }
  })
  var toCancel

  $(control).sortable({
    helper:"clone",
    opacity: 0.9,
    connectWith: $(formBuild),
    scroll: false,
    cursor: 'move',
    placeholder: 'controlP',
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
      placeholderIndex=u.placeholder.index();
    },
    distance: 3,
    update: function(event, ui) {
      if(ui.item.parent()[0] === formBuild){
        makeControl(ui)
        mini.parse();
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
    console.log(miniC);
    var filedsWrap=$("<li class='filed'></li>")
    var fields=$(`<div class=${miniC.name}> </div>`)
    var lable=null
    button=$("<div class='buttonWrap'><div class='buttonadd'>+</div>  <div class='buttonsub'>-</div> </div>")
    switch(miniC.name){
      case "mini-textbox":
        fields.attr("emptyText","请输入")
        lable=$('<lable>单行输入框：</lable>')
        break;
      case "mini-textarea":
        fields.attr("emptyText","请输入")
        lable=$('<lable>多行输入框：</lable>')
        break;
      case "mini-radiobuttonlist":
        fields.attr("data",'[{text:"选项1",id:1},{text:"选项2",id:2},{text:"选项3",id:3}]')
        lable=$('<lable>单选框：</lable>')
        break;
      case "lineFeedBtn":
        fields=$(`<div class="brWrap"></div>`)
        var br=$("<br />")
        filedsWrap.addClass("lineFeed")
        break;
    }

    if(br){
      filedsWrap.append(lable,button ,fields,br)
    }else{
      filedsWrap.append(lable,button ,fields)
    }

    filedsWrap.on("click",".buttonadd, .buttonsub",function(){

      if($(this).hasClass("buttonadd")){
        var fieldClone= $(this).parent().parent("li").clone(true)
        
        fieldClone.children(".buttonWrap").css("display","none")
        $(this).parent().parent("li").after(fieldClone)
        mini.parse();
      }
      if($(this).hasClass("buttonsub")){
        $(this).parent().parent().remove()
      }
    })


    if($('> li', $(formBuild)).size() === 0){
      $(formBuild).append(filedsWrap)
    }else{
      if(placeholderIndex==1){
        $('> li', $(formBuild))
          .eq(placeholderIndex-1).before(filedsWrap)
      }else{
        $('> li', $(formBuild))
          .eq(placeholderIndex-2).after(filedsWrap)
      }
    }
  }

  $(formBuild).on("mouseover",".filed",function(e){
    if(!buttonWrapS){
      $(this).children(".buttonWrap").css("display","block")
    }
  })
  $(formBuild).on("mouseout",".filed",function(e){
    $(this).children(".buttonWrap").css("display","none")
  })



})
