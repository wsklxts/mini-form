
import dragInsert from "./dragInsert"
import fieldsEvent from "./fieldsEvent"
import controls from "./controls"


export default function formBuilder(u) {

    var obj = controls(u)
    var b = obj.fieldTemplate()  //生成控件

    dragInsert(b.w, u)          //插入控件

    fieldsEvent({u, b})         //添加事件

    obj.setData()               //监听数据

}
