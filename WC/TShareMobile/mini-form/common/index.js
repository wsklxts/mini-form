/**
 * Created by Administrator on 2018/9/5.
 */





$(function(){



  mini.parse()

  var control = document.getElementsByClassName('controlsWrap')[0];
  var formBuild = document.getElementsByClassName('formBuild')[0];
  var test = document.getElementsByClassName('test')[0];
  var formAttribute = $(".formAttribute");
  //var mini = document.getElementsByClassName('mini-panel-body')[0];

  var clone=null
  var before=null
  var buttonWrapS=false
  var button=null
  var placeholderIndex
  var filedId=0

  $(formBuild).sortable({
    opacity: 0.9,
    connectWith: $(formBuild),
    cursor: 'move',
    placeholder: 'controlP',
    revert: 150,
    activate:function(){
      console.log("activate");
    },
    start:function(event,ui){
      console.log("start");
      $(".buttonWrap").css("display","none")
      buttonWrapS=true
    },
    beforeStop: (evt, ui) => (evt, ui),
    distance: 3,
    update: function(event, ui) {

    },
    stop:function(){
      buttonWrapS=false
    }
  })
  var toCancel

  $(control).sortable({
    helper:"clone",
    opacity: 0.9,
    connectWith: $(formBuild),
    scroll: false,
    cursor: 'move',
    placeholder: 'controlP',
    start:function(event,ui){
      console.log("start");
      ui.item.show().addClass('moving')
      tt=ui.item.parent()
      toCancel=true
    },
    stop:function(e,u){
      console.log("stop");
      tt.sortable("cancel")
    },
    revert: 150,
    beforeStop: function(e,u){
      console.log("beforeStop");
      toCancel=false
      placeholderIndex=u.placeholder.index();
    },
    distance: 3,
    update: function(event, ui) {
      if(ui.item.parent()[0] === formBuild){
        makeControl(ui)
        mini.parse();
      }
    },
    over:function(e,u){
      console.log("over");
    },
  })



  function makeControl(u){
    createCDom(u)
  }

  function createCDom(u){
    var type=$(u.item).attr("id");
    var miniC=mini.get(type)
    var filedsWrap=$("<li class='filed'></li>")
    var fields=$(`<div class=${miniC.name}> </div>`)
    var fieldData={}
    var lable=null
    button=$("<div class='buttonWrap'> <div class='mini-button buttonedit' iconCls='icon-edit'></div>  <div class='buttonadd mini-button' iconCls='icon-add'></div>  <div class='buttonsub mini-button' iconCls='icon-remove'></div> </div>")
    switch(miniC.name){
      case "mini-textbox":
        fields.attr("emptyText","请输入")
        filedsWrap.addClass("text")
        lable=$('<lable>单行输入框：</lable>')
        filedsWrap.data("caption",lable.text())
        filedsWrap.data("placeholder",fields.attr("emptyText"))
        break;
      case "mini-textarea":
        fields.attr("emptyText","请输入")
        filedsWrap.addClass("textarea")
        lable=$('<lable>多行输入框：</lable>')
        filedsWrap.data("caption",lable.text())
        filedsWrap.data("placeholder",fields.attr("emptyText"))
        break;
      case "mini-radiobuttonlist":
        fields.attr("data",'[{text:"选项1",id:1},{text:"选项2",id:2},{text:"选项3",id:3}]')
        filedsWrap.addClass("radio")
        lable=$('<lable>单选框：</lable>')
        break;
      case "lineFeedBtn":
        fields=$(`<div class="brWrap"></div>`)
        var br=$("<br />")
        filedsWrap.addClass("lineFeed")
        break;
      case "mini-checkboxlist":
        fields.attr("data",'[{text:"选项1",id:1},{text:"选项2",id:2},{text:"选项3",id:3}]')
        filedsWrap.addClass("checkbox")
        lable=$('<lable>多选框：</lable>')
        break;
      case "mini-combobox":
        fields.attr("data",'[{text:"选项1",id:1},{text:"选项2",id:2},{text:"选项3",id:3}]')
        fields.attr("value",'2')
        filedsWrap.addClass("combobox")
        lable=$('<lable>下拉框：</lable>')
        break;
      case "mini-datepicker":
        fields.attr("format",'yyyy-MM-dd H:mm:ss')
        fields.attr("showTime",'true')
        filedsWrap.addClass("datepicker")
        lable=$('<lable>日期：</lable>')
        break;
      case "mini-htmlfile":
        filedsWrap.addClass("fileupload")
        lable=$('<lable>文件上传：</lable>')
        alert(1)
        break;
    }

    filedsWrap.data("id",filedId+=1)

    if(br){
      filedsWrap.append(lable,button ,fields,br)
    }else{
      filedsWrap.append(lable,button ,fields)
    }

    addEventAc(u,filedsWrap)
    sortC(filedsWrap)
    return filedsWrap
  }


  var timer=null
  function addEventAc(u,filedsWrap){
    filedsWrap.on("mouseover",function(e){
      if(!buttonWrapS){
        $(this).children(".buttonWrap").css("display","block")
      }
    })
    filedsWrap.on("mouseout",function(e){
        $(this).children(".buttonWrap").css("display","none")
    })

    function exeTime(f,s){
      var color=["red","pink","blue","black","gray"]
      timer=setInterval(function(){
        f.css(s,color[parseInt(Math.random()*(color.length-1))])
      },300)
    }
    filedsWrap.on("click",function(e){
      e.stopPropagation()
      if(filedsWrap.hasClass("lineFeed")){
        clearInterval(timer)
        //filedsWrap.parent().children("li").children(".brWrap").css("background","#afd6f3")
        filedsWrap.parent().children("li").removeClass("active")
        exeTime(filedsWrap.children(".brWrap"),"background")

      }else{
        clearInterval(timer)
        filedsWrap.parent().children("li").removeClass("active")
        filedsWrap.addClass("active")
        exeTime(filedsWrap,"border-color")
        makeFeildAttr(filedsWrap)
      }
    })

    $(formBuild).on("click",function(){
      filedsWrap.parent().children("li").removeClass("active")
      $(".mini-panel-body").empty()
      clearInterval(timer)
    })



    filedsWrap.on("click",".buttonadd, .buttonsub",function(e){
      e.stopPropagation()
      if($(this).hasClass("buttonadd")){
        $(this).parent().parent("li").after(createCDom(u))
        mini.parse();
      }
      if($(this).hasClass("buttonsub")){
        clearFeildAttr(filedsWrap)
        filedsWrap.remove()

      }
      if($(this).hasClass("buttonedit")){


      }
    })
  }

  function sortC(filedsWrap){



    if($('> li', $(formBuild)).size() === 0){
      $(formBuild).append(filedsWrap)
    }else{
      if(placeholderIndex==1){
        $('> li', $(formBuild))
          .eq(placeholderIndex-1).before(filedsWrap)
      }else{
        $('> li', $(formBuild))
          .eq(placeholderIndex-2).after(filedsWrap)
      }
    }
    mini.parse();
  }

  function makeFeildAttr(f){
    //var formAttribute = $(mini.get("fieldsAttr").getBodyEl())
    var fieldType=f.attr("class").split(" ")[1]
    var feildHTML
    if( formAttribute.children("div").size()){
      formAttribute.empty()
    }

    switch(fieldType){
      case "text":
        feildHTML=template(f)
        break;
      case "textarea":
         feildHTML=template(f)
            break;
    }

    formAttribute.html(feildHTML)
    formAttribute.data("id",f.data("id"))


    mini.parse()

    var fcaption=mini.get("fcaption").getEl()


    //$(fcaption).on("valuechanged")

  }


  function template(f){
    var feildHTML=`
          <div class="feildAttr">
            <lable>控件ID：</lable>
            <div class="mini-textbox" value=${f.data("id")} allowInput="false"> </div>
           </div>
           <div class="feildAttr">
            <lable>控件类型：</lable>
            <div class="mini-textbox" value=${f.attr("class").split(" ")[1]} allowInput="false"> </div>
           </div>
           <div class="feildAttr fcaption">
            <lable>控件标题：</lable>
            <div id="fcaption" class="mini-textbox" value="${f.data("caption")}"></div>
           </div>

           <div class="feildAttr">
            <lable>控 件 值：</lable>
            <div class="mini-textbox"></div>
           </div>
           <div class="feildAttr">
            <lable>占  位  符：</lable>
            <div class="mini-textbox" value="${f.data("placeholder")}"></div>
           </div>
           <div class="feildAttr">
            <lable>控件宽度：</lable>
            <div class="mini-textbox" > </div>
           </div>
           <div class="feildAttr">
            <lable>最大长度：</lable>
            <div class="mini-spinner"  maxValue="" allowLimitValue="false" ></div>
           </div>
           <div class="feildAttr">
            <lable></lable>
            <div class="mini-checkbox" text="必须输入"</div>
           </div>
        `
    return feildHTML
  }

  function clearFeildAttr(f){
    if(f.data("id")==formAttribute.data("id")){
      formAttribute.empty()
    }
  }

  $(".mini-panel-body").on("click","")
  $(".formBuildName").on("click",function(){
    console.log(mini.get("fcaption"));
  })

})

function delAll(){
  $(formBuild).empty()
  $(".formAttribute").empty()
}

