<template>
    <header class="home-header">
      <!-- Intégration du logo SVG -->
      <svg
        width="2062"
        height="1700"
        viewBox="0 0 2062 1700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="logo"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1334.1 1699.41C1365.88 1699.41 1384.97 1664.13 1367.57 1637.52L720.559 648.108C704.77 623.964 669.393 623.964 653.604 648.108L6.5889 1637.52C-10.8084 1664.13 8.27889 1699.41 40.0663 1699.41H147.854C161.354 1699.41 173.943 1692.6 181.331 1681.31L653.604 959.108C669.393 934.964 704.77 934.964 720.559 959.108L1192.83 1681.31C1200.22 1692.6 1212.81 1699.41 1226.31 1699.41H1334.1Z"
          class="logo-path"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2021.1 1699.41C2052.88 1699.41 2071.97 1664.13 2054.57 1637.52L1407.56 648.108C1391.77 623.964 1356.39 623.964 1340.6 648.108L693.589 1637.52C676.192 1664.13 695.279 1699.41 727.066 1699.41H834.854C848.354 1699.41 860.943 1692.6 868.331 1681.31L1340.6 959.108C1356.39 934.964 1391.77 934.964 1407.56 959.108L1879.83 1681.31C1887.22 1692.6 1899.81 1699.41 1913.31 1699.41H2021.1Z"
          class="logo-path"
        />
        <circle cx="1032" cy="400" r="400" fill="white" />
      </svg>
  
      <!-- Titre centré -->
      <h1 class="title">Nuit de l'Info</h1>
  
      <!-- Menu hamburger -->
      <div class="menu-icon" @click="toggleMenu">
        <div class="line" :class="{ 'open': menuOpen }"></div>
        <div class="line" :class="{ 'open': menuOpen }"></div>
        <div class="line" :class="{ 'open': menuOpen }"></div>
      </div>
    </header>
  
    <!-- Menu latéral -->
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