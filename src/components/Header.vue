<script setup lang="ts">
// const root = `http://localhost:${import.meta.env.VITE_PORT}`; // development
const root = "https://demonstration-f118509618ea.herokuapp.com/"; // production
const props = defineProps({
  showMenu: {
    type: Boolean,
    required: false
  },
})
const emit = defineEmits<{
  (e: 'menuSelected', toggled: boolean): void
}>()
</script>

<template>
  <header>
    <div class="hamburger-layout">
      <div class="hamburger-container" :class="{ 'open': showMenu }" @click="emit('menuSelected', true)">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>

    <div class="website-logo-layout">
      <a :href="root" rel="noopener noreferrer" class="logo-style">
        <img src="../assets/images/Demo.jpg" alt="website-logo"/>
      </a>
    </div>

    <div class="search-layout">
      <div class="search-icon"></div>
    </div>
  </header>
  <div class="header-flare"></div>
</template>

<style scoped>
.website-logo-layout {
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo-style {
  width: 75px;
  margin: 8px;
}
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.hamburger-container > div {
  display: relative;
  transition: transform 100ms ease-out;
  width: calc(5px * var(--hamburger-scale) * 1.4142135623730950488016887242097);
  height: calc(1px * var(--hamburger-scale));
  margin: calc(.5px * var(--hamburger-scale)) 0px;
  background-color: var(--detail-color-2);
}
.open {
  transform: rotate(-90deg);
}
.open.hamburger-container {
  width: calc(5px * var(--hamburger-scale) * 1.4142135623730950488016887242097);
  height: calc(5px * var(--hamburger-scale) * 1.4142135623730950488016887242097);
}
.open.hamburger-container > div:not(:first-child):not(:last-child) {
  opacity: 0;
}
.open.hamburger-container > div:first-child {
  transform: rotate(45deg);
  margin: 0px;
  position: relative;
  top: calc(5px * var(--hamburger-scale) * 1.4142135623730950488016887242097 / 4.5);
  border-radius: 3px;
}
.open.hamburger-container > div:last-child {
  transform: rotate(-45deg);
  margin: 0px;
  position: relative;
  top: calc(5px * var(--hamburger-scale) * 1.4142135623730950488016887242097 * -1 / 4.5);
  border-radius: 3px;
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