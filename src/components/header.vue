<template>
    <header class="home-header">
      <!-- Importer le logo SVG -->
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
  import Logo from '@/assets/images/Logo.svg'; // Assurez-vous que le chemin est correct
  
  export default {
    name: "Header",
    components: {
        Logo
    },
    data() {
      return {
        logoHover: false,
        menuOpen: false
      };
    },
    methods: {
      toggleMenu() {
        this.menuOpen = !this.menuOpen;
      },
      goHome() {
        window.location.href = '/';  // Redirige vers la page d'accueil
      }
    }
  };
  </script>
  
  <!-- Importation du fichier CSS -->
  <style scoped src="../styles/header.css"></style>
  