<template>
  <div>
    <XHeader  title="加班申请" :left-options="{showBack: true}">
      <a slot="right" @click="detailBtn"> 详情</a>
    </XHeader>
    <div class="template">


      <!--<CellBox class="title">我的假期</CellBox>-->

      <!--<group title="我的假期">-->
      <!--<datetime-range title="开始时间" start-date="2018-01-01" end-date="2020-01-01"  v-model="value"></datetime-range>-->
      <!--</group>-->

      <group title="">
        <datetime
          title="开始时间"
          format="YYYY-MM-DD HH:mm"
          v-model="form.beginDate"
          @on-change="change"
          placeholder="请选择日期"
        ></datetime>

        <datetime
          title="结束时间"
          format="YYYY-MM-DD HH:mm"
          v-model="form.endDate"
          @on-change="change"
          placeholder="请选择日期"
        ></datetime>
        <!--<group>-->
          <!--<CellBox class="title">时长</CellBox>-->
        <!--</group>-->
        <x-input type="number" :required="true" title="扣休息时间" v-model="form.otKouTime" text-align="right" placeholder="请输入扣休息时间"></x-input>
      </group>


      <!--<group>-->

      <!--</group>-->

      <!---->
      <!--<group title=" ">-->
        <!--<Cell  title="加班结算方式" :value="selectValue" is-link @click.native="select()"></Cell>-->
      <!--</group>-->

      <!--<group  title="请假原因">-->
      <!--<x-input title="" placeholder="请输入请假原因" focus>-->

      <!--</x-input>-->
      <!--</group>-->

      <group title=" 加班原因" class="tit">
        <x-textarea title="" placeholder="请输入加班原因" v-model="form.reason"></x-textarea>
      </group>

      <group title=" ">
        <CellBox class="title">
          <div class="subTitle">附件</div>
          <a href="javascript:void(0)">
            <div class="icon">
              <input type="file" name="fileUpload" multiple="multiple" @change="upload"/>
              <!--<span>选择文件</span>-->
              <div>
                <x-icon type="ios-plus" size="30" class="cell-x-icon"></x-icon>
              </div>

            </div>
          </a>
        </CellBox>
      </group>

      <div class="uploadNameWrap">
        <div v-for="f in uploadName">{{f}}</div>
      </div>

      <div class="btnWrap">
        <x-button type="default" text="提交" @click.native="formSubmit"></x-button>
      </div>
      <toast v-model="errMsgToast" type="warn" width="5rem">{{Message}}</toast>
      <toast v-model="successMsgToast" type="success" width="5rem">{{Message}}</toast>

      <confirm v-model="checkbox"
               title="请选择审批人，否则提交失败!"
               @on-confirm="onConfirm"
              >
        <div>
          <checklist
            ref="refChecklist"
            :options="commonList"
            @on-change="changeChecklist"
          >
          </checklist>
        </div>
      </confirm>


      <actionsheet
        v-model="show"
        :menus="menu"
        theme="android"
        @on-click-menu="onClick"

      >
      </actionsheet>
    </div>
  </div>
</template>


<script type="text/ecmascript-6">


  import { TransferDom,Confirm,Checklist, Actionsheet, Group, XSwitch, Cell,XHeader,CellBox ,Datetime,XInput,XTextarea,XButton,Toast     } from 'vux'
  import {global_empname,global_empid,comp_code} from "@/common/util"


  export default {
    components: {
      Actionsheet,
      XSwitch,
      Group,
      Cell,
      XHeader,
      CellBox,
      Datetime,
      XInput,
      XTextarea,
      XButton,Toast,Confirm,Checklist
    },
    methods:{
      detailBtn(){
        this.$router.push({path:"/apply/jiaBan/jiaBanDetails"})
      },
      changeChecklist(a,b){
        console.log(a);
        this.ActorsId=a
      },
      checkForm(){
        if(this.form.beginDate==""){
          this.errMsgToast=true
          this.Message="请输入开始时间"
          return false
        }else if(this.form.endDate==""){
          this.errMsgToast=true
          this.Message="请输入结束时间"
          return false
        }else if(this.form.otKouTime==""){
          this.errMsgToast=true
          this.Message="扣休息时间"
          return false
        }else if(this.form.reason==""){
          this.errMsgToast=true
          this.Message="请输入原因"
          return false
        }
//        const bDate=this.form.beginDate.split(" ")[1].split(":").join("")
        const bDate=this.form.beginDate
        const eDate=this.form.endDate
        console.log( bDate);
        console.log(eDate);
        if(bDate>=eDate){
          this.errMsgToast=true
          this.Message="结束时间必须大于开始时间"
          return false
        }
        return true
      },
      select(){
        this.show=true;
      },
      onClick (key,value) {
        console.log(value)
        this.selectValue=value;
      },
      onConfirm(){
        console.log("确定");
        let formData={
          receiptID:this.receiptID,
          workFlowCode:"K002",
          Actors: JSON.stringify(this.ActorsId),
          global_empid:global_empid,
          comp_code:comp_code,
          nodeID:1,
        }
        this.$http.get("/MobileWeb/MyApply/IsAllowSelectorHandler.ashx",formData)
          .then(r=>{
            console.log(r);
            if(r.IsSuccess==true){
              this.successMsgToast=true
              this.Message=r.Message
              this.commonList=[]
            }else{
              this.errMsgToast=true
              this.Message=r.Message
            }
          })
          .catch(e=>{
            console.log(e);
          })

      },
      formSubmit(){

        if(!this.checkForm())return

        const formData ={
          company:comp_code,
          empId:global_empid,
          empName: global_empname,
          otDate:this.form.beginDate.split(" ")[0],
          otSTime:this.form.beginDate.split(" ")[1],
          otETime: this.form.endDate.split(" ")[1],
          reason:this.form.reason,
          drpSTimeFlag:'',
          drpETimeFlag:'',
          otKouTime:this.form.otKouTime,
          fieldCustomParams:'[]'
        }
        console.log(formData);

        this.$http.post("/MobileService/MyApply.asmx/AddOutTimeRecord",formData)
          .then(r=>{
            console.log(r);
            let data= JSON.parse(r.data.d)
            console.log(data);
            if(data.success==1){
              this.checkbox=true
              this.actors=data.actors
              this.receiptID=data.id
              console.log(this.actors);
              for(let i=0;i<this.actors.length;i++){
                console.log(this.actors[i]);
                this.commonList.push({key:JSON.stringify(this.actors[i].EmpID),value:this.actors[i].EmpName+" ["+this.actors[i].EmpCode+"]"})
              }
            }else if(data.success=="0"){
              this.Message=data.msg
              this.errMsgToast=true
            }
          })
          .catch(e=>{
          })
      },
      change(){
        console.log(this.beginDate);
      },
      upload(e){
        this.uploadName=[]
        console.log(e.target.files);
        for(var f in e.target.files){
//        for(var i=0; i<e.target.files.length;i++){
//          console.log(e.target.files[f].name);
//          console.log(e.target.files[f]);
          if(typeof e.target.files[f] == "object"){
            this.uploadName.push(e.target.files[f].name)
          }

        }
      }
    },
    data(){
      return{
        form:{
          otKouTime:"",
          reason:"",
          beginDate:"",
          endDate:"",
        },
        commonList: [],
        receiptID:"",
        checkbox:false,
        actors:[],
        ActorsId:[],
        Message:"",
        errMsgToast:false,
        successMsgToast:false,
        stringValue: '0',
        show: false,
        selectValue:"请选择",
        uploadName:[],
        menu: {
          menu1: '方式1',
          menu2: '方式2',
          menu3: '方式3',
          menu4: '方式4',
        },
      }
    }
  }

</script>


<style lang="less" type="text/less" scoped>
  .uploadNameWrap{
    text-align: center;
  }
  .title{
    font-size:0.36rem;
  &>div{
      padding-right:0.36rem;
    }
  }
  .title:before{
    display:none;
  }
  .icon{
    height:50px;
    background:#fff;
    border-radius: 5px;
    text-align: center;
    position:relative;
    display: -webkit-box;
    -webkit-box-align: center;
  span {
    color: #fff;
    background: @content-color;
    padding: 0.10rem;
    border-radius: 0.1rem;
  }

  div svg {
    vertical-align: -20%;
    fill: @content-color;
  }
  input{
    width:100%;
    height:50px;
    opacity:0;
    cursor:pointer;
    position:absolute;
    left: 0;
  }
  }
  .btnWrap{
    position: fixed;
    width: 100%;
    bottom: 0;
  button.weui-btn{
    border-radius:0 !important;
  }
  }
</style>
