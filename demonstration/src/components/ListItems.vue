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

  <ul v-if="inline" class="list-items-layout inline-style">
    <li v-for="(item, index) in list" :key="index">
      {{ item }}
    </li>
  </ul>

  <ul v-else class="list-items-layout block-style">
    <li v-for="(item, index) in list" :key="index">
      {{ item }}
    </li>
  </ul>

</template>

<style scoped>
.list-items-layout {
  display: flex;
  list-style-type: none;
  padding: 1rem;
  margin: 0px;
}
.block-style {
  align-items: flex-start;
  flex-direction: column;
  height: 100%;
  overflow-y: scroll;
}
.inline-style {
  justify-content: center;
  flex-direction: row;
  width: 100%;
  overflow-x: scroll;
}
</style>
