<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: "Title Default",
    required: true
  },
})
</script>

<template>
  <div class="page-title-layout">
    <h1>{{ title }}</h1>
  </div>
</template>

<style scoped>
.page-title-layout {
  display: flex;
  justify-content: center;
  padding: 1rem;
}
</style>
