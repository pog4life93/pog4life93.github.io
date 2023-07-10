import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: { name: 'home' },
    },
    {
      path: '/pog4life93.github.io/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/pog4life93.github.io/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/pog4life93.github.io/crafted-sets',
      name: 'craftedsets',
      component: () => import('../views/CraftedSets.vue'),
    },
  ],
});

export default router;