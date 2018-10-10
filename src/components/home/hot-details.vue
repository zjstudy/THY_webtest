<template>
    <div class="detailsbox">
      <div class="headerbox">
        <img :src=detval.imgurl>
        <i @click="goback()" class="el-icon-arrow-left"></i>
        <i class="el-icon-star-off"></i>
        <span>距离：{{detval.distance}}</span>
        <span>{{detval.title}}</span>
      </div>
      <scroll class="content">
        <div>
          <div class="conten-1">
            <span>{{detval.score}}分</span>
            <span>2条评论<i class="el-icon-arrow-right"></i></span>
          </div>
          <div class="conten-2">
            <span>重庆市酉阳县金银山</span>
          </div>
          <div class="conten-3">
            <div class="conten-3-left">
              <i></i>
            </div>
            <div>

            </div>
          </div>
          <h5 v-for="i in 5">testdemo</h5>
          <div class="datalist" style="display: flex;width: 100%;height: 1px"></div>
        </div>

      </scroll>

    </div>
</template>

<script type="text/ecmascript-6">
  import footernav from "@/components/footernav"
  import scroll from "@/components/scroll/scroll"
  export default {
    data(){
      return{
        id:-1,
        detval:"",
        hotlist:[
          { id:0,
            imgurl:"http://image244.nginx.cqbornsoft.com:5601/uploadfile/images/2018-02/08/110_927437889.jpg",
            title:"桃花源森林酒店",
            distance:"4564KM",
            score:"5.0",
            money:"298",
            tag:["餐饮住宿","休闲度假","观光旅游"]
          },
          { id:1,
            imgurl:"http://image244.nginx.cqbornsoft.com:5601/uploadfile/images/2018-01/31/110_3276194487.png",
            title:"桃花源森林酒店2",
            distance:"1234KM",
            score:"4.6",
            money:"299",
            tag:["餐饮住宿","商务接待"]
          },
          { id:2,
            imgurl:"http://image244.nginx.cqbornsoft.com:5601/uploadfile/images/2018-02/08/110_927437889.jpg",
            title:"桃花源森林酒店2",
            distance:"1234KM",
            score:"4.6",
            money:"299",
            tag:["餐饮住宿","商务接待"]
          },
          { id:3,
            imgurl:"http://image244.nginx.cqbornsoft.com:5601/uploadfile/images/2018-02/08/110_927437889.jpg",
            title:"桃花源森林酒店2",
            distance:"1234KM",
            score:"4.6",
            money:"299",
            tag:["餐饮住宿","商务接待"]
          },
          { id:4,
            imgurl:"http://image244.nginx.cqbornsoft.com:5601/uploadfile/images/2018-02/08/110_927437889.jpg",
            title:"桃花源森林酒店2",
            distance:"1234KM",
            score:"4.6",
            money:"299",
            tag:["餐饮住宿","商务接待"]
          }
        ]
      }
    },
    components:{
      'footernav':footernav,
      'scroll':scroll
    },
    methods:{
      getid(){
        let _this = this;
        this.id = this.$route.params.id
        this.hotlist.forEach(function (item,index) {
          if((index-1) == _this.id){
            _this.detval = _this.hotlist[index-1];
          }

        })
      },
      goback(){
        this.$router.back(-1);
      }
    },
    mounted(){
      this.getid();
    }
  }
</script>

<style lang="less" scoped>
  @import "~@/less/variable";
  .detailsbox{
    font-size: @fs-36;
    display: flex;
    width: 100%;
    .headerbox{
      display: flex;
      position: fixed;
      top: 0;
      width: 100%;
      height: 4.2rem;
      img{
        width: 100%;
        box-shadow:inset 0 10px 20px #888888;
      }
      span{
        font-size: @fs-26;
        display: flex;
        height: .5rem;
        color: white;
        margin-left: .1rem;
        position: absolute;
        bottom: 0px;
        &:last-child{
          font-size: @fs-30;
          bottom: .5rem;
        }
      }
      .el-icon-arrow-left{
        position: absolute;
        top: .2rem;
        left: .3rem;
        font-size: @fs-48;
        color: white;
      }
      .el-icon-star-off{
        position: absolute;
        top: .2rem;
        right: .2rem;
        color: white;
      }
    }
    .content{
      position: absolute;
      overflow: hidden;
      height: calc(100% - 4.2rem);
      width: 100%;
      top: 4.2rem;
      flex-wrap: wrap;
      background-color: white;
      h5{
        height: 4rem;
        margin: .5rem;
        border-radius: 10px;
        background-color: #e8b9dc;
      }
      .conten-1{
        display: flex;
        width: 100%;
        height: .8rem;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #e8e8e8;
        span{
          color: #f10180;
          font-size: @fs-32;
          margin: 0 .2rem;
          &:last-child{
            font-size: @fs-28;
            color: #7f1f5a;
          }
        }
      }
      .conten-2{
        display: flex;
        width: 100%;
        height: .8rem;
        align-items: center;
        border-bottom: 1px solid #e8e8e8;
        span{
          font-size: @fs-30;
          color: #666666;
          margin: 0 .2rem;
        }
      }
      .conten-3{
        display: flex;
        width: 100%;
        height: .8rem;
        align-items: center;
        border-bottom: 1px solid #e8e8e8;
        span{
          font-size: @fs-30;
          color: #666666;
          margin: 0 .2rem;
        }
      }
    }
  }
</style>
