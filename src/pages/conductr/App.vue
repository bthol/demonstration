<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
import PageTitle from '../../components/PageTitle.vue'
import ContentSection from '../../components/ContentSection.vue'
import SectionLinks from '../../components/SectionLinks.vue'
import ProjectLinks from '../../components/ProjectLinks.vue'
import Image from '../../components/Image.vue'

// store page title in ref
const titleRef = ref('ConductR');

// declare new sets for section titles and content
let sectionList: Set<string> | Array<string> = new Set();
let contentList: Set<string> | Array<string> = new Set();
// populate set with subtitles
sectionList.add('Abtract');
contentList.add('This is my abstract content placeholder string. Replace this with actual content.')

sectionList.add('Introduction');
contentList.add('This is my introduction content placeholder string. Replace this with actual content.')

sectionList.add('Methods');
contentList.add('This is my methods content placeholder string. Replace this with actual content.')

sectionList.add('Results');
contentList.add('This is my results content placeholder string. Replace this with actual content.')

sectionList.add('Discussion');
contentList.add('This is my discussion content placeholder string. Replace this with actual content.')

// convert to array and wrap in reactive
sectionList = reactive(Array.from(sectionList));
contentList = reactive(Array.from(contentList));

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
      
      <Image fileName="ConductR.png" imgAlt="page-image" imgWidth="50vmin"/>

      <ContentSection v-for="(section, index) in sectionList"
        :key="section"
        :subtitle="sectionList[index]"
        :text="contentList[index]"
      />

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