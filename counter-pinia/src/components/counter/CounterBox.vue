<script lang="ts">
import { defineComponent } from "vue";
import ElementButton from "../elements/ElementButton.vue";
import ElementTextInput from "../elements/ElementTextInput.vue";

export default defineComponent({
  components: { ElementTextInput, ElementButton },
  name: "CounterBox",
});
</script>

<script lang="ts" setup>
import { ref } from "vue";
import { useCounterStore } from "@/store";
const counterStore = useCounterStore();

const countValue = ref<number>(0);

const changeCount = (type: string) => {
  counterStore.changeCount(type, countValue.value);
};
</script>
<template>
  <section class="counter-box">
    <img alt="Vue logo" src="../../assets/logo.png" />
    {{ counterStore.count }}
    <div class="input-box">
      <element-text-input
        v-model:value.number="countValue"
      ></element-text-input>
    </div>
    <div class="button-box">
      <element-button @click="changeCount('plus')">+</element-button>
      <element-button @click="changeCount('minus')">-</element-button>
      <element-button @click="changeCount('random')">Random</element-button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.counter-box {
  gap: 20px;
}
.input-box {
  width: 80%;
}
.button-box {
  display: flex;
  gap: 10px;
}
</style>
