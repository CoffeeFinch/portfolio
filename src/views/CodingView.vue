<template>
  <div id="main">
    <div id="coding">
    <h1>CODING</h1>
    <router-link to="/ZeekGameView">Zeek Game</router-link>
    <br>
    <router-link to="/UglyWebsiteContestView">Ugly Website Contest</router-link>
  </div>
  </div>
</template>

<script setup>
</script>

<style>
#main {
  color: var(--text-primary-color);
}

#coding{
  display: flex;
  flex-direction: column;
}
</style>
