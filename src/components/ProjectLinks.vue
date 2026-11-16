<script setup lang="ts">
import { reactive } from 'vue'

// const root = `http://localhost:${import.meta.env.VITE_PORT}`; // development
const root = "https://demonstration-f118509618ea.herokuapp.com"; // production

const projects: Array<{name: string, publishDate: Date}> = [
  // project static data
  // date format: yyyy-mm-dd
  {name: 'ConductR', publishDate: new Date('2026-11-15')},
  // new project names here
  
];

interface ProjectInterface {
  name: string,
  url: string,
  publishDate: Date
};
function formatProjectName(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "");
};
let projectArr: Array<ProjectInterface> = [];
projects.forEach((project) => {
  projectArr.push({
    name: project.name,
    url: `${root}/projects/${formatProjectName(project.name)}`,
    publishDate: project.publishDate
  });
});

// filter for recency
function publishDateFilter(projectArr: Array<ProjectInterface>, recent: boolean = true): Array<ProjectInterface> {
  if (recent) {
    // Decending order: more to less recent
    return projectArr.sort((a, b) => a.publishDate.getTime() - b.publishDate.getTime());
  } else {
    // Ascending order: less to more recent
    return projectArr.sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime());
  }
};

// display list of filtered values
const list = reactive(publishDateFilter(projectArr));

</script>

<template>

  <ul class="list-items-layout block-style">
    <li v-for="(project, index) in list" :key="index">
      <a :href="project.url" rel="noopener noreferrer">{{ project.name}}</a>
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
  /* padding: 3px 8px; */
  cursor: pointer;
}
li:hover {
  background-color: var(--solid-color-2);
}
</style>
