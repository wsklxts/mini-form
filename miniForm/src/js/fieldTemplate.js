/**
 * Created by Administrator on 2018/9/20.
 */


import fieldTemplateEvent from "./fieldTemplateEvent"
import dragInsert from "./dragInsert"
import {G} from "./globle"
//
//let formData= G.formData
//let controlId= G.controlId


export default class fieldTemplate{

  constructor(u,type,fields,filedsWrap,fieldBtn,fieldData){


    this.type=type
    this.fields=fields
    this.filedsWrap=filedsWrap
    this.fieldBtn=fieldBtn
    this.fieldData=fieldData

  }

  init(){
    switch(this.type){
      case "mini-textbox":
         return this.textbox()
        break;
      case "mini-textarea":
        return this.textarea()
        break;
      case "mini-radiobuttonlist":
        return this.radiobuttonlist()
        break;
      case "lineFeedBtn":
        return this.lineFeedBtn()

        break;
      case "mini-checkboxlist":
        fields.attr("data",'[{text:"选项1",id:1},{text:"选项2",id:2},{text:"选项3",id:3}]')
        filedsWrap.addClass("checkbox")
        lable=$('<lable>多选框：</lable>')
        break;
      case "mini-combobox":
        fields.attr("data",'[{text:"选项1",id:1},{text:"选项2",id:2},{text:"选项3",id:3}]')
        fields.attr("value",'2')
        filedsWrap.addClass("combobox")
        lable=$('<lable>下拉框：</lable>')
        break;
      case "mini-datepicker":
        fields.attr("format",'yyyy-MM-dd H:mm:ss')
        fields.attr("showTime",'true')
        filedsWrap.addClass("datepicker")
        lable=$('<lable>日期：</lable>')
        break;
      case "mini-htmlfile":
        filedsWrap.addClass("fileupload")
        lable=$('<lable>文件上传：</lable>')
        alert(1)
        break;
    }


  }

  returnWFT(){
    return {
      w:this.filedsWrap,
      f:this.fields,
      t:this.type,
    }
  }

  textbox(){

    this.fields.attr("emptyText",this.fieldData.placeholder)
    this.fields.attr("allowInput",false)
    this.fields.val(this.fieldData.value)
    this.filedsWrap.append(this.createLable(this.fieldData.lable),this.fieldBtn,this.fields)
    this.filedsWrap.addClass("text")
    return this.returnWFT()
  }

  textarea(){
    this.fields.attr("emptyText",this.fieldData.placeholder)
    this.filedsWrap.append(this.createLable(this.fieldData.lable),this.fieldBtn,this.fields)
    this.filedsWrap.addClass("textarea")
    return this.returnWFT()
  }

  radiobuttonlist(){
    this.fields.attr("data",'[{text:"选项1",id:1},{text:"选项2",id:2},{text:"选项3",id:3}]')
    this.filedsWrap.append(this.createLable("单选框："),this.fieldBtn,this.fields)
    this.filedsWrap.addClass("radio")
    return this.returnWFT()
  }


  lineFeedBtn(){
    this.fields=$(`<div class="brWrap"></div>`)
    this.filedsWrap.append(this.fieldBtn,this.fields,$("<br />"))
    this.filedsWrap.addClass("lineFeed")
    return this.returnWFT()
  }




  createLable(t){
    return `
      <lable>${t}</lable>
    `
  }


}
