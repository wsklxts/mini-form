/**
 * Created by Administrator on 2018/9/20.
 */


import fieldTemplateEvent from "./fieldTemplateEvent"
import dragInsert from "./dragInsert"
import {G} from "./globle"


export default class fieldTemplate{

  constructor(option){
    this.type=option.type
    this.fields=option.fields
    this.filedsWrap=option.filedsWrap
    this.fieldData=option.fieldData
    this.setAttr()
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
        return this.htmlfile()
        break;
      case "mini-pp":
        return this.pp()
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

  setAttr(){
    this.fields.attr("emptyText",this.fieldData.placeholder)
    this.fields.attr("allowInput",false)
    this.fields.attr("width",this.fieldData.width)
    this.fields.attr("maxLength",this.fieldData.maxLength)
    this.fields.attr("data",this.fieldData.data)
    this.fields.val(this.fieldData.value)
    return this.returnWFT()
  }

  textbox(){
    this.filedsWrap.append(this.createLable(this.fieldData.lable),this.fields)
    this.filedsWrap.addClass("text")
    return this.returnWFT()
  }

  textarea(){
    this.filedsWrap.append(this.createLable(this.fieldData.lable),this.fields)
    this.filedsWrap.addClass("textarea")
    return this.returnWFT()
  }

  checkbox(){
    this.fields.attr("data",this.fieldData.data)
    this.filedsWrap.append(this.createLable(this.fieldData.lable),this.fields)
    this.filedsWrap.addClass("checkbox")
    return this.returnWFT()
  }
  combobox(){
    this.fields.attr("data",this.fieldData.data)
    if(this.fieldData.data) var text=eval ("(" + this.fieldData.data+ ")")[0].text
    this.fields.attr("value",text)
    this.filedsWrap.append(this.createLable(this.fieldData.lable),this.fields)
    this.filedsWrap.addClass("combobox")
    return this.returnWFT()
  }
  radiobuttonlist(){
    this.fields.attr("data",this.fieldData.data)
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
  htmlfile(){
    this.fields.attr("data",this.fieldData.data)
    this.filedsWrap.append(this.createLable(this.fieldData.lable),this.fields)
    this.filedsWrap.addClass("file")
    return this.returnWFT()
  }
  pp(){
    this.fields.attr("data",this.fieldData.data)
    this.filedsWrap.append(this.createLable(this.fieldData.lable),this.fields)
    this.filedsWrap.addClass("pp")
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
