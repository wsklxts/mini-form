/**
 * Created by Administrator on 2018/9/20.
 */

var timer=null
import attrTemplate from "./attrTemplate"
import createCDom from "./createCDom"
import {G}  from "./globle"
import {show}  from "./method.js"


let data = G.formData
let controlId= G

export default function fieldTemplateEvent(u,filedsWrap,fields,attrData,fn){
  var color=["red","orange","yellow","green","pink","blue","black","gray"]
  var buttonWrapS= G.buttonWrapS
  let formAttribute = $(".formAttribute")
  let formBuild = $(".formBuild")
  let cid=controlId.id
  let feildHTML=null
  let allHtml =null

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
      //mini.getfields.attr("id")
    }
  })




  function cloneDom(current){
    var clone=createCDom(u)
    clone.children("lable").html(current.children("lable").text())
    var id=clone.children().last().attr("id");

    console.log(filedsWrap.data("data"));
    mini.get(id).set({
      value:current.find(".mini-textbox-input").val(),
      emptyText:clone.find(".mini-textbox-input").attr("placeholder"),
      width:current.data("data").width,
      data:filedsWrap.data("data").value
    })

    //mini.get(allHtml.createCValue.children("span").attr("id")).set({
    //  maxLength:filedsWrap.data("data").maxLength
    //})

    return clone
  }

  filedsWrap.on("click",".buttonadd, .buttonsub, .buttonedit",function(e){
    e.stopPropagation()
    if($(this).hasClass("buttonadd")){
      var current=$(this).parent().parent("li")
      var clone=cloneDom(current)
      var data=Object.assign({},current.data("data"))
      clone.data("data",data)

      clone.data("data").id=controlId.id-1

      current.after(clone)
    }
    if($(this).hasClass("buttonsub")){
      if(filedsWrap.data("data").id==formAttribute.data("id")){
        formAttribute.empty()
      }
      filedsWrap.remove()
      //filedsWrap.removeClass("active").addClass("ball")
      //show(filedsWrap,1,u);
    }
    if($(this).hasClass("buttonedit")){
      console.log($(this).parent().parent("li").data("data"));
    }
  })





  function makeFeildAttr(w,f,attrData,fn){

    if( formAttribute.children("div").size()){
      formAttribute.empty()
    }

    let id = f.attr("id")
    if(mini.get(id).data ){
      w.data("data").value=mini.get(id).data //字段默认data给w
    }

    feildHTML=new attrTemplate(w,formAttribute,attrData,f).init()
    allHtml =  feildHTML.subhtml

    allHtml.createCValue &&
    allHtml.createCValue.on("input propertychange",function(e){
      var v=$(this).find(".mini-textbox-input").val();
      fn(v,"value")
      w.data("data").value=v
    })


    allHtml.createCCatipn &&
    allHtml.createCCatipn.on("input propertychange",function(e){
      var v=$(this).find(".mini-textbox-input").val();
      fn(v,"lable")
      w.data("data").lable=v
    })

    allHtml.createCPlaceholder&&
    allHtml.createCPlaceholder.on("input propertychange",function(e){
      var v=$(this).find(".mini-textbox-input").val();
      fn(v,"placeholder")
      w.data("data").placeholder=v
    })

    allHtml.createCWidth &&
    allHtml.createCWidth.on("input propertychange",function(e){
      var v=$(this).find(".mini-textbox-input").val();
      fn(v,"width")
      w.data("data").width=v
    })

    allHtml.createCMaxLength &&
    allHtml.createCMaxLength.on("input propertychange",function(e){
      var v=$(this).find(".mini-textbox-input").val();
      fn(v,"maxLength")
      mini.get(allHtml.createCValue.children("span").attr("id")).set({
        value:"",
        maxLength:v
      })
      w.data("data").value=""
      w.data("data").maxLength=v
    })

    allHtml.createCRequire &&
    allHtml.createCRequire.on("click",function(e){
      var id=$(this).children("span").attr("id");
      let v= mini.get(id).checked;
      //fn(v,"maxLength")
      w.data("data").require=v
    })
    allHtml.viewValue &&
    allHtml.viewValue.on("click",function(e){
      let id = f.attr("id")
      console.log(mini.get(id).getData());
      $(this).find(".mini-textbox-input").val("text:"+mini.get(id).o1oO1l.text+",id:"+mini.get(id).o1oO1l.id);
      //mini.get(id).setData([{id:1,text:"ttt"}])
    })


    let defualtSize= w.data("data").value && w.data("data").value.length





    if(allHtml.radioOptions){


      allHtml.radioOptions.on("input propertychange",function(e){
        console.log($(this));
        let currentLi = $(e.target).parent().parent().parent();
        currentLi.data("value").text=$(e.target).val()
        fn("input","radioOptions")
      })
    }


    allHtml.radioOptions &&
    allHtml.radioOptions.on("click",".addOption, .subOption",function(e){

      if($(this).hasClass("addOption")){
        defualtSize+=1
        let clone=$(this).parent().clone()
        let oldData=Object.assign({},$(this).parent().data("value"))
        clone.data("value",oldData)
        clone.data("value").id=defualtSize
        clone.attr("id","optionId-"+(defualtSize))
        $(this).parent().after(clone)
        let allLi=$(this).parent().parent().children("li")
        clone.find(".mini-textbox-input").val("选项"+(defualtSize));
        w.data("data").value=[]
        allLi.each(function(i,v){
          $(v).data("value").text=$(v).find(".mini-textbox-input").val()
          w.data("data").value.push($(v).data("value"))
        })
        fn(1,"radioOptions")
      }
      if($(this).hasClass("subOption")){
        let currentID=$(this).parent().attr("id").split("-")[1];
        let data=w.data("data").value
        if(data.length<=1){
          return
        }
        $.each(data,function(i,v){
          if(v.id==currentID){
            data.splice(i,1)
            return false
          }
        })
        fn(0,"radioOptions")
        $(this).parent().remove()

      }
    })


    Object.keys(allHtml).forEach(function(key){
      formAttribute.append(allHtml[key])
    });


    console.log(w.data("data").maxLength);

    allHtml.createCValue &&
    setTimeout(function(){
      mini.get(allHtml.createCValue.children("span").attr("id")).set({
        maxLength:w.data("data").maxLength || 999999
      })
    },24)

    formAttribute.data("id",w.data("data").id)
    mini.parse()

  }

  formBuild.on("click",function(){
    $(".formAttribute").empty()
    filedsWrap.removeClass("active")
  })


}
