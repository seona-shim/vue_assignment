<template>
  <div class="vue-counter">
    <h1>Counter</h1>
    <p>{{ count }}</p>
    <input type="text" v-model="value" />
    <div class="button-box">
      <button @click="countResult('add')">+</button>
      <button @click="countResult('remove')">-</button>
      <button @click="countResult('random')">Random</button>
    </div>
  </div>
</template>

<script>
const valueCheck = (v) => {
  if (!Number(v) && Number(v) !== 0) {
    alert("숫자를 입력합쉬댜");
    return false;
  } else {
    return true;
  }
};

const randomValue = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default {
  name: "VueCounter",
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
    countResult(type) {
      let mathType = type;
      let value = this.value;
      if (mathType == "random") {
        mathType = ["add", "remove"][randomValue(0, 1)];
        value =
          mathType == "add"
            ? randomValue(-100 - this.count, 200 - this.count)
            : randomValue(-200 + this.count, 100 + this.count);
      }
      valueCheck(value)
        ? this.$store.commit("countResult", { type: mathType, value: value })
        : null;
      this.value = 0;
    },
  },
};
</script>

<style scoped>
.button-box {
  margin-top: 20px;
}
.button-box button {
  padding: 5px 20px;
  font-size: 18px;
}
.button-box button:not(:first-child) {
  margin-left: 20px;
}
</style>
