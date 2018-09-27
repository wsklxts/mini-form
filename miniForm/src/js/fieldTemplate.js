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

  constructor(u,type,fields,filedsWrap,fieldData){
    this.type=type
    this.fields=fields
    this.filedsWrap=filedsWrap
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
        return this.checkbox()
        break;
      case "mini-combobox":
        return this.combobox()
        break;
      case "mini-datepicker":
        return this.datepicker()
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
    this.filedsWrap.append(this.createLable(this.fieldData.lable),this.fields)
    this.filedsWrap.addClass("text")
    return this.returnWFT()
  }

  textarea(){
    this.fields.attr("emptyText",this.fieldData.placeholder)
    this.filedsWrap.append(this.createLable(this.fieldData.lable),this.fields)
    this.filedsWrap.addClass("textarea")
    return this.returnWFT()
  }

  checkbox(){
    this.fields.attr("data",'[{text:"选项1",id:1},{text:"选项2",id:2},{text:"选项3",id:3}]')
    this.filedsWrap.append(this.createLable(this.fieldData.lable),this.fields)
    this.filedsWrap.addClass("checkbox")
    return this.returnWFT()
  }
  combobox(){
    this.fields.attr("data",'[{text:"选项1",id:1},{text:"选项2",id:2},{text:"选项3",id:3}]')
    this.filedsWrap.append(this.createLable(this.fieldData.lable),this.fields)
    this.filedsWrap.addClass("combobox")
    return this.returnWFT()
  }
  radiobuttonlist(){
    this.fields.attr("data",'[{text:"选项1",id:1},{text:"选项2",id:2},{text:"选项3",id:3}]')
    this.filedsWrap.append(this.createLable(this.fieldData.lable),this.fields)
    this.filedsWrap.addClass("radio")
    return this.returnWFT()
  }

  datepicker(){
    this.fields.attr("format",'yyyy-MM-dd H:mm:ss').attr("showTime",'true')
    this.filedsWrap.append(this.createLable(this.fieldData.lable),this.fields)
    this.filedsWrap.addClass("datepicker")
    return this.returnWFT()
  }

  lineFeedBtn(){
    this.fields=$(`<div class="brWrap"></div>`)
    this.filedsWrap.append(this.fields,$("<br />"))
    this.filedsWrap.addClass("lineFeed")
    return this.returnWFT()
  }




  createLable(t){
    return `
      <lable>${t}</lable>
    `
  }


}
