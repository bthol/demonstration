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
  list-style-type: none;
  padding: 1rem;
  padding-top: 0rem;
  margin: 0px;
}
.block-style {
  align-items: flex-start;
  flex-direction: column;
  overflow-y: scroll;
}
li {
  padding: 5px 8px;
  border-left: 3px solid var(--detail-color-2);
  cursor: pointer;
  color: var(--font-color-3);
  box-sizing: border-box;
  width: 95%;
}
li:hover {
  background-color: var(--solid-color-2);
  margin-left: 2.5px;
  border-left: none;
  color: var(--font-color-1);
}
</style>
