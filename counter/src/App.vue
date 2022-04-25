<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <section>
    <h1>Counter</h1>
    <p>{{ count }}</p>
    <button @click="addCount">+</button>
    <button @click="removeCount">-</button>
  </section>
</template>

<script>
export default {
  name: "App",
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    addCount() {
      this.$store.commit("addCount");
    },
    removeCount() {
      this.$store.commit("removeCount");
    },
  },
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
