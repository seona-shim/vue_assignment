<template>
  <main id="counter-app">
    <vue-color-peek></vue-color-peek>
    <section class="counter-box">
      <img alt="Vue logo" src="./assets/logo.png" />
      <vue-counter></vue-counter>
    </section>
    <vue-result-box></vue-result-box>
  </main>
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
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
<style scoped>
#counter-app {
  display: grid;
  width: 100vw;
  max-width: 1200px;
  height: 100vh;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto 1fr;
  gap: 20px;
  padding: 20px;
}
#counter-app section {
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
}
.counter-box,
.result-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
