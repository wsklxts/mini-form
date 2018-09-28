/**
 * Created by Administrator on 2018/9/20.
 */

import {G} from "./globle"


//let vv=""
//
//export function fn(e){
//  vv=e
//}


export default class attrTemplate{


  constructor(f,formAttribute,data,fields) {
    this.f = f
    this.d = data
    if( formAttribute.children("div").size()){
      formAttribute.empty()
    }
    this.maxL=this.f.data("data").maxLength
  }

  init(){
    var fieldType=this.f.attr("class").split(" ")[1]

    switch(fieldType){
      case "text":
        return this.cText(this.f)
        break;
      case "textarea":
        return this.cText(this.f)
        break;
      case "radio":
        return this.radio(this.f)
        break;
      case "checkbox":
        return this.checkbox(this.f)
        break;
      case "combobox":
        return this.combobox(this.f)
        break;
      case "datepicker":
        return this.datepicker(this.f)
        break;
    }
  }

  radio(f){
    return {
      evt:"radio",
      subhtml:{
        createCID:this.createCID(f),
        createCType:this.createCType(f),
        createCCatipn:this.createCCatipn(f),
        createCWidth:this.createCWidth(f),
        radioOptions:this.radioOptions(f),
        viewValue:this.viewValue()
      }
    }
  }

  cText(f){
    return {
      evt:"cText",
      subhtml:{
        createCID:this.createCID(),
        createCType: this.createCType(),
        createCCatipn: this.createCCatipn(),
        createCValue:this.createCValue(),
        createCPlaceholder: this.createCPlaceholder(),
        createCWidth:this.createCWidth(),
        createCMaxLength:this.createCMaxLength(),
        createCRequire:this.createCRequire()
      }
    }
  }

  checkbox(f){
    return {
      evt:"checkbox",
      subhtml:{
        createCID:this.createCID(f),
        createCType:this.createCType(f),
        createCCatipn:this.createCCatipn(f),
        createCWidth:this.createCWidth(f)
      }
    }
  }

  combobox(f){
    return {
      evt:"combobox",
      subhtml:{
        createCID:this.createCID(f),
        createCType:this.createCType(f),
        createCCatipn:this.createCCatipn(f),
        createCWidth:this.createCWidth(f)
      }
    }
  }

  datepicker(f){
    return {
      evt:"checkbox",
      subhtml:{
        createCID:this.createCID(f),
        createCType:this.createCType(f),
        createCCatipn:this.createCCatipn(f),
        createCWidth:this.createCWidth(f)
      }
    }
  }

  createCID(f){
    return `<div class="feildAttr">
            <lable>控件ID：</lable>
            <div class="mini-textbox" value=${ this.f.data("data").id} allowInput="false"> </div>
           </div>`
  }
  createCType(f){
    return `<div class="feildAttr">
            <lable>控件类型：</lable>
            <div class="mini-textbox" value=${this.d.type} allowInput="false"> </div>
           </div>`
  }

  createCCatipn(f){
    return $('<div class="feildAttr fcaption"> <lable>控件标题：</lable> <div id="fcaption" class="mini-textbox" value= '+ this.f.data("data").lable+'></div> </div>')
  }

  radioOptions(){

    let html=[]
    let data=this.f.data("data").value


    for(var i=0;i<data.length;i++){
      html.push($(`<li id="optionId-${data[i].id}" ><input type="text" class="mini-textbox" width="60" value=${data[i].text}> <a class="mini-button addOption" iconCls="icon-add" ></a> <a class="mini-button subOption" iconCls="icon-close" ></a></li>`).data("value",data[i]))
    }

    var ul=$("<ul></ul>")
    for(var i=0;i<html.length;i++){
      ul.append(html[i])
    }

    return $('<div class="feildAttr radioOptions"></div>').append("<lable>选项：</lable>")
            .append(ul)
  }


  viewValue(){
    return $('<div class="feildAttr viewValue"> <lable>查看值：</lable> <div id="viewValue" class="mini-textbox" value=""></div></div>')
  }

  createCValue(f){
    console.log(this.f.data("data"));
    return $('<div class="feildAttr"> <lable>控 件 值：</lable> <div id="fValue" class="mini-textbox" value= '+ this.f.data("data").value+'></div> </div>')
    //return $('<div class="feildAttr"> <lable>控 件 值：</lable> <div id="fValue" maxLength='+ this.f.data("data").maxLength +' class="mini-textbox" value= '+ this.f.find(".mini-textbox-input").val()+'></div> </div>')
  }
  createCPlaceholder(f){
    return $('<div class="feildAttr"> <lable>占  位  符：</lable> <div class="mini-textbox" value='+ this.f.data("data").placeholder+'></div> </div>')

  }
  createCWidth(f){
    return $('<div class="feildAttr"> <lable>控件宽度：</lable> <div class="mini-textbox" value='+this.f.data("data").width+' > </div> </div>')

  }
  createCMaxLength(f){

    return $('<div class="feildAttr"> <lable>最大长度：</lable> <div class="mini-textbox" value='+this.f.data("data").maxLength+'> </div> </div>')
  }


  createCRequire(f){
    return $('<div class="feildAttr"> <lable></lable> <div class="mini-checkbox" id="checkbox" checked='+this.f.data("data").require +' text="必须输入"</div> </div>')

  }





}

