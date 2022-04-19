import { createRouter, createWebHistory } from 'vue-router';

import { useLifeStore } from './store/life';

import MainView from '@/views/MainView.vue';
import NewGameView from './views/NewGameView.vue';

const routes = [
  {
      path: '/',
      component: MainView,
  },
  {
    path: '/new',
    component: NewGameView,
  },
  {
    path: '/jobs',
    component: () => import('@/views/JobListView.vue'),
  },
  {
    path: '/jobs/:id',
    component: () => import('@/views/JobDetailView.vue'),
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
    router.push('/new');
  }

  next();
});

export { router };
