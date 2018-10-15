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
import createCDom from "./js/formBuilder"
import sortable from "./js/sortable"
import {show} from "./js/method"
import FormRender from "./js/FormRender"
import formRenderEvent from "./js/formRenderEvent"


let data = G.formData

$(function(){

  sortable()

  var formBuild = $("#formBuild")
  var formAttribute = $(".formAttribute ")


  var save = mini.get("onSave");
  var delAll = mini.get("delAll");
  var delAll2 = mini.get("delAll2");
  delAll.on("click",function(){
    $("#formBuild>li").each(function(i,e){
      e=$(e)
      show(e,1);
    })
    formBuild.addClass("tip")
  })

  delAll2.on("click",function(){
    $(".formRender>li").each(function(i,e){
      e=$(e)
      show(e,1);
    })
    $(".formRender").empty()
  })


  var data=[]
  save.on("click",function(){
    data=[]
    $("#formBuild>li").each(function(i,e){
      e=$(e)
      data.push(e.data("data"))
    })
    console.log(data);
    let formRender=$(".formRender")
    new formRenderEvent(data,formRender)
  })




})


