<template>
  <div>
   <div class="ssss" ref="wrapper">
     <div>
       <el-input-number @change="handleChange" v-model="num1"size="small" :min="0" :max="10" label="描述文字"></el-input-number>
       <ul>
         <li v-for="i in 20">{{i}}</li>
       </ul>

     </div>
   </div>
    <footernav></footernav>
  </div>

</template>

<script type="text/ecmascript-6">
  import footernav from "@/components/footernav"
  import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        num1:1
      }
    },
    components:{
      'footernav':footernav
    },
    methods:{
      handleChange(value){
        console.log(value)
      }
    },
    mounted(){
      this.$nextTick(() => {
        //$refs绑定元素  hasVerticalScroll ，scrollerHeight ，wrapperHeight
        if(!this.scroll){
          console.log("1")
          this.scroll = new BScroll(this.$refs.wrapper, {
            //开启点击事件 默认为false
            click:true
          })
          // console.log(this.scroll)
        }else if(!this.$refs.wrapper){
          console.log("2")
          return
        }
        else{
          console.log("3")
          this.scroll.refresh()
        }
      });
    }
  }
</script>

<style lang="less" scoped>
  .ssss{
    width: 100%;
    position:absolute;
    top:0px;
    bottom: 1rem;
    overflow: hidden;
    background-color: #aaaaaa;
    z-index: 1;

    span{
      display: flex;
      width: 100%;
      height: 1rem;
      margin: .2rem 0;
    }

  }
</style>
