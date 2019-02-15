<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png" /> <HelloWorld />
    <!-- Todo list app -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Test from "./components/test";
export default {
  name: "App",
  components: {
    HelloWorld,
    Users
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
