<template>
  <div>
    <XHeader  title="请假" :left-options="{showBack: true}" >
      <a slot="right" @click="detailBtn"> 详情</a>
    </XHeader>
    <div class="template">

      <group>
        <Cell  title="请假类型" :value="form.type" is-link @click.native="select()"></Cell>
      </group>

      <group title="我的假期">
        <datetime
          title="开始时间"
          format="YYYY-MM-DD HH:mm"
          v-model="form.startDate"
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

        <group>
          <x-input type="number" :required="true" title="请假天数" v-model="form.AlDay" text-align="right" placeholder="请输入假天数"></x-input>
          <x-input type="number" :required="true" title="请假小时" v-model="form.AlTime" text-align="right" placeholder="请输入假小时"></x-input>
        </group>
      </group>



      <group title=" 请假原因" class="tit">
        <x-textarea title="" v-model="form.reason" placeholder="请输入请假原因"></x-textarea>
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


      <actionsheet
        ref="popup"
        v-model="show"
        :menus="menu"
        theme="android"
        @on-click-menu="onClick"
       >
      </actionsheet>

      <toast v-model="errMsgToast" type="warn" width="5rem">{{errMsg}}</toast>

      <confirm v-model="checkbox"
               title="请选择审批人，否则提交失败!"
               @on-cancel="onCancel"
               @on-confirm="onConfirm"
               @on-show="onShow"
               @on-hide="onHide">
        <div>
          {{commonListC}}
          <checklist
                     :options="commonList"
                     v-model="checklistModel"
                     @on-change="changeChecklist"
          >
          </checklist>
        </div>
      </confirm>
{{commonListC}}
    </div>
  </div>
</template>


<script type="text/ecmascript-6">

  import {TransferDom, Actionsheet, Group, XSwitch, Cell,XHeader,CellBox ,Datetime,XInput,XTextarea,XButton
  ,Toast,Confirm,Checklist
  } from 'vux'
  import qs from 'qs'
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
      changeChecklist(a,b){
        console.log(a);
      },
      onConfirm(){
        console.log("确定");
        let formData={
          receiptID:this.actors.id,
          workFlowCode:"K001"
        }
        let receiptID=this.actors.id
        this.$http.post("MobileWeb/MyApply/IsAllowSelectorHandler.ashx")
          .then(r=>{
            console.log(r);
          })
          .catch()

      },
      onCancel(){
        console.log("取消");
      },
      onShow(){
        console.log("show");
      },
      onHide(){
        console.log("hide");
      },
      detailBtn(){
        this.$router.push({path:"/apply/vacation/details"})
      },
      checkForm(form){
        console.log(form);
        if(form.type==""){
          this.errMsg="请输入请假类型"
          this.errMsgToast=true
          return false;
        }else if(form.startDate==""){
          this.errMsg="请输入开始时间"
          this.errMsgToast=true
          return false;
        }else if(form.endDate==""){
          this.errMsg="请输入结束时间"
          this.errMsgToast=true
          return false;
        }else if(form.AlDay==""){
          this.errMsg="请输入天数"
          this.errMsgToast=true
          return false;
        }else if(form.AlTime==""){
          this.errMsg="请输入小时"
          this.errMsgToast=true
          return false;
        }else if(form.reason==""){
          this.errMsg="请输入请假原因"
          this.errMsgToast=true
          return false;
        }
        return true
      },
      formSubmit(){
        this.form.startDate=this.form.startDate.split(" ")[0];
        this.form.endDate=this.form.endDate.split(" ")[0];
        console.log(this.form)
        if(!this.checkForm(this.form)) return
        this.$http.post("/MobileService/MyApply.asmx/AddAskLeaveRecord",this.form)
          .then(r=>{
            console.log(r);
            let data = JSON.parse(r.data.d)
            if(data.success==1){
              this.checkbox=true
              this.actors=data.actors
              console.log(this.actors);
              for(let i=0;i<this.actors.length;i++){
                console.log(this.actors[i]);
                this.commonList.push(this.actors[i].EmpName+" ["+this.actors[i].EmpCode+"] "+this.actors[i].EmpID)
                this.receiptID.push(this.actors[i].EmpID)
              }
            }else if(data.success=="0"){
              this.errMsg=data.msg
              this.errMsgToast=true

            }})

      },
      select(){
        this.show=true;
      },
      onClick (key,value) {
        console.log(value)
        this.form.type=value;
      },
      change(){
      },
      upload(e){
        this.form.uploadName=[]
        console.log(e.target.files);
        for(var f in e.target.files){
          if(typeof e.target.files[f] == "object"){
            this.form.uploadName.push(e.target.files[f].name)
          }

        }
      }
    },
    mounted(){
      this.form.empName=window.localStorage.getItem("global_empname")
      this.form.empId=window.localStorage.getItem("global_empid")
      this.form.company=window.localStorage.getItem("comp_code")
    },
    computed:{
      commonListC: function(){
        let arr=[]
        let newArr=[]

        console.log(this.commonList.length);
        for(let i=0;i<this.commonList.length;i++){

          alert(1)
//          console.log(this.commonList[i].split(" "));
//          arr=this.commonList[i].split(" ")
//          arr.pop()
//          arr.join(" ")
//          newArr[i]=arr
//          console.log(newArr);
//          return newArr
        }
//        return this.commonList[2]
//        return "123"
      }
    },
    data(){
      return{
        receiptID:[],
        checklistModel:[],
        commonList: [],
        checkbox:false,
        errMsgToast:false,
        errMsg:"",
        actors:[],
        form:{
          type:"",
          startDate:"",
          endDate:"",
          Attach:"",
          company:"",
          empId:"",
          empName:"",
          wholeDay:"1",
          startTime:"",
          endTime:"",
          reason:"",
          syDays:"",
          AlDay:"",
          AlTime:"",
          ALDeputy:"0",
          fieldCustomParams:"[]",
        },
        stringValue: '0',
        show: false,
        selectValue:"请选择",
        value:['2017-01-15', '03', '05'],
        uploadName:[],
        menu: {
          menu1: '病假',
          menu2: '出差',
          menu3: '产假',
          menu4: '工伤',
          menu5: '婚假',
          menu6: '年假',
          menu7: '丧假',
          menu8: '事假',
          menu9: '调休',
          menu11: '停工待料',
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
    span{
      color: #fff;
      background: @content-color;
      padding: 0.10rem;
      border-radius: 0.1rem;
    }
    div svg{
      vertical-align: -20%;
      fill:@content-color;
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
