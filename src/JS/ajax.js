import axios from 'axios'
import layer from 'vue-layer-mobile'
import qs from 'qs'

axios.interceptors.request.use(function (config) {
  if (config.method === 'post') {
    let data = qs.parse(config.data)
    config.data = qs.stringify({
      ...data
    })
  } else if (config.method === 'get') {
    config.params = {
      ...config.params
    }
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

export default {
  install(Vue, options) {
    Vue.prototype.$post = post
    Vue.prototype.$get = get
  }
}

/**
 * eg. this.$post(this, 'api', {**}, true)
 * @param _this 当前vue组件（必传） 为接口验证登录用
 * @param api 接口名
 * @param params  json参数
 * @param load  是否启用loading动画，默认false
 * @returns {Promise}
 */
export const post = function (_this, api, params) {
  let PromiseHttp = new Promise(function (resolve, reject) {
    console.log(`/app/${api}.htm`)
    axios.post(`/app/${api}.htm`, params).then(function (res) {
      if (res.data.code !== 1) {
        if (res.data.code !== -1) {
          layer.toast({
            icon: '',
            content: res.data.message,
            time: 2000
          })
        } else {
          // let url = window.location.hash.split('#')[1]
          _this.$router.push('/login')
          // window.location.href = '/app/weixin.htm?returnUrl=' + url
          // _this.$router.push('/login')url.slice(url.indexOf('/'), url.length)
        }
      } else {
        resolve(res.data)
      }
    }).catch(function (err) {
      console.log(err)
    })
  })
  return PromiseHttp
}

export const get = function (_this, api, params) {
  let PromiseHttp = new Promise(function (resolve, reject) {
    axios.get(`/app/${api}.htm`, {params: params}).then(function (res) {
      if (res.data.code !== 1) {
        if (res.data.code !== -1) {
          layer.toast({
            icon: '',
            content: res.data.message,
            time: 2000
          })
        } else {
          // window.location.href = '/app/weixin.htm'
          // _this.$router.push('/login')
          let url = window.location.hash.split('#')[1]
          window.location.href = '/app/weixin.htm?returnUrl=' + url
        }
      } else {
        resolve(res.data)
      }
    }).catch(function (err) {
      console.log(err)
    })
  })
  return PromiseHttp
}
