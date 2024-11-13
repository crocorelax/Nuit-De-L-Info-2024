<!-- src/App.vue -->
<template>
    <div id="app">
      <router-view></router-view> <!-- Affiche le composant correspondant à la route -->
    </div>
</template>
  
<script>
  export default {
    name: 'App',
  };
</script>
  
  <style>
  @import './styles/variables.css';
  @import './styles/main.css';
  </style>
  