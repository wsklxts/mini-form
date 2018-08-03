<template>

  <div>
    <XHeader  title="请假详情" :left-options="{showBack: true}">
    </XHeader>

    <div class="template">


      <scroller  ref="scrollerBottom" lock-x scrollbar-y height="200px" ref="scroller" use-pullup bounce @on-scroll-bottom="onScrollBottom">
        <div class="box2">
          <p v-for="i in scrollList">placeholder {{ i  }}</p>
        </div>
      </scroller>


      <group v-for="(l,index) in listData" :key="index">
        <cell title="开始时间"  v-show="l.alsdate" :value="l.alsdate"></cell>
        <cell title="结束时间"  v-show="l.aledate" :value="l.aledate"></cell>
        <cell title="申请日期"  v-show="l.alfdate" :value="l.alfdate"></cell>
        <cell title="请假时间"  v-show="l.aldaytime" :value="l.aldaytime"></cell>
        <cell title="提交状态"  v-show="l.issendtext" :value="l.issendtext"></cell>
        <cell title="提交时间"  v-show="l.senddate" :value="l.senddate"></cell>
        <cell title="审批状态"  v-show="l.apstatustext" :value="l.apstatustext"></cell>
        <cell title="审批时间"  v-show="l.apdate" :value="l.apdate"></cell>
        <cell title="审批意见"  v-show="l.apnode" :value="l.apnode"></cell>
        <cell title="创 建 人" v-show="l.createby"  :value="l.createby"></cell>
        <cell title="创建时间"  v-show="l.createtime" :value="l.createtime"></cell>
        <cell title="修改人"   v-show="l.updateby"  :value="l.updateby"></cell>
        <cell title="修改时间"  v-show="l.updatetime"  :value="l.updatetime"></cell>

        <!--<cell v-if="listData.length" title="修改时间" :value="l" v-for="(l,index) in listData[0]" :key="index"></cell>-->
        <div style=" background: rgb(142, 172, 201);color:white;text-align:center">以上第{{index+1}}项</div>

      </group>

      <!--<div class="btnWrap">-->
        <!--<x-button type="default" text="提交" @click.native="formSubmit"></x-button>-->
      <!--</div>-->

      <div class="btnWrap">
        <x-button type="default" text="申请请假" @click.native="btn"></x-button>
      </div>

    </div>

  </div>


</template>

<script>

  import {TransferDom, Actionsheet, Group, XSwitch, Cell,XHeader,CellBox ,Datetime,XInput,XTextarea,XButton
    ,Toast,GroupTitle,Scroller,LoadMore
  } from 'vux'
  import qs from 'qs'
  export default {
    name: 'HelloWorld',
    mounted(){
      this.getListData()
    },
    methods:{
      btn(){
        this.$router.go(-1)
      },
      onScrollBottom(){
        console.log("更多");

        setTimeout(() => {
          this.scrollList+=10
        this.$nextTick(() => {
          this.$refs.scrollerBottom.reset()
         })
      }, 2000)
      },
      getListData(){

        let formData={company: '0101', globalEmpId: '40' ,pageIndex: 1, size: 10,type:0}

        this.$http.post("/MobileService/MyApply.asmx/GetAskLeaveqingjiaRecord",formData)
          .then(r=>{
          console.log(r);
        let data= JSON.parse(r.data.d)
        this.listData=data.data
        console.log(this.listData);
      })
        .catch(e=>{
            console.log(e);
        })



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
      XButton,Toast,GroupTitle,Scroller,LoadMore
  },
    data () {
      return {
        scrollList:20,
        listData:[],
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
  .weui-cell {
    padding: 8px 16px !important;
    font-size:0.24rem !important;
  }
</style>
