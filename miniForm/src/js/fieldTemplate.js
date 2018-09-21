/**
 * Created by Administrator on 2018/9/20.
 */


import fieldTemplateEvent from "./fieldTemplateEvent"
import dragInsert from "./dragInsert"
import {G} from "./globle"

let formData= G.formData
let controlId= G.controlId


export default class fieldTemplate{

  constructor(u){
    this.type=$(u.item).attr("id");
    this.miniC=mini.get(this.type)

    this.filedsWrap=$("<li class='filed'></li>")
    this.fields=$(`<div class=${this.miniC.name} id=${this.miniC.name}${controlId+=1}> </div>`)

    this.fieldBtn=$("<div class='buttonWrap'> <div class='mini-button buttonedit' iconCls='icon-edit'></div>  <div class='buttonadd mini-button' iconCls='icon-add'></div>  <div class='buttonsub mini-button' iconCls='icon-remove'></div> </div>")


    this.init()

    var typeText={
      text:"单行输入",
      textArea:"多行输入",
      radio:"单选框",
      checkBox:"多选框",
      select:"下拉框",
      date:"日期",
      file:"文件",
      pp:"段落"
    }

    console.log(this.fields.attr("id"));


    this.fieldData={
      id:controlId+=1 ,
      type:this.type,
      lable:typeText[this.type],
      className:"form-control",
      placeholder:this.fields.attr("emptyText"),
      width:""

    }


    formData.push(this.fieldData)


    dragInsert(this.filedsWrap)
    fieldTemplateEvent(u,this.filedsWrap,this.fields,this.fieldData)



  }

  init(){
    switch(this.miniC.name){
      case "mini-textbox":
         return this.textbox()
        break;
      case "mini-textarea":
        this.textarea()
        break;
      case "mini-radiobuttonlist":
        this.radiobuttonlist()
        //
        //fields.attr("data",'[{text:"选项1",id:1},{text:"选项2",id:2},{text:"选项3",id:3}]')
        //filedsWrap.addClass("radio")
        //lable=$('<lable>单选框：</lable>')
        break;
      case "lineFeedBtn":
        this.lineFeedBtn()
        //fields=$(`<div class="brWrap"></div>`)
        //var br=$("<br />")
        //filedsWrap.addClass("lineFeed")
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


  textbox(){
    this.fields.attr("emptyText","请输入")
    this.filedsWrap.append(this.createLable("单行输入框："),this.fieldBtn,this.fields)
    this.filedsWrap.addClass("text")
    return this.filedsWrap
  }

  textarea(){
    this.filedsWrap.append(this.createLable("多行输入框："),this.fieldBtn,this.fields)
    this.filedsWrap.addClass("textarea")
  }

  radiobuttonlist(){
    this.fields.attr("data",'[{text:"选项1",id:1},{text:"选项2",id:2},{text:"选项3",id:3}]')
    this.filedsWrap.append(this.createLable("单选框："),this.fieldBtn,this.fields)
    this.filedsWrap.addClass("radio")
  }

  lineFeedBtn(){
    this.fields=$(`<div class="brWrap"></div>`)
    this.filedsWrap.append(this.fieldBtn,this.fields,$("<br />"))
    this.filedsWrap.addClass("lineFeed")
  }




  createLable(t){
    return `
      <lable>${t}</lable>
    `
  }


}
