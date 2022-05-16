<template>
  <ion-card class="counter-box">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <p>{{ counterStore.count }}</p>
    <ion-input type="number" v-model="countValue" class="number-input" />
    <div class="button-box">
      <counter-button class="plus" @click="changeCount('plus')"
        >+</counter-button
      >
      <counter-button class="minus" @click="changeCount('minus')"
        >-</counter-button
      >
      <counter-button class="random" @click="changeCount('random')"
        >Random</counter-button
      >
    </div>
  </ion-card>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import CounterButton from "./CounterButton.vue";
import { IonCard, IonInput } from "@ionic/vue";
export default defineComponent({
  name: "CounterBox",
  components: { CounterButton, IonCard, IonInput },
});
</script>
<script setup lang="ts">
import { useCounterStore } from "@/store";
const counterStore = useCounterStore();
const countValue = ref<number>(0);
const changeCount = (type: string) => {
  counterStore.changeCount(type, Number(countValue.value));
};
</script>
<style lang="scss" scoped>
.counter-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;
  gap: 20px;
  .number-input {
    max-height: 50px;
    background: none;
    border: 1px solid lightgray;
    input {
      height: 100%;
    }
  }
  .button-box {
    display: flex;
    gap: 10px;
  }
}
</style>
