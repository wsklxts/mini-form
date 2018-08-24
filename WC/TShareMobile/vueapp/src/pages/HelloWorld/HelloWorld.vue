<template>

  <div>
    <XHeader  title="helloWorld" :left-options="{showBack: true}">
      <a slot="right" @click="detailBtn"> 详情</a>
    </XHeader>
    <div class="template">
      <!--{{$route.path}}-->
      <!--HelloWorld-->
      <div class="">
        <x-button type="default" @show="false" text="提交" @click.native="onConfirm"></x-button>
        <x-button type="default" text="提交2" @click.native="onConfirm2"></x-button>
      </div>


      <tabs></tabs>
    </div>

  </div>


</template>

<script>

  import {TransferDom, Actionsheet, Group, XSwitch, Cell,XHeader,CellBox ,Datetime,XInput,XTextarea,XButton
    ,Toast,Checklist,Scroller,LoadMore,Swiper,SwiperItem
  } from 'vux'
  import tabs from "@/components/common/tabs"
  import apply from "@/pages/apply/apply"
  import manage from "@/pages/manage/manage"

  import BScroll from 'better-scroll'
  import qs from 'qs'
  export default {
    name: 'HelloWorld',
    mounted() {
      this.$nextTick(() => {
//        this.scroll = new BScroll(this.$refs.wrapper, {
//          scrollY: true,
//          click: true
//        })
      })

    },
    created(){

    },
    computed:{

    },
    methods:{
      onSwiperItemIndexChange (index) {
        console.log('demo item change', index)
      },
      onConfirm(){

//        let formData ={ company: '0101', empId: '40', empName: '陈志平',otDate:'2018-08-20',otSTime:'16:31', otETime: '16:31',reason:'44',drpSTimeFlag:'',drpETimeFlag:'',otKouTime:'22',fieldCustomParams:'[]'}
//        let formData ={company: '0101',pageIndex: 1, size: 10, globalEmpId: '40',type:'无分类'}
        let formData ={id:270}

//        this.$http.post("/MobileService/MyApply.asmx/AddOutTimeRecord",formData)
        this.$http.post("/MobileService/Web/Handler/hdlGetiframeCotnent.ashx",qs.stringify(formData),
          {ContentType:"application/x-www-form-urlencoded"}
        )
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
      XButton,Toast,Checklist,Scroller,LoadMore,tabs,Swiper,SwiperItem,apply,manage
    },
    data () {
      return {
        ii:"aa",
        bottomCount:20,
        refChecklist:"",
        commonList:[{key: 'aa', value: '001 value'}, {key: 'bb', value: '002 value'}, {key: 'cc', value: '003 value'}],
        checkListModel:[],
        msg: 'Welcome to Your Vue.js App',
        swiperItemIndex:0
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
  .vux-slider{
     overflow: auto !important;
    position: relative;
  }
 .vux-swiper {
   overflow: auto !important;
    position: relative;
  }
</style>
