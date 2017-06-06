import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'

Vue.use(Router)

import Login from '@/components/user/Login'

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/',
      redirect: '/login'
    }
  ]
})
