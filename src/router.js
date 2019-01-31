import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from '@/views/home.vue'

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: '/',
      component: home
    }
  ]
})

export default router
