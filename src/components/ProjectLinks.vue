<script setup lang="ts">
import { reactive } from 'vue'
const root = "";
const list = reactive([
  {name: "ConductR", url: `${root}/apps/conductr`}
]);
</script>

<template>

  <ul class="list-items-layout block-style">
    <li v-for="(project, index) in list" :key="index">
      {{ project.name }}
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
  padding: 3px 8px;
  cursor: pointer;
}
li:hover {
  background-color: var(--solid-color-2);
}
</style>
