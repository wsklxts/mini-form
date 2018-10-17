/**
 * Created by Administrator on 2018/9/20.
 */


import fieldTemplateEvent from "./fieldsEvent"
import dragInsert from "./dragInsert"
import {G} from "./config"


export default class fields {

    constructor(option) {
        this.type = option.type
        this.fields = option.fields
        this.filedsWrap = option.filedsWrap
        this.fieldData = option.fieldData
        this.filedsWrap.data("data", this.fieldData)
        G.id += 1
        this.render()
    }

    fieldTemplate() {
        return {
            w: this.filedsWrap,
            f: this.fields,
            t: this.type,
            d: this.fieldData,
        }
    }

    setData(){
        let w=this.filedsWrap
        let f=this.fields
        
        var typeArr = ["radio", "checkBox", "combobox"]
        var inArr = $.inArray(this.type, typeArr)
        inArr !== -1 && setData(typeArr[inArr])

        function setData(type) {
            var fn = (v, cruuentId) => {
                if (v.id == cruuentId) {
                    v.selected = true
                }
            }
            if (type == typeArr[1]) {
                fn = (v, cruuentId)=> {
                    if ($.inArray(String(v.id), cruuentId) !== -1) {
                        v.selected = true
                    }
                }
            }
            w.data("data").value = mini.get(f.attr("id")).getData()
            mini.get(f.attr("id")).on("valuechanged", function (e) {
                let cruuentId = this.getValue()
                let data = this.getData()
                cruuentId = cruuentId.split(",")
                $.each(data, (i, v) => {
                    delete v.selected
                    fn(v, cruuentId)
                })
            })
        }

        if (this.type != "lineFeed" && this.type != "pp") {
            let CC = mini.get(f.attr("id"))
            this.fieldData.width = parseInt(CC.getWidth())
        }
        if (this.type == "pp") {
            w.find("lable").css("fontSize", w.data("data").fontSize)
        }
    }

    render() {
        this.fields.attr("emptyText", this.fieldData.placeholder)
        this.fields.attr("allowInput", false)
        this.fields.attr("width", this.fieldData.width)
        this.fields.attr("maxLength", this.fieldData.maxLength)
        this.fields.attr("data", this.fieldData.data)
        this.fields.attr("format", 'yyyy-MM-dd H:mm:ss').attr("showTime", 'true')
        this.fields.val(this.fieldData.value)
        this.filedsWrap.addClass(this.type)

        if (this.type == 'combobox') {
            if (this.fieldData.data) var text = eval("(" + this.fieldData.data + ")")[0].text
            this.fields.attr("value", text)
        }else if(this.type == "pp"){
            this.fieldData.value=this.fieldData.lable
        }
        if (this.type == "lineFeed") {
            this.fields = $(`<div class="brWrap"></div>`)
            this.filedsWrap.append(this.fields, $("<br />"))
        }else{
            this.filedsWrap.append(`<lable>${this.fieldData.lable}</lable>`, this.fields)
        }


    }



}
