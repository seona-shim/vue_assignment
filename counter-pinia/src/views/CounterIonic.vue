<template>
  <ion-content>
    <main class="contents">
      <counter-box></counter-box>
      <counter-result></counter-result>
    </main>
  </ion-content>
</template>
<script lang="ts">
import { IonContent } from "@ionic/vue";
import { defineComponent } from "vue";
import CounterResult from "@/components/ionic/CounterResult.vue";
import CounterBox from "@/components/ionic/CounterBox.vue";

export default defineComponent({
  name: "CounterIonic",
  components: {
    IonContent,
    CounterResult,
    CounterBox,
  },
});
</script>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.contents {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  box-sizing: border-box;
  height: 100%;
  padding: 0 20px 20px;
  .option-box {
    grid-column: 1/3;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    padding: 20px 50px;
    align-items: center;
  }
}
</style>
