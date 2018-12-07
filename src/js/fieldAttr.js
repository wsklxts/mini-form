/**
 * Created by Administrator on 2018/9/20.
 */

import {G} from "./config"

export default class attrTemplate{

  constructor(options) {
    this.d = options.b.d
    this.f = options.b.w
    this.t = options.b.t
    this.w = options.b.w
  }

  init(){
    if(this.t == "textbox" || this.t == "textArea"){
      return this.cText()
    }else{
      return this[this.t]()
    }
  }

  radio(){
    return {
      evt:"radio",
      subhtml:{
        createCID:this.createCID(),
        createCType:this.createCType(),
        createCCatipn:this.createCCatipn(),
        createCWidth:this.createCWidth(),
        optionsBtn:this.optionsBtn(),
        viewValue:this.viewValue()
      }
    }
  }

  cText(){
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
        createCRequire:this.createCRequire(),

      }
    }
  }

  checkBox(){
    return {
      evt:"checkBox",
      subhtml:{
        createCID:this.createCID(),
        createCType:this.createCType(),
        createCCatipn:this.createCCatipn(),
        optionsBtn:this.optionsBtn(),
        createCWidth:this.createCWidth()
      }
    }
  }

  combobox(){
    return {
      evt:"combobox",
      subhtml:{
        createCID:this.createCID(),
        createCType:this.createCType(),
        createCCatipn:this.createCCatipn(),
        optionsBtn:this.optionsBtn(),
        createCWidth:this.createCWidth()
      }
    }
  }

  date(){
    return {
      evt:"date",
      subhtml:{
        createCID:this.createCID(),
        createCType:this.createCType(),
        createCCatipn:this.createCCatipn(),
        createCWidth:this.createCWidth()
      }
    }
  }

  file(){
    return {
      evt:"file",
      subhtml:{
        createCID:this.createCID(),
        createCType:this.createCType(),
        createCCatipn:this.createCCatipn(),
        createCWidth:this.createCWidth()
      }
    }
  }
  pp(){
    return {
      evt:"pp",
      subhtml:{
        createCID:this.createCID(),
        createCType:this.createCType(),
        createCCatipn:this.createCCatipn(),
        fontSize:this.fontSize(),
      }
    }
  }

  fontSize(){
    return $(`<div class="feildAttr"> <lable>字体大小：</lable> <div class="mini-textbox"  value=${ this.f.data("data").fontSize} > </div> </div>`)
  }
  fontColor(){
    return $('<div class="feildAttr"> <lable>字体颜色：</lable> <div class="mini-textbox"  > </div> </div>')
  }
  createCID(){
    return `<div class="feildAttr">
            <lable>控件ID：</lable>
            <div class="mini-textbox" value=${ this.f.data("data").id} allowInput="false"> </div>
           </div>`
  }
  createCType(){
    return `<div class="feildAttr">
            <lable>控件类型：</lable>
            <div class="mini-textbox" value=${this.d.type} allowInput="false"> </div>
           </div>`
  }

  createCCatipn(){
    return $('<div class="feildAttr fcaption"> <lable>控件标题：</lable> <div id="fcaption" class="mini-textbox" value= '+ this.f.data("data").lable+'></div> </div>')
  }

  optionsBtn(){
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

  createCValue(){
    return $('<div class="feildAttr"> <lable>控 件 值：</lable> <div id="fValue" class="mini-textbox" value= '+ this.f.data("data").value+'></div> </div>')
  }
  createCPlaceholder(){
    return $('<div class="feildAttr"> <lable>占  位  符：</lable> <div class="mini-textbox" value='+ this.f.data("data").placeholder+'></div> </div>')

  }
  createCWidth(){
    return $('<div class="feildAttr"> <lable>控件宽度：</lable> <div class="mini-textbox" value='+this.f.data("data").width+' > </div> </div>')

  }
  createCMaxLength(){

    return $('<div class="feildAttr"> <lable>最大长度：</lable> <div class="mini-textbox" value='+this.f.data("data").maxLength+'> </div> </div>')
  }


  createCRequire(){
    return $('<div class="feildAttr"> <lable></lable> <div class="mini-checkbox" id="checkbox" checked='+this.f.data("data").require +' text="必须输入"</div> </div>')

  }





}

