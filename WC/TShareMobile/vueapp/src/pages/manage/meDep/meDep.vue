<template>

  <div>
    <XHeader  title="我的部门" :left-options="{showBack: true}">
    </XHeader>
    <div class="template">

      <div class="content" v-html="ii"></div>

    </div>

  </div>


</template>

<script>

  import {TransferDom, Actionsheet, Group, XSwitch, Cell,XHeader,CellBox ,Datetime,XInput,XTextarea,XButton
    ,Toast,Checklist,Scroller,LoadMore
  } from 'vux'
  import tabs from "@/components/common/tabs"
  import qs from 'qs'
  export default {
    name: 'HelloWorld',
    created(){
      this.onConfirm()
    },
    computed:{


    },
    methods:{
      onConfirm(){

        let formData ={id:40 }

        this.$http.post("/MobileService/Web/Handler/hdlGetDeptInfo.ashx",qs.stringify(formData),{ContentType:"application/x-www-form-urlencoded"})
          .then(r=>{
        console.log(r);
//        let data= JSON.parse(r.data.content)
        this.ii=r.data.content
      })
      .catch(e=>{
          console.log(e);
      })
      },

      changeChecklist(a,b){
      },
      detailBtn(){

      },
      formSubmit(){
      },


    },
    components: {
      Actionsheet,
      XSwitch,
      Group,
      Cell,
      XHeader,
      CellBox,
      Datetime,
      XInput,
      XTextarea,
      XButton,Toast,Checklist,Scroller,LoadMore,tabs
    },
    data () {
      return {
        ii:"",
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }

</script>


<style lang="less" type="text/less" scoped>
  .btnWrap{
  button.weui-btn{
    border-radius:0 !important;
    }
  }
  .content{
    padding:0.28rem;
  }
</style>
