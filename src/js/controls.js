

import fieldsRender from "./fields"
import {typeText} from "./config"


import {G} from "./config"

let controlId = G


export default function controls(u) {
    var type = $(u.item).attr("id");
    var miniC = mini.get(type)
    var className = null
    if (u.isRender) {
        className = u.miniClassName
        type = u.type
    } else {
        className = miniC.name
    }

    var fieldBtn = $("<div class='buttonWrap'> <div class='mini-button buttonedit' iconCls='icon-edit'></div>  <div class='buttonadd mini-button' iconCls='icon-add'></div>  <div class='buttonsub mini-button' iconCls='icon-remove'></div> </div>")
    var filedsWrap = $("<li class='filed'></li>").append(fieldBtn)
    var fields = $(`<div class=${className} id=${className}${controlId.id}> </div>`)


    let fieldData = {
        id: controlId.id,
        type: type,
        lable: typeText[type].lable,
        miniClassName: className,
        placeholder: typeText[type].placeholder || "",
        value: "",
        maxLength: "",
        data: typeText[type].data || '[]',
        width: "",
        fontSize: typeText[type].fontSize || "",
    }


    return  new fieldsRender({type, fields, filedsWrap, fieldData})
}
