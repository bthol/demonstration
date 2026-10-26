<script setup lang="ts">
</script>

<template>
  <header>
    <div class="text-2xl font-bold">Demonstration</div>
  </header>
  <div class="header-flare"></div>
</template>

<style scoped>
header {
  display: flex;
  justify-content: center;
  color: var(--font-color-2);
  background-color: var(--solid-color-1);
}
.header-flare {
  height: 8px;
  background: var(--detail-color-1);
  border-bottom: 2px solid var(--detail-color-2);
}
</style>