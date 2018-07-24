import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld/HelloWorld'
import personTask from '@/pages/personTask/personTask'


import apply from '@/pages/apply/apply'
import vacation from '@/pages/apply/vacation/vacation'
import qianKa from '@/pages/apply/qianKa/qianKa'
import jiaBan from '@/pages/apply/jiaBan/jiaBan'
import peiXun from '@/pages/apply/peiXun/peiXun'
import jiaqi from '@/pages/apply/jiaqi/jiaqi'
import salary from '@/pages/apply/salary/salary'
import dakaData from '@/pages/apply/dakaData/dakaData'
import kaoQinErr from '@/pages/apply/kaoQinErr/kaoQinErr'
import mePlan from '@/pages/apply/mePlan/mePlan'
import meLog from '@/pages/apply/meLog/meLog'
import workSum from '@/pages/apply/workSum/workSum'
import suggest from '@/pages/apply/suggest/suggest'


import manage from '@/pages/manage/manage'
import daka from '@/pages/daka/daka'
import login from '@/pages/login/login'


import taskFinished from '@/pages/personTask/taskFinished'
import taskLaunch from '@/pages/personTask/taskLaunch'
import taskWait from '@/pages/personTask/taskWait'




Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/personTask',
      name: 'personTask',
      component: personTask,
      children: [{
        path: 'taskWait',
        component: taskWait,
      }, {
        path: 'taskFinished',
        component: taskFinished,
      },
        {
          path: 'taskLaunch',
          component: taskLaunch,
        }
      ]
    },

    {
      path: '/apply',
      name: 'apply',
      component: apply,
    },
    {
      path:"/apply/vacation",
      name:"vacation",
      component: vacation
    },
    {
      path:"/apply/qianKa",
      name:"qianKa",
      component: qianKa
    },
    {
      path:"/apply/jiaBan",
      name:"jiaBan",
      component: jiaBan
    },
    {
      path:"/apply/peiXun",
      name:"peiXun",
      component: peiXun
    },
    {
      path:"/apply/jiaqi",
      name:"jiaqi",
      component: jiaqi
    },
    {
      path:"/apply/salary",
      name:"salary",
      component: salary
    },
    {
      path:"/apply/dakaData",
      name:"dakaData",
      component: dakaData
    },
    {
      path:"/apply/kaoQinErr",
      name:"kaoQinErr",
      component: kaoQinErr
    },
    {
      path:"/apply/mePlan",
      name:"mePlan",
      component: mePlan
    },
    {
      path:"/apply/meLog",
      name:"meLog",
      component: meLog
    },
    {
      path:"/apply/workSum",
      name:"workSum",
      component: workSum
    },
    {
      path:"/apply/suggest",
      name:"suggest",
      component: suggest
    },
    {
      path: '/manage',
      name: 'manage',
      component: manage
    },
    {
      path: '/daka',
      name: 'daka',
      component: daka
    }


  ]
})
//router.afterEach((to, from) => {
//  // ...
//})




export default router
