<script setup lang="ts">
import { ref, reactive } from 'vue'
import Header from './components/Header.vue'
import PageTitle from './components/PageTitle.vue'
import ListItems from './components/ListItems.vue'

const titleRef = ref('Title of the Page')
let listBuild = [];
for (let i = 0; i < 10; i++) {
  listBuild.push(i + 1);
}
const listRef = reactive(listBuild)
</script>

<template>
  <Header />
  <PageTitle :title="titleRef" />
  <ListItems :list="listRef" :inline="true" />
</template>

