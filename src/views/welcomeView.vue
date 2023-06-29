<template>
    <div id="main">
      <div id="header-section">
        <div id="logo-fun">
          <img id="logo-jazz" v-bind:src="require('../assets/DBLogo-wht.png')" />
          <img id="logo-jazz" v-bind:src="require('../assets/DBLogo-red-ish.png')" />
          <img id="logo-jazz" v-bind:src="require('../assets/DBLogo-gold.png')" />
          <img id="logo-jazz" v-bind:src="require('../assets/DBLogo-yellow.png')" />
          <img id="logo-jazz" v-bind:src="require('../assets/DBLogo-more-blu.png')" />
          <img id="logo-jazz" v-bind:src="require('../assets/DBLogo-purple.png')" />
          <img id="logo-jazz" v-bind:src="require('../assets/DBLogo-Blk.png')" />
        </div>
        <br>
        <h1>Welcome to Decibel</h1>
        <p>How would you like to generate your playlist?</p>
      </div>
      <div id="speech-box">
        <h2 id="talk-to-me">Tell us how you feel.</h2>
      </div>
      <p class="or">Or</p>
    </div>
  </template>
  <script>
  
  </script>
  <style scoped>
  h1 {
      font-family: 'Oswald', sans-serif;
      font-weight: bold;
      text-align: center;
      font-size: 4em;
  }
  #main {
    padding-top: 180px;
  }
  #talk-to-me {
  margin-top: 100px;
  }
  h2 {
      font-family: 'Sofia Sans Condensed', sans-serif;
      color:white;
      text-align: center;
      font-size: 1.5em;
  }
  .or {
      font-family: 'Oswald', sans-serif;
      color:white;
      font-size: 1.5em;
      text-align: center;
      margin-left: 11vw;
      margin-right: 11vw;
      margin-top: 30px;
      margin-bottom: 30px;
  }
  </style>