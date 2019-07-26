<template>
  <div id="app" class="container-fluid">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: "App"
  };
</script>

<style>
  * {
    background-color: rgba(83, 78, 78, 0.322);
  }

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #c9d3df;
    /* font-size: 20px; */

  }

  input .logoutbutton {
    background-color: antiquewhite;
    border: 1px soild black;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>