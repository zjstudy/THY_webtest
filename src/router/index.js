import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import searchindex from '@/components/search/searchindex'
import team from '@/components/team/team'
import personal from '@/components/personal/personal'
import hotdetails from  '@/components/home/hot-details'
import scroll from '@/components/scroll/scroll'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home,
    },
    {
      path: '/searchindex',
      name: 'searchindex',
      component: searchindex
    },
    {
      path: '/team',
      name: 'team',
      component: team
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    },
    {
      path: '/hotdetails/:id',
      name: 'hotdetails',
      component: hotdetails
    },
    {
      path: '/scroll',
      name: 'scroll',
      component: scroll
    },

  ]
})
