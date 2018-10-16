/**
 * Created by Administrator on 2018/10/12.
 */


import {G} from "./globle"
import fieldTemplate from "./fieldTemplate"
import fieldTemplateEvent from "./fieldTemplateEvent"


export default class FormRender {
    constructor(data,wrap) {
        this.data = data
        this.wrap = wrap
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
        var fields = $(`<div class=${obj.miniClassName} id="render${obj.id}"> </div>`).appendTo(filedsWrap)

        let b=new fieldTemplate({
            type:obj.miniClassName,
            fields:fields,
            filedsWrap,filedsWrap,
            fieldData:obj
        }).init()
        b.w.data("data", obj)
        if(b.w.hasClass("lineFeed")){
            b.w=$("<br />")
        }
        b.f.attr("allowInput",true)
        b.f.attr("data",JSON.stringify(obj.value))
        b.w.find("lable").css("fontSize",parseInt(obj.fontSize))


        this.wrap.append(b.w)
        mini.parse()

        if($.isArray(obj.value)){
            var arr=[]
            $.each(obj.value,function(i,v){
                if(v.selected){
                    arr.push(v.id)
                    id=arr.join(",")
                    mini.get(b.f.attr("id")).set({
                        value:id
                    })
                }
            })
        }


    }

}