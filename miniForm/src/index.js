/**
 * Created by Administrator on 2018/9/5.
 */



//import DB from "./js/dataBind.js"
////import attrTemplate from "./js/attrTemplate"
//import attrEvent from "./js/attrEvent"
//import fieldTemplate from "./js/fieldTemplate"
//import fieldTemplateEvent from "./js/fieldTemplateEvent"
//import dragInsert from "./js/dragInsert"
import {G} from "./js/globle"
import createCDom from "./js/createCDom"
import sortable from "./js/sortable"


let data = G.formData

$(function(){

  sortable()


  var save = mini.get("onSave");

  save.on("click",function(){
    console.log(data);
  })

  //
  //var buttonWrapS= G.buttonWrapS
  //var clone=null
  //var before=null
  //var button=null
  //var placeholderIndex
  //var filedId=0
  //var tt
  //
  // let formAttribute = $(".formAttribute")
  // let formBuild = $(".formBuild");
  // let control = $(".controlsWrap");
  //
  //formBuild.sortable({
  //  opacity: 0.9,
  //  connectWith: formBuild,
  //  cursor: 'move',
  //  placeholder: 'controlP',
  //  revert: 150,
  //  activate:function(){
  //    console.log("activate");
  //  },
  //  start:function(event,ui){
  //    console.log("formBuild.start");
  //    $(".buttonWrap").css("display","none")
  //    buttonWrapS=true
  //  },
  //  beforeStop: (evt, ui) => (evt, ui),
  //  distance: 3,
  //  update: function(event, ui) {
  //
  //  },
  //  stop:function(){
  //    console.log("formBuild.stop");
  //    buttonWrapS=false
  //  }
  //})
  //var toCancel
  //
  //control.sortable({
  //  helper:"clone",
  //  opacity: 0.9,
  //  connectWith: formBuild,
  //  scroll: false,
  //  cursor: 'move',
  //  placeholder: 'controlP',
  //  start:function(event,ui){
  //    console.log("start");
  //    ui.item.show().addClass('moving')
  //    tt=ui.item.parent()
  //    toCancel=true
  //  },
  //  stop:function(e,u){
  //    console.log("stop");
  //    tt.sortable("cancel")
  //  },
  //  revert: 150,
  //  beforeStop: function(e,u){
  //    console.log("beforeStop");
  //    toCancel=false
  //    G.placeholderIndex=u.placeholder.index();
  //  },
  //  distance: 3,
  //  update: function(event, ui) {
  //    if(ui.item.parent()[0] === formBuild.get(0)){
  //      createCDom(ui)
  //      mini.parse();
  //    }
  //  },
  //  over:function(e,u){
  //    console.log("over");
  //  },
  //})





  //var i=0


  //function createCDom(u){
  //
  //  var type=$(u.item).attr("id");
  //  var miniC=mini.get(type)
  //  var filedsWrap=$("<li class='filed'></li>")
  //  var fields=$(`<div class=${miniC.name}> </div>`)
  //  var fieldData={}
  //  var lable=null
  //  button=$("<div class='buttonWrap'> <div class='mini-button buttonedit' iconCls='icon-edit'></div>  <div class='buttonadd mini-button' iconCls='icon-add'></div>  <div class='buttonsub mini-button' iconCls='icon-remove'></div> </div>")
  //
  //
  //  new fieldTemplate(u,filedsWrap,fields);
  //  fieldTemplateEvent(u,filedsWrap,fields,buttonWrapS,formAttribute)
  //  dragInsert(filedsWrap)
  //
  //
  //  //switch(miniC.name){
  //  //  case "mini-textbox":
  //  //    fields.attr("emptyText","请输入")
  //  //    fields.attr("id","cText"+ (i+=1))
  //  //    filedsWrap.addClass("text")
  //  //    lable=$('<lable>单行输入框：</lable>')
  //  //    filedsWrap.data("caption",lable.text())
  //  //    filedsWrap.data("placeholder",fields.attr("emptyText"))
  //  //    break;
  //  //  case "mini-textarea":
  //  //    fields.attr("emptyText","请输入")
  //  //    filedsWrap.addClass("textarea")
  //  //    lable=$('<lable>多行输入框：</lable>')
  //  //    filedsWrap.data("caption",lable.text())
  //  //    filedsWrap.data("placeholder",fields.attr("emptyText"))
  //  //    break;
  //  //  case "mini-radiobuttonlist":
  //  //    fields.attr("data",'[{text:"选项1",id:1},{text:"选项2",id:2},{text:"选项3",id:3}]')
  //  //    filedsWrap.addClass("radio")
  //  //    lable=$('<lable>单选框：</lable>')
  //  //    break;
  //  //  case "lineFeedBtn":
  //  //    fields=$(`<div class="brWrap"></div>`)
  //  //    var br=$("<br />")
  //  //    filedsWrap.addClass("lineFeed")
  //  //    break;
  //  //  case "mini-checkboxlist":
  //  //    fields.attr("data",'[{text:"选项1",id:1},{text:"选项2",id:2},{text:"选项3",id:3}]')
  //  //    filedsWrap.addClass("checkbox")
  //  //    lable=$('<lable>多选框：</lable>')
  //  //    break;
  //  //  case "mini-combobox":
  //  //    fields.attr("data",'[{text:"选项1",id:1},{text:"选项2",id:2},{text:"选项3",id:3}]')
  //  //    fields.attr("value",'2')
  //  //    filedsWrap.addClass("combobox")
  //  //    lable=$('<lable>下拉框：</lable>')
  //  //    break;
  //  //  case "mini-datepicker":
  //  //    fields.attr("format",'yyyy-MM-dd H:mm:ss')
  //  //    fields.attr("showTime",'true')
  //  //    filedsWrap.addClass("datepicker")
  //  //    lable=$('<lable>日期：</lable>')
  //  //    break;
  //  //  case "mini-htmlfile":
  //  //    filedsWrap.addClass("fileupload")
  //  //    lable=$('<lable>文件上传：</lable>')
  //  //    alert(1)
  //  //    break;
  //  //}
  //
  //  //filedsWrap.data("id",filedId+=1)
  //
  //  //if(br){
  //  //  filedsWrap.append(lable,button ,fields,br)
  //  //}else{
  //  //  filedsWrap.append(fieldsub)
  //  //}
  //  //console.log(fields);
  //  //addEventAc(u,filedsWrap,fields)
  //  //sortC(filedsWrap)
  //  //return filedsWrap
  //}


  //var timer=null
  //function addEventAc(u,filedsWrap,fields){
  //  filedsWrap.on("mouseover",function(e){
  //    if(!buttonWrapS){
  //      $(this).children(".buttonWrap").css("display","block")
  //    }
  //  })
  //  filedsWrap.on("mouseout",function(e){
  //      $(this).children(".buttonWrap").css("display","none")
  //  })
  //
  //  function exeTime(f,s){
  //    var color=["red","pink","blue","black","gray"]
  //    timer=setInterval(function(){
  //      f.css(s,color[parseInt(Math.random()*(color.length-1))])
  //    },300)
  //  }
  //  filedsWrap.on("click",function(e){
  //    e.stopPropagation()
  //    if(filedsWrap.hasClass("lineFeed")){
  //      clearInterval(timer)
  //      //filedsWrap.parent().children("li").children(".brWrap").css("background","#afd6f3")
  //      filedsWrap.parent().children("li").removeClass("active")
  //      exeTime(filedsWrap.children(".brWrap"),"background")
  //
  //    }else{
  //      clearInterval(timer)
  //      filedsWrap.parent().children("li").removeClass("active")
  //      filedsWrap.addClass("active")
  //      exeTime(filedsWrap,"border-color")
  //      makeFeildAttr($(this),fields)
  //    }
  //  })
  //
  //  $(formBuild).on("click",function(){
  //    filedsWrap.parent().children("li").removeClass("active")
  //    $(".mini-panel-body").empty()
  //    clearInterval(timer)
  //  })
  //
  //
  //
  //  filedsWrap.on("click",".buttonadd, .buttonsub",function(e){
  //    e.stopPropagation()
  //    if($(this).hasClass("buttonadd")){
  //      $(this).parent().parent("li").after(createCDom(u))
  //      mini.parse();
  //    }
  //    if($(this).hasClass("buttonsub")){
  //      clearFeildAttr(filedsWrap)
  //      filedsWrap.remove()
  //
  //    }
  //    if($(this).hasClass("buttonedit")){
  //
  //
  //    }
  //  })
  //}






  //function makeFeildAttr(f,fields){
  //  console.log(f);
  //  if( formAttribute.children("div").size()){
  //    formAttribute.empty()
  //  }
  //
  //  let feildHTML=new attrTemplate(f).init()
  //
  //  formAttribute.html(feildHTML.html)
  //  formAttribute.data("id",f.data("id"))
  //  mini.parse()
  //
  //  new attrEvent(f,feildHTML,function(v){
  //
  //  })
  //
  //  //
  //  //var fcaption=mini.get("fcaption")
  //  //
  //  //$(fcaption.lo01).on("input propertychange",function(){
  //  //  var val=$(this).val();
  //  //  var controlObject=mini.get(fields.attr("id"))
  //  //  f.children("lable").html(val)
  //  //})
  //  //fcaption.on("valuechanged",function(e){
  //  //  //console.log(fcaption.getValue());
  //  //  //console.log(this.value);
  //  //  //console.log(e);
  //  //})
  //  //
  //  //fcaption.on("keyup",function(e){
  //  //  //console.log(fcaption.getValue());
  //  //  //console.log(e);
  //  //  //fcaption.doValueChanged()
  //  //  //console.log(this.value);
  //  //})
  //
  //
  //
  //  //$(fcaption).on("valuechanged")
  //
  //}



})


