<template>
  <ion-card class="result-box">
    <ion-list>
      <ion-item v-for="(item, index) in counterStore.result" :key="index">
        {{ item.math }}
        <span :style="getResultColor(item.result)">{{ item.result }}</span>
      </ion-item>
    </ion-list></ion-card
  >
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { IonCard, IonList, IonItem } from "@ionic/vue";

export default defineComponent({
  name: "CounterResult",
  components: { IonCard, IonList, IonItem },
});
</script>
<script setup lang="ts">
import { useCounterStore, useColorStore } from "@/store";
import { getResultType } from "@/methods/getResultType";

const colorStore = useColorStore();
const counterStore = useCounterStore();

const getResultColor = (result: number) => {
  return { color: colorStore.color[getResultType(result)] };
};
</script>
<style lang="scss" scoped>
.result-box {
  overflow-y: auto;
}
</style>
