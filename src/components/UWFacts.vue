<template>
  <div id="main">
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
      <h1 id="title">"Facts" About Pittsburgh, Pennsylvania</h1>
      <h4>The Place I'm Technically From</h4>
    </header>

    <main>
      <section id="facts-section">
        <p>
          Ah, Pittsburgh, the city that I am technically from. To celebrate this
          fact, I've worked up a 'tribute' of sorts. A list of the top 11 untrue
          facts about Pittsburgh. I hope you enjoy them.
        </p>
        <table>
          <tr>
            <th>Fact Number</th>
            <th>Fact</th>
            <th>Level of Untrue-ness</th>
          </tr>
          <tr>
            <td>11</td>
            <td>
              Pittsburgh was the inspiration for Brigadoon, as it returns to the
              rivers every 10 years.
            </td>
            <td>Possibly true, but unlikely.</td>
          </tr>
          <tr>
            <td>10</td>
            <td>
              Pittsburgh was named after Dave Pittsburgh, who was a real
              asshole.
            </td>
            <td>That could be true!</td>
          </tr>
          <tr>
            <td>9</td>
            <td>
              There are 25 cats that live in and around the Downtown area. Known
              as the "Washington Collective", they are immortal and will not be
              bargained with.
            </td>
            <td>You can't prove this isn't true.</td>
          </tr>
          <tr>
            <td>8</td>
            <td>The Pittsburgh Steelers were a prank that got out of hand.</td>
            <td>Objective fact.</td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              The world famous Mon Warf is actually made up of compressed
              newspapers and Iron City Lager permafrost.
            </td>
            <td>Huh, I didnt know that.</td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              What locals call the North Side is actually the true location of
              the famed Winchester Mystery house or, rather, the house is the
              location of the North Side. They reside within one another in a
              phenomonon scientists call "weird."
            </td>
            <td>Who am I to argue with science?</td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              The confluence of the three rivers is the final resting place of
              once and future mayor, Sophie Masloff. There she rests in her
              black and gold, jade lined coffin, awaiting the day of her
              ascendency.
            </td>
            <td>All Hail, Mayor Masloff.</td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              Pittsburgh is famously a "No Fry Zone" and they wonder how that
              whole fries on sandwiches thing got started.
            </td>
            <td>I mean, same.</td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              For a brief moment in 1922, Pittsburgh was shrunk and placed in a
              bottle ala the city of Kandor from the Superman comics. They were
              only released when Philidelphia complained too loudly about having
              no one to talk to.
            </td>
            <td>
              That seems outlandish, but Philadelphia does like to complain.
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              Pittsburgh was intended to be layed out on a grid in a way that
              makes sense to anyone with eyes and a functional brain, but
              William Pitt was bad at shapes and made it a triangle.
            </td>
            <td>William Pitt was an asshole.</td>
          </tr>
          <tr>
            <td>1</td>
            <td>KDKA is not a real tv station, but a mass hallucination.</td>
            <td>I've never seen them in real life!</td>
          </tr>
        </table>
      </section>
    </main>

    <br />
    <footer>
      <div id="buttonholder">
        <a href="Assets/nature1.jpg" class="button"
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

body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #bebebe;
  padding-left: 10px;
  background-image: url(../assets/UglyWebsite/ill5.png);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
}

h1 {
  font-family: CabinSketch1;
  color: white;
  font-size: 4em;
  line-height: 20px;
  text-align: center;
}

h4 {
  font-family: CabinSketch1;
  color: white;
  font-size: 2em;
  text-decoration-line: underline;
  line-height: 2px;
  padding-bottom: 20px;
  text-align: center;
}

h2 {
  font-family: Lobster;
  font-size: 2em;
  text-decoration-line: underline;
  line-height: 2px;
}

h3 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1em;
  line-height: 2px;
}

p {
  font-family: Delafield;
  color: rgb(0, 0, 0);
  font-size: 4em;
  text-align: center;
  background-color: rgba(37, 255, 164, 0.822);
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  padding-bottom: 10px;
}

figcaption {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 400px;
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
  background-color: yellow;
}
li:hover {
  background-color: rgba(229, 255, 0, 0.2);
}

q {
  font-style: italic;
}

a:link {
  color: white;
}

a:visited {
  color: rgb(228, 228, 228);
}

footer {
  font-size: 0.5em;
  line-height: 2px;
  text-align: center;
  color: white;
  background-color: rgba(255, 37, 37, 0.822);
}

form {
  background-color: thistle;
}

#main {
  background-image: url(../assets/UglyWebsite/ill10.jpg);
  background-size: stretch;
  background-position: top;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

nav {
  float: center;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 2vh;
  text-decoration: none;
  background-image: url(../assets/UglyWebsite/ill3.webp);
  background-position: center;
  background-size: cover;
}

a:link {
  color: white;
}

a:visited {
  color: rgb(228, 228, 228);
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  top: 0;
}

li {
  font-size: 4vh;
  font-family: monospace;
  text-decoration-thickness: 25%;
  color: rgba(229, 255, 0, 0.5);
  text-decoration-line: line-through;
  display: inline;
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
