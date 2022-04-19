import { createRouter, createWebHistory } from 'vue-router';

import { useLifeStore } from './store/life';

import MainView from '@/views/MainView.vue';
import NewGameView from './views/NewGameView.vue';

const routes = [
  {
      path: '/',
      name: 'main',
      component: MainView,
  },
  {
    path: '/new',
    name: 'new-game',
    component: NewGameView,
  },
  {
    path: '/jobs',
    name: 'job-list',
    component: () => import('@/views/JobListView.vue'),
  },
  {
    path: '/jobs/:id',
    name: 'job-detail',
    component: () => import('@/views/JobDetailView.vue'),
  },
  {
    path: '/death',
    name: 'death',
    component: () => import('@/views/DeathView.vue'),
  },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});


/**
 * Check if user has started a life,
 * redirect to new game view otherwise
 */
router.beforeEach((to, _, next) => {
  const lifeStore = useLifeStore();

  if (!lifeStore.hasLife() && to.path !== '/new') {
    router.push({ name: 'new-game' });
  }

  next();
});

export { router };
