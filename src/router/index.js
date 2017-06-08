import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const home = r => require.ensure([], () => r(require('../components/home.vue')), 'home')
const login = r => require.ensure([], () => r(require('../components/user/login.vue')), 'login')
const campaignDetails = r => require.ensure([], () => r(require('../components/home.vue')), 'campaignDetails')
const campaignList = r => require.ensure([], () => r(require('../components/pages/canpaings/campaignList.vue')), 'campaignList')
const myCampaign = r => require.ensure([], () => r(require('../components/user/login.vue')), 'myCampaign')
const wallet = r => require.ensure([], () => r(require('../components/pages/wallet/wallet.vue')), 'wallet')
const setting = r => require.ensure([], () => r(require('../components/pages/setting/setting.vue')), 'setting')
const faq = r => require.ensure([], () => r(require('../components/pages/faq/faq.vue')), 'faq')

export default new Router({
  mode: 'history',
  // 设置 链接激活时使用的 CSS 类名。 默认值可以通过路由的构造选项 linkActiveClass 来全局配置
  linkActiveClass: 'active',
  routes: [
    {
      path: '/home',
      component: home,
      children: [
        {
          path: 'campaignList',
          component: campaignList
        }, {
          path: 'myCampaign',
          component: myCampaign
        }, {
          path: 'campaignDetails/:id/:state',
          component: campaignDetails
        }, {
          path: 'wallet',
          component: wallet
        }, {
          path: 'setting',
          component: setting
        }, {
          path: 'faq',
          component: faq
        }, {
          path: '/',
          redirect: './campaignList'
        }
      ]
    }, {
      path: '/login',
      name: 'login',
      component: login
    }, {
      path: '/',
      redirect: '/login'
    }
  ]
})
