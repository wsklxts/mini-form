<template>

  <div>
    <XHeader  title="helloWorld" :left-options="{showBack: true}">
      <a slot="right" @click="detailBtn"> 详情</a>
    </XHeader>
    <div class="template">
      {{$route.path}}11
      HelloWorld

      <checklist
        ref="refChecklist"
        :options="commonList"
        @on-change="changeChecklist"
        :value="checkListModel"
        :check-disabled="false"
      >
      </checklist>

      {{refChecklist}}

      <div class="btnWrap">
        <x-button type="default" text="提交" @click.native="onConfirm"></x-button>
      </div>
    </div>

  </div>


</template>

<script>

  import {TransferDom, Actionsheet, Group, XSwitch, Cell,XHeader,CellBox ,Datetime,XInput,XTextarea,XButton
    ,Toast,Checklist
  } from 'vux'
  import qs from 'qs'
  console.log(qs);
  export default {
    name: 'HelloWorld',
    methods:{
      onConfirm(){
        console.log("确定");


//        let formData={
//          receiptID:"1534",
//          workFlowCode:"K001",
//          Actors: [],
//          global_empid:"40",
//          comp_code:"0101",
//          nodeID:"1"
//        }

        let formData={company: '0101', globalEmpId: '40' ,pageIndex: 1, size: 10,type:0}



//        this.$http.get("/MobileWeb/MyApply/IsAllowSelectorHandler.ashx?receiptID=1534&workFlowCode=K001&Actors=['40']&global_empid=40&comp_code=0101&nodeID=1")
//        this.$http.get("/MobileWeb/MyApply/IsAllowSelectorHandler.ashx",formData)
        this.$http.post("/MobileService/MyApply.asmx/GetAskLeaveqingjiaRecord",formData)
          .then(r=>{
          console.log(r);
          let data= JSON.parse(r.data.d)
        console.log(data);
      })
        .catch(e=>{
            console.log(e);
        })

      },
      changeChecklist(a,b){
        console.log(a);
        console.log(b);
        console.log(this.$refs.refChecklist);
      },
      detailBtn(){

      },
      formSubmit(){

      }
    },
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
      XButton,Toast,Checklist
    },
    data () {
      return {
        refChecklist:"",
        commonList:[{key: 'aa', value: '001 value'}, {key: 'bb', value: '002 value'}, {key: 'cc', value: '003 value'}],
        checkListModel:[],
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }

</script>


<style lang="less" type="text/less" scoped>
  .btnWrap{
    position: fixed;
    width: 100%;
    bottom: 0;
  button.weui-btn{
    border-radius:0 !important;
  }
  }
</style>
