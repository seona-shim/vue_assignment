<template>
  <ion-content>
    <main class="contents">
      <ion-card class="option-box">
        <ion-item>
          <ion-select
            placeholder="ionic"
            interface="action-sheet"
            @ionChange="changeUI"
          >
            <ion-select-option
              v-for="(item, index) in uiComponent"
              :key="index"
              :value="item"
              >{{ item }}</ion-select-option
            >
          </ion-select>
        </ion-item>
        <ion-list></ion-list>
      </ion-card>
      <ion-card class="counter-box">counter</ion-card>
      <ion-card class="result-box">result</ion-card>
    </main>
  </ion-content>
</template>
<script lang="ts">
import {
  IonContent,
  IonCard,
  IonSelect,
  IonItem,
  IonList,
  IonSelectOption,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CounterIonic",
  components: {
    IonContent,
    IonCard,
    IonSelect,
    IonItem,
    IonList,
    IonSelectOption,
  },
});
</script>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useColorStore } from "@/store";
import { Colors, ColorArray } from "@/types/color";
import useChangeView from "@/methods/useChangeView.ts";
import { uiComponent } from "@/router/routePath.ts";

const uiValue = ref<string>("ionic");

const changeUI = (e) => {
  useChangeView(e.target.value);
};

const colorArray: ColorArray = ["black", "green", "red", "blue"];
const colorStore = useColorStore();

const resultColors = ref<Colors>({ high: "red", middle: "black", low: "blue" });

const backgroundColor = ref<string>("#ffffff");
watch(backgroundColor, (newValue, oldValue) => {
  colorStore.changeBackground(newValue);
});
</script>

<style lang="scss" scoped>
.contents {
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  gap: 20px;
  padding: 20px;
  box-sizing: border-box;
  .option-box {
    grid-column: 1/3;
  }
  .counter-box {
  }
  .result-box {
  }
}
</style>
