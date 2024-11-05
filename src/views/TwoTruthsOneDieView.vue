<template>
  <div class="TwoTruthsOneDie">
    <nav>
    <router-link to="/BloodWheelScore">Blood Wheel Counter</router-link> |
    <router-link to="/OuchyNumberView">Ouchy Number</router-link> |
    <router-link to="/PlinkoCounterView">Plink! oh no</router-link> |
    <router-link to="/SpinalFluidPongView">Spinal Fluid Pong</router-link> |
    <router-link to="/SpinalFluidPongViewVS">Spinal Fluid Pong VS</router-link> |
    <router-link to="/TwoTruthsOneDieView">Two Truths One Die</router-link>
  </nav>
    <TwoTruthsOneDie />
  </div>
</template>

<script setup>
import TwoTruthsOneDie from '../components/TwoTruthsOneDie.vue'
</script>

<style scoped>
nav {
  font-family: love ya like a sister;
  font-size: 1.5em;
  background-color: var(--background-color-secondary);
  width: 100vw;
  justify-content: center;
}
</style>
