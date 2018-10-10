<template>
    <div class="search-bigbox">
      <div class="header">
        <i @click="goback()" class="el-icon-arrow-left"></i>
        <span>酒店查询</span>
      </div>
      <div class="content">
        <div class="hotelname">
          <span class="left-span">目的地景区:</span>
          <el-select class="selectdata" size="small" v-model=select placeholder="请选择" @change="selectGet">
            <!--<el-option label="餐厅名" value="1"></el-option>-->
            <el-option v-for="(item,index) in selectlist" :key="index" :label="item.name" :value="item.val"></el-option>
          </el-select>
        </div>
        <div class="timecheck">
          <span class="left-span">选择日期</span>
          <div class="timecontent" @click="setDatecount()">
            <p>{{strdate}}</p>
            <p>{{enddate}}</p>
          </div>
          <span class="left-span">入住<br>离开</span>
          <span class="timecontent">共 {{daynumbers}} 晚</span>
        </div>
        <div class="keyword-search">
          <span class="left-span">关键字搜索</span>
          <el-input v-model="keyworddata" placeholder="请输入内容"></el-input>
        </div>
        <div class="button-search">
          <el-button>立即搜索</el-button>
        </div>
      </div>
      <footernav></footernav>
    </div>
</template>

<script type="text/ecmascript-6">
  import footernav from "@/components/footernav"
    export default {
      data() {
        return {
          select: 1,
          selectlist:[{name:"景区一",val:1},
            {name:"景区二",val:2},
            {name:"景区三",val:3},
            {name:"景区四",val:4}],
          strdate:'2018-8-28',
          enddate:'2018-8-29',
          daynumbers:"1",
          keyworddata:""
        }
      },
      components:{
        'footernav':footernav
      },
      methods:{
        selectGet(vId){    //获取选择的select值
          let obj = {};
          obj = this.selectlist.find((item)=>{
            return item.val == vId;
          });
          console.log(obj);   //获取选择的全部
          console.log("----")
          console.log(this.select) //获取选择的ID
        },
        setDatecount(){
           this.$toast('请选择入住时间')

          this.$picker.show({
            type:'datePicker',
            onOk: (date) =>{
              this.strdate = date
              console.log(this.strdate)
              this.enddatecount();
            }
          });
        },
        enddatecount(){
          this.$layer.toast("结束时间");
          this.$picker.show({
            type:'datePicker',
            //date:this.enddate,  //初始化时间
            // endTime:'2020-02-11',  //截至时间
            // startTime:'2010-02-11',  //开始时间
            onOk:(e)=>{
              this.enddate = e;
              console.log(this.enddate)
              this.daynum()
            },
          })
        },
        daynum(){
          let strDate1=this.strdate.replace(/-/g,"/");
          let strDate2=this.enddate.replace(/-/g,"/");
          let  date1 = Date.parse(strDate1);
          let date2 = Date.parse(strDate2);
          console.log(Math.ceil((date2-date1)/(24*60*60*1000)))
          this.daynumbers = Math.ceil((date2-date1)/(24*60*60*1000));
        },
        goback(){
          this.$router.back(-1);
        }
      },
      mounted(){
        // this.setDate()
      }
    }
</script>
<style lang="less">
  @import "~@/less/variable";
  /*样式覆盖*/
  .search-bigbox{
    .content{
      /*.el-select .el-input.is-focus .el-input__inner{*/
        /*border: 1px solid #fc709c !important;*/
      /*}*/
      /*.el-select .el-input__inner:focus{*/
        /*border: 1px solid #fc709c !important;*/
      /*}*/
      input{
        border: none;
        color: black;
        font-size: @fs-30;
      }
      .button-search{
        button{
          color: white;
          width: 5.7rem;
          height: .9rem;
          font-size: @fs-32;
          background-color: #f10180;
          border-radius: 5px;
          border: none;
          box-shadow:0px 5px  5px -5px black;
        }
      }
    }
  }

</style>

<style lang="less" scoped>
  @import "~@/less/variable";
  .search-bigbox{
    font-size: @fs-30;
    display: flex;
    width: 100%;
    height: calc(100vh - 1rem);
    background-color: white;
    flex-wrap: wrap;
    flex-direction:column;
    .header{
      display: flex;
      height: .9rem;
      width: 100%;
      font-size: @fs-36;
      color: white;
      background-color: #f10180;
      align-items: center;
      justify-content: center;
      .el-icon-arrow-left{
        position: fixed;
        left: .2rem;
        font-size: @fs-48;
      }
    }
    .content{
      display: flex;
      width: 100%;
      padding: 0 .2rem;
      flex-wrap: wrap;
      flex-direction:column;
      .left-span{
        display: flex;
        color: #999999;
        align-items: center;
        width: 1.5rem;
        font-size: @fs-24;
        margin-left: .1rem;
      }
      .hotelname{
        display: flex;
        height: 1rem;
        width: 100%;
        border-bottom: 1px solid #e8e8e8;
        align-items: center;
        .selectdata{
          display: flex;
          height: 0.9rem;
          align-items: center;
        }
      }
      .timecheck{
        display: flex;
        width: 100%;
        height: 1.5rem;
        border-bottom: 1px solid #e8e8e8;
        span{
          width: 1.2rem;
        }
        .timecontent{
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 2.5rem;
          height: 1.5rem;
          margin-right: .2rem;
          &:last-child{
            width: 2rem;
            flex-direction:row;
            justify-content: flex-start;
            margin: 0;
          }
          p{
            margin: .05rem;
          }
        }
      }
      .keyword-search{
        display: flex;
        width: 100%;
        height: 1rem;
        align-items: center;
        border-bottom: 1px solid #e8e8e8;
      }
      .button-search{
        display: flex;
        width: 100%;
        height: 1.5rem;
        align-items: center;
        justify-content: center;
      }
    }
  }
</style>
