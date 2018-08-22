
<template>
  <div>
<XHeader title="个人中心"  :left-options="{showBack: false}"></XHeader>

  <div class="personTask"  v-bind:style="paTop">
    <!--<ul>-->
      <!--<router-link :to="{name:'personTask'}" tag="li">-->

      <!--</router-link>-->
      <!--<router-link :to="{name:'apply'}" tag="li">-->
        <!--<div class="tabImg"  :class="{ active2: $route.path== '/apply'}">-->

        <!--</div>-->
        <!--<div>应用中心</div>-->
      <!--</router-link>-->
      <!--<router-link :to="{name:'manage'}" tag="li">-->
        <!--<div class="tabImg"  :class="{ active3: $route.path== '/manage'}">-->
        <!--</div>-->
        <!--<div>管理中心</div>-->
      <!--</router-link>-->
    <!--</ul>-->



      <tab bar-active-color="#3096fd" active-color="#3096fd" v-model="index">
        <tab-item @on-item-click="handler" :selected="$route.path== '/personTask/taskWait'" >
          <router-link to="/personTask/taskWait" tag="div">代办</router-link>
        </tab-item >
        <tab-item :selected="$route.path== '/personTask/taskFinished'" >
           <router-link to="/personTask/taskFinished" tag="div">已办</router-link>
        </tab-item>
        <tab-item :selected="$route.path== '/personTask/taskLaunch'" >
          <router-link to="/personTask/taskLaunch" tag="div">我发起</router-link>
        </tab-item>
      </tab>


    <swiper ref="swi" @touchstart.native="touchstart" @touchmove.native="touchmove" @touchend.native="touchend" v-model="index" :aspect-ratio="aHeight" :show-dots="false" @on-index-change="ichane" @on-get-height="gheight">
    <!--<swiper v-model="index" height="auto" :show-dots="false" @on-index-change="ichane" @on-get-height="gheight">-->
      <swiper-item  >

          <taskWait   ref="taskWait" v-show="showtaskWait"></taskWait>

      </swiper-item>
      <swiper-item >

          <taskFinished ref="taskFinished" v-show="showtaskFinished"></taskFinished>

      </swiper-item>
      <swiper-item >

          <taskLaunch ref="taskLaunch" v-show="showtaskLaunch"></taskLaunch>

      </swiper-item>
    </swiper>




    <tabs></tabs>
</div>
  </div>
</template>



<script type="text/ecmascript-6">
  import tabs from "../../components/common/tabs.vue"
  import { Tab, TabItem,Swiper,SwiperItem,XHeader  } from 'vux'
  import taskWait from "./taskWait.vue"
  import taskFinished from "./taskFinished.vue"
  import taskLaunch from "./taskLaunch.vue"



  export default {
    components: {
      Tab,
      TabItem,
      Swiper,
      SwiperItem,
      XHeader,
      tabs,taskWait,taskFinished,taskLaunch
    },
    data(){
      return{
        moveing:false,
        ii:0,
        showtaskWait:true,
        showtaskFinished:false,
        showtaskLaunch:false,
        index:0,
        aHeight:(document.documentElement.clientHeight-(((parseInt(document.documentElement.style.fontSize)*0.95)*2)+46))/document.documentElement.clientWidth,
        paTop:{
         "padding-top":(parseInt(document.documentElement.style.fontSize)*0.95)+44+"px !important"
        }
      }
    },
    mounted(){
    },
    methods:{
      touchstart(e){

      },
      touchmove(e){

      },
      taskShowHide(){
        this.showtaskWait=false
        this.showtaskFinished=false
        this.showtaskLaunch=false
        if(this.ii==0){
          this.$router.push({path:"/personTask/taskWait"})
          this.showtaskWait=true
        }
        else if(this.ii==1){
          this.$router.push({path:"/personTask/taskFinished"})
          this.showtaskFinished=true
        }else if(this.ii==2){
          this.$router.push({path:"/personTask/taskLaunch"})
          this.showtaskLaunch=true
        }
      },
      touchend(){
       this.taskShowHide()
      },
      gheight(h){
        console.log(h);
      },
      ichane(i){
        this.ii=i
        this.taskShowHide()
      },
      handler(){

      }
    }
  }

</script>


<style lang="less" type="text/less" scoped>
  @tab-bar-active-color:red;

  .vux-tab-wrap {
    position: fixed !important;
     padding-top: 0;
    top: 0.95rem !important;
    height: 44px !important;
    width: 100% !important;
    z-index: 99;
  }
   .personTask {
    /*padding-top: 2rem !important;*/
  }
</style>
