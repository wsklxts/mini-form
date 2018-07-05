
<template>
  <div>
   <XHeader title="管理中心"  :left-options="{showBack: false}"></XHeader>
  <div class="manage">
    <div class="container">
      <section class="info">
        <h3>
          <strong>我的团队</strong>
          <span>更多</span>
        </h3>
        <div class="listItem">
          <grid :cols="4" :show-lr-borders="false" :show-vertical-dividers="false">
            <grid-item v-for="i in info" >
              <span class="listItemImg"><img :src="i.img" alt=""></span>
              <span class="grid-center">{{i.title}}</span>
            </grid-item>
          </grid>
        </div>
      </section>

    </div>
  </div>
    </div>
</template>



<script type="text/ecmascript-6">
  import { Grid, GridItem,XHeader } from 'vux'
  import TXhead from "../../components/common/TXhead.vue"
  export default {
    components:{
      Grid,
      GridItem,
      XHeader
    },
   data(){
      return {
        msg: "msg",
        info: [
          {img: require("../../../static/manage/meTeam/1.png"), title: "组织架构"},
          {img: require("../../../static/manage/meTeam/2.png"), title: "我的部门"},
        ]
      }
    }
  }
</script>


<style lang="less" type="text/less">
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
    padding:0.12rem 0.24rem !important;
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
