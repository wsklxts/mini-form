
import dragInsert from "./dragInsert"
import fieldsEvent from "./fieldsEvent"
import controls from "./controls"


export default function formBuilder(u, current) {

    var obj = controls(u)
    var b = obj.fieldTemplate()  //渲染控件

    dragInsert(b.w, u)          //插入控件

    fieldsEvent({u, b})         //添加事件

    obj.setData()               //监听数据

}
