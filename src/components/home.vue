<template>
  <div class="bigbox">
    <div class="header-filter"></div>
    <div class="header">
      <span>{{titlename}}</span>
      <i class="iconfont">&#xe668;</i>
      <div class="search">
        <input type="text" placeholder="请输入关键字搜索"/>
        <i class="el-icon-search"></i>
      </div>

    </div>
    <div class="slider">
      <div class="block">
        <el-carousel height="4.2rem" arrow="hover" >
          <el-carousel-item v-for="item in img" :key="item">
            <img :src=item>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="Hotel">
      <div class="Hotel-header">
        <div class="Hotel-header-left">
          <i class="el-icon-sort"></i>
          <span>热门酒店&nbsp;</span>
          <span> Hot Hotels</span>
        </div>
        <div class="Hotel-header-right">
          <span @click="hotellist()">更多酒店</span>
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <scroll class="hotlist">
        <div>
        <ul>
          <li v-for="item in hotlist" @click="imgdata(item)">
            <img :src=item.imgurl>
            <div class="list-data">
              <span>{{item.title}}</span>
              <div class="distance data-content">
                <i class="el-icon-location-outline"></i>
                距我{{item.distance}}
              </div>
              <div class="money data-content">
                <p><span>{{item.score}}</span>分</p>
                <p><span>{{item.money|money}}</span>起</p>
              </div>
              <div class="tag data-content">

                <span v-for="tags in item.tag">{{tags}}</span>
              </div>
            </div>
          </li>
        </ul>
        </div>
      </scroll>
    </div>
    <footernav></footernav>
  </div>
</template>

<script type="text/ecmascript-6">
  import footernav from "@/components/footernav"
  import scroll from "@/components/scroll/scroll"
    export default {
      data(){
          return{
            titlename:"酉阳桃花源",
            img:['http://image244.nginx.cqbornsoft.com:5601/uploadfile/images/2018-01/18/110_118339372.jpg',
            'http://image244.nginx.cqbornsoft.com:5601/uploadfile/images/2018-01/18/110_79453379.png'
            ],
            hotlist:[
              { id:0,
                imgurl:"http://image244.nginx.cqbornsoft.com:5601/uploadfile/images/2018-02/08/110_927437889.jpg",
                title:"桃花源森林酒店",
                distance:"4564KM",
                score:"5.0",
                money:"298.22",
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
        imgdata(val){
          this.$router.push('/hotdetails/'+val.id);
        },
        hotellist(){

        }
      },
      mounted() {
      },
    }
</script>

<style lang="less" scoped>
  @import "~@/less/variable";
  @font-face {
    font-family: 'iconfont';  /* project id 614819 */
    src: url('//at.alicdn.com/t/font_614819_fr3lr84zuzp.eot');
    src: url('//at.alicdn.com/t/font_614819_fr3lr84zuzp.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_614819_fr3lr84zuzp.woff') format('woff'),
    url('//at.alicdn.com/t/font_614819_fr3lr84zuzp.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_614819_fr3lr84zuzp.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:@fs-36;
    font-style:normal;
    color: white;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }

  .bigbox{
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;
    flex-wrap: wrap;
    .header-filter{
      z-index: 999;
      position: fixed;
      width: 100%;
      height: 1rem;
      background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
    }
    .header{
      position: fixed;
      top: .1rem;
      left: 0;
      z-index: 999;
      display: flex;
      margin:0 auto;
      width: 100%;
      padding: 0 .1rem;
      align-items: center;
      justify-content:center;
      span{
        display: inline-flex;
        color: white;
        margin-right: .1rem;
        font-size: @fs-28;
      }
      .search{
        display: flex;
        width: auto;
        position: relative;
        .el-icon-search{
          position: absolute;
          right: .2rem;
          font-size: .3rem;
          line-height: .6rem;
        }
      }
      input{
        height: .6rem;
        width: 4rem;
        margin-left: .2rem;
        display: inline-flex;
        border-radius: .4rem;
        padding-left: .3rem;
        opacity: .7;
      }
    }
    .slider{
      position: fixed;
      top: 0;
      width: 100%;
      .el-carousel__item{
        color: #475669;
        font-size: 14px;
        margin: 0;
      }
      img{
        width: 100%;
        height: 4.2rem;
      }

    }
    .Hotel{
      display: flex;
      height: 1rem;
      font-size: @fs-32;
      width: 100%;
      align-items:flex-start;
      flex-wrap: wrap;
      color: #333333;
      .Hotel-header{
        position: fixed;
        top: 4.2rem;
        display: flex;
        flex-wrap: nowrap;
        width: 100%;
        padding: 0 .2rem;
        line-height: .4rem;
        align-items:center;
        justify-content:space-between;
        margin: .2rem 0;
        .Hotel-header-right{
          display:flex;
          color: #7f1f5a;
          font-size: @fs-26;
          align-items: center;
          .el-icon-arrow-right{
            line-height: .5rem;
          }
        }
        .Hotel-header-left{
          display: flex;
          vertical-align:bottom;
          align-items: flex-end;
          span:last-child{
            font-size: @fs-24;
            color: #d2427c;
            line-height: .33rem;
            align-items: flex-end;
          }
          .el-icon-sort{
            color: #d2427c;
            line-height: .4rem;
          }
        }
      }
      .hotlist{
        position: fixed;
        top: 5.1rem;
        height: calc(100% - 6.1rem);
        overflow: hidden;
        ul{
          display: flex;
          flex-wrap: wrap;
          margin: 0 auto;
          width: 100%;
          overflow: scroll;
          justify-content: center;
          li{
            display: flex;
            height: 2.54rem;
            width: 92%;
            margin-bottom: .3rem;
            border-radius: 10px;
            background-color: white;
            overflow: hidden;
            img{
              height: 2.54rem;
              width: 2.54rem;
            }
            .list-data{
              flex: 1;
              width: 100%;
              height: 2.54rem;
              padding: .3rem .2rem;
              box-sizing: border-box;
              span{
                font-size: @fs-30 ;
              }
              .data-content{
                height: .5rem;
                line-height: .5rem;
              }
              .distance{
                font-size: @fs-24 ;
              }
              .money{
                display: flex;
                justify-content: space-between;
                span{
                  color: #f10180;
                }
              }
              .tag{
                span{
                  width: 2rem;
                  font-size: @fs-20;
                  background-color: #f4d2e4;
                  color: #7f1f5a;
                  padding: .02rem 0.1rem;
                  border-radius: 5px;
                  margin-right: 0.1rem;
                }

              }
            }
          }
        }
      }

    }

  }
</style>
