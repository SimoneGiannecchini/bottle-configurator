<template>
  <div class="app-shell">
    <header class="app-header">
      <div class="logo">BottleLab</div>
      <nav class="app-nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/configura">Configura</RouterLink>
      </nav>
    </header>

    <main class="app-main">
      <RouterView />
    </main>

    <footer class="app-footer">
      <span>© {{ new Date().getFullYear() }} BottleLab – Configuratore bottiglia</span>
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped src="./styles/App.css"></style>
