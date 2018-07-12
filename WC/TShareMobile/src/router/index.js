import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld/HelloWorld'
import personTask from '@/pages/personTask/personTask'


import apply from '@/pages/apply/apply'
import vacation from '@/pages/apply/vacation/vacation'


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
