<template>
  <div>
    <XHeader  title="请假" :left-options="{showBack: true}"></XHeader>
    <div class="template">

      <group>
        <Cell  title="请假类型" :value="selectValue" is-link @click.native="select()"></Cell>
      </group>

      <!--<CellBox class="title">我的假期</CellBox>-->

      <!--<group title="我的假期">-->
        <!--<datetime-range title="开始时间" start-date="2018-01-01" end-date="2020-01-01"  v-model="value"></datetime-range>-->
      <!--</group>-->

      <group title="我的假期">
        <datetime
          title="开始时间"
          format="YYYY-MM-DD HH:mm"
          v-model="beginDate"
          @on-change="change"
          ></datetime>

        <datetime
          title="结束时间"
          format="YYYY-MM-DD HH:mm"
          v-model="overDate"
          @on-change="change"
        ></datetime>
        <group>
          <CellBox class="title">时长</CellBox>
        </group>
      </group>

      {{beginDate}}
      {{overDate}}


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


  import { TransferDom, Actionsheet, Group, XSwitch, Cell,XHeader,CellBox ,Datetime  } from 'vux'

  export default {
    components: {
      Actionsheet,
      XSwitch,
      Group,
      Cell,
      XHeader,
      CellBox,
      Datetime
    },
    methods:{
      select(){
        this.show=true;
      },
      onClick (key,value) {
        console.log(value)
        this.selectValue=value;
      },
      change(){
        console.log(this.beginDate);
      }
    },
    data(){
      return{
        stringValue: '0',
        show: false,
        selectValue:"请选择",
        value:['2017-01-15', '03', '05'],
        beginDate:"",
        overDate:"",
        menu: {
          menu1: '年假',
          menu2: '事假',
          menu3: '度假',
          menu4: '节日假',
        },
      }
    }
  }

</script>


<style lang="less" type="text/less" scoped>
  .weui-cells{
    margin:0 !important;
  }
  .title{
    font-size:0.36rem;
  }
  .title:before{
    display:none;
  }


</style>
