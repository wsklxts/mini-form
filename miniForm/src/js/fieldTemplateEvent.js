/**
 * Created by Administrator on 2018/9/20.
 */

var timer=null
import attrTemplate from "./attrTemplate"
import attrEvent from "./attrEvent"
import createCDom from "./createCDom"
import {G}  from "./globle"
import {show}  from "./method.js"


let data = G.formData
let controlId= G.controlId

export default function fieldTemplateEvent(u,filedsWrap,fields,attrData,fn){
  var color=["red","orange","yellow","green","pink","blue","black","gray"]
  var buttonWrapS= G.buttonWrapS
  let formAttribute = $(".formAttribute")
  let formBuild = $(".formBuild")


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
      filedsWrap.parent().children("li").removeClass("active")
      exeTime(filedsWrap.children(".brWrap"),"background")
    }else{
      clearInterval(timer)
      filedsWrap.parent().children(".active").removeClass("active")
      filedsWrap.addClass("active")
      exeTime(filedsWrap,"border-color")
      makeFeildAttr(filedsWrap,fields,attrData,fn)
      console.log(filedsWrap.data("data"));
    }
  })




  function cloneDom(current){
    var clone=createCDom(u)
    clone.children("lable").html(current.children("lable").text())
    var id=clone.children("span").attr("id");
    mini.get(id).set({
      value:current.find(".mini-textbox-input").val(),
      emptyText:clone.find(".mini-textbox-input").attr("placeholder"),
      width:current.data("data").width
    })
    clone.find(".mini-textbox-input").attr("emptyText","111111111111111111123")

    return clone
  }

  filedsWrap.on("click",".buttonadd, .buttonsub, .buttonedit",function(e){
    e.stopPropagation()
    if($(this).hasClass("buttonadd")){
      var current=$(this).parent().parent("li")
      var clone=cloneDom(current)
      var data=Object.assign({},current.data("data"))
      clone.data("data",data)
      console.log(controlId);
      clone.data("data").id=controlId+=1
      current.after(clone)
    }
    if($(this).hasClass("buttonsub")){
      if(filedsWrap.data("data").id==formAttribute.data("id")){
        console.log(1);
        formAttribute.empty()
      }
      filedsWrap.empty()
      filedsWrap.removeClass("active").addClass("ball")
      show(filedsWrap,1,u);
    }
    if($(this).hasClass("buttonedit")){
      console.log($(this).parent().parent("li").data("data"));
    }
  })





  function makeFeildAttr(w,f,attrData,fn){

    if( formAttribute.children("div").size()){
      formAttribute.empty()
    }


    let feildHTML=new attrTemplate(w,formAttribute,attrData,f).init()


    if(feildHTML.evt){
      feildHTML.subhtml.createCValue.on("input propertychange",function(e){
        var v=$(this).find(".mini-textbox-input").val();
        fn(v,"value")
        w.data("data").value=v
      })

      feildHTML.subhtml.createCCatipn.on("input propertychange",function(e){
        var v=$(this).find(".mini-textbox-input").val();
        fn(v,"lable")
        w.data("data").lable=v
      })

      feildHTML.subhtml.createCPlaceholder.on("input propertychange",function(e){
        var v=$(this).find(".mini-textbox-input").val();
        fn(v,"placeholder")
        w.data("data").placeholder=v
      })

      feildHTML.subhtml.createCWidth.on("input propertychange",function(e){
        var v=$(this).find(".mini-textbox-input").val();
        fn(v,"width")
        w.data("data").width=v
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

    formAttribute.data("id",w.data("data").id)
    mini.parse()

  }

  formBuild.on("click",function(){
    $(".formAttribute").empty()
  })


}
