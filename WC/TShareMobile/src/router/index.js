import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld/HelloWorld'
import personTask from '@/pages/personTask/personTask'
import apply from '@/pages/apply/apply'
import manage from '@/pages/manage/manage'
import daka from '@/pages/daka/daka'

import taskFinished from '@/pages/personTask/taskFinished'
import taskLaunch from '@/pages/personTask/taskLaunch'
import taskWait from '@/pages/personTask/taskWait'




Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/personTask',
      name: 'personTask',
      component: personTask,
      children: [{
        path: 'taskWait', //食品详情页
        component: taskWait,
      }, {
        path: 'taskFinished', //商铺详情页
        component: taskFinished,
      },
        {
          path: 'taskLaunch', //商铺安全认证页
          component: taskLaunch,
        }]
    },
    {
      path: '/apply',
      name: 'apply',
      component: apply
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
