<template>
    <header class="home-header">
      <div id="logo-container" class="logo"></div>
      <h1 class="title">Nuit de l'Info</h1>
      <div class="menu-icon" @click="toggleMenu">
        <div class="line" :class="{ 'open': menuOpen }"></div>
        <div class="line" :class="{ 'open': menuOpen }"></div>
        <div class="line" :class="{ 'open': menuOpen }"></div>
      </div>
    </header>
  
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
  fetch('@/assets/images/Logo.svg')
    .then(response => response.text())
    .then(svg => {
      document.getElementById('logo-container').innerHTML = svg;
    });
  
  export default {
    name: "Header",
    data() {
      return {
        menuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.menuOpen = !this.menuOpen;
      },
    },
  };
  </script>
  
  <style>
    /* Importation du fichier CSS */
    @import './styles/header.css'; /* Correctement ajusté pour le dossier src/styles */
  </style>
  