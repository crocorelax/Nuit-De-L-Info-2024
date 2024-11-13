import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue'; // Vérifie que le chemin est correct

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home, // Assure-toi que Home.vue est correctement importé
  },
  // D'autres routes ici si nécessaire
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
