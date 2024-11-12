<template>
  <div id="main">
  <nav>
    <router-link to="/HomeView">Home | </router-link>
    <router-link to="/IllustrationView">Illustration | </router-link>
    <router-link to="/AboutView">About | </router-link>
    <router-link to="/BrandingView">Branding | </router-link>
    <router-link to="/CodingView">Coding | </router-link>
    <router-link to="/ProjectPlanningView">Project Planning | </router-link>
    <router-link to="/UXUIView">UX/UI | </router-link>
    <router-link to="/VideoView">Video | </router-link>
    <router-link to="/AudioView">Audio |</router-link>
    <theme-button />
  </nav>
  <router-view/>
  <footer> Thank you for reading the bottom part. </footer>
</div>
</template>

<script>
/* eslint-disable */
import ThemeButton from "./components/ThemeButton.vue";
export default {
  components: { ThemeButton },
}
</script>

<style>

#main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

footer {
  width: 100%;
  justify-content: center;
  background-color: var(--footer-color);
  align-items: center;
  padding-top: 2em;
  margin-top: 1em;
  padding-bottom: 2em;
  font-size: .80em;
  color: var(--text-primary-color);
  position: static;
  bottom: 0;
}
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
  --footer-color: rgb(188, 188, 188);
}

/* Define styles for the root window with dark - mode preference */
:root.dark-theme {
  --background-color-primary: #000000;
  --background-color-secondary: #2d2d30;
  --accent-color: #3f3f3f;
  --text-primary-color: #ddd;
  --footer-color: rgb(39, 39, 39);
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
  --width: 100vw !important;
  --height: 100vh !important;
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
