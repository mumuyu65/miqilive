// this file is the router of ydd
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import yddEconomics from '@/pages/yddEconomics'
import yddMedia from '@/pages/yddMedia'
import yddZhibo from '@/pages/yddZhibo'
import softwareCenter from '@/pages/softwareCenter'
import economicsZhibo from '@/pages/economicsZhibo'
import economicsNews from '@/pages/economicsNews'
import economicsCalendar from '@/pages/economicsCalendar'
import economicsTeachers from '@/pages/economicsTeachers'

import mediaHome from '@/pages/mediaHome'
import mediaGlobal from '@/pages/mediaGlobal'
import mediaTrasaction from '@/pages/mediaTrasaction'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: Index
  }, {
    path: '/yddEconomics',
    name: 'yddEconomics',
    component: yddEconomics,
    redirect: '/yddEconomics/economicsZhibo',
    children: [{
      path: '/yddEconomics/economicsZhibo',
      component: economicsZhibo
    }, {
      path: '/yddEconomics/economicsNews',
      component: economicsNews
    }, {
      path: '/yddEconomics/economicsCalendar',
      component: economicsCalendar
    }, {
      path: '/yddEconomics/economicsTeachers',
      component: economicsTeachers
    }]
  }, {
    path: '/yddMedia',
    name: 'yddMedia',
    component: yddMedia,
    redirect: '/yddMedia/mediaHome',
    children: [{
      path: '/yddMedia/mediaHome',
      component: mediaHome
    }, {
      path: '/yddMedia/mediaGlobal',
      component: mediaGlobal
    }, {
      path: '/yddMedia/mediaTrasaction',
      component: mediaTrasaction
    }]
  }, {
    path: '/yddZhibo',
    name: 'yddZhibo',
    component: yddZhibo
  }, {
    path: '/softwareCenter',
    name: 'softwareCenter',
    component: softwareCenter
  }, ]
})