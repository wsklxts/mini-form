<template>
    <div>
      <XHeader  title="签卡" :left-options="{showBack: true}">
        <a slot="right" @click="detailBtn"> 详情</a>
      </XHeader>
      <div  class="template">
        <group title="">
          <datetime
            title="补卡时间点"
            format="YYYY-MM-DD HH:mm"
            v-model="beginDate"
            @on-change="change"
            placeholder="请选择"
          ></datetime>
          </group>

          <group title=" ">
            <Cell  title="刷卡类型" :value="selectValue1" is-link @click.native="select(1)"></Cell>
            <Cell  title="签卡类型" :value="selectValue2" is-link @click.native="select(2)"></Cell>
          </group>

        <group title=" 签卡原因" class="tit">
          <x-textarea title="" v-model="form.reason" placeholder="请输入签卡原因"></x-textarea>
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
          <x-button type="default" text="提交"  @click.native="formSubmit"></x-button>
        </div>


        <toast v-model="errMsgToast" type="warn" width="5rem">{{errMsgText}}</toast>
        <toast v-model="successMsgToast" type="success" width="5rem">{{successMsgText}}</toast>


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

  import { TransferDom, Actionsheet, Group, XSwitch, Cell,XHeader,CellBox ,Datetime,XInput,XTextarea,XButton,
    Toast
  } from 'vux'

    export default {
        components: {
          TransferDom, Actionsheet, Group, XSwitch, Cell,XHeader,CellBox ,Datetime,XInput,XTextarea,XButton,
          Toast
        },
        name: 'qianKa',
        methods:{
          detailBtn(){
            this.$router.push({path:"/apply/qianKa/qiankaDetail"})
          },
          select(n){
            this.show=true;
            this.selectType=n
            if(n==1){
              this.menu={
                1: '上班卡',
                2: '下班卡',
                3: '上下班卡',
              }
            }else if (n==2){
              this.menu={
                1: '公事',
                2: '私事'
              }
            }
          },
          checkform(){
            if(this.beginDate == ""){
              this.errMsgToast=true
              this.errMsgText="请选择时间"
              return false
            }else if(this.form.type1==""){
              this.errMsgToast=true
              this.errMsgText="刷卡类型"
              return false
            }else if(this.form.type2==""){
              this.errMsgToast=true
              this.errMsgText="签卡类型"
              return false
            }else if(this.form.reason==""){
              this.errMsgToast=true
              this.errMsgText="请输入原因"
              return false
            }
            return true
          },
          formSubmit(){
            if(!this.checkform())
            return
            this.$http.post("/MobileService/MyApply.asmx/AddQKRecord",this.form)
              .then(r=>{
                console.log(r);
                let data= JSON.parse(r.data.d)
                console.log(data);
                this.successMsgToast=true
                this.successMsgText=data.msg
              })
              .catch(e=>{
                console.log(e);
              })
            console.log(this.form);
          },
          onClick (key,value) {
            if(this.selectType==1){
              this.selectValue1=value;
              this.form.type1=key
            }else if(this.selectType==2){
              this.selectValue2=value;
              this.form.type2=key
            }
            console.log(key)
          },
          change(){
            console.log(this.beginDate);
            let d = this.beginDate.split(" ")
            this.form.qkDate=d[0]
            this.form.qkTime=d[1]
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
          },
      },

      data(){
        return{
          form:{
            empName:window.localStorage.getItem("global_empname"),
            empId:window.localStorage.getItem("global_empid"),
            company:window.localStorage.getItem("comp_code"),
            fieldCustomParams:"[]",
            reason:"",
            type1:"",
            type2:"",
          },
          errMsgToast:false,
          successMsgToast:false,
          errMsgText:"",
          successMsgText:"",
          selectType:"",
          stringValue: '0',
          show: false,
          selectValue1:"请选择",
          selectValue2:"请选择",
          beginDate:"",
          uploadName:[],
          menu:null
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
  .icon {
    height: 50px;
    background: #fff;
    border-radius: 5px;
    text-align: center;
    position: relative;
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

  input {
    width: 100%;
    height: 50px;
    opacity: 0;
    cursor: pointer;
    position: absolute;
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
