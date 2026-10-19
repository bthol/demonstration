<script setup lang="ts">
import { ref } from 'vue'

const state = ref(0)
</script>

<template>
  <section>
    <div>
      <h1>First Example</h1>
      <p>This is my first example of a vue component</p>
      <br />
    </div>
    <button type="button" class="counter" @click="state++">
      Reactive state is {{ state }}
    </button>
  </section>
</template>
