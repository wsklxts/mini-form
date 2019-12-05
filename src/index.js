


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
  // var api = "http://jilalahk.com/api/vueappCustomControl/?_=154719423569123123"
  // var api = "http://okohk.com/api/vueappCustomControl"
  var api = "/api/vueappCustomControl"
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

    $.ajax({
      url:api,
      type:"get",
      success:function(getData){
        console.log(getData);
        if(!getData){
          console.log("post");
          $.ajax({
            url:api,
            data:{
              data: (JSON.stringify(data))
            },
            type:"post",
            success:function(d){
              d = JSON.parse(d)
              console.log(d);
            },
          })
        }else{
          console.log("put");
          $.ajax({
            url:api,
            data:{
              data: (JSON.stringify(data)),
              id:getData.id
            },
            type:"put",
            success:function(d){
              if(d){
                mini.showTips({
                  content: "<b>成功</b> <br/>数据保存成功",
                  state: "default",
                  timeout: 3000
                });
              }
            },
          })
        }
      },
      error:function(err){
        console.log(err);
        mini.showTips({
            content: "<b>错误</b> <br/>服务器出错",
            state: "warning",
            timeout: 3000
        });
      }
    })

    //$.ajax({
    //  url:api,
    //  type:"post",
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


