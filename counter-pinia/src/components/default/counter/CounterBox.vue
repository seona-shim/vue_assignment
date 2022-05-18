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
            ><p>+</p></element-button
          >
          <element-button class="minus" @click="changeCount('minus')"
            ><p>-</p></element-button
          >
          <element-button class="random" @click="changeCount('random')"
            ><p>Random</p></element-button
          >
        </div>
      </label>
    </div>
    <span class="line" />
    <counter-dnd></counter-dnd>
  </section>
</template>

<style lang="scss" scoped>
.counter-box {
  display: grid;
  grid-template-rows: auto auto 1fr;
  gap: 20px;
}
.inner-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  box-shadow: 3px 3px 1px lightblue;
  border: 1px solid lightblue;
  padding: 20px;
  border-radius: 10px;
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
    p {
      margin: 0;
    }

    &:hover {
      box-shadow: none;
      p {
        margin-bottom: -2px;
        margin-right: -2px;
      }
    }
  }
  .plus {
    border: 1px solid rgb(224, 120, 82);
    color: rgb(228, 97, 49);
    background: rgb(255, 227, 192);

    &:hover {
      background: rgb(255, 215, 165);
      box-shadow: inset 2.5px 2.5px 3px rgb(241, 166, 139);
    }
  }
  .minus {
    border: 1px solid rgb(96, 128, 223);
    color: rgb(68, 108, 227);
    background: rgb(218, 226, 255);

    &:hover {
      background: rgb(216, 226, 255);
      box-shadow: inset 2.5px 2.5px 3px rgb(155, 175, 237);
    }
  }
  .random {
    border: 1px solid rgb(219, 97, 219);
    color: rgb(198, 62, 198);
    background: rgb(255, 232, 255);
    width: 100px;

    &:hover {
      background: rgb(255, 212, 255);
      box-shadow: inset 2.5px 2.5px 3px rgb(219, 145, 219);
    }
  }
}
</style>
