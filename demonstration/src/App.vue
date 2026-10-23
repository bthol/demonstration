<script setup lang="ts">
import { ref, reactive } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
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

  <div class="content-layout">

    <aside class="bg-olive-100">
      <ListItems :list="listRef" />
    </aside>
    
    <main>
      <PageTitle :title="titleRef" />
      <ListItems :list="listRef" :inline="true" />
    </main>
    
    <aside class="bg-olive-100">
      <ListItems :list="listRef" />
    </aside>

  </div>
  
  <Footer />

</template>

<style scoped>
.content-layout {
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  min-height: 100vh;
}
</style>