<template>
  <nav>
    <router-link to="/">Home | </router-link>
    <!-- <router-link to="/BloodWheelScore">Blood Wheel Counter | </router-link>
    <router-link to="/OuchyNumberView">Ouchy Number | </router-link>
    <router-link to="/PlinkoCounterView">Plink! oh no | </router-link>
    <router-link to="/SpinalFluidPongView">Spinal Fluid Pong | </router-link>
    <router-link to="/SpinalFluidPongViewVS">Spinal Fluid Pong VS | </router-link>
    <router-link to="/TwoTruthsOneDieView">Two Truths One Die |  </router-link> -->
    <router-link to="/IllustrationView">Illustration | </router-link>
    <router-link to="/AboutView">About | </router-link>
    <router-link to="/BrandingView">Branding | </router-link>
    <router-link to="/CodingView">Coding | </router-link>
    <router-link to="/ProjectPlanningView">Project Planning | </router-link>
    <router-link to="/UXUIView">UX/UI | </router-link>
    <router-link to="/VideoView">Video | </router-link>
    <router-link to="/AudioView">Audio </router-link>

    <theme-button />
  </nav>
  <router-view/>
</template>

<script>
/* eslint-disable */
import ThemeButton from "./components/ThemeButton.vue";
export default {
  components: { ThemeButton },
}
</script>
<style>

nav {
  display: inline-flex;
  gap: 5px;
}
a:link { 
  text-decoration: none; 
} 
a:visited { 
  text-decoration: none; 
} 
a:hover { 
  color:#7e1212; 
} 
a:active { 
  text-decoration: none; 
}

html,
body {
  padding: 0;
  margin: 0;
}
/* Define styles for the default root window element */
:root {
  --background-color-primary: #ffffff;
  --background-color-secondary: #fafafa;
  --accent-color: #cacaca;
  --text-primary-color: #222;
  --element-size: 4rem;
}

/* Define styles for the root window with dark - mode preference */
:root.dark-theme {
  --background-color-primary: #1e1e1e;
  --background-color-secondary: #2d2d30;
  --accent-color: #3f3f3f;
  --text-primary-color: #ddd;
}

p {
  color: var(--text-primary-color);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: var(--background-color-primary);
  height: 100vh;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #a05858;
}

nav a.router-link-exact-active {
  color: #7e1212;
}

</style>
