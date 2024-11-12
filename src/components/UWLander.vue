<!-- eslint-disable indent -->
<template>
  <div id="body">
    <header>
      <h1 id="title">Pittsburgh, Pennsylvania</h1>
      <h4>The Place I'm Technically From </h4>
    </header>
    <br>
    <img id="image"
    src="https://images.pexels.com/photos/12493795/pexels-photo-12493795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt="A far away view of Downtown Pittsburgh">
    <figcaption id="img-caption"> YUP, THAT SURE IS PITTSBURGH </figcaption>
    <br>
    <br>
    <br>
    <br>
    <br>
    <nav>
      <figcaption id="img-caption"> TAKE A LOOK AROUND. </figcaption>
      <ul>
        <li><a href="Facts.html">Facts</a></li>
        <li><a href="Quotes.html">Quotes</a></li>
        <li><a href="Seriously.html">Seriously Though</a></li>
        <li><a href="Links.html">Links</a></li>
      </ul>
    </nav>
    <br>
    <br>
    <footer>
      <div id="buttonholder">
        <a href="../assets/nature1.jpg" class="button">Click Here To Look At A Tree</a>
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
    src: url(../assets/Fonts/RockSalt-Regular.ttf)
  }

 @font-face {
    font-family: Delafield;
    src: url(../assets/Fonts/MrsSaintDelafield-Regular.ttf)
  }

 @font-face {
    font-family: Changa;
    src: url(../assets/Fonts/ChangaOne-Regular.ttf)
  }

  #body {
      font-family: Arial, Helvetica, sans-serif;
      background-color: #bebebe;
      padding-left: 10px;
      background-image: url(../assets/UglyWebsite/ill11.jpg);
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: 100% 100%;
    }

  header {
    background-color:rgba(6, 190, 0, 0.5);
  }

  h1 {
    font-family: RockSalt;
    text-decoration-line: underline;
    text-decoration-style: wavy;
    font-size: 4em;
    line-height: 20px;
    text-align: center;
    color:rgb(255, 255, 255)
  }

    h4 {
      font-family: Delafield;
      color:rgb(0, 0, 0);
      font-size: 3em;
      text-decoration-line: underline;
      line-height: 2px;
      padding-bottom: 20px;
      text-align: center;
    }

    h2 {
      font-family: 'Times New Roman', Times, serif;
      font-size: 2em;
      text-decoration-line: underline;
      line-height: 2px;
    }

    h3 {
      font-family:Arial, Helvetica, sans-serif;
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
    table{
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 50%;
    }
    table, th, td {
      border: 1px solid;
      }

    th, td {
      padding: 15px;
      text-align: left;
    }
    th {
      background-color: #fffb001e;
      color: rgb(0, 0, 0);
    }

    tr:hover {background-color: yellow;}
    li:hover {background-color: rgba(229, 255, 0, 0.2);}

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
  }

    form {
      background-color: thistle;
    }

    #links-section {
      /* background-image: url(../assetsimg/HateFlowers.jpg); */
      background-size: stretch;
      background-position: top;
      background-repeat: no-repeat;
      background-attachment: fixed;
    }

   nav {
      float: center;
      display: block;
      color: #000000;
      text-align: center;
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
      font-family: monospace;
      text-decoration-thickness: 25%;
      color: rgba(229, 255, 0, 0.8);
      text-decoration-line: line-through;
      display: inline;
      padding: 5vw;
      text-transform: capitalize;
      text-emphasis-style: bold;
    }

    a.button {
      color: rgb(255, 255, 255); font-size: 12px;
      line-height: 12px;
      padding: 8px;
      margin: 2px;
      text-align: center;
      border-radius: 50px;
      font-weight: normal;
      text-decoration: none;
      font-style: normal;
      font-variant: normal;
      text-transform: none;
      background-image:  url(../assets/UglyWebsite/nature5.jpg);
      box-shadow: rgb(0, 0, 0) 5px 5px 15px 5px; border: 2px solid rgb(28, 110, 164);
      display: inline-block;
    }

    #buttonholder {
      margin-left: 45%;
      align-content: center;
      background-image:  url(../assets/UglyWebsite/nature5.jpg);
      max-width: 10vw;
      border-radius: 40px;
    }
    </style>
