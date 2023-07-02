<template>
  <div class="navigation">
    <ul>
        <li>Home</li>
        <li>Code</li>
        <li>Visual Design</li>
        <li>Contact</li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.navigation {
    width: 450px;
    background: #fff;
    margin: 50px auto;
    padding-bottom: 10px;
    font-family: 'Roboto Condensed', sans-serif;
    border-radius: 10px;
}
ul {
    list-style-type: none;
    margin: 0px;
    padding: 0px;
}
li {
    font-size: 24px;
    border-bottom: 1px solid #f2f2f2;
    padding: 10px 20px;
}
li:last-child {
    border: 0px;
}
</style>