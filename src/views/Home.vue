<!-- src/views/Home.vue -->
<template>
  <div class="home">
    <header class="home-header">
      <h1>Bienvenue à la Nuit de l'Info</h1>
      <p>Préparons ensemble une nuit de code inoubliable !</p>
    </header>
    <section class="introduction">
      <p>Ce site servira de base à notre projet. L'équipe ajoutera des fonctionnalités ici durant la nuit.</p>
    </section>
    <!-- Section qui pourra être remplie avec des liens vers des fonctionnalités -->
    <section class="features">
      <h2>Fonctionnalités</h2>
      <ul>
        <li>Fonctionnalité 1 (placeholder)</li>
        <li>Fonctionnalité 2 (placeholder)</li>
        <li>Fonctionnalité 3 (placeholder)</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home {
  text-align: center;
  padding: 2rem;
}

.home-header {
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 8px;
}

.introduction, .features {
  margin-top: 2rem;
}
</style>
