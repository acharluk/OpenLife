import { createRouter, createWebHistory } from 'vue-router';

import MainView from '@/views/MainView.vue';
import NewGameView from './views/NewGameView.vue';

const routes = [
  {
      path: '/',
      component: MainView
  },
  {
    path: '/new',
    component: NewGameView
},
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
