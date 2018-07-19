
<template>
  <div>
   <XHeader title="管理中心"  :left-options="{showBack: false}"></XHeader>
  <div class="manage">
    <div class="container">
      <section class="meTeam">
        <h3>
          <strong>我的团队</strong>
          <span>更多</span>
        </h3>
        <div class="listItem">
          <grid :cols="4" :show-lr-borders="false" :show-vertical-dividers="false">
            <grid-item v-for="(i,index) in meTeam" :key="index">
              <span class="listItemImg"><img :src="i.img" alt=""></span>
              <span class="grid-center">{{i.title}}</span>
            </grid-item>
          </grid>
        </div>
      </section>
      <div>

      </div>

      <section class="info">
        <h3>
          <strong>部门申请</strong>
          <span>更多</span>
        </h3>
        <div class="listItem">
          <grid :cols="4" :show-lr-borders="false" :show-vertical-dividers="false">
            <grid-item v-for="(i,index) in department" :key="index">
              <span class="listItemImg"><img :src="i.img" alt=""></span>
              <span class="grid-center">{{i.title}}</span>
            </grid-item>
          </grid>
        </div>
      </section>

      <section class="dataAnalysis">
        <h3>
          <strong>数据分析</strong>
          <span>更多</span>
        </h3>
        <div class="listItem">
          <grid :cols="4" :show-lr-borders="false" :show-vertical-dividers="false">
            <grid-item v-for="(i,index) in dataAnalysis" :key="index">
              <span class="listItemImg"><img :src="i.img" alt=""></span>
              <span class="grid-center">{{i.title}}</span>
            </grid-item>
          </grid>
        </div>
      </section>

    </div>
  </div>
    <tabs></tabs>
    </div>
</template>



<script type="text/ecmascript-6">
  import { Grid, GridItem,XHeader } from 'vux'
  import TXhead from "../../components/common/TXhead.vue"
  import tabs from "../../components/common/tabs.vue"
  export default {
    components:{
      Grid,
      GridItem,
      XHeader,
      tabs
    },
    mounted(){
      console.log(this);
    },
   data(){
      return {
        msg: "msg",
        meTeam: [
          {img: require("../../../static/manage/meTeam/1.png"), title: "组织架构"},
          {img: require("../../../static/manage/meTeam/2.png"), title: "我的部门"},
        ],
        department: [
          {img: require("../../../static/manage/department/1.png"), title: "用工"},
          {img: require("../../../static/manage/department/2.png"), title: "调动"},
          {img: require("../../../static/manage/department/3.png"), title: "调薪"},
          {img: require("../../../static/manage/department/4.png"), title: "奖惩"},
        ],
        dataAnalysis: [
          {img: require("../../../static/manage/dataAnalysis/1.png"), title: "工龄分析"},
          {img: require("../../../static/manage/dataAnalysis/2.png"), title: "性别分析"},
          {img: require("../../../static/manage/dataAnalysis/3.png"), title: "婚姻状况"},
          {img: require("../../../static/manage/dataAnalysis/4.png"), title: "学历分析"},
          {img: require("../../../static/manage/dataAnalysis/5.png"), title: "日报表"},
          {img: require("../../../static/manage/dataAnalysis/6.png"), title: "月报表"},
          {img: require("../../../static/manage/dataAnalysis/7.png"), title: "年报表"},
          {img: require("../../../static/manage/dataAnalysis/8.png"), title: "更多应用"},
        ],
      }
    }
  }
</script>


<style lang="less" type="text/less" scoped>
 .manage{
    padding:0.10rem;
  }
  .grid-center {
    display: block;
    text-align: center;
    color: #666;
  }
  .listItemImg{
    padding: 0.10rem 0.36rem 0;
    display: block;
  }
  .weui-grid{
    padding:0.12rem 0.12rem !important;
  }
  .container section{
    h3{
      padding:0.24rem;
      span{
        float: right;
        color:#ccc;
      }
    }
  }
</style>
