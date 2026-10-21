<script setup lang="ts">
import { ref, reactive } from 'vue'
import Header from './components/Header.vue'
import PageTitle from './components/PageTitle.vue'

const titleRef = ref('Title of the Page')
const list = reactive([2, 4, 6])
</script>

<template>
  <Header />
  <PageTitle :title="titleRef" />
</template>

