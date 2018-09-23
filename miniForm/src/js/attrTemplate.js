/**
 * Created by Administrator on 2018/9/20.
 */

import {G} from "./globle"


let vv=""

export function fn(e){
  vv=e
}


export default class attrTemplate{


  constructor(f,formAttribute,data,fields) {
    this.f = f
    this.d = data
    this.d.value=vv

    if( formAttribute.children("div").size()){
      formAttribute.empty()
    }
  }




  init(){
    var fieldType=this.f.attr("class").split(" ")[1]
    this.feildHTML=""
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
    }
  }

  radio(f){
    var html=[this.createCID(f),
      this.createCType(f),
      this.createCCatipn(f),
      this.createCWidth(f)]
    return {
      evt:false,
      html:html,
      subhtml:{
        createCID:html[0],
        createCType:html[1],
        createCCatipn:html[2],
        createCWidth:html[3],
      }
    }
  }

  cText(f){
    var html=[this.createCID(f),
      this.createCType(f),
      this.createCCatipn(f),
      this.createCValue(f),
      this.createCPlaceholder(f),
      this.createCWidth(f),
      this.createCMaxLength(f),
      this.createCRequire(),]
    return {
      evt:true,
      html:html,
      subhtml:{
        createCID:html[0],
        createCType:html[1],
        createCCatipn:html[2],
        createCValue:html[3],
        createCPlaceholder:html[4],
        createCWidth:html[5],
        createCMaxLength:html[6],
        createCRequire:html[7],
      }
    }
  }






  createCID(f){
    return `<div class="feildAttr">
            <lable>控件ID：</lable>
            <div class="mini-textbox" value=${this.d.id} allowInput="false"> </div>
           </div>`
  }
  createCType(f){
    return `<div class="feildAttr">
            <lable>控件类型：</lable>
            <div class="mini-textbox" value=${this.d.type} allowInput="false"> </div>
           </div>`
  }

  createCCatipn(f){
    //return `<div class="feildAttr fcaption">
    //        <lable>控件标题：</lable>
    //        <div id="fcaption" class="mini-textbox" value="${this.d.lable}"></div>
    //       </div>`

    return $('<div class="feildAttr fcaption"> <lable>控件标题：</lable> <div id="fcaption" class="mini-textbox" value= '+ this.f.find("lable").text()+'></div> </div>')
  }


  createCValue(f){


    return $('<div class="feildAttr"> <lable>控 件 值：</lable> <div id="fValue" class="mini-textbox" value= '+ this.f.find(".mini-textbox-input").val()+'></div> </div>')

  }
  createCPlaceholder(f){
    return $('<div class="feildAttr"> <lable>占  位  符：</lable> <div class="mini-textbox" value='+ this.f.find(".mini-textbox-input").attr("placeholder")+'></div> </div>')

  }
  createCWidth(f){
    return $('<div class="feildAttr"> <lable>控件宽度：</lable> <div class="mini-textbox" value='+this.d.width+' > </div> </div>')

  }
  createCMaxLength(f){
    return `<div class="feildAttr">
            <lable>最大长度：</lable>
            <div class="mini-textbox" > </div>
           </div>`
  }
  createCRequire(f){
    return `<div class="feildAttr">
            <lable></lable>
            <div class="mini-checkbox" text="必须输入"</div>
           </div>`
  }





}

