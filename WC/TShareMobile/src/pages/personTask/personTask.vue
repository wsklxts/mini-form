
<template>
  <div>
<XHeader title="个人中心"  :left-options="{showBack: false}"></XHeader>

  <div class="personTask">
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



      <tab bar-active-color="#3096fd" active-color="#3096fd">
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

    <!--<router-link to="/personTask/taskWait">代办</router-link>-->

    <!--<router-link to="/personTask/taskFinished">已办</router-link>-->
    <!--<router-link to="/personTask/taskLaunch">我发起</router-link>-->


    <router-view></router-view>

       <!--<Swiper :show-dots=false>-->
          <!--<SwiperItem>-->
              <!--123-->
          <!--</SwiperItem>-->
          <!--<SwiperItem>-->
              <!--456-->
          <!--</SwiperItem>-->
          <!--<SwiperItem>-->
              <!--789-->
          <!--</SwiperItem>-->
       <!--</Swiper>-->


    <tabs></tabs>
</div>
  </div>
</template>



<script type="text/ecmascript-6">
  import tabs from "../../components/common/tabs.vue"
  import { Tab, TabItem,Swiper,SwiperItem,XHeader  } from 'vux'

  export default {
    components: {
      Tab,
      TabItem,
      Swiper,
      SwiperItem,
      XHeader,
      tabs

    },
    methods:{
      handler(){

      }
    }
  }

</script>


<style lang="less" type="text/less" scoped>
  @tab-bar-active-color:red;


</style>
