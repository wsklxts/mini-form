
<template>
  <div>
    <XHeader  title="打卡" :left-options="{showBack: false}" >
      <a slot="right" @click="setBtn"> 设置</a>
    </XHeader>

    <div class="daka template">
      <section class="userWrap">
        <div class="userInfo fl">
          <div class="headImg">
            <img :src="headImg.img" alt="">
          </div>
          <div class="name">
            <h3>王老五</h3>
            <span>班制：正常班</span>
          </div>
        </div>
      </section>
      <div class="tips vux-1px-b">
        坚持是世上最难的事，也是最容易的事
      </div>
      <section class="dakaWrap">
        <div class="dakaInfo">
          <h3>打卡时间8:30 <span>正常</span></h3>
        </div>
        <div class="dakaAddress">
          <span>地址：</span>广东省东莞市旗峰路中侨大厦
        </div>
        <div class="dakaBtn">
          <button type="button">打卡</button>
        </div>
      </section>

      <tabs></tabs>
    </div>
  </div>
</template>



<script type="text/ecmascript-6">
  import { Grid, GridItem,XHeader } from 'vux'
  import tabs from "../../components/common/tabs.vue"


  export default {
    data(){
      return{
        headImg:{img:require("../../../static/daka/head.jpg"),title:"头像"}
      }
    },
    methods:{
      setBtn(){
        console.log(this);
        this.$router.push({path:"/daka/setAccount"})
      }
//      setBtn:()=>{
//        console.log(this);
//        this.$router.push({path:"/setAccount"})
//      }
    },
    components:{
      Grid,
      GridItem,
      XHeader,
      tabs
    }
  }
</script>


<style lang="less" type="text/less" scoped>
  @import '~vux/src/styles/1px.less';
  .vux-header-right a{
    color:#fff !important;
  }
  .daka{
    .tips{
      padding:0.36rem;
      width: 100%;
    }
    .name{
      h3{
        font-size: 0.48rem;
        padding: 0.14rem 0;
      }
      span{
        display: block;
      }
      padding:0 0.36rem;
      float:left;
    }
    .userWrap{
      padding:0.36rem;
      overflow: hidden;

    }
    .headImg{
      width:1.36rem;
      height:1.36rem;
      float:left;
    }
  }
  .dakaWrap{
    padding:0.36rem;
    h3{
      padding:0.28rem 0;
    }
    .dakaBtn{
      padding:0.48rem;
      text-align: center;
      button{
        background: #4ea0f3;
        width:2rem;
        height:2rem;
        border-radius:50%;
        color:#fff;
        font-size:0.36rem;
        &:active{
           background: #3096fd ;
         }
      }

    }
  }

</style>
