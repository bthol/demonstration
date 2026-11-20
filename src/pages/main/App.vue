<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
import PageTitle from '../../components/PageTitle.vue'
import ContentSection from '../../components/ContentSection.vue'
import SectionOutline from '../../components/SectionOutline.vue'
import SectionLinks from '../../components/SectionLinks.vue'
import ProjectLinks from '../../components/ProjectLinks.vue'
import Image from '../../components/Image.vue'

// store page title in ref
const titleRef = ref('Demonstration');
const fileName = ref('Demo.jpg');

// declare new set
let sectionList: Set<string> | Array<string> = new Set();
let contentList: Set<string> | Array<string> = new Set();
// populate set with subtitles
sectionList.add('Subtitle');
contentList.add('This is an example text 1. It will show how text will be rendered in section templates for the purpose of testing and adjusting to taste./Section templates allow for multiple paragraphs, so that content can be broken into multiple digestible and thematically-related parts. The result reads very much like an article.');

sectionList.add('Another Subtitle');
contentList.add('This is an example text 2. It will show how text will be rendered in section templates for the purpose of testing and adjusting to taste./Section templates allow for multiple paragraphs, so that content can be broken into multiple digestible and thematically-related parts. The result reads very much like an article.');

sectionList.add('Yet Another Subtitle');
contentList.add('This is an example text 3. It will show how text will be rendered in section templates for the purpose of testing and adjusting to taste./Section templates allow for multiple paragraphs, so that content can be broken into multiple digestible and thematically-related parts. The result reads very much like an article.');

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

// mobile environment test
const mobileMaxWidth: number = 768; // pixels
const mobile = ref<boolean>(window.innerWidth < mobileMaxWidth);
window.addEventListener('resize', () => {
  if (mobile.value) {
    if (window.innerWidth < mobileMaxWidth) {
      mobile.value = true;
    }
  } else {
    if (window.innerWidth > mobileMaxWidth) {
      mobile.value = false;
    }
  }
});

// handle menu events
const showMenu = ref<boolean>(false);
function handleMenu() {
  showMenu.value = !showMenu.value;
}
</script>

<template>
  
  <Header @menuSelected="handleMenu" :showMenu="showMenu" />

  <div class="content-layout">

    <aside v-if="showMenu" ref="asideLeft" class="aside-left text-l" :class="{'slide-open': showMenu}">
      <div class="aside-label font-bold">Projects</div>
      <ProjectLinks />
    </aside>
    
    <main ref="mainContent">

      <PageTitle :title="titleRef" />
      
      <Image :fileName="fileName" imgAlt="page-image" imgWidth="50vmin"/>
      
      <br>

      <section v-if="mobile">
        <div class="sub-title-layout text-xl font-bold">
          <h3>Outline</h3>
        </div>
        <SectionOutline :sectionList="sectionList" />
      </section>

      <ContentSection v-for="(section, index) in sectionList"
        :key="section"
        :subtitle="sectionList[index]"
        :text="contentList[index]"
      />

    </main>
    
    <aside v-if="!mobile" ref="asideRight" class="text-l">
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
  background-color: var(--solid-color-3);
}
main, aside {
  max-height: 100vh;
  overflow-y: scroll;
}
main {
  background-color: var(--solid-color-2);
  grid-column: 2;
  min-width: 300px;
}
.aside-label {
  margin: 1rem;
}
.aside-left {
  position: absolute;
  left: 0px;
  width: 85vw;
  background-color: var(--solid-color-2);
  box-shadow: 0px 5px 8px 2px rgba(0, 0, 0, 0.2);
}
.slide-open {
  animation: slide-open  240ms cubic-bezier(0.475, 0.170, 0.000, 0.610);
}
@keyframes slide-open {
  0% {
    left: -100%;
  }
  100% {
    left: 0%;
  }
}
@media (min-width: 768px) {
  .aside-left {
    width: 25vw;
  }
}
</style>