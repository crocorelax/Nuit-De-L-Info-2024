// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  // Ajoute d'autres routes ici au besoin
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
