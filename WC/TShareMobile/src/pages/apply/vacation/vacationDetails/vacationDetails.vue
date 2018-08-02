<template>

  <div>
    <XHeader  title="请假详情" :left-options="{showBack: true}">

    </XHeader>
    <div class="template">
      {{$route.path}}
      HelloWorld

      <!--<div class="btnWrap">-->
        <!--<x-button type="default" text="提交" @click.native="formSubmit"></x-button>-->
      <!--</div>-->
    </div>

  </div>


</template>

<script>

  import {TransferDom, Actionsheet, Group, XSwitch, Cell,XHeader,CellBox ,Datetime,XInput,XTextarea,XButton
    ,Toast
  } from 'vux'
  import qs from 'qs'
  export default {
    name: 'HelloWorld',
    methods:{
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
      XButton,Toast
    },
    data () {
      return {
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
