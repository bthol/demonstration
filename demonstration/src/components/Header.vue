<script setup lang="ts">
</script>

<template>
  <header>
    <h1>Demonstration</h1>
  </header>
  <div class="header-flare"></div>
</template>

<style scoped>
header {
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: rgb(127, 23, 23);
  color: hsl(67, 26%, 88%);
}
.header-flare {
  background-color: hsl(35, 53%, 50%);
  height: 8px;
  border-bottom: 2px solid #fbff00;
}
</style>