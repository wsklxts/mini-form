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
    activate:function(){
      console.log("activate");
    },
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
    createCDom(u)
  }

  var filedsWrap

  function createCDom(u){
    var type=$(u.item).attr("id");
    var miniC=mini.get(type)
    filedsWrap=$("<li class='filed'></li>")
    var fields=$(`<div class=${miniC.name}> </div>`)
    var lable=null
    button=$("<div class='buttonWrap'> <div class='mini-button buttonedit' iconCls='icon-edit'></div>  <div class='buttonadd mini-button' iconCls='icon-add'></div>  <div class='buttonsub mini-button' iconCls='icon-remove'></div> </div>")
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
      case "mini-checkboxlist":
        fields.attr("data",'[{text:"选项1",id:1},{text:"选项2",id:2},{text:"选项3",id:3}]')
        lable=$('<lable>多选框：</lable>')
        break;
      case "mini-combobox":
        fields.attr("data",'[{text:"选项1",id:1},{text:"选项2",id:2},{text:"选项3",id:3}]')
        fields.attr("value",'2')
        lable=$('<lable>下拉框：</lable>')
        break;
      case "mini-datepicker":
        fields.attr("format",'yyyy-MM-dd H:mm:ss')
        fields.attr("showTime",'true')
        lable=$('<lable>日期：</lable>')
        break;
      case "mini-fileupload":
        fields.attr("flashUrl",'common/swfupload/swfupload.swf')
        lable=$('<lable>文件上传：</lable>')
        break;
    }

    if(br){
      filedsWrap.append(lable,button ,fields,br)
    }else{
      filedsWrap.append(lable,button ,fields)
    }

    addEventAc(u,filedsWrap)
    sortC(filedsWrap)
    return filedsWrap
  }

  function addEventAc(u,filedsWrap){
    filedsWrap.on("mouseover",function(e){
      if(!buttonWrapS){
        $(this).children(".buttonWrap").css("display","block")
      }
    })
    filedsWrap.on("mouseout",function(e){
        $(this).children(".buttonWrap").css("display","none")
    })


    filedsWrap.on("click",function(e){
      console.log($(this));
      makeFeildAttr($(this))
    })



    filedsWrap.on("click",".buttonadd, .buttonsub",function(){
      if($(this).hasClass("buttonadd")){
        var cDom=createCDom(u)
        $(this).parent().parent("li").after(cDom)
        mini.parse();
      }
      if($(this).hasClass("buttonsub")){
        $(this).parent().parent().remove()
      }
      if($(this).hasClass("buttonedit")){

      }
    })
  }

  function sortC(filedsWrap){
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
    mini.parse();
  }

  function makeFeildAttr(f){
    console.log(f);
    var fAValue=$(".formAttribute").children(".fieldName").children("input")
    var fName=f.children("lable").text();
    fAValue.val(fName)

    listenAttr(f)
    //console.log(fAValue);
  }

  function listenAttr(f){

    var fAValue=$(".formAttribute").children(".fieldName").children("input")
    var fName=f.children("lable").text();
    fAValue.on("input onpropertychange ",function(){
      f.children("lable").text($(this).val());
    })
  }






  $(".delAll").on("click",function(){
    $(formBuild).empty()
  })


})
