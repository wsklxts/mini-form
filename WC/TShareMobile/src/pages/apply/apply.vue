
<template>
  <div class="apply">
    <div class="banner">
      <img src="../../../static/apply/感谢.png" alt="">
    </div>
    <div class="container">
      <section class="info">
        <h3>
          <strong>信息中心</strong>
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
      <section class="applyFor">
        <h3>
          <strong>我的申请</strong>
          <span>更多</span>
        </h3>
        <div class="listItem">
          <grid :cols="4" :show-lr-borders="false" :show-vertical-dividers="false">
            <grid-item v-for="i in applyFor" >
              <span class="listItemImg"><img :src="i.img" alt=""></span>
              <span class="grid-center">{{i.title}}</span>
            </grid-item>
          </grid>
        </div>

      </section>
      <section class="query"></section>
      <section class="work"></section>
    </div>
  </div>
</template>



<script type="text/ecmascript-6">

  import { Grid, GridItem } from 'vux'

  export default {
    name:"apply",
    data(){
      return{
        msg:"msg",
        info:[
          {img:"../../../static/apply/info/1.png",title:"公告"},
          {img:"../../../static/apply/info/2.png",title:"通知"},
          {img:"../../../static/apply/info/3.png",title:"公司新闻"},
          {img:"../../../static/apply/info/4.png",title:"我的邮件"},
        ],
        applyFor:[
          {img:"../../../static/apply/applyFor/1.png",title:"请/销假"},
          {img:"../../../static/apply/applyFor/2.png",title:"签卡申请"},
          {img:"../../../static/apply/applyFor/3.png",title:"加班申请"},
          {img:"../../../static/apply/applyFor/4.png",title:"培训申请"},
        ]
      }
    },
    components: {
      Grid,
      GridItem
    },
    methods:{

    }


  }
</script>


<style lang="less" type="text/less">
  .apply{
    padding:0.10rem;
  }
  .grid-center {
    display: block;
    text-align: center;
    color: #666;
  }
  .listItemImg{
    padding: 0.10rem 0.25rem 0;
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
  .banner{
    img{
      height:3.20rem;
    }
  }
</style>
