<template>
  <div id="body">
    <header>
      <nav>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="Facts.html">Facts</a></li>
          <li><a href="Quotes.html">Quotes</a></li>
          <li><a href="Seriously.html">Seriously Though</a></li>
          <li><a href="Links.html">Links</a></li>
        </ul>
      </nav>
      <h1 id="title">Links About Pittsburgh, Pennsylvania</h1>
      <h4>The Place I'm Technically From</h4>
      <br />
    </header>

    <main>
      <br />
      <section id="links-section">
        <h2>Links</h2>
        <h3>Go here for more!</h3>
        <ul>
          <li>
            <a href="https://en.wikipedia.org/wiki/Pittsburgh"
              >TRUE facts about Pittsburgh</a
            >
          </li>
          <li>
            <a href="https://www.youtube.com/@sawtoothwillie9945"
              >more from Sawtooth Willie</a
            >
          </li>
          <li>
            <a href="https://coffeefinchstudios.simvoly.com/work"
              >more from me, the person who made this website.</a
            >
          </li>
        </ul>
      </section>
    </main>

    <br />
    <footer>
      <div id="buttonholder">
        <a href="../assets/UglyWebsite/nature1.jpg" class="button"
          >Click Here To Look At A Tree</a
        >
      </div>
      <p>2023 Copyright &copy; Coffee Finch Studios, LLC</p>
      <p>Thank you for reading the bottom part.</p>
    </footer>
  </div>
</template>

<script>
</script>

<style scoped>
@font-face {
  font-family: RockSalt;
  src: url(../assets/Fonts/RockSalt-Regular.ttf);
}

@font-face {
  font-family: Delafield;
  src: url(../assets/Fonts/MrsSaintDelafield-Regular.ttf);
}

@font-face {
  font-family: Changa;
  src: url(../assets/Fonts/ChangaOne-Regular.ttf);
}

@font-face {
  font-family: CabinSketch1;
  src: url(../assets/Fonts/CabinSketch-Bold.ttf);
}

@font-face {
  font-family: CabinSketch2;
  src: url(../assets/Fonts/CabinSketch-Regular.ttf);
}

@font-face {
  font-family: Lobster;
  src: url(../assets/Fonts/Lobster-Regular.ttf);
}

@font-face {
  font-family: Macando;
  src: url(../assets/Fonts/Macondo-Regular.ttf);
}

@font-face {
  font-family: Monoton;
  src: url(../assets/Fonts/Monoton-Regular.ttf);
}

@font-face {
  font-family: Nabla;
  src: url(../assets/Fonts/Nabla-Regular-VariableFont_EDPT\,EHLT.ttf);
}

#body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #bebebe;
  padding-left: 10px;
  background-image: url(../assets/UglyWebsite/ill7.png);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
}

header {
  background-color: rgba(6, 190, 0, 0.5);
}

h1 {
  font-family: Monoton;
  font-size: 4em;
  text-align: center;
  color: rgb(255, 255, 255);
}

h4 {
  font-family: Nabla;
  color: rgb(0, 0, 0);
  font-size: 3em;
  line-height: 2px;
  /* padding-bottom: 20px; */
  text-align: center;
}

h2 {
  font-family: "Times New Roman", Times, serif;
  color: red;
  font-size: 8em;
  text-decoration-line: underline;
  line-height: 2px;
  background-color: black;
}

h3 {
  font-family: Arial, Helvetica, sans-serif;
  color: red;
  font-size: 1em;
  line-height: 2px;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  padding-bottom: 10px;
  opacity: 89%;
}

figcaption {
  font-family: Changa;
  color: white;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  align-content: center;
  text-align: center;
  background-color: black;
}
table {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
table,
th,
td {
  border: 1px solid;
}

th,
td {
  padding: 15px;
  text-align: left;
}
th {
  background-color: #fffb001e;
  color: rgb(0, 0, 0);
}

tr:hover {
  background-color: rgb(255, 0, 0);
}
li:hover {
  background-color: rgba(255, 0, 0, 0.4);
}

q {
  font-style: italic;
}

footer {
  font-size: 0.5em;
  line-height: 2px;
  text-align: center;
  color: white;
}

form {
  background-color: thistle;
}

#links-section {
  /* background-image: url(/Assets/ill6.jpg); */
  background-size: cover;
  background-position: center;
  align-content: center;
  text-align: center;
  /* background-repeat: no-repeat; */
  /* background-attachment: fixed; */
}

nav {
  float: left;
  width: 10%;
  display: block;
  color: #000000;
  text-align: right;
  padding: 2vh;
  text-decoration: none;
  background-image: url(../assets/UglyWebsite/ill3.webp);
  background-position: center;
  background-size: cover;
}

a:link {
  color: rgb(0, 0, 0);
}

a:visited {
  color: rgb(0, 0, 0);
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  top: 0;
}

li {
  font-size: 4vh;
  font-family: Lobster;

  text-decoration-thickness: 25%;
  color: rgba(229, 255, 0, 0.8);
  text-decoration-line: line-through;
  /* display: inline; */
  padding: 5vw;
  text-transform: capitalize;
  text-emphasis-style: bold;
}

a.button {
  color: rgb(255, 255, 255);
  font-size: 12px;
  line-height: 12px;
  padding: 8px;
  margin: 22px;
  border-radius: 50px;
  font-weight: normal;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  background-color: rgb(28, 110, 164);
  box-shadow: rgb(0, 0, 0) 5px 5px 15px 5px;
  border: 2px solid rgb(28, 110, 164);
  display: inline-block;
}

#buttonholder {
  margin-left: 45%;
  align-content: center;
  background-image: url(../assets/UglyWebsite/nature5.jpg);
  max-width: 10vw;
  border-radius: 40px;
}
</style>
