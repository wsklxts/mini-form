/**
 * Created by Administrator on 2018/9/24.
 */

import {borderColor} from "./config"
import {G}  from "./config"
import controls  from "./controls"


let controlId = G

export function cloneDom(current, allHtml, u, options) {
    var obj = controls(u)
    var cloneTemplate = obj.fieldTemplate()
    var clone = cloneTemplate.w
    var filedsWrap = options.b.w
    current.after(clone)
    mini.parse()

    setTimeout(function(){show(clone,0,u)},24)

    clone.children("lable").html(current.children("lable").text()).css("fontSize", parseInt(filedsWrap.data("data").fontSize))
    var id = clone.children().last().attr("id");
    var cureentId = current.children().last().attr("id");
    var newArr = JSON.parse(JSON.stringify(current.data("data")));
    clone.data("data", newArr)
    clone.data("data").id = controlId.id - 1

    let value
    if ($.inArray(current.data("data").type, ["radio", "checkBox", "combobox"]) !== -1) {
        value = mini.get(cureentId).getValue()
    } else if ($.inArray(current.data("data").type, ["textbox", "textArea"]) !== -1) {
        value = current.find(".mini-textbox-input").val()
    }

    mini.get(id) &&
    mini.get(id).set({
        value: value,
        emptyText: filedsWrap.data("data").placeholder || "",
        width: newArr.width,
        data: newArr.value,
    })

    allHtml &&
    allHtml.createCValue &&
    mini.get(allHtml.createCValue.children("span").attr("id")).set({
        maxLength: filedsWrap.data("data").maxLength
    })

    return {
        obj,
        cloneTemplate
    }
}

var timer = null
export function exeTime(f, s) {
    clearInterval(timer)
    timer = setInterval(function () {
        f.css(s, borderColor[parseInt(Math.random() * (borderColor.length - 1))])
    }, 300)
}

export function formatJson(json, options) {
    var reg = null,
        formatted = '',
        pad = 0,
        PADDING = '    '; // one can also use '\t' or a different number of spaces
    // optional settings
    options = options || {};
    // remove newline where '{' or '[' follows ':'
    options.newlineAfterColonIfBeforeBraceOrBracket = (options.newlineAfterColonIfBeforeBraceOrBracket === true) ? true : false;
    // use a space after a colon
    options.spaceAfterColon = (options.spaceAfterColon === false) ? false : true;

    // begin formatting...

    // make sure we start with the JSON as a string
    if (typeof json !== 'string') {
        json = JSON.stringify(json);
    }
    // parse and stringify in order to remove extra whitespace
    json = JSON.parse(json);
    json = JSON.stringify(json);

    // add newline before and after curly braces
    reg = /([\{\}])/g;
    json = json.replace(reg, '\r\n$1\r\n');

    // add newline before and after square brackets
    reg = /([\[\]])/g;
    json = json.replace(reg, '\r\n$1\r\n');

    // add newline after comma
    reg = /(\,)/g;
    json = json.replace(reg, '$1\r\n');

    // remove multiple newlines
    reg = /(\r\n\r\n)/g;
    json = json.replace(reg, '\r\n');

    // remove newlines before commas
    reg = /\r\n\,/g;
    json = json.replace(reg, ',');

    // optional formatting...
    if (!options.newlineAfterColonIfBeforeBraceOrBracket) {
        reg = /\:\r\n\{/g;
        json = json.replace(reg, ':{');
        reg = /\:\r\n\[/g;
        json = json.replace(reg, ':[');
    }
    if (options.spaceAfterColon) {
        reg = /\:/g;
        json = json.replace(reg, ': ');
    }

    $.each(json.split('\r\n'), function(index, node) {
        var i = 0,
            indent = 0,
            padding = '';

        if (node.match(/\{$/) || node.match(/\[$/)) {
            indent = 1;
        } else if (node.match(/\}/) || node.match(/\]/)) {
            if (pad !== 0) {
                pad -= 1;
            }
        } else {
            indent = 0;
        }

        for (i = 0; i < pad; i++) {
            padding += PADDING;
        }
        formatted += padding + node + '\r\n';
        pad += indent;
    });
    return formatted;
};


export function show(filedsWrap, direction, u) {
    //1、定义一片雪花模板

    var flake = $('<p class="tinyBall"></p>')

    var endLeft = parseInt(Math.random() * 100 + (-50))
    var endTop = parseInt(Math.random() * 100 + (-50))

    //随机生成雪花下落持续时间
    //var durationTime = 5000 * Math.random();
    var durationTime = 1000;

    //随机生成雪花下落 开始 时的透明度
    var startOpacity = 0.7 + 0.3 * Math.random();

    //随机生成雪花下落 结束 时的透明度
    var endOpacity = 0.2 + 0.2 * Math.random();

    //3、克隆一个雪花模板,定义雪花的初始样式，拼接到页面中

    flake = flake.clone().appendTo($("body"))
    let left
    let top
    try {
        left = direction == 1 ? filedsWrap.offset().left + filedsWrap.width() / 2 : (u.originalPosition.left + u.item.width() / 2) || 0
        top = direction == 1 ? filedsWrap.offset().top + filedsWrap.height() / 2 : (u.originalPosition.top + u.item.height() / 2) || 0
    } catch (err) {
        left = 0
        top = 0
    }
    flake.css({
            "left": left,
            "top": top,
            "background": borderColor[parseInt(Math.random() * borderColor.length - 1)]
        })
        .animate({ //执行动画
            "left": direction == 1 ? endLeft + filedsWrap.offset().left + filedsWrap.width() / 2 : filedsWrap.offset().left + filedsWrap.width() / 2,
            //"left":direction==1 ? $(window).width()/2 :filedsWrap.offset().left+filedsWrap.width()/2,
            //"opacity": endOpacity,
            "top": direction == 1 ? endTop + filedsWrap.offset().top + filedsWrap.height() / 2 : filedsWrap.offset().top + filedsWrap.height() / 2,
            //"top": direction==1 ? $(window).height()/2  :filedsWrap.offset().top+filedsWrap.height()/2,
        }, durationTime, function () {
            $(this).remove();
            if (direction != 0) {
                filedsWrap.remove()
            }
        });
}
