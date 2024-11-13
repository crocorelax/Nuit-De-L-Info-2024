<template>
    <header class="home-header">
      <!-- Logo à gauche -->
      <div class="logo" @mouseover="logoHover = true" @mouseleave="logoHover = false" @click="toggleMenu">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" stroke="#3498db" stroke-width="4"/>
          <!-- Logo SVG -->
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
  
    <!-- Menu latéral à droite -->
    <div v-if="menuOpen" class="side-menu">
      <ul>
        <li>Menu Item 1</li>
        <li>Menu Item 2</li>
        <li>Menu Item 3</li>
        <li>Menu Item 4</li>
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
      }
    }
  };
  </script>
  
  <!-- Importation du fichier CSS -->
  <style scoped src="../styles/header.css"></style>
  