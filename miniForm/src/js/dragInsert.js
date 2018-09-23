/**
 * Created by Administrator on 2018/9/20.
 */


import {G} from "./globle"
import {show} from "./method"



export default function dragInsert(filedsWrap){

  var formBuild=$(".formBuild")
  insert()
  show(filedsWrap,0);
  function insert(){
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
  }

  mini.parse();


}
