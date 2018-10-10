// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/less/index.less'

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import layer from 'vue-layer-mobile'
import  mLayer from '@/js/layer'
import "@/js/filter"
import Calendar from 'vue2-datepick'
import ajax from '@/js/ajax'

Vue.config.productionTip = false
Vue.use(layer)
Vue.use(mLayer)
Vue.use(ElementUI)
Vue.use(Calendar)
Vue.use(ajax)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
