


import createCDom from "./js/formBuilder"
import sortable from "./js/sortable"
import {show,formatJson} from "./js/method"
import FormRender from "./js/FormRender"
import formRenderEvent from "./js/formRenderEvent"


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
    formAttribute.empty()
  })

  delAll2.on("click",function(){
    $(".formRender>li").each(function(i,e){
      e=$(e)
      show(e,1);
    })
    $(".formRender").empty()
  })


  var data=[]
  //var api = "http://127.0.0.1:8999/api/form/1/"
  var showJson = $(".data-dialog")
  var showJsonWarp = $(".form-builder-dialog")
  save.on("click",function(){
    data=[]
    $("#formBuild>li").each(function(i,e){
      e=$(e)
      data.push(e.data("data"))
    })
    showJsonWarp.show()
    showJson.show().find(".formData-json").text(formatJson(JSON.stringify(data)))

    showJsonWarp.on("click",function(){
      showJson.hide()
      $(this).hide()
    })
    console.log(data);

    //$.ajax({
    //  url:api,
    //  type:"put",
    //  data:{
    //    data:(JSON.stringify(data))
    //  },
    //  success:function(d){
    //    console.log(d);
    //  },
    //})

    let formRender=$(".formRender")
    formRender.empty()
    new formRenderEvent(data,formRender)
  })




})


