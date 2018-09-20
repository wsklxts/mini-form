/**
 * Created by Administrator on 2018/9/20.
 */


export default class attrEvent{


  constructor(f,attrTemplate,linkData) {
    this.f = f
    this.attrTemplate = attrTemplate
    var caption=$(attrTemplate.subhtml.createCCatipn).children("div").attr("id")
    var value=$(attrTemplate.subhtml.createCValue).children("div").attr("id")
    //var fcaption=mini.get("fcaption")
    //var fValue=mini.get(value)
    //var vValue=mini.get(f.children("span").attr("id"))
    //
    //console.log(vValue);
    //$(fcaption.lo01).on("input propertychange",function(){
    //  var val=$(this).val();
    //  f.children("lable").html(val)
    //  linkData(val)
    //})
    //$(fValue.lo01).on("input propertychange",function(){
    //  //var cc=mini.get("cText")
    //  var val=$(this).val();
    //
    //  vValue.setValue(val)
    //  linkData(val)
    //})


  }




}

