import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./app.vue')
    },
    {
      path: '/get-success',
      name: 'success',
      component: () => import('./Get.vue')
    },
    {
      path: '/get-soldout',
      name: 'soldout',
      component: () => import('./Soldout.vue')
    },
  ]
})