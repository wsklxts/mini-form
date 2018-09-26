/**
 * Created by Administrator on 2018/9/20.
 */

import {G} from "./globle"

import createCDom from "./createCDom"


export default function sortable(){

  var buttonWrapS= G.buttonWrapS
  var tt
  let formAttribute = $(".formAttribute")
  let formBuild = $(".formBuild");
  let control = $(".controlsWrap");

  formBuild.sortable({
    opacity: 0.9,
    connectWith: formBuild,
    cursor: 'move',
    placeholder: 'controlP',
    revert: 150,
    activate:function(){
    },
    start:function(event,ui){
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
  control.sortable({
    helper:"clone",
    opacity: 0.9,
    connectWith: formBuild,
    scroll: false,
    cursor: 'move',
    placeholder: 'controlP',
    start:function(event,ui){
      ui.item.show().addClass('moving')
      tt=ui.item.parent()
    },
    stop:function(e,u){
      tt.sortable("cancel")
    },
    revert: 150,
    beforeStop: function(e,u){
      G.placeholderIndex=u.placeholder.index();
    },
    distance: 3,
    update: function(event, ui) {
      if(ui.item.parent()[0] === formBuild.get(0)){
        createCDom(ui)
        mini.parse();
      }
    },
    over:function(e,u){
    },
  })


}
