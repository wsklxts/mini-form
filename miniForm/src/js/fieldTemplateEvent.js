/**
 * Created by Administrator on 2018/9/20.
 */

var timer=null
import attrTemplate from "./attrTemplate"
import attrEvent from "./attrEvent"
import createCDom from "./createCDom"
import {G}  from "./globle"
import {show}  from "./method.js"


let vv = ""

let data = G.formData

export default function fieldTemplateEvent(u,filedsWrap,fields,attrData,fn){
  var color=["red","orange","yellow","green","pink","blue","black","gray"]
  var buttonWrapS= G.buttonWrapS
  let formAttribute = $(".formAttribute")


  filedsWrap.on("mouseover",function(e){
    if(!buttonWrapS){
      $(this).children(".buttonWrap").css("display","block")
    }
  })
  filedsWrap.on("mouseout",function(e){
    $(this).children(".buttonWrap").css("display","none")
  })

  function exeTime(f,s){
    timer=setInterval(function(){
      f.css(s,color[parseInt(Math.random()*(color.length-1))])
    },300)
  }


  filedsWrap.on("click",function(e){
    e.stopPropagation()
    if(filedsWrap.hasClass("lineFeed")){
      clearInterval(timer)
      //filedsWrap.parent().children("li").children(".brWrap").css("background","#afd6f3")
      filedsWrap.parent().children("li").removeClass("active")
      exeTime(filedsWrap.children(".brWrap"),"background")
    }else{
      clearInterval(timer)
      filedsWrap.parent().children("li").removeClass("active")
      filedsWrap.addClass("active")
      exeTime(filedsWrap,"border-color")
      makeFeildAttr(filedsWrap,fields,attrData,fn)
    }
  })

  $(formBuild).on("click",function(){
    filedsWrap.parent().children("li").removeClass("active")
    $(".mini-panel-body").empty()
    clearInterval(timer)
  })



  filedsWrap.on("click",".buttonadd, .buttonsub, .buttonedit",function(e){
    e.stopPropagation()
    if($(this).hasClass("buttonadd")){
      $(this).parent().parent("li").after(createCDom(u))
      mini.parse();
    }
    if($(this).hasClass("buttonsub")){
      if(attrData.id==formAttribute.data("id")){
        formAttribute.empty()
      }
      filedsWrap.empty()
      filedsWrap.removeClass("lineFeed").addClass("ball")
      show(filedsWrap,1);
      //data.pop()/
    }
    if($(this).hasClass("buttonedit")){
      console.log(data);
    }
  })





  function makeFeildAttr(f,fields,attrData,fn){



    if( formAttribute.children("div").size()){
      formAttribute.empty()
    }

    let feildHTML=new attrTemplate(f,formAttribute,attrData,fields).init()


    if(feildHTML.evt){
      feildHTML.subhtml.createCValue.on("input propertychange",function(e){
        var v=$(this).find(".mini-textbox-input").val();
        fn(v,"value")
        attrData.values=v
      })

      feildHTML.subhtml.createCCatipn.on("input propertychange",function(e){
        var v=$(this).find(".mini-textbox-input").val();
        fn(v,"lable")
        attrData.lable=v
      })

      feildHTML.subhtml.createCPlaceholder.on("input propertychange",function(e){
        var v=$(this).find(".mini-textbox-input").val();
        fn(v,"placeholder")
        attrData.placeholder=v
      })

      feildHTML.subhtml.createCWidth.on("input propertychange",function(e){
        var v=$(this).find(".mini-textbox-input").val();
        fn(v,"width")
        attrData.width=v
      })
    }else{
      feildHTML.subhtml.createCCatipn.on("input propertychange",function(e){
        var v=$(this).find(".mini-textbox-input").val();
        fn(v,"lable")
        attrData.lable=v
      })
      feildHTML.subhtml.createCWidth.on("input propertychange",function(e){
        var v=$(this).find(".mini-textbox-input").val();
        fn(v,"width")
        attrData.width=v
      })
    }



    formAttribute.html(feildHTML.html)


    console.log(attrData);


    formAttribute.data("id",data.id)
    mini.parse()



  }

  function clearFeildAttr(f){

  }

}
