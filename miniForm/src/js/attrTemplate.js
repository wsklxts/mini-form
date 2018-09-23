/**
 * Created by Administrator on 2018/9/20.
 */




let vv=""

export function fn(e){
  vv=e
}
//
//Object.defineProperty(obj, 'name', {
//  value: '田二黑',       // 属性的值
//  writable: true,     // 是否可写
//  enumerable: true,   // 是否能够通过for in 枚举
//  configurable: true  // 是否可使用 delete删除
//})


export default class attrTemplate{


  constructor(f,formAttribute,data) {
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
    return `<div class="feildAttr fcaption">
            <lable>控件标题：</lable>
            <div id="fcaption" class="mini-textbox" value="${this.d.lable}"></div>
           </div>`
  }
  createCValue(f){
    var o=this.d.value
    var o2=this.d.value
    console.log(o);
    console.log(this.d);
    //return `<div class="feildAttr">
    //        <lable>控 件 值：</lable>
    //        <div id="fValue" class="mini-textbox"></div>
    //       </div>`
    var input=$('<div class="feildAttr"> <lable>控 件 值：</lable> <div id="fValue" class="mini-textbox" value='+ o +'></div> </div>')
    Object.defineProperty(this.d, 'value', {
      get: function(){
        return "";
      },
      set: function(newVal){
       o=newVal
       input.find(".mini-textbox-input").val(newVal);
      }
    })


    return input
  }
  createCPlaceholder(f){
    return `<div class="feildAttr">
            <lable>占  位  符：</lable>
            <div class="mini-textbox" value="${this.d.placeholder}"></div>
           </div>`
  }
  createCWidth(f){
    return `<div class="feildAttr">
            <lable>控件宽度：</lable>
            <div class="mini-textbox" value="${this.d.width}" > </div>
           </div>`
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

