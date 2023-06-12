import { createRouter, createWebHistory } from 'vue-router'
import MainContainer from '../views/MainContainer.vue'
import { env } from 'node:process'

const router = createRouter({
  history: createWebHistory(env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainContainer
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
