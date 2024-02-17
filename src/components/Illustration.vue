<template>
  <div>
<div id="titles">
      <p id="title">Illustration</p>
      </div>
      <div id="results">
      <img id="result" v-show='success' @click='success = !success' src="../assets/TwoTruths/success.png" />
      <img id="result" v-show='failure' @click='failure = !failure' src="../assets/TwoTruths/failure.png" />
    </div>
<div id="buttons">
      <button id="btn" @click='toggle1 = !toggle1'>People I've Met</button>

      <div id="setup1" v-show='toggle1'>
        <img id="illustrations" @click='confirmsuccess = !confirmsuccess' src="../assets/Artwork/Illustration/People/Duke_Illustration2.jpeg" />
        <img id="illustrations" @click='confirmfail = !confirmfail' src="../assets/Artwork/Illustration/People/Duke_Illustration.jpeg" />
        <img id="illustrations" @click='confirmfail = !confirmfail' src="../assets/Artwork/Illustration/People/Hodgman_Illustration.jpeg" />
        <img id="illustrations" @click='confirmfail = !confirmfail' src="../assets/Artwork/Illustration/People/Jeff_Illustration.jpeg" />
        <img id="illustrations" @click='confirmsuccess = !confirmsuccess' src="../assets/Artwork/Illustration/People/Katie_Illustration.jpeg" />
        <img id="illustrations" @click='confirmfail = !confirmfail' src="../assets/Artwork/Illustration/People/Kelen_Illustration.jpeg" />
        <img id="illustrations" @click='confirmfail = !confirmfail' src="../assets/Artwork/Illustration/People/Kim_Illustration.jpeg" />
        <img id="illustrations" @click='confirmfail = !confirmfail' src="../assets/Artwork/Illustration/People/Maria_Illustration.jpeg" />
        <img id="illustrations" @click='confirmsuccess = !confirmsuccess' src="../assets/Artwork/Illustration/People/Maria_Illustration2.jpeg" />
        <img id="illustrations" @click='confirmfail = !confirmfail' src="../assets/Artwork/Illustration/People/Maria_Illustration3.jpeg" />
        <img id="illustrations" @click='confirmfail = !confirmfail' src="../assets/Artwork/Illustration/People/Maria4_Illustration.jpeg" />
        <img id="illustrations" @click='confirmfail = !confirmfail' src="../assets/Artwork/Illustration/People/Mere_Illustration.jpeg" />
        <img id="illustrations" @click='confirmfail = !confirmfail' src="../assets/Artwork/Illustration/People/TJ_Illustration.jpeg" />
        <img id="illustrations" @click='confirmfail = !confirmfail' src="../assets/Artwork/Illustration/People/Zeek_Illustration.jpeg" />

      </div>
      <button id="btn" @click='toggle2 = !toggle2'>Self Portraits</button>
      <div id="setup2" v-show='toggle2'>
        <div id="q1" >
        <img @click='confirmsuccess = !confirmsuccess' src="../assets/TwoTruths/set2_false1.png" />
      </div>
      <div id="q2">
        <img @click='confirmfail = !confirmfail' src="../assets/TwoTruths/set2_true1.png" />
      </div>
      <div id="q3">
        <img @click='confirmfail = !confirmfail' src="../assets/TwoTruths/set2_true2.png" />
      </div>
      </div>
      <button id="btn" @click='toggle3 = !toggle3'>Critters</button>
      <div id="setup3" v-show='toggle3'>
        <div id="q1" >
        <img @click='confirmsuccess = !confirmsuccess' src="../assets/TwoTruths/set3_false1.png" />
      </div>
      <div id="q2">
        <img @click='confirmfail = !confirmfail' src="../assets/TwoTruths/set3_true1.png" />
      </div>
      <div id="q3">
        <img @click='confirmfail = !confirmfail' src="../assets/TwoTruths/set3_true2.png" />
      </div>
      </div>
      <button id="btn" @click='toggle4 = !toggle4'>Ted Bundy</button>
      <div id="setup4" v-show='toggle4'>
        <div id="q1" >
        <img @click='confirmfail = !confirmfail' src="../assets/TwoTruths/set4_true2.png" />
      </div>
      <div id="q2">
        <img @click='confirmfail = !confirmfail' src="../assets/TwoTruths/set4_true1.png" />
      </div>
      <div id="q3">
        <img @click='confirmsuccess = !confirmsuccess' src="../assets/TwoTruths/set4_false1.png" />
      </div>
      </div>
      <button id="btn" @click='toggle5 = !toggle5'>Abstract</button>
      <div id="setup5" v-show='toggle5'>
        <div id="q1" >
        <img @click='confirmfail = !confirmfail' src="../assets/TwoTruths/set5_true1.png" />
      </div>
      <div id="q2">
        <img @click='confirmsuccess = !confirmsuccess' src="../assets/TwoTruths/set5_false1.png" />
      </div>
      <div id="q3">
        <img @click='confirmfail = !confirmfail' src="../assets/TwoTruths/set5_true2.png" />
      </div>
      </div>
      </div>
<div id="confirmation">
<div v-show="confirmsuccess">
        <button id="goButton" @click='success = !success, confirmsuccess = !confirmsuccess' >ARE YOU SURE?</button>
    </div>
    <div v-show="confirmfail">
    <button id="goButton" @click='failure = !failure, confirmfail = !confirmfail'>ARE YOU SURE?</button>
  </div>
</div>
  </div>
</template>

<script>
/* eslint-disable */
export default{
  data () {
   return {
     toggle1: false,
     toggle2: false,
     toggle3: false,
     toggle4: false,
     toggle5: false,
     failure: false,
     success: false,
     confirmsuccess: false,
     confirmfail: false,
   }
 }
}
</script>

<style>
  #main {
    background-color: black;
  }
  #q1 {
    background-color: black;
  }
  #setup1 {
display: flex;
width: auto;
height: auto;
flex-wrap: wrap;
  }
  #q2 {
    background-color: black;
  }
  #q3 {
    background-color: black;
  }
  #title {
    font-family: long cang;
    font-size: 5em;
margin-top: -2vh;
margin-bottom: 4vh;
  }
  #buttons {
    display: flex;
    flex-direction:column;
    /* justify-content: center;
    align-items: center; */
  }
  #btn {
    font-family: long cang;
    font-size: 4em;
    width: 29vw;
  }
  #confirmation {
    display: flex;
  justify-content: center;
    position: absolute;
    top: 80px;
}
#goButton {
  height: 110vh;
  width: 98vw;
  background-color: rgb(65, 65, 65);
  color: red;
  font-family: long cang;
  font-size: 12em;
}
#illustrations {
  width: 20vw;
  height: 100%;
  margin: .5vw;
}
#result{
  position: absolute;
}
#results{
  display: flex;
  justify-content: center;
}
</style>
