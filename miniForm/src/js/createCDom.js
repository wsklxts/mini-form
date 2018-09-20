/**
 * Created by Administrator on 2018/9/20.
 */

import attrEvent from "./attrEvent"
import fieldTemplate from "./fieldTemplate"
import fieldTemplateEvent from "./fieldTemplateEvent"
import dragInsert from "./dragInsert"
import sortable from "./sortable"

import {buttonWrapS} from "./globle"



export default function createCDom(u){

  return new fieldTemplate(u).init();
}
