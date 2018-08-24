<template>

  <div>
    <XHeader  title="公告详情" :left-options="{showBack: true}">
      <!--<a slot="right" @click="detailBtn"> 详情</a>-->
    </XHeader>
    <div class="template">
      <div class="title">
        {{subject}}
      </div>
      <div class="releaseDate">发布时间：{{senddate}}</div>
      <div class="content" v-html="content"></div>


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
      this.getListData()
//      if(this.loadDataSwitch){
//        window.addEventListener("scroll",this.scroll)
//      }

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
      toAnnouncementDC(id){
        this.$router.push({path:"/apply/AnnouncementDetails/AnnouncementDC"})
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

      getListData(){
        const empName=window.localStorage.getItem("global_empname")
        const empId=window.localStorage.getItem("global_empid")
        const company=window.localStorage.getItem("comp_code")

        let formData={
//          company:company,
          empId: empId ,
//          pageIndex: pageIndex,
//          size: 8,
          id:this.$route.query.type
        }

        this.$http.post("/MobileService/Web/Handler/hdlGetNotice.ashx",qs.stringify(formData),{ContentType:"application/x-www-form-urlencoded"})
          .then(r=>{
        let data=r.data
        console.log(data);
        if(data){
          this.content=data.content
          this.senddate=data.senddate
          this.subject=data.subject


        }else{
          this.loadDataSwitch=false
          this.loadMoreDom=false
          this.loadMoreFinish=true
        }


      }).catch(err=>{
          this.loadMoreDom=false
      })
      },
      detailBtn(){

      },
      formSubmit(){

      }
    },
    data () {
      return {
        subject:"",
        senddate:"",
        content:"",
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

  .loadMoreFinish{
    text-align: center;
    padding: 0.18rem 0;
  }
  .template{
    margin-bottom:-44px !important;
  }
</style>
