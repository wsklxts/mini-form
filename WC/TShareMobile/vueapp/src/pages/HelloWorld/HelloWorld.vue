<template>

  <div>
    <XHeader  title="helloWorld" :left-options="{showBack: true}">
      <a slot="right" @click="detailBtn"> 详情</a>
    </XHeader>
    <div class="template">
      {{$route.path}}
      HelloWorld

      <!--<checklist-->
        <!--ref="refChecklist"-->
        <!--:options="commonList"-->
        <!--@on-change="changeChecklist"-->
        <!--:value="checkListModel"-->
        <!--:check-disabled="false"-->
      <!--&gt;-->
      <!--</checklist>-->

      {{refChecklist}}


      <!--<scroller lock-x scrollbar-y height="200px" ref="scrollerBottom" use-pullup bounce @on-scroll-bottom="onScrollBottom">-->
      <!--<div class="box2">-->
        <!--<p v-for="i in bottomCount" :key="i">placeholder {{ i  }}</p>-->
      <!--</div>-->
      <!--</scroller>-->





      <div class="">
        <x-button type="default" @show="false" text="提交" @click.native="onConfirm"></x-button>
        <x-button type="default" text="提交2" @click.native="onConfirm2"></x-button>
      </div>
      <div v-html="ii"></div>

      <tabs></tabs>
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
      this.$root.v.$on('form',function(i){
        this.ii=i
      }.bind(this))
    },
    computed:{

    },
    methods:{
      onConfirm(){

//        let formData ={ company: '0101', empId: '40', empName: '陈志平',otDate:'2018-08-20',otSTime:'16:31', otETime: '16:31',reason:'44',drpSTimeFlag:'',drpETimeFlag:'',otKouTime:'22',fieldCustomParams:'[]'}
        let formData ={company: '0101',pageIndex: 1, size: 10, globalEmpId: '40',type:'无分类'}

//        this.$http.post("/MobileService/MyApply.asmx/AddOutTimeRecord",formData)
        this.$http.post("/MobileService/News.asmx/GetNews",formData)
          .then(r=>{
          this.ii=r
          console.log(r);
          let data= JSON.parse(r.data.d)
          console.log(data);
      })
        .catch(e=>{
            console.log(e);
        })
      },
      onConfirm2(){
        this.$root.v.$on('form',function(i){
          this.ii=i
        }.bind(this))
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
        ii:"aa",
        bottomCount:20,
        refChecklist:"",
        commonList:[{key: 'aa', value: '001 value'}, {key: 'bb', value: '002 value'}, {key: 'cc', value: '003 value'}],
        checkListModel:[],
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
</style>
