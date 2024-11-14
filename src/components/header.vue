<template>
    <header class="home-header">
        <!-- Logo à gauche redirige vers la page d'accueil -->
        <div class="logo" @mouseover="logoHover = true" @mouseleave="logoHover = false" @click="goHome">
            <!-- Contenu complet de ton SVG -->
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
            <circle cx="20" cy="20" r="18" />
            <!-- Remplace ici avec les autres éléments de ton SVG original -->
            </svg>
        </div>
  
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
  export default {
    name: "Header",
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
  