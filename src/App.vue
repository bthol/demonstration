<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import PageTitle from './components/PageTitle.vue'
import ContentSection from './components/ContentSection.vue'
import SectionLinks from './components/SectionLinks.vue'
import ProjectLinks from './components/ProjectLinks.vue'
import ListItems from './components/ListItems.vue'

// list generator
let listBuild = [];
for (let i = 0; i < 100; i++) {
  listBuild.push(i + 1);
}
const listRef = reactive(listBuild);

// store page title in ref
const titleRef = ref('Title of the Page');

// declare new set
let sectionList: Set<string> | Array<string> = new Set();
// populate set with subtitles
sectionList.add('Lorem Ipsum');
sectionList.add('Subtitle');
sectionList.add('Another Subtitle');
// convert to array and wrap in reactive
sectionList = reactive(Array.from(sectionList));

// dom refs
const mainContent = ref<HTMLElement | null>(null);
// const asideLeft = ref<HTMLElement | null>(null);
// const asideRight = ref<HTMLElement | null>(null);
onMounted(() => {
  if (mainContent.value) {
    // focus on content
    mainContent.value.focus();
  }
});
</script>

<template>
  
  <Header />

  <div class="content-layout">

    <aside ref="asideLeft" class="text-l">
      <div class="aside-label font-bold">Projects</div>
      <ProjectLinks />
    </aside>
    
    <main ref="mainContent">
      <PageTitle :title="titleRef" />
      
      <ContentSection :subtitle="sectionList[0]" text="
      Lorem ipsum dolor sit amet consectetur adipiscing elit. Expedita excepturi accusamus minim deserunt sit esse cumque officia. Do assumenda cupidatat in fugiat nobis libero enim ducimus sed similique illum cupiditate.

      /Voluptate dolorum id libero cillum dolor tempore. Dolore enim culpa pariatur ullamco excepteur ducimus vero aliqua adipiscing animi. Deserunt qui nulla harum consequat cum soluta ex nihil exercitation. Eiusmod eu aut culpa corrupti facere. Qui voluptas quos nobis proident dolore similique anim deleniti adipiscing maxime anim.

      /Harum cillum quibusdam dolor eos in quos ipsum imperdiet laboris dolorum est. Ducimus est irure lorem est dolor dolores eos. Nostrud est cupiditate cillum deserunt occaecat expedita sunt odio fugiat non." />

      <ContentSection :subtitle="sectionList[1]" text="This is an example text. It will show how text will be rendered in section templates for the purpose of testing and adjusting to taste.

      /Section templates allow for multiple paragraphs, so that content can be broken into multiple digestible and thematically-related parts. The result reads very much like an article." />
      
      <ContentSection :subtitle="sectionList[2]" text="This is an example text. It will show how text will be rendered in section templates for the purpose of testing and adjusting to taste.

      /Section templates allow for multiple paragraphs, so that content can be broken into multiple digestible and thematically-related parts. The result reads very much like an article." />

      <ListItems :list="listRef" :inline="true" />

    </main>
    
    <aside ref="asideRight" class="text-l">
      <div class="aside-label font-bold">Navigation</div>
      <SectionLinks :sectionList="sectionList" />
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
main, aside {
  max-height: 100vh;
  overflow-y: scroll;
}
main {
  background-color: var(--solid-color-2);
}
aside {
  background-color: var(--solid-color-3);
}
.aside-label {
  margin: 1rem;
}
</style>