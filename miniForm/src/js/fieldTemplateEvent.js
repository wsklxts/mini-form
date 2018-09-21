/**
 * Created by Administrator on 2018/9/20.
 */

var timer=null
import attrTemplate from "./attrTemplate"
import attrEvent from "./attrEvent"
import createCDom from "./createCDom"
import {G}  from "./globle"




export default function fieldTemplateEvent(u,filedsWrap,fields,attrData){

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
    var color=["red","pink","blue","black","gray"]
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
      makeFeildAttr(filedsWrap,fields,attrData)
    }
  })

  $(formBuild).on("click",function(){
    filedsWrap.parent().children("li").removeClass("active")
    $(".mini-panel-body").empty()
    clearInterval(timer)
  })



  filedsWrap.on("click",".buttonadd, .buttonsub",function(e){
    e.stopPropagation()
    if($(this).hasClass("buttonadd")){
      $(this).parent().parent("li").after(createCDom(u))
      mini.parse();
    }
    if($(this).hasClass("buttonsub")){
      clearFeildAttr(filedsWrap)
      filedsWrap.remove()

    }
    if($(this).hasClass("buttonedit")){


    }
  })





  function makeFeildAttr(f,fields,data){
    if( formAttribute.children("div").size()){
      formAttribute.empty()
    }

    let feildHTML=new attrTemplate(f,formAttribute,data).init()


    formAttribute.html(feildHTML.html)

    formAttribute.data("id",f.data("id"))
    mini.parse()

    new attrEvent(f,feildHTML,function(v){

    })


  }

  function clearFeildAttr(f){
    if(f.data("id")==formAttribute.data("id")){
      formAttribute.empty()
    }
  }

}
