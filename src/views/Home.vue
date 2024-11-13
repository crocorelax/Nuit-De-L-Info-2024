<template>
    <div class="home">
      <!-- Intégration du composant Header -->
      <Header />
      
      <div class="content">
        <!-- Le reste du contenu de la page -->
        <section class="introduction">
          <p>Ce site servira de base à notre projet. L'équipe ajoutera des fonctionnalités ici durant la nuit.</p>
        </section>
        <section class="features">
          <h2>Fonctionnalités</h2>
          <ul>
            <li>Fonctionnalité 1 (placeholder)</li>
            <li>Fonctionnalité 2 (placeholder)</li>
            <li>Fonctionnalité 3 (placeholder)</li>
          </ul>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  // Importation du composant Header
  import Header from '@/components/Header.vue';
  
  export default {
    name: 'Home',
    components: {
      Header
    }
  };
  </script>
  
  <style scoped>
  /* Tu peux ajouter des styles globaux pour ta page ici */
  .home {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
  
  .content {
    padding: 2rem;
  }
  </style>
  