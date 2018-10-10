<template>
   <div class="footer-bigbox">
     <ul>
       <router-link tag="li" to="/home">
         <i class="iconfont">&#xe637;</i>
         <span>首页</span>
       </router-link>
       <router-link tag="li" to="/searchindex">
         <i class="iconfont searchicon">&#xe60f;</i>
         <span>查询</span>
       </router-link>
       <router-link tag="li" to="/team">
         <i class="iconfont">&#xe63e;</i>
         <span>团队</span>
       </router-link>
       <router-link tag="li" to="/personal">
         <i class="iconfont">&#xe621;</i>
         <span>我的</span>
       </router-link>
     </ul>
   </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "footernav"
    }
</script>

<style lang="less" scoped>
  @import "~@/less/variable";
  .iconfont{
    width: 100%;
    color: #666666;
    font-size: .44rem;
    text-align: center;
  }
  .footer-bigbox{
    display: flex;
    width: 100%;
    height: 1rem;
    font-size: @fs-22;
    flex-wrap: nowrap;
    border-top: 1px solid #dadada;
    background-color: white;
    position: fixed;
    bottom: 0;
    .searchicon{
      font-size: .40rem;
    }
    .router-link-active {
      .iconfont{
        color: #f10180;
      }
      color: #f10180;
    }
    ul{
      display: flex;
      width: 100%;
      height: 1rem;
      justify-content: space-around;
      li{
        display: flex;
        height: 1rem;
        align-items: center;
        justify-content: center;
        flex-direction:column;
        flex-wrap: wrap;
        span{
          display: flex;
          width: 100%;
          justify-content: center;
        }
      }
    }
  }
</style>
