<template>

  <div>
    <XHeader  title="通知分类" :left-options="{showBack: true}">
      <!--<a slot="right" @click="detailBtn"> 详情</a>-->
    </XHeader>
    <div class="template">
      <group >
        <cell :title="l.type"
              is-link v-for="(l,index) in listData"
              :key="index"
              @click.native="toDetails(l.type)"
              inline-desc=''
        >
          <div class="badge-value">
            <badge :text="l.unread" v-show="l.unread"></badge>
          </div>
        </cell>
      </group>
      <load-more tip="正在加载" v-show="loadMoreDom"></load-more>
      <div v-show="loadMoreFinish" class="loadMoreFinish">加载完毕</div>




    </div>

  </div>


</template>

<script>

  import {TransferDom, Actionsheet, Group, XSwitch, Cell,XHeader,CellBox ,Datetime,XInput,XTextarea,XButton
    ,Toast,Checklist,Scroller,LoadMore,Badge,GroupTitle,Loading
  } from 'vux'
  import qs from 'qs'
  import {getScrollTop,getWindowHeight,getScrollHeight} from "@/common/util"

  export default {
    name: '',
    mounted(){
      this.getListData(this.pageIndex)
      if(this.loadDataSwitch){
        window.addEventListener("scroll",this.scroll)
      }

    },
    computed:{
      isLoading(){
      },
      fHeight(){
        let fHeight= (parseFloat(document.documentElement.style.fontSize)+42)*0.95
        fHeight = (-fHeight).toString()
        return fHeight
      },
    },
    methods:{
      toDetails(l){
//        this.$router.push({path:"/apply/AnnouncementDetails?type="+l})
        this.$router.push({path:"/apply/inform/informDetails", query: { type: l }})
      },
      scroll(){
        var g = getScrollTop() + getWindowHeight()
        if (g  === getScrollHeight()) {
          console.log("到底部");
          if(this.loadDataSwitch){
            this.getListData(this.pageIndex+=1)
          }
        }
      },

      btn(){
        this.$router.go(-1)
      },

      getListData(pageIndex){
        const empName=window.localStorage.getItem("global_empname")
        const empId=window.localStorage.getItem("global_empid")
        const company=window.localStorage.getItem("comp_code")

        let formData={company:company, globalempid: empId ,pageIndex: pageIndex, size: 10}

        this.$http.post("/MobileService/TongZhi.asmx/GetTongZhiType",formData,{showLoad:false})
          .then(r=>{
          console.log(r)
        let data= eval("(" + r.data.d + ")");
        data=data.data
        console.log(data);
        if(data){
          for(let d in data){
            this.loadMoreDom=true
            this.listData.push(data[d])
          }
          if(getScrollHeight() == getWindowHeight()){
            this.getListData(this.pageIndex+=1)
          }
        }else{
          this.loadDataSwitch=false
          this.loadMoreDom=false
          this.loadMoreFinish=true
        }


      }).catch(err=>{
          this.loadMoreDom=false
        this.loadMoreFinish=true
      })
      },
      detailBtn(){

      },
      formSubmit(){

      }
    },
    data () {
      return {
        loadDataSwitch:true,
        pageIndex:1,
        loadMoreDom:false,
        loadMoreFinish:false,
        fontHeight:0,
        scrollList:20,
        listData:[],
        msg: 'Welcome to Your Vue.js App',
      }
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
      XButton,Toast,GroupTitle,Scroller,LoadMore,Loading,Badge
    },
    destroyed(){
      window.removeEventListener("scroll",this.scroll)
    },
  }

</script>


<style lang="less" type="text/less" scoped>
  .btnWrap{
    position: fixed;
    width: 100%;
    bottom: 0;
  button.weui-btn{
    border-radius:0 !important;
  }
  }
  .weui-cell {
    padding: 8px 16px !important;
    /*font-size:0.24rem !important;*/
  }
  .box2{
    /*padding-top:1rem*/
  }
  .template{
    margin-bottom:-44px !important;
  }
  .loadMoreFinish{
    text-align: center;
    padding: 0.18rem 0;
  }
</style>
