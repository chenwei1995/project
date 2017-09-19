import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import main from '@/components/main'
import signReg from '@/components/login/signReg'
import home from '@/components/index/home'
import goodslist from '@/components/goodslist/goodslist'
import vipCenter from '@/components/my/vipCenter'
import order from '@/components/my/order'
import goodsIndex from '@/components/goods/goodsIndex'
import goodsInfo from '@/components/goods/goodsInfo'
import goodsDetail from '@/components/goods/goodsDetail'
import goodsConfig from '@/components/goods/goodsConfig'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'main',
      component: main,
      children: [{
        path: '/index/',
        name: 'home',
        component: home
      },
      {
        path: '/shop',
        name: 'goodslist',
        component: goodslist
      }]
    },
    {
      path: '/signReg',
      name: 'signReg',
      component: signReg
    },
    {
      path: '/vip',
      name: 'vipCenter',
      component: vipCenter,
      beforeEnter: (to, from, next) => {
        if (!window.localStorage.getItem('token')) {
          next('/')
        } else {
          next()
        }
      }
    },
    {
      path: '/order',
      name: 'order',
      component: order,
      beforeEnter: (to, from, next) => {
        if (!window.localStorage.getItem('token')) {
          next('/')
        } else {
          next()
        }
      }
    },
    {
      path: '/buy/:id',
      name: 'goodsDetail',
      component: goodsIndex,
      children: [
        {
          path: '/buy/:id/',
          name: 'goodsInfo',
          component: goodsInfo
        },
        {
          path: '/buy/info/:id/',
          name: 'goodsInfo',
          component: goodsDetail
        },
        {
          path: '/buy/config/:id/',
          name: 'goodsInfo',
          component: goodsConfig
        }
      ]
    }
  ]
})
