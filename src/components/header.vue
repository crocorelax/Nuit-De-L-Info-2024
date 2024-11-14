<template>
    <header class="home-header">
      <!-- Importer le logo SVG comme composant Vue -->
      <Logo class="logo" />
      
      <!-- Titre au centre -->
      <h1 class="title">Nuit de l'Info</h1>
      
      <!-- Menu hamburger à droite -->
      <div class="menu-icon" @click="toggleMenu">
        <div class="line" :class="{ 'open': menuOpen }"></div>
        <div class="line" :class="{ 'open': menuOpen }"></div>
        <div class="line" :class="{ 'open': menuOpen }"></div>
      </div>
    </header>
    
    <!-- Menu latéral translucide rouge -->
    <div v-if="menuOpen" class="side-menu" @click.self="toggleMenu">
      <ul>
        <li @click="toggleMenu">Menu Item 1</li>
        <li @click="toggleMenu">Menu Item 2</li>
        <li @click="toggleMenu">Menu Item 3</li>
        <li @click="toggleMenu">Menu Item 4</li>
      </ul>
    </div>
  </template>
  
  <script>
  // Assurez-vous que le chemin est correct pour le fichier SVG
  import Logo from '@/assets/images/Logo.svg';
  
  export default {
    name: "Header",
    components: {
      Logo
    },
    data() {
      return {
        menuOpen: false
      };
    },
    methods: {
      toggleMenu() {
        this.menuOpen = !this.menuOpen;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Logo */
  .logo {
    width: 50px;  /* Ajustez la taille du logo */
    height: auto;
    transition: fill 0.3s ease; /* Transition pour changer la couleur */
  }
  
  /* Change la couleur au survol */
  .logo:hover {
    fill: var(--primary-color); /* Couleur du logo au survol */
  }
  </style>
  