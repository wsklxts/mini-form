import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import personTask from '@/components/personTask'
import apply from '@/components/apply'
import manage from '@/components/manage'
import daka from '@/components/daka'


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
      component: personTask
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
