<template>
  <div class="vue-counter">
    <h1>Counter</h1>
    <p>{{ count }}</p>
    <input type="text" v-model="val" />
    <div class="button-box">
      <button @click="getCountResult('add')">+</button>
      <button @click="getCountResult('remove')">-</button>
      <button @click="getCountResult('random')">Random</button>
      <button @click="$valueCheck('a')">test</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueCounter",
};
</script>
<script setup>
import { ref, inject } from "vue";
import { storeData, storeCommit } from "./common";

const { valueCheck, randomValue } = inject("plugins");

let { count } = storeData();
let { countResult } = storeCommit();

const val = ref(0);

// 결과를 출력해주는 함수
const getCountResult = (type) => {
  let mathType = type;
  let countValue = val.value;

  if (mathType == "random") {
    mathType = ["add", "remove"][randomValue(0, 1)];
    countValue =
      mathType == "add"
        ? randomValue(-100 - count.value, 200 - count.value)
        : randomValue(-200 + count.value, 100 + count.value);
  }

  valueCheck(countValue)
    ? countResult({ type: mathType, value: countValue })
    : null;

  val.value = 0;
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
