import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Assure-toi d'importer correctement le routeur

createApp(App)
  .use(router) // Utilisation du routeur ici
  .mount('#app');
