<template>
  <div>
    <XHeader  title="打卡数据" :left-options="{showBack: true}"></XHeader>
    <div class="template">

      打卡数据

    </div>
  </div>
</template>


<script type="text/ecmascript-6">


  import { TransferDom, Actionsheet, Group, XSwitch, Cell,XHeader,CellBox ,Datetime,XInput,XTextarea,XButton     } from 'vux'

  export default {
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
      XButton
    },
    methods:{
      select(){
        this.show=true;
      },
      onClick (key,value) {
        console.log(value)
        this.selectValue=value;
      },
      change(){
        console.log(this.beginDate);
      },
      upload(e){
        this.uploadName=[]
        console.log(e.target.files);
        for(var f in e.target.files){
//        for(var i=0; i<e.target.files.length;i++){
//          console.log(e.target.files[f].name);
//          console.log(e.target.files[f]);
          if(typeof e.target.files[f] == "object"){
            this.uploadName.push(e.target.files[f].name)
          }

        }
      }
    },
    data(){
      return{
        stringValue: '0',
        show: false,
        selectValue:"请选择",
        value:['2017-01-15', '03', '05'],
        beginDate:"",
        overDate:"",
        uploadName:[],
        menu: {
          menu1: '方式1',
          menu2: '方式2',
          menu3: '方式3',
          menu4: '方式4',
        },
      }
    }
  }

</script>


<style lang="less" type="text/less" scoped>
  .uploadNameWrap{
    text-align: center;
  }
  .title{
    font-size:0.36rem;
  &>div{
      padding-right:0.36rem;
    }
  }
  .title:before{
    display:none;
  }
  .icon{
    height:50px;
    background:#fff;
    border-radius: 5px;
    text-align: center;
    position:relative;
    display: -webkit-box;
    -webkit-box-align: center;
  span {
    color: #fff;
    background: @content-color;
    padding: 0.10rem;
    border-radius: 0.1rem;
  }

  div svg {
    vertical-align: -20%;
    fill: @content-color;
  }
  input{
    width:100%;
    height:50px;
    opacity:0;
    cursor:pointer;
    position:absolute;
    left: 0;
  }
  }
  .btnWrap{
    position: fixed;
    width: 100%;
    bottom: 0;
  button.weui-btn{
    border-radius:0 !important;
  }
  }
</style>
