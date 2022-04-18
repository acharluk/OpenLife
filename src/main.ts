import { createApp } from 'vue';
import { router } from './router';
import { createPinia } from 'pinia';

const app = createApp({})
app.use(router);
app.use(createPinia());
app.mount('#app')
