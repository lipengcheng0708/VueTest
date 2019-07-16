import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Layout from '@/components/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      //一、params方法设置路由
      // path: '/layout',

      //二、路由方法设置路由
      path: '/layout/:userName',
      name: 'layout',
      component: Layout,

      children: [//二级路由，在layout页面中的子页面

        {
          path: '/home',
          name: 'home',
          component: () => import('@/components/home/Home.vue')
        },
        {
          path: '/addUser',
          name: 'addUser',
          component: () => import('@/components/managementUser/AddUser.vue')
        },
        {
          path: '/userInfo',
          name: 'userInfo',
          component: () => import('@/components/managementUser/UserInfo.vue')
        },
        {
          path: '/componentOne',
          name: 'componentOne',
          component: () => import('@/components/managementComponent/ComponentOne.vue')
        },
        {
          path: '/componentTwo',
          name: 'componentTwo',
          component: () => import('@/components/managementComponent/ComponentTwo.vue')
        },
        {
          path: '/componentThree',
          name: 'componentThree',
          component: () => import('@/components/managementComponent/ComponentThree.vue')
        },
        {
          path: '/testOne',
          name: 'testOne',
          component: () => import('@/components/managementTest/TestOne.vue')
        },
        {
          path: '/testTwo',
          name: 'testTwo',
          component: () => import('@/components/managementTest/TestTwo.vue')
        },
        {
          path: '/testThree',
          name: 'testThree',
          component: () => import('@/components/managementTest/TestThree.vue')
        },

      ]
    },
  ]
})
