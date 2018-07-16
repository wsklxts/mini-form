<template>
    <div>
      <XHeader  title="签卡" :left-options="{showBack: true}"></XHeader>
      <div  class="template">
        <group title="">
          <datetime
            title="补卡时间点"
            format="YYYY-MM-DD HH:mm"
            v-model="beginDate"
            @on-change="change"
            placeholder="请选择"
          ></datetime>
          </group>

          <group title=" ">
            <Cell  title="补卡类型" :value="selectValue" is-link @click.native="select()"></Cell>
          </group>

        <group title=" 补卡原因" class="tit">
          <x-textarea title="" placeholder="请输入补卡原因"></x-textarea>
        </group>

        <group title=" ">
          <CellBox class="title">
            <div class="subTitle">附件</div>
            <a href="javascript:void(0)">
              <div class="icon">
                <input type="file" name="fileUpload" multiple="multiple" @change="upload"/>
                <span>选择文件</span>
                <div>
                  <x-icon type="ios-plus" size="30" class="cell-x-icon"></x-icon>
                </div>

              </div>
            </a>
          </CellBox>
        </group>

        <div class="uploadNameWrap">
          <div v-for="f in uploadName">{{f}}</div>
        </div>
        <div class="btnWrap">
          <x-button type="default" text="提交"></x-button>
        </div>



        <actionsheet
          v-model="show"
          :menus="menu"
          theme="android"
          @on-click-menu="onClick"
        >
        </actionsheet>
      </div>
    </div>
</template>


<script type="text/ecmascript-6">

  import { TransferDom, Actionsheet, Group, XSwitch, Cell,XHeader,CellBox ,Datetime,XInput,XTextarea,XButton     } from 'vux'

    export default {
        components: {
          TransferDom, Actionsheet, Group, XSwitch, Cell,XHeader,CellBox ,Datetime,XInput,XTextarea,XButton
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
        },
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
            menu1: '类型1',
            menu2: '类型2',
            menu3: '类型3',
            menu4: '类型4',
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
  .icon {
    height: 50px;
    background: #fff;
    border-radius: 5px;
    text-align: center;
    position: relative;
    display: -webkit-box;
    -webkit-box-align: center;
    span {
      color: #999;
    }
  }
  div svg{
    vertical-align: -20%;
    fill:#3096fd;
  }
  input{
    width:100%;
    height:50px;
    opacity:0;
    cursor:pointer;
    position:absolute;
    left: 0;
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
