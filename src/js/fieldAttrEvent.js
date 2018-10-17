


export default class fieldAttrEvent {
    constructor(allHtml,options) {
        this.allHtml=allHtml
        this.attrData=options.b.d
        this.fields=options.b.f
        this.w=options.b.w
        this.t=options.b.t
        this.init()
    }

    init() {
        let allHtml=this.allHtml
        let attrData=this.attrData
        let w=this.w
        let t=this.t
        let f=this.fields

        if($.inArray(attrData.type,["radio", "checkBox","combobox"]) !== -1){
            let id = this.fields.attr("id")
            var defualtSize=mini.get(id).data.length
        }

        allHtml.fontSize &&
        allHtml.fontSize.on("input propertychange", function (e) {
            var v = $(this).find(".mini-textbox-input").val();
            $(this).find(".mini-textbox-input").val(v.replace(/[^0-9]/g, ''))
            //fn(v, "fontSize")
            //w.find(".mini-textbox-input").val(e);
            w.find("lable").css("fontSize", parseInt(v))
            w.data("data").fontSize = v
        })

        allHtml.createCValue &&
        allHtml.createCValue.on("input propertychange", function (e) {
            var v = $(this).find(".mini-textbox-input").val();
            //fn(v, "value")
            w.find(".mini-textbox-input").val(v);
            w.data("data").value = v
        })


        allHtml.createCCatipn &&
        allHtml.createCCatipn.on("input propertychange", function (e) {
            var v = $(this).find(".mini-textbox-input").val();
            //function htmlEncodeJQ ( str ) {
            //  return $('<p/>').text( str ).html();
            //}
            //fn(v, "lable")
            w.find("lable").text(v);
            w.data("data").lable = v
        })

        allHtml.createCPlaceholder &&
        allHtml.createCPlaceholder.on("input propertychange", function (e) {
            var v = $(this).find(".mini-textbox-input").val();
            //fn(v, "placeholder")
            w.find(".mini-textbox-input").attr("placeholder", v);
            w.data("data").placeholder = v
        })

        allHtml.createCWidth &&
        allHtml.createCWidth.on("input propertychange", function (e) {
            var v = $(this).find(".mini-textbox-input").val();
            //fn(v, "width")
            if (t != "lineFeed" && t != "pp") {
                let CC = mini.get(f.attr("id"))
                CC.set({
                    width: v
                })
            }
            w.data("data").width = parseInt(v)
        })

        allHtml.createCMaxLength &&
        allHtml.createCMaxLength.on("input propertychange", function (e) {
            var v = $(this).find(".mini-textbox-input").val();
            //fn(v, "maxLength")
            mini.get(allHtml.createCValue.children("span").attr("id")).set({
                value: "",
                maxLength: v
            })
            w.find(".mini-textbox-input").val("");
            w.data("data").value = ""
            w.data("data").maxLength = v
        })

        allHtml.createCRequire &&
        allHtml.createCRequire.on("click", function (e) {
            var id = $(this).children("span").attr("id");
            var v = mini.get(id).checked;
            //fn(v,"maxLength")
            w.data("data").require = v
        })

        allHtml.viewValue &&
        allHtml.viewValue.on("click", function (e) {
            let id = f.attr("id")
            $(this).find(".mini-textbox-input").val("text:" + mini.get(id).o1oO1l.text + ",id:" + mini.get(id).o1oO1l.id);
        })


        function eventInputHandler(e) {
            let currentLi = $(e.target).parent().parent().parent();
            currentLi.data("value").text = $(e.target).val()
            fn("input", "radioOptions")
        }

        function eventClickHandler(e) {
            if ($(this).hasClass("addOption")) {
                defualtSize += 1
                let clone = $(`<li><input type="text" class="mini-textbox" width="60" value=${"选项" + (defualtSize)}> <a class="mini-button addOption" iconCls="icon-add" ></a> <a class="mini-button subOption" iconCls="icon-close" ></a></li>`)
                let oldData = Object.assign({}, $(this).parent().data("value"))
                oldData.selected && delete oldData.selected  //防止复制选中状态
                clone.data("value", oldData)
                clone.data("value").id = defualtSize
                clone.attr("id", "optionId-" + (defualtSize))
                $(this).parent().after(clone)
                mini.parse()

                let allLi = $(this).parent().parent().children("li")
                w.data("data").value = []
                allLi.each(function (i, v) {
                    $(v).data("value").text = $(v).find(".mini-textbox-input").val()
                    w.data("data").value.push($(v).data("value"))
                })
            }
            if ($(this).hasClass("subOption")) {
                let currentID = $(this).parent().attr("id").split("-")[1];
                let data = w.data("data").value
                if (data.length <= 1) {
                    return
                }
                $.each(data, function (i, v) {
                    if (v.id == currentID) {
                        data.splice(i, 1)
                        return false
                    }
                })
                //fn(0, "radioOptions")
                $(this).parent().remove()
            }
            let oldValue = mini.get(f.attr("id")).getValue();
            mini.get(f.attr("id")).setData(w.data("data").value)
            mini.get(f.attr("id")).setValue(oldValue)
        }


        if (allHtml.optionsBtn) {
            allHtml.optionsBtn.on("input propertychange", eventInputHandler)
            allHtml.optionsBtn.on("click", ".addOption, .subOption", eventClickHandler)
        }


    }

}
