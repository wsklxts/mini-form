/**
 * Created by Administrator on 2018/9/20.
 */

import fieldTemplate from "./fieldTemplate"
import attrTemplate from "./attrTemplate"
//import {fn} from "./attrTemplate"
import dragInsert from "./dragInsert"
import fieldTemplateEvent from "./fieldTemplateEvent"
import {show} from "./method"


import {G} from "./globle"

let controlId = G
let data = G.data


export default function formBuilder(u, current) {
    var type = $(u.item).attr("id");
    var miniC = mini.get(type)
    var className=null
    if(u.fieldTemplateEvent){
        className=u.className
        type=u.type
    }else{
        className=miniC.name
    }


    var fieldBtn = $("<div class='buttonWrap'> <div class='mini-button buttonedit' iconCls='icon-edit'></div>  <div class='buttonadd mini-button' iconCls='icon-add'></div>  <div class='buttonsub mini-button' iconCls='icon-remove'></div> </div>")
    var filedsWrap = $("<li class='filed'></li>").append(fieldBtn)
    var fields = $(`<div class=${className} id=${className}${controlId.id}> </div>`)



    var typeText = {
        text: {
            lable: "单行输入框：",
            placeholder: "请输入",
        },
        textArea: {
            lable: "多行输入框：",
            placeholder: "请输入",
        },
        radio: {
            lable: "单选框",
            data: '[{text:"选项1",id:1},{text:"选项2",id:2},{text:"选项3",id:3}]'
        },
        checkBox: {
            lable: "多选框",
            data: '[{text:"选项1",id:1},{text:"选项2",id:2},{text:"选项3",id:3},{text:"选项4",id:4}]'
        },
        combobox: {
            lable: "下拉框",
            data: '[{text:"选项1",id:1},{text:"选项2",id:2},{text:"选项3",id:3}]'
        },
        date: {
            lable: "日期"
        },
        file: {
            lable:"文件",
        },
        pp: {
            lable:"这是一行文字",
            fontSize:14,
        },
        lineFeedBtn: {}
    }

    let fieldData = {
        id: controlId.id,
        type: type,
        lable: typeText[type].lable,
        miniClassName: miniC.name,
        placeholder: typeText[type].placeholder || "",
        value: "",
        maxLength: "",
        data: typeText[type].data || '[]',
        width:"",
        fontSize:typeText[type].fontSize || "",
    }


    var b = new fieldTemplate({
        type:miniC.name,
        fields:fields,
        filedsWrap,filedsWrap,
        fieldData:fieldData
    }).init();
    b.w.data("data", fieldData)
    dragInsert(b.w, u)

    fieldTemplateEvent({
        ui:u,
        w:b.w,
        f:b.f,
        fieldData:fieldData
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

    var typeArr=["mini-radiobuttonlist","mini-checkboxlist","mini-combobox"]
    var inArr=$.inArray(b.t,typeArr)
    inArr !== -1 && setData(typeArr[inArr])


    function setData(type){
        var fn = function(v,cruuentId){
            if (v.id == cruuentId) {
                v.selected = true
            }
        }
        if(type=="mini-checkboxlist"){
            fn = function(v,cruuentId){
                if(cruuentId.indexOf(v.id) !== -1){
                    v.selected = true
                }
            }
        }
        b.w.data("data").value = mini.get(b.f.attr("id")).getData()
        mini.get(b.f.attr("id")).on("valuechanged", function (e) {
            let cruuentId = this.getValue()
            let data = this.getData()
            $.each(data, function (i, v) {
                delete v.selected
                fn(v,cruuentId)
            })
        })
    }


    if (b.t != "lineFeedBtn" && b.t!="mini-pp" ) {
        let CC = mini.get(b.f.attr("id"))
        fieldData.width = parseInt(CC.getWidth())
    }
    if(b.t == "mini-pp"){
        b.w.find("lable").css("fontSize",b.w.data("data").fontSize)
    }


    controlId.id += 1
    return b.w
}
