import layer from 'vue-layer-mobile'

const TIME = 2000

export default {
  install(Vue, options) {
    /**
     * eg. this.$toast('asdf')
     * @param text  显示内容
     * @param time  显示时间，默认TIME
     * @param icon  图标,默认 ''
     */
    Vue.prototype.$toast = function (text, time, icon) {
      layer.toast({
        icon: icon ? icon : '',
        content: text,
        time: time ? time : TIME
      })
    }

    Vue.prototype.$loading = function (text) {
      layer.loading(text ? text : '加载中...')
    }

    Vue.prototype.$dialog = function (text) {
      return layer.dialog({
        content: text,
        btn: ['取消', '确定']
      })
    }

    /**
     * eg. this.$footer('asdf',['no1','no2']).then()
     * @param text
     * @param opt 组数参数，选项名
     * @returns {*}
     */
    Vue.prototype.$footer = function (text, opt) {
      return layer.footer({
        content: text,
        btn: ['取消'].concat(opt)
      })
    }

    Vue.prototype.$close = function () {
      setTimeout(() => {
        layer.close()
      }, 1000)
    }
  }
}
