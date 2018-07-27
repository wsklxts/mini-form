
<template>
  <div class="tabs">
    <!--命名路由-->
    <ul>
      <router-link  to="/personTask/taskWait"  tag="li">
        <!--<div class="tabImg"  :class="{ active1: $route.path== '/personTask/taskWait'}">-->
          <!--{{$route.path.indexOf('personTask') !== -1}}-->
        <div class="tabImg"  :class="{ active1: $route.path.indexOf('personTask') !== -1}" >
        </div>
        <div>个人任务</div>
      </router-link>
      <router-link :to="{name:'apply'}" tag="li">
        <div class="tabImg"  :class="{ active2: $route.path== '/apply'}">
        </div>
        <div>应用中心</div>
      </router-link>
      <router-link :to="{name:'manage',query:{name:123}}" tag="li" >
        <div class="tabImg"  :class="{ active3: $route.path== '/manage'}">
        </div>
        <div>管理中心</div>
      </router-link>
      <router-link :to="{name:'daka'}" tag="li">
        <div class="tabImg"  :class="{ active4: $route.path.indexOf('daka') !== -1}">
        </div>
        <div>打卡</div>
      </router-link>
    </ul>
  </div>
</template>



<script type="text/ecmascript-6">
  export default {
    name:"tabs",
    data(){
      return{
        msg:"tabs",
        activeTab:null,
        n:1
      }
    },
    methods: {
      tab(n){
        console.log(this.$route);
//        this.activeTab=n;
//        this.n=n
      }
    },
    created(){
//      this.tab(this.n)
//      console.log(this.activeTab);
    }
  }
</script>


<style lang="less" type="text/less" >
  .tabs {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    box-shadow: 0 2px 4px #000;
    width: 100%;
    & > ul, & > ul > li {
      margin: 0;
      padding: 0;
    }
    ul {
      display: flex;
      width: 100%;
      font-size:0.32rem;
      & > li {
            text-align: center;
            padding: 0.08rem 0.12rem;
            cursor: pointer;
            flex: 1;


      & .active1{
         background: url(../../../static/tabImg/个人任务.png) no-repeat center center !important;
         background-size:0.50rem !important;
          color:#3096fd;
       }
      & .active2{
          background: url(../../../static/tabImg/应用中心.png) no-repeat center center !important;
          background-size:0.50rem !important;
          color:#3096fd;
        }
      & .active3{
          background: url(../../../static/tabImg/管理中心.png) no-repeat center center !important;
          background-size:0.50rem !important;
          color:#3096fd;
        }
      & .active4{
          background: url(../../../static/tabImg/打卡.png) no-repeat center center !important;
          background-size:0.50rem !important;
          color:#3096fd;
        }



      &.router-link-active div:nth-of-type(2){
        color:#3096fd;
       }



        &:nth-of-type(1) .tabImg{
          background: url(../../../static/tabImg/个人任务1.png) no-repeat center center;
          background-size:0.50rem;
        }
        &:nth-of-type(2) .tabImg{
           background: url(../../../static/tabImg/应用中心1.png) no-repeat center center;
           background-size:0.50rem;
         }
        &:nth-of-type(3) .tabImg{
           background: url(../../../static/tabImg/管理中心1.png) no-repeat center center;
           background-size:0.50rem;
         }
        &:nth-of-type(4) .tabImg{
           background: url(../../../static/tabImg/打卡1.png) no-repeat center center;
           background-size:0.50rem;
         }


        &>div{
            color:black;
          }

        & > div:first-child {
              width:100%;
              height:0.60rem;
          & > i {

          }
        }

      }
    }
  }
</style>
