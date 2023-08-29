import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // {
    //   path: '/',
    //   redirect: { name: 'home' },
    // },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/sets',
      name: 'sets',
      component: () => import('../views/SetsView.vue'),
    },
    {
      path: '/sets/crafted-sets',
      name: 'craftedsets',
      component: () => import('../views/CraftedSets.vue'),
    },
    {
      path: '/cp',
      name: 'cp',
      component: () => import('../views/ChampionPointsView.vue'),
    },
    {
      path: '/cp/green-cp',
      name: 'championpoints',
      component: () => import('../views/GreenCP.vue'),
    },
    {
      path: '/amazon',
      name: 'amazon',
      component: () => import('../views/Amazon.vue'),
    }
  ],
});

export default router;
