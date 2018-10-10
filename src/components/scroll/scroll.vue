<template>
  <div ref="wrapper">
    <slot>
    </slot>

  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
    export default {

      mounted(){
        this.$nextTick(() => {
          //$refs绑定元素  hasVerticalScroll ，scrollerHeight ，wrapperHeight
          if(!this.scroll){
            this.scroll = new BScroll(this.$refs.wrapper, {
              //开启点击事件 默认为false
              bounceTime:300,
              click:true
            })
            // console.log(this.scroll)
          }else if(!this.$refs.wrapper){
            return
          }
          else{
            this.scroll.refresh()
          }
        });
      }
    }
</script>

<style lang="less" scoped>
  /*.ssss{*/
    /*width: 100%;*/
    /*position:absolute;*/
    /*top: 45px;*/
    /*bottom: 50px;*/
    /*overflow: hidden;*/
    /*background-color: #aaaaaa;*/
    /*z-index: 1;*/
    /*height: calc(100% - 4.2rem);*/



    /*span{*/
      /*display: flex;*/
      /*width: 100%;*/
      /*height: 1rem;*/
      /*margin: .2rem 0;*/
    /*}*/

  /*}*/
  .bottom{
    display: flex;
    width: 100%;
    height: 20px;
  }
</style>
