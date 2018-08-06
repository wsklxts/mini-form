<template>
  <div id="app">
    <loading :show="isLoading" :text="loadingText"></loading>

    <!--<div class="spinnerWrap" v-show="isLoading">-->
      <!--<spinner class="spinner" type="android"  ></spinner>-->
    <!--</div>-->


    <router-view></router-view>
  </div>
</template>

<script>

import tabs from "./components/common/tabs.vue"
import TXhead from "./components/common/TXhead.vue"
import {Loading,Spinner} from "vux"

export default {
  name: 'App',
  components:{
    tabs,
    TXhead,Loading,Spinner
  },
  data(){
    return{
    }
  },
  beforeCreate(){
  },
  mounted(){
  },
  updated(){

  },
  computed:{
    isLoading(){
      return this.$store.state.loading
    },
    loadingText(){
      return this.$store.state.loadingText
    },
  },
  methods:{

  }
}


</script>

<style lang="less" scoped>

  .spinnerWrap{
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    .spinner{
      position: fixed;
      z-index: 5001;
      top: 40%;
      left: 50%;
      margin-left: -14px;
      text-align: center;
    }
  }


</style>
