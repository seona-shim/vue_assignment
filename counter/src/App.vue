<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <section>
    <h1>Counter</h1>
    <p>{{ count }}</p>
    <input type="text" v-model="value" />
    <button @click="addCount">+</button>
    <button @click="removeCount">-</button>
  </section>
</template>

<script>
const valueCheck = (v) => {
  if (!Number(v)) {
    alert("숫자를 입력합쉬댜");
    return false;
  } else {
    return true;
  }
};
export default {
  name: "App",
  data() {
    return {
      value: 0,
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    addCount() {
      valueCheck(this.value)
        ? this.$store.commit("addCount", this.value)
        : null;
    },
    removeCount() {
      valueCheck(this.value)
        ? this.$store.commit("removeCount", this.value)
        : null;
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
