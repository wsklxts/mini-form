/**
 * Created by Administrator on 2018/9/20.
 */

var timer = null
import attrTemplate from "./fieldAttr"
import fieldAttrEvent from "./fieldAttrEvent"
import formBuilder from "./formBuilder"
import {G}  from "./config"
import {show,exeTime,cloneDom}  from "./method.js"


export default function fieldsEvent(options) {
    var u = options.u
    var filedsWrap = options.b.w
    var fields = options.b.f


    var buttonWrapS = G.buttonWrapS
    let formAttribute = $(".formAttribute")
    let formBuild = $(".formBuild")
    let feildHTML = null
    let allHtml = null


    filedsWrap.on("mouseover", function (e) {
        if (!buttonWrapS) {
            $(this).children(".buttonWrap").css("display", "block")
        }
    })
    filedsWrap.on("mouseout", function (e) {
        $(this).children(".buttonWrap").css("display", "none")
    })


    filedsWrap.on("click", function (e) {
        e.stopPropagation()
        if (filedsWrap.hasClass("lineFeed")) {
            filedsWrap.parent().children("li").removeClass("active")
            exeTime(filedsWrap.children(".brWrap"), "background")
        } else {
            if (!filedsWrap.hasClass("pp")) {
                let id = fields.attr("id")
                if (mini.get(id).data) {
                    filedsWrap.data("data").value = mini.get(id).data //字段默认data给w
                }
            }
            filedsWrap.parent().children(".active").removeClass("active")
            filedsWrap.addClass("active")
            exeTime(filedsWrap, "border-color")
            makeFeildAttr(options)
        }
    })

    filedsWrap.on("click", ".buttonadd, .buttonsub, .buttonedit", function (e) {
        e.stopPropagation()
        if ($(this).hasClass("buttonadd")) {
            var current = $(this).parent().parent("li")
            var obj = cloneDom(current, allHtml, u, options)
            fieldsEvent({u,b:obj.cloneTemplate})
            obj.obj.setData()
        }
        if ($(this).hasClass("buttonsub")) {
            if (filedsWrap.data("data").id == formAttribute.data("id")) {
                formAttribute.empty()
            }
            filedsWrap.remove()
            if (formBuild.children("li").size() <= 0) {
                formBuild.addClass("tip")
            }
        }
        if ($(this).hasClass("buttonedit")) {
            console.log($(this).parent().parent("li").data("data"));
        }
    })


    function makeFeildAttr(options) {
        let w = options.b.w

        let isEmpty = formAttribute.children("div").size()
        if (formAttribute.data("id") == w.data("data").id && isEmpty) {
            return
        }
        if (isEmpty) {
            formAttribute.empty()
        }

        feildHTML = new attrTemplate(options).init() //字段属性模板
        allHtml = feildHTML.subhtml
        new fieldAttrEvent(allHtml, options) //字段属性模板事件


        Object.keys(allHtml).forEach(function (key) {  //渲染字段属性模板
            formAttribute.append(allHtml[key])
        });
        mini.parse()


        allHtml.createCValue &&
        mini.get(allHtml.createCValue.children("span").attr("id")).set({
            maxLength: w.data("data").maxLength || 999999
        })

        formAttribute.data("id", w.data("data").id)


    }

    formBuild.on("click", function () {
        $(".formAttribute").empty()
        filedsWrap.removeClass("active")
    })


}
