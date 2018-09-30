/**
 * Created by Administrator on 2018/9/20.
 */


import {G} from "./globle"
import {show} from "./method"



export default function dragInsert(filedsWrap,u){


  var formBuild=$(".formBuild")


  if($('> li', formBuild).size() === 0){
    formBuild.append(filedsWrap)
  }else{
    if(G.placeholderIndex==1){
      $('> li', formBuild)
        .eq(G.placeholderIndex-1).before(filedsWrap)
    }else{
      $('> li', formBuild)
        .eq(G.placeholderIndex-2).after(filedsWrap)
    }
  }
  setTimeout(function(){show(filedsWrap,0,u)},24)

  mini.parse();

}
