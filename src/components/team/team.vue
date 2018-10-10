<template>
  <div class="team-bigbox">
    <div class="header">
      <i @click="goback()" class="el-icon-arrow-left"></i>
      <span>团队预定</span>
    </div>
    <scroll class="content">
      <div>
        <div class="hotelname">
          <span class="left-span">入住景区:</span>
          <el-select class="selectdata" size="small" v-model=select placeholder="请选择" @change="selectGet">
            <!--<el-option label="餐厅名" value="1"></el-option>-->
            <el-option v-for="(item,index) in selectlist" :key="index" :label="item.name" :value="item.val"></el-option>
          </el-select>
        </div>
        <div class="keyword-search">
          <span class="left-span">入住人数:</span>
          <el-input v-model="keyworddata" placeholder="请填写入住人数"></el-input>
        </div>
        <div class="timecheck">
          <span class="left-span">选择日期:</span>
          <div class="timecontent" @click="setDatecount()">
            <p>{{strdate}}</p>
            <p>{{enddate}}</p>
          </div>
          <span class="left-span">入住<br>离开</span>
          <span class="timecontent">共 {{daynumbers}} 晚</span>
        </div>
        <div class="list">
          <p class="list-titile">选择房间</p>
          <div class="roomlist" v-for="(item,index) in roomlist" :key="index">
            <div class="imgdiv">
              <img :src=item.imgurl />
            </div>
            <div class="list-right">
              <div class="list-top">
                <span>套房一</span>
                <span>{{item.money|money}}</span>
              </div>
              <div class="list-bottom">
                <span>最多住{{item.max}}人</span>
                <span>{{item.starnum}}间起订</span>
                <div class="elinput">
                  <span class="input-minus" @click="downnum(roomlist,index)"><i class="el-icon-minus"></i></span>
                  <!--<input type="text" disabled :value=item.number>-->
                  <div>{{item.number}}</div>
                  <span class="input-plus" @click="addnum(roomlist,index)"><i class="el-icon-plus"></i></span>
                </div>
              </div>
            </div>
          </div>
          <p class="list-titile">司陪房间（需预定）</p>
          <div class="downdiv">
            <span>是否需要司陪房</span>
            <el-switch
              v-model="switchval"
              active-color="#f10180"
              inactive-color="#e8e8e8">
            </el-switch>
            <div class="subbotton">
              <el-button>提交订单</el-button>
            </div>
          </div>
        </div>
      </div>
    </scroll>

    <footernav></footernav>
  </div>

</template>

<script type="text/ecmascript-6">
  import footernav from "@/components/footernav"
  import scroll from "@/components/scroll/scroll"
  import index from "../../router";

  export default {
    data() {
      return {
        select: 1,
        selectlist:[
          {name:"景区一",val:1},
          {name:"景区二",val:2},
          {name:"景区三",val:3},
          {name:"景区四",val:4}],
        roomlist:[
          {name:"套房一",max:2,starnum:1,imgurl:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3783667784,3808259278&fm=200&gp=0.jpg",money:299,number:1},
          {name:"套房二",max:3,starnum:1,imgurl:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3785055144,3702410987&fm=200&gp=0.jpg",money:399,number:0},
          {name:"套房三",max:1,starnum:1,imgurl:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2768429321,3449264057&fm=200&gp=0.jpg",money:499,number:0},
        ],
        money:[228],
        strdate:'2018-8-28',
        enddate:'2018-8-29',
        daynumbers:"1",
        keyworddata:"",
        num1:0,
        switchval:true
      }
    },
    components:{
      'footernav':footernav,
      'scroll':scroll
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
      handleChange(value) {
        console.log(value);
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
      },
      addnum(val,index){
        val[index].number++;
      },
      downnum(val,index){
        if(val[index].number>0)
          val[index].number--;
        else
          this.$toast("房间数量不能小于零")
      }

    },
    mounted(){
      let params = {
        ex: 'ex',
        userName: 'username',
        passWord: 'password',
        loginFromType: 'APP_USER'
      }
      let i = 1
      console.log(this.$store.getters.getlistnum(i))
      this.$post(this,"indexImg",params)
      // this.setDate()
    }
  }
</script>

<style lang="less">
  @import "~@/less/variable";
  /*样式覆盖*/
  .team-bigbox{
    .content{
      /*.el-select .el-input.is-focus .el-input__inner{*/
      /*border: 1px solid #fc709c !important;*/
      /*}*/
      /*.el-select .el-input__inner:focus{*/
      /*border: 1px solid #fc709c !important;*/
      /*}*/
      .hotelname{

      }
      .keyword-search{
        input{
          border: none;
          color: black;
          font-size: @fs-30;
        }
      }
      .list{
        .el-switch__core{
          border-radius: 5px;
        }
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
      .subbotton{
        button{
          background-color: #f10180;
          border: 0;
          width: 5rem;
          color: white;
          text-align: center;
          box-shadow:0px 5px  5px -5px black;
          span{
            margin: auto;
          }
        }
      }
    }
  }

</style>

<style lang="less" scoped>
  @import "~@/less/variable";
  .team-bigbox{
    font-size: @fs-30;
    display: flex;
    width: 100%;
    height: calc(100vh - 1rem);
    background-color: white;
    flex-wrap: wrap;
    flex-direction:column;
    .header{
      display: flex;
      position: fixed;
      top: 0;
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
      position: fixed;
      height: calc(100% - 2rem);
      overflow: hidden;
      top: 1rem;
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
      .list{
        .list-titile{
          line-height: .8rem;
          margin: 0 -0.2rem;
          color: #666666;
          background-color: #f4f4f4;
        }
        .roomlist{
          display: flex;
          border-bottom: 1px solid #e8e8e8;
          padding-bottom: .1rem;
          margin-bottom: .2rem;
          color: #666666;
          .imgdiv{
            flex: 1;
            img{
              flex: 1;
              height: 1.2rem;
              width: 1.2rem;
            }
          }
          .list-right{
            display: flex;
            flex: 4;
            width: auto;
            flex-direction:column;
            .list-top{
              display: flex;
              line-height: .6rem;
              justify-content: space-between;
            }
            .list-bottom{
              display: flex;
              height: .6rem;
              align-items: center;
              justify-content: center;
              span{
                display: flex;
                flex: 1;
              }
              .elinput{
                display: flex;
                height: .6rem;
                border: 1px solid #e8e8e8;
                flex: 1.5;
                span{
                  font-size: @fs-32;
                  line-height: .5rem;
                  justify-content: center;
                  i{
                    line-height: 0.55rem;
                  }
                }
                div{
                  height: .6rem;
                  line-height: .6rem;
                  width: 1rem;
                  border-left: 1px solid #e8e8e8;
                  border-right: 1px solid #e8e8e8;
                  text-align: center;
                }
              }
            }
          }
        }
        .downdiv{
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          padding-top: .2rem;
          span{
            color: #666666;
          }
          .subbotton{
            display: flex;
            width: 100%;
            height: 2rem;
            text-align: center;
            button{
              display: flex;
              margin: auto;
            }
          }
        }
      }
    }
  }
</style>
