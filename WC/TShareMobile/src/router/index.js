import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'
import HelloWorld from '@/pages/HelloWorld/HelloWorld'
import personTask from '@/pages/personTask/personTask'


import apply from '@/pages/apply/apply'
import announcement from '@/pages/apply/announcement/announcement'
import AnnouncementDetails from '@/pages/apply/announcement/AnnouncementDetails/AnnouncementDetails'
import AnnouncementDC from '@/pages/apply/announcement/AnnouncementDetails/AnnouncementDC'
import vacation from '@/pages/apply/vacation/vacation'
import vacationDetails from '@/pages/apply/vacation/vacationDetails/vacationDetails'
import qianKa from '@/pages/apply/qianKa/qianKa'
import qiankaDetail from '@/pages/apply/qianKa/qiankaDetail/qiankaDetail'


import jiaBan from '@/pages/apply/jiaBan/jiaBan'
import jiaBanDetails from '@/pages/apply/jiaBan/jiaBanDetails/jiaBanDetails'
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
import setAccount from '@/pages/daka/setAccount/setAccount'
import login from '@/pages/login/login'


import taskFinished from '@/pages/personTask/taskFinished'
import taskLaunch from '@/pages/personTask/taskLaunch'
import taskWait from '@/pages/personTask/taskWait'




Vue.use(Router)

const router = new Router({
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return new Promise((resolve, reject) => {
        if (savedPosition) {
          return resolve(savedPosition)
        } else {
          resolve({ x: 0, y: 0 })
        }
    })

  },
  routes: [
    {
      path: '*',
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
      meta: {
        requiresAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    {
      path:"/apply/announcement",
      name:"announcement",
      component: announcement
    },
    {
      path:"/apply/AnnouncementDetails",
      name:"AnnouncementDetails",
      component: AnnouncementDetails
    },
    {
      path:"/apply/AnnouncementDetails/AnnouncementDC",
      name:"AnnouncementDC",
      component: AnnouncementDC
    },
    {
      path:"/apply/vacation",
      name:"vacation",
      component: vacation
    },
    {
      path:"/apply/vacation/details",
      name:"vacationDetails",
      component: vacationDetails
    },
    {
      path:"/apply/qianKa",
      name:"qianKa",
      component: qianKa
    },
    {
      path:"/apply/qianKa/qiankaDetail",
      name:"qiankaDetail",
      component: qiankaDetail
    },
    {
      path:"/apply/jiaBan",
      name:"jiaBan",
      component: jiaBan
    },
    {
      path:"/apply/jiaBan/jiaBanDetails",
      name:"jiaBanDetails",
      component: jiaBanDetails
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
    },
    {
      path: '/daka/setAccount',
      name: 'setAccount',
      component: setAccount
    }


  ]
})
//注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
  //获取store里面的token
  //let token = store.state.token;
  //判断要去的路由有没有requiresAuth
  if (to.meta.requiresAuth) {
    if(store.state.isLogin=="1") { // 已经登陆
      next()   // 正常跳转到你设置好的页面
    }else{
      next({
          path: '/login',
          query: { redirect: to.fullPath } // 将刚刚要去的路由path作为参数，方便登录成功后直接跳转到该路由
        });
    }
    //if (token) {
    //  next();
    //} else {
    //  next({
    //    path: '/login',
    //    query: { redirect: to.fullPath } // 将刚刚要去的路由path作为参数，方便登录成功后直接跳转到该路由
    //  });
    //}
  } else {
    next();
  }
});



export default router
