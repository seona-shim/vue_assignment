<template>
  <q-card class="couter-box">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <q-input v-model.number="countValue" type="number" />
    <div class="button-box">
      <q-btn color="pink" label="+" @click="changeCount('plus')" />
      <q-btn color="blue" label="-" @click="changeCount('minus')" />
      <q-btn color="purple" label="random" @click="changeCount('random')" />
    </div>
  </q-card>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "CounterBox",
});
</script>
<script setup lang="ts">
import { ref } from "vue";
import { useCounterStore } from "@/store";
const countValue = ref(0);

const changeCount = (type: string) => {
  useCounterStore().changeCount(type, countValue.value);
};
</script>
<style lang="scss" scoped>
.couter-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid lightblue;
  border-radius: 3%;
  img {
    width: 200px;
    height: 200px;
  }
  .button-box {
    display: flex;
    gap: 10px;
    margin-top: 20px;
    .q-btn {
      min-width: 50px;
    }
  }
}
</style>
