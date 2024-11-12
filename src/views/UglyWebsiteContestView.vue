<template>
  <div id="main">
    <UWFacts />
    <UWIndex />
    <UWLander />
    <UWLinks />
    <UWQuotes />
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
</style>
