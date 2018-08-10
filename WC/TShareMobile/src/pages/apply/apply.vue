<template>
  <div>
     <XHeader  title="应用中心" :left-options="{showBack: false}"></XHeader>
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
                <grid-item v-for="(i,index) in info" :key="index">
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
            <div class="listItem" >
              <grid :cols="4" :show-lr-borders="false" :show-vertical-dividers="false">
                <grid-item v-for="(i,index) in applyFor" :key="index"  @on-item-click="gotoItem(i.title,index)">
                  <span class="listItemImg"><img :src="i.img" alt=""></span>
                  <span class="grid-center">{{i.title}}</span>
                </grid-item>
              </grid>
            </div>

          </section>
          <section class="query">
            <h3>
              <strong>常用查询</strong>
              <span>更多</span>
            </h3>
            <div class="listItem">
              <grid :cols="4" :show-lr-borders="false" :show-vertical-dividers="false">
                <grid-item v-for="(i,index) in query" :key="index" @on-item-click="gotoItem(i.title,index)">
                  <span class="listItemImg"><img :src="i.img" alt=""></span>
                  <span class="grid-center">{{i.title}}</span>
                </grid-item>
              </grid>
            </div>
          </section>
          <section class="work">
            <h3>
              <strong>我的工作</strong>
              <span>更多</span>
            </h3>
            <div class="listItem">
              <grid :cols="4" :show-lr-borders="false" :show-vertical-dividers="false" >
                <grid-item v-for="(i,index) in work" :key="index" @on-item-click="gotoItem(i.title,index)">
                  <span class="listItemImg"><img :src="i.img" alt=""></span>
                  <span class="grid-center">{{i.title}}</span>
                </grid-item>
              </grid>
            </div>
          </section>
        </div>
        <tabs></tabs>
      </div>
    </div>

</template>



<script type="text/ecmascript-6">
  import { Grid, GridItem,XHeader } from 'vux'
  import tabs from "../../components/common/tabs.vue"
  export default {
    created(){
//      this.$root.v.$emit('form',123)
//      console.log("c");
    },
    mounted(){
      this.$root.v.$on('form',function(i){
        console.log(i);
      })
      console.log("apply");
    },
    name:"apply",
    methods:{
      gotoItem(item,index){
        console.log(item);
        if(item.includes("请/销假")){
          this.$router.push({ path: "/apply/vacation" })
        }else if(item.includes("签卡申请")){
          this.$router.push({ path: "/apply/qianKa" })
        }else if(item.includes("加班申请")){
          this.$router.push({ path: "/apply/jiaBan" })
        }else if(item.includes("培训申请")){
          this.$router.push({ path: "/apply/peiXun" })
        }else if(item.includes("我的假期")){
          this.$router.push({ path: "/apply/jiaqi" })
        }else if(item.includes("我的薪资")){
          this.$router.push({ path: "/apply/salary" })
        }else if(item.includes("打卡数据")){
          this.$router.push({ path: "/apply/dakaData" })
        }else if(item.includes("考勤异常")){
          this.$router.push({ path: "/apply/kaoQinErr" })
        }else if(item.includes("我的计划")){
          this.$router.push({ path: "/apply/mePlan" })
        }else if(item.includes("我的日志")){
          this.$router.push({ path: "/apply/meLog" })
        }else if(item.includes("工作总结")){
          this.$router.push({ path: "/apply/workSum" })
        }else if(item.includes("投诉建议")){
          this.$router.push({ path: "/apply/suggest" })
        }

  //        switch(item){
  //          case "请/销假":
  //            console.log("请/销假");
  //            break;
  //          case "签卡申请":
  //            console.log("签卡申请");
  //            break;
  //          case "加班申请":
  //            console.log("加班申请");
  //            break;
  //
  //        }
      }
    },
    data(){
      return{
        msg:"msg",
        info:[
          {img:require("../../../static/apply/info/1.png"),title:"公告"},
          {img:require("../../../static/apply/info/2.png"),title:"通知"},
          {img:require("../../../static/apply/info/3.png"),title:"公司新闻"},
          {img:require("../../../static/apply/info/4.png"),title:"我的邮件"},
        ],
        applyFor:[
          {img:require("../../../static/apply/applyFor/1.png"),title:"请/销假"},
          {img:require("../../../static/apply/applyFor/2.png"),title:"签卡申请"},
          {img:require("../../../static/apply/applyFor/3.png"),title:"加班申请"},
          {img:require("../../../static/apply/applyFor/4.png"),title:"培训申请"},
        ],
        query:[
          {img:require("../../../static/apply/query/1.png"),title:"打卡数据"},
          {img:require("../../../static/apply/query/2.png"),title:"考勤异常"},
          {img:require("../../../static/apply/query/3.png"),title:"我的假期"},
          {img:require("../../../static/apply/query/4.png"),title:"我的薪资"},
        ],
        work:[
          {img:require("../../../static/apply/work/1.png"),title:"我的计划"},
          {img:require("../../../static/apply/work/2.png"),title:"我的日志"},
          {img:require("../../../static/apply/work/3.png"),title:"工作总结"},
          {img:require("../../../static/apply/work/4.png"),title:"会议预约"},
          {img:require("../../../static/apply/work/5.png"),title:"投诉建议"},
        ]
      }
    },
    components: {
      Grid,
      GridItem,
      XHeader,
      tabs
    }


  }
</script>


<style lang="less" type="text/less" scoped>

  .apply{
    padding:0.10rem;
    .banner{
      padding:0.10rem;
    }
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
      font-size:0.24rem;
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
