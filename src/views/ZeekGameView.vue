<template>

  <div class="home">
    <nav>
    <router-link to="/BloodWheelScore">Blood Wheel Counter</router-link> |
    <router-link to="/OuchyNumberView">Ouchy Number</router-link> |
    <router-link to="/PlinkoCounterView">Plink! oh no</router-link> |
    <router-link to="/SpinalFluidPongView">Spinal Fluid Pong</router-link> |
    <router-link to="/SpinalFluidPongViewVS">Spinal Fluid Pong VS</router-link> |
    <router-link to="/TwoTruthsOneDieView">Two Truths One Die</router-link>
  </nav>
  <div id="txt">The Price Is Life</div>
    <div class="fadein">
      <img class="logo" id="f3" src="../assets/Logo-Stencil-on.png">
    <img class="logo" id="f2" src="../assets/Logo-Stencil-on.png">
    <img class="logo" id="f1" src="../assets/Logo-Stencil-on.png">
    <div class="big">
      <img class="logo1" id="f4" src="../assets/Logo-Stencil-on.png">
    </div>
  </div>
  </div>
</template>

<script>
</script>

<style scoped>
.logo {
  height: 25vh;
}
.logo1{
  height: 50vh;
}
.big{
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.home{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: var(--background-color-primary);
}
.fadein img {
    top:0;
    -webkit-animation-name: fade;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-duration: 8s;
    animation-name: fade;
    animation-iteration-count: infinite;
    animation-duration: 8s;
    padding-top: 2em;
    padding-bottom: 2em;
}

@-webkit-keyframes fade {
    0% {opacity: 0;}
    20% {opacity: 1;}
    33% {opacity: 1;}
    53% {opacity: 0;}
    100% {opacity: 0;}
}
@keyframes fade {
    0% {opacity: 0;}
    20% {opacity: 1;}
    33% {opacity: 1;}
    53% {opacity: 0;}
    100% {opacity: 0;}
}

#f1 {
  -webkit-animation-delay: -2s;
}
#f2 {
    -webkit-animation-delay: -4s;

}
#f3 {
    -webkit-animation-delay: -6s;

}
#f4{
  -webkit-animation-delay: -8s;
}

nav {
  font-family: love ya like a sister;
  font-size: 1.5em;
  background-color: var(--background-color-secondary);
  width: 100vw;
  justify-content: center;
}

#txt {
  font-family: love ya like a sister;
  font-size: 8em;
  color: var(--text-primary-color);
  width: 80vw;
  justify-content: center;
}
</style>
