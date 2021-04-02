import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import homepage from '@/view/homepage_old'
import tokenSale from '@/view/tokenSale'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/tokenSale',
      name: 'tokenSale',
      component: tokenSale
    }
  ]
})
