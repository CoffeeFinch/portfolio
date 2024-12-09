<template>
  <div id="main">
    <h1>Ugly Website Index</h1>
    <UWIndex />
    <h1>Ugly Website Lander</h1>
    <UWLander />
    <h1>Ugly Website Facts</h1>
    <UWFacts />
    <h1>Ugly Website Links</h1>
    <UWLinks />
    <h1>Ugly Website Quotes</h1>
    <UWQuotes />
    <h1>Ugly Website Seriously</h1>
    <UWSeriously />
  </div>
</template>

<script setup>
import UWFacts from '../components/UWFacts.vue'
import UWIndex from '../components/UWIndex.vue'
import UWLander from '../components/UWLander.vue'
import UWLinks from '../components/UWLinks.vue'
import UWQuotes from '../components/UWQuotes.vue'
import UWSeriously from '../components/UWSeriously.vue'
</script>

<style scoped>
#main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 80vw;
}

h1 {
  color: var(--text-primary-color);
}
</style>
