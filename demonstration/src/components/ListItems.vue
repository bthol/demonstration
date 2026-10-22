<script setup lang="ts">
const props = defineProps({
  // array data to be listed
  list: {
    type: Array,
    required: true
  },
  // switch for inline render
  inline: {
    type: Boolean,
    required: false
  }
})
</script>

<template>

  <ul v-if="inline" class="list-items-layout inline">
    <li v-for="(item, index) in list" :key="index">
      {{ item }}
    </li>
  </ul>

  <ul v-else class="list-items-layout">
    <li v-for="(item, index) in list" :key="index">
      {{ item }}
    </li>
  </ul>

</template>

<style scoped>
.list-items-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  padding: 1rem;
  margin: 0px;
  flex-direction: column;
}
.inline {
  flex-direction: row;
}
</style>
