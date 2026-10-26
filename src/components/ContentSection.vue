<script setup lang="ts">
const props = defineProps({
  subtitle: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});
const paragraphTest: Boolean = props.text.length > 0; // prevent rendering on empty paragraphs
const paragraphs = props.text.split('/');
</script>

<template>
  <section>
    <div class="sub-title-layout text-xl font-bold">
      <h3 :id="subtitle">{{ subtitle }}</h3>
    </div>
    <p v-if="paragraphTest" v-for="(paragraph, index) in paragraphs" :key="index">
    {{ paragraph }}
    </p>
  </section>
</template>

<style scoped>
.sub-title-layout {
  display: flex;
  border-bottom: 2px solid var(--detail-color-2);
  margin-left: 1rem;
  margin-right: 1rem;
}
p {
  margin: 1rem;
  text-indent: 2rem;
}
</style>