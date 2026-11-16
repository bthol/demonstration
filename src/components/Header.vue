<script setup lang="ts">
import Image from './Image.vue'
</script>

<template>
  <header>
    <div class="hamburger-layout">
      <div class="hamburger-container">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>

    <div class="website-logo-layout">
      <Image file-name="Demo.jpg" img-alt="website-logo" img-width="75px"/>
    </div>

    <div class="search-layout">
      <div class="search-icon"></div>
    </div>
  </header>
  <div class="header-flare"></div>
</template>

<style scoped>
header {
  display: grid;
  grid-template-columns: 1fr 7fr 1fr;
  color: var(--font-color-2);
  background-color: var(--detail-color-1);
}
.header-flare {
  height: 10px;
  background: var(--detail-color-2);
}
.hamburger-layout {
  justify-self: start;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hamburger-container {
  --hamburger-scale: 5;
  margin: 10px;
  cursor: pointer;
  display: relative;
  /* transform: rotate(90deg); */
}
.hamburger-container > div {
  width: calc(7px * var(--hamburger-scale));
  height: calc(1px * var(--hamburger-scale));
  margin: calc(1px * var(--hamburger-scale)) 0px;
  background-color: var(--detail-color-2);
}
.search-layout {
  display: flex;
  justify-content: center;
  align-items: center;
}
.search-icon {
  --search-scale: 2.25;
  display: inline-block;
  position: relative;
  width: calc(16px * var(--search-scale));
  height: calc(16px * var(--search-scale));
  border: calc(2px * var(--search-scale)) solid var(--detail-color-2);
  border-radius: 50%;
  box-sizing: border-box;
  margin-right: 15px;
  cursor: pointer;
}
.search-icon::after {
  content: "";
  position: absolute;
  width: calc(4px * var(--search-scale));
  height: calc(9px * var(--search-scale));
  background-color: var(--detail-color-2);
  bottom: calc(-6px * var(--search-scale));
  right: calc(-4px * var(--search-scale));
  transform: rotate(-45deg);
  border-radius: 1px;
}
</style>