<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <vue-counter></vue-counter>
  <vue-color-peek></vue-color-peek>
  <vue-result-box></vue-result-box>
</template>

<script>
import VueColorPeek from "./components/VueColorPeek.vue";
import VueCounter from "./components/VueCounter.vue";
import VueResultBox from "./components/VueResultBox.vue";

export default {
  name: "App",
  components: { VueCounter, VueResultBox, VueColorPeek },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
