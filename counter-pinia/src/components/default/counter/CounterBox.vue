<script lang="ts">
import { defineComponent } from "vue";
import ElementButton from "../elements/ElementButton.vue";
import ElementTextInput from "../elements/ElementTextInput.vue";
import CounterDnd from "../dnd/CounterDnd.vue";

export default defineComponent({
  components: { ElementTextInput, ElementButton, CounterDnd },
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
    <div class="inner-box">
      <h3>Counter</h3>
      <p class="result">{{ counterStore.count }}</p>
      <label class="count-label">
        <div class="input-box">
          <element-text-input
            v-model:value.number="countValue"
          ></element-text-input>
        </div>
        <div class="button-box">
          <element-button class="plus" @click="changeCount('plus')"
            >+</element-button
          >
          <element-button class="minus" @click="changeCount('minus')"
            >-</element-button
          >
          <element-button class="random" @click="changeCount('random')"
            >Random</element-button
          >
        </div>
      </label>
    </div>
    <counter-dnd></counter-dnd>
  </section>
</template>

<style lang="scss" scoped>
.inner-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
.counter-box {
  display: grid;
  grid-template-rows: auto 1fr;
  padding: 50px 20px;
  gap: 40px;
}
.inner-box {
  .result {
    font-size: 20px;
  }
}
.count-label {
  display: flex;
}
.input-box {
  width: 80%;
}
.button-box {
  display: flex;
  button {
    border: 1px solid black;
    color: white;
    min-width: 50px;
  }
  .plus {
    background-color: orangered;
  }
  .minus {
    background-color: royalblue;
  }
  .random {
    background-color: purple;
  }
}
</style>
