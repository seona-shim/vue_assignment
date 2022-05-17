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
    <span class="line" />
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
  box-shadow: 3px 3px 1px rgb(168, 202, 214);
  border: 1px solid rgb(168, 202, 214);
  padding: 20px;
  border-radius: 10px;
}
.counter-box {
  display: grid;
  grid-template-rows: auto auto 1fr;
  padding: 50px 20px;
  gap: 20px;
}
.line {
  display: block;
  height: 1px;
  width: 50%;
  margin: 0 auto;
  background: lightblue;
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
  input {
    border: 1px solid lightblue;

    &:focus {
      border: 1px solid lightblue;
      background: rgb(239, 251, 255);
      outline: none;
    }
  }
}
.button-box {
  display: flex;
  gap: 10px;
  margin-left: 20px;
  button {
    border: none;
    color: white;
    min-width: 50px;
    border-radius: 10px;
    background: none;

    &:hover {
      box-shadow: none;
    }
  }
  .plus {
    border: 1px solid rgb(255, 159, 124);
    color: rgb(255, 159, 124);
    background: rgb(255, 246, 242);

    &:hover {
      background: rgb(255, 237, 231);
      box-shadow: inset 2.5px 2.5px 3px rgb(255, 202, 183);
    }
  }
  .minus {
    border: 1px solid rgb(146, 173, 255);
    color: rgb(146, 173, 255);
    background: rgb(242, 245, 255);

    &:hover {
      background: rgb(232, 238, 255);
      box-shadow: inset 2.5px 2.5px 3px rgb(187, 204, 255);
    }
  }
  .random {
    border: 1px solid rgb(255, 154, 255);
    color: rgb(255, 154, 255);
    background: rgb(255, 241, 255);

    &:hover {
      background: rgb(255, 225, 255);
      box-shadow: inset 2.5px 2.5px 3px rgb(239, 176, 239);
    }
  }
}
</style>
