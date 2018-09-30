/**
 * Created by Administrator on 2018/9/20.
 */

import fieldTemplate from "./fieldTemplate"
import attrTemplate from "./attrTemplate"
//import {fn} from "./attrTemplate"
import dragInsert from "./dragInsert"
import fieldTemplateEvent from "./fieldTemplateEvent"
import {show} from "./method"



import {G} from "./globle"

let formData= G.formData
let controlId= G
let data= G.data



export default function createCDom(u,current){
 var type=$(u.item).attr("id");
 var miniC=mini.get(type)


  var fieldBtn=$("<div class='buttonWrap'> <div class='mini-button buttonedit' iconCls='icon-edit'></div>  <div class='buttonadd mini-button' iconCls='icon-add'></div>  <div class='buttonsub mini-button' iconCls='icon-remove'></div> </div>")
  var filedsWrap=$("<li class='filed'></li>").append(fieldBtn)
  var fields=$(`<div class=${miniC.name} id=${miniC.name}${controlId.id}> </div>`)



  var typeText={
    text:{
      lable:"单行输入框：",
      placeholder:"请输入",
    },
    textArea:{
      lable:"多行输入框：",
      placeholder:"请输入",
    },
    radio:{
      lable:"单选框",
      data:'[{text:"选项1",id:1},{text:"选项2",id:2},{text:"选项3",id:3}]'
    },
    checkBox:{
      lable:"多选框",
      data:'[{text:"选项1",id:1},{text:"选项2",id:2},{text:"选项3",id:3},{text:"选项4",id:4}]'
    },
    combobox:{
      lable:"下拉框",
      data:'[{text:"选项1",id:1},{text:"选项2",id:2},{text:"选项3",id:3}]'
    },
    date:{
      lable:"日期"
    },
    file:"文件",
    pp:"段落",
    lineFeedBtn:{

    }
  }

  let  fieldData={
    id:controlId.id ,
    type:type,
    lable:typeText[type].lable,
    className:"form-control",
    placeholder:typeText[type].placeholder,
    value:"",
    maxLength:"",
    data:typeText[type].data
  }


  var b = new fieldTemplate(u,miniC.name,fields,filedsWrap,fieldData).init();
  b.w.data("data",fieldData)

  fieldTemplateEvent(u,b.w,b.f,fieldData,function(e,t){
    if(t=="value"){
      b.w.find(".mini-textbox-input").val(e);
    }else if(t=="lable"){
      b.w.find("lable").html(e);
    } else if(t=="placeholder"){
      b.w.find(".mini-textbox-input").attr("placeholder",e);
    } else if(t=="width"){
      if(b.t!="lineFeedBtn"){
        let CC=mini.get(b.f.attr("id"))
        CC.set({
          width: e
        })
        fieldData.width=parseInt(e)
      }
    }
    else if(t=="maxLength"){
      b.w.find(".mini-textbox-input").val("");
      console.log(b.f);
    }
    else if(t=="radioOptions"){
      let oldValue=mini.get(b.f.attr("id")).getValue();
      mini.get(b.f.attr("id")).setData(b.w.data("data").value)
      mini.get(b.f.attr("id")).setValue(oldValue)
    }
  })

  dragInsert(b.w,u)








  if(b.t == "mini-radiobuttonlist"){
    b.w.data("data").value=mini.get(b.f.attr("id")).getData()
    mini.get(b.f.attr("id")).on("valuechanged",function(e){
      let cruuentId = this.getValue()
      let data=this.getData()
      $.each(data,function(i,v){
        delete v.selected
        if(v.id==cruuentId){
          v.selected=true
        }
      })
    })
  }


  if(b.t!="lineFeedBtn"){
    let CC=mini.get(b.f.attr("id"))
    fieldData.width=parseInt(CC.getWidth())
  }


  controlId.id+=1

  return b.w
}
