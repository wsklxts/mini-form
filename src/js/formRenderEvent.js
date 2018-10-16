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

        obj.isRender=true
        fieldTemplateEvent({
            //obj, b.w, b.f, obj
            ui:obj,
            w:b.w,
            f:b.f,
            fieldData:obj
        }, function (e, t) {
            if (t == "value") {
                b.w.find(".mini-textbox-input").val(e);
            } else if (t == "lable") {
                b.w.find("lable").html(e);
            } else if (t == "placeholder") {
                b.w.find(".mini-textbox-input").attr("placeholder", e);
            } else if (t == "width") {
                if (b.t != "lineFeedBtn" && b.t!="mini-pp" ) {
                    let CC = mini.get(b.f.attr("id"))
                    CC.set({
                        width: e
                    })
                    fieldData.width = parseInt(e)
                }
            }
            else if (t == "maxLength") {
                b.w.find(".mini-textbox-input").val("");
            }else if (t == "fontSize") {
                b.w.find("lable").css("fontSize",parseInt(e))
            }else if (t == "radioOptions") {
                let oldValue = mini.get(b.f.attr("id")).getValue();
                mini.get(b.f.attr("id")).setData(b.w.data("data").value)
                mini.get(b.f.attr("id")).setValue(oldValue)
            }
        })




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