<template>
  <div>
    <XHeader  title="请假" :left-options="{showBack: true}"></XHeader>
    <div class="template">

      <group>
        <Cell  title="请假类型" :value="form.type" is-link @click.native="select()"></Cell>
      </group>

      <group title="我的假期">
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
          v-model="form.overDate"
          @on-change="change"
          placeholder="请选择日期"
        ></datetime>

        <group>
          <x-input title="请假天数" v-model="form.days" text-align="right" placeholder="请输入假天数"></x-input>
          <x-input title="请假小时" v-model="form.hours" text-align="right" placeholder="请输入假小时"></x-input>
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
`

      <actionsheet
        ref="popup"
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

  import { TransferDom, Actionsheet, Group, XSwitch, Cell,XHeader,CellBox ,Datetime,XInput,XTextarea,XButton     } from 'vux'

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
      XButton
  },
    methods:{
      formSubmit(){
        console.log(this.form);
        this.$http.post("/MobileService/MyApply.asmx/AddAskLeaveRecord",this.form)
          .then(r=>{
            console.log(r);
          })

      },
      select(){
        this.show=true;
      },
      onClick (key,value) {
        console.log(value)
        this.form.selectValue=value;
      },
      change(){
        console.log(this.beginDate);
      },
      upload(e){
        this.form.uploadName=[]
        console.log(e.target.files);
        for(var f in e.target.files){
//        for(var i=0; i<e.target.files.length;i++){
//          console.log(e.target.files[f].name);
//          console.log(e.target.files[f]);
          if(typeof e.target.files[f] == "object"){
            this.form.uploadName.push(e.target.files[f].name)
          }

        }
      }
    },
    mounted(){

    },
    data(){
      return{
        form:{
          type:"",
          startDate:"",
          endDate:"",
//          uploadName:"",
//          days:"",
//          hours:"",
        },
        stringValue: '0',
        show: false,
        selectValue:"请选择",
        value:['2017-01-15', '03', '05'],
        beginDate:"",
        overDate:"",
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
        days:"",
        hours:""
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
