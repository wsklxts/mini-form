/**
 * Created by Administrator on 2018/10/12.
 */


import {G} from "./globle"
import fieldTemplate from "./fieldTemplate"
import fieldTemplateEvent from "./fieldTemplateEvent"

let controlId = G



export default class FormRender {
    constructor(data) {
        this.data = data
        this.init()
    }

    init() {
        let data = this.data
        Object.keys(data).forEach((c,i,arr)=> {
            let obj = data[i]
            this.render(obj)
        })
    }

    render(obj) {
        var fieldBtn = $("<div class='buttonWrap'> <div class='mini-button buttonedit' iconCls='icon-edit'></div>  <div class='buttonadd mini-button' iconCls='icon-add'></div>  <div class='buttonsub mini-button' iconCls='icon-remove'></div> </div>")
        var filedsWrap = $("<li class='filed'></li>").append(fieldBtn)
        var fields = $(`<div class=${obj.miniClassName} id=${obj.miniClassName}${controlId.id}> </div>`).appendTo(filedsWrap)
        let formRender=$(".formRender")
        console.log(obj);
        let b=new fieldTemplate({
            type:obj.miniClassName,
            fields:fields,
            filedsWrap,filedsWrap,
            fieldData:obj
        }).init()
        console.log(b);
        b.w.data("data", obj)
        if(b.w.hasClass("lineFeed")){
            b.w=$("<br />")
        }
        b.f.attr("allowInput",true)
        formRender.append(b.w)
        mini.parse()
        console.log(formRender);
    }

}