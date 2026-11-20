<script setup lang="ts">
const props = defineProps({
  // array data to be listed
  sectionList: {
    type: Array<string>,
    required: true
  }
});

const linkSection = (id:string) => {
  const element: HTMLElement | null = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    element.focus();
  }
};
</script>

<template>
  <ul class="list-items-layout block-style">
    <li v-for="(subtitle, index) in sectionList" :key="index" @click="linkSection(subtitle)">
      {{ subtitle }}
    </li>
  </ul>
</template>

<style scoped>
.list-items-layout {
  display: flex;
  padding: 1rem;
  margin: 0rem 1rem;
  list-style-type: disc;
}
.block-style {
  align-items: flex-start;
  flex-direction: column;
  overflow-y: scroll;
}
li {
  padding: 5px 8px;
  cursor: pointer;
  color: var(--font-color-3);
}
li:hover {
  color: var(--font-color-1);
}
</style>
