<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  // image source filepath string
  fileName: {
    type: String,
    required: true
  },
  // optional placeholder string
  imgAlt: {
    type: String,
    default: "image",
    required: false
  },
  // width control for scaling image
  imgWidth: {
    type: String,
    default: '100px',
  },
})
// Vite statically analyzes the relative path pattern and bundles matching files
const imageSrc = computed(() => {
  return new URL(`../assets/images/${props.fileName}`, import.meta.url).href
})
</script>

<template>

  <div class="image-layout">
    <img :src="imageSrc" :alt="imgAlt">
  </div>

</template>

<style scoped>
.image-layout {
  display: flex;
  justify-content: center;
}
img {
  margin: 5px;
  /* border: 1px solid var(--image-border); */
  width: v-bind('props.imgWidth');
}
</style>
