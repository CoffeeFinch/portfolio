<template>
  <div>
<div id="titles">
      <p id="title">Illustration</p>
      </div>
<div id="buttons">
      <button id="btn" @click='toggle1 = !toggle1, cleanUp()' >People</button>
      <div id="setup" v-show='toggle1'>
        <img id="illustrations" src="../assets/Artwork/People/corey.jpg"/>
        <img id="illustrations" src="../assets/Artwork/People/cosmos.jpg"/>
        <img id="illustrations" src="../assets/Artwork/People/Dim.jpg"/>
        <img id="illustrations" src="../assets/Artwork/People/Duke1.jpg"/>
        <img id="illustrations" src="../assets/Artwork/People/Duke2.jpeg"/>
        <img id="illustrations" src="../assets/Artwork/People/Duke3.jpeg"/>
        <img id="illustrations" src="../assets/Artwork/People/Hodgman.jpg"/>
        <img id="illustrations" src="../assets/Artwork/People/hold.jpg"/>
        <img id="illustrations" src="../assets/Artwork/People/IMG_0257.jpg"/>
        <img id="illustrations" src="../assets/Artwork/People/Jeff.jpg"/>
        <img id="illustrations" src="../assets/Artwork/People/Katie.jpg"/>
        <img id="illustrations" src="../assets/Artwork/People/Kelen.jpg"/>
        <img id="illustrations" src="../assets/Artwork/People/Kim.jpg"/>
        <img id="illustrations" src="../assets/Artwork/People/Maria1.jpg"/>
        <img id="illustrations" src="../assets/Artwork/People/Maria2.jpg"/>
        <img id="illustrations" src="../assets/Artwork/People/Maria3.jpg"/>
        <img id="illustrations" src="../assets/Artwork/People/Maria4.jpg"/>
        <img id="illustrations" src="../assets/Artwork/People/Mere_Illustration.jpeg"/>
        <img id="illustrations" src="../assets/Artwork/People/mum.jpg"/>
        <img id="illustrations" src="../assets/Artwork/People/slocumb.jpg"/>
        <img id="illustrations" src="../assets/Artwork/People/TJ_Illustration.jpeg"/>
        <img id="illustrations" src="../assets/Artwork/People/Zeek_Illustration.jpeg"/>
      </div>
      <br>
      <button id="btn" @click='toggle2 = !toggle2, cleanUp()'>Self Portraits</button>
      <div id="setup" v-show='toggle2'>
        <img id="illustrations" src="../assets/Artwork/Willustration/Willustration1.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Willustration/Willustration2.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Willustration/Willustration4.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Willustration/Willustration5.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Willustration/Willustration6.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Willustration/Willustration7.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Willustration/Willustration8.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Willustration/Willustration9.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Willustration/Willustration10.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Willustration/Willustration11.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Willustration/Willustration12.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Willustration/Willustration13.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Willustration/Willustration14.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Willustration/Willustration15.jpg"/>
      </div>
      <br>
      <button id="btn" @click='toggle3 = !toggle3, cleanUp()'>Critters</button>
      <div id="setup" v-show='toggle3'>
        <img id="illustrations" src="../assets/Artwork/Critters/Beb.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Critters/Bebe.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Critters/Chewy.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Critters/Chickan1.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Critters/Chickan2.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Critters/Chickan3.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Critters/Chickan4.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Critters/Chickan5.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Critters/CHK.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Critters/Froggy.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Critters/Kitty.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Critters/MOOS.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Critters/Piggy.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Critters/Shrimp.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Critters/Stormy.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Critters/Tiki.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Critters/Trinny.jpg"/>
      </div>
      <br>
      <button id="btn" @click='toggle4 = !toggle4, cleanUp()'>Tech Elevator</button>
      <div id="setup" v-show='toggle4'>
        <img id="illustrations" src="../assets/Artwork/TEWalls/TEWalls1.jpg"/>
        <img id="illustrations" src="../assets/Artwork/TEWalls/TEWalls2.jpg"/>
        <img id="illustrations" src="../assets/Artwork/TEWalls/TEWalls3.jpg"/>
        <img id="illustrations" src="../assets/Artwork/TEWalls/TEWalls4.jpg"/>
        <img id="illustrations" src="../assets/Artwork/TEWalls/TEWalls5.jpg"/>
        <img id="illustrations" src="../assets/Artwork/TEWalls/TEWalls6.jpg"/>
        <img id="illustrations" src="../assets/Artwork/TEWalls/TEWalls7.jpg"/>
      </div>
      <br>
      <button id="btn" @click='toggle5 = !toggle5, cleanUp()'>Abstract</button>
      <div id="setup" v-show='toggle5'>
        <img id="illustrations" src="../assets/Artwork/Illustration/away.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Illustration/btm.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Illustration/CHZ.png"/>
        <img id="illustrations" src="../assets/Artwork/Illustration/ephem.png"/>
        <img id="illustrations" src="../assets/Artwork/Illustration/Frawg.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Illustration/strands.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Illustration/The_Sloughening.png"/>
          </div>
          <br>
          <button id="btn" @click='toggle6 = !toggle6, cleanUp()'>Text</button>
      <div id="setup" v-show='toggle6'>
        <img id="illustrations" src="../assets/Artwork/Tabletop/acab.jpg" />
        <img id="illustrations" src="../assets/Artwork/Tabletop/antMilk.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Tabletop/breadMystery.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Tabletop/corn.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Tabletop/dude.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Tabletop/eye.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Tabletop/face.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Tabletop/gas.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Tabletop/horse.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Tabletop/horseHandle.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Tabletop/less.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Tabletop/mudDolphin.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Tabletop/pie.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Tabletop/porchcar.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Tabletop/sauce.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Tabletop/shelf.jpg"/>
        <img id="illustrations" src="../assets/Artwork/Tabletop/slaps.jpg"/>
          </div>
</div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'illustration',
  data () {
   return {
     toggle1: false,
     toggle2: false,
     toggle3: false,
     toggle4: false,
     toggle5: false,
     toggle6: false,
   }
   },
   methods: {
    //REWRITE ME!!
     cleanUp() {
    if (this.toggle1 == true) {
      this.toggle2 = false;
      this.toggle3 = false;
      this.toggle4 = false;
      this.toggle5 = false;
      this.toggle6 = false;
    } else if (this.toggle2 == true) {
      this.toggle1 = false;
      this.toggle3 = false;
      this.toggle4 = false;
      this.toggle5 = false;
      this.toggle6 = false;
      } else if (this.toggle3 == true) {
      this.toggle1 = false;
      this.toggle2 = false;
      this.toggle4 = false;
      this.toggle5 = false;
      this.toggle6 = false;
      } else if (this.toggle4 == true) {
      this.toggle1 = false;
      this.toggle2 = false;
      this.toggle3 = false;
      this.toggle5 = false;
      this.toggle6 = false;
      } else if (this.toggle5 == true) {
      this.toggle1 = false;
      this.toggle3 = false;
      this.toggle4 = false;
      this.toggle2 = false;
      this.toggle6 = false;
      } else if (this.toggle6 == true) {
      this.toggle1 = false;
      this.toggle3 = false;
      this.toggle4 = false;
      this.toggle5 = false;
      this.toggle2 = false;
      }

      }
    }
  }
</script>

<style scoped>
  #setup {
  display: flex;
  width: auto;
  height: auto;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  }
  #title {
    font-size: 5em;
    margin-top: -2vh;
    margin-bottom: 4vh;
  }
  #buttons {
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
  }
  #btn {
    font-size: 4em;
    width: 50vw;
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
img {
    transition:transform 0.25s ease;
}

img:hover {
    -webkit-transform:scale(2);
    transform:scale(2);
}
</style>
