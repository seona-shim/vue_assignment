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
      </ion-card>
      <ion-card class="counter-box">
        <img alt="Vue logo" src="@/assets/logo.png" />
        <p>{{ counterStore.count }}</p>
        <ion-input type="number" v-model="countValue" class="number-input" />
        <div class="button-box">
          <ion-button
            shape="round"
            class="button plus"
            @click="changeCount('plus')"
            >+</ion-button
          >
          <ion-button
            shape="round"
            class="button minus"
            @click="changeCount('minus')"
            >-</ion-button
          >
          <ion-button
            shape="round"
            class="button random"
            @click="changeCount('random')"
            >Random</ion-button
          >
        </div>
      </ion-card>
      <ion-card
        class="result-box"
        :style="{ '--background': resultBackgroundColor }"
      >
        <ion-list>
          <ion-item v-for="(item, index) in counterStore.result" :key="index">
            {{ item.math }}
            <span :style="getResultColor(item.result)">{{ item.result }}</span>
          </ion-item>
        </ion-list></ion-card
      >
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
  IonButton,
  IonInput,
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
    IonButton,
    IonInput,
  },
});
</script>

<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { useCounterStore, useColorStore } from "@/store";
import { Colors, ColorArray } from "@/types/color";
import useChangeView from "@/methods/useChangeView.ts";
import { getResultType } from "@/methods/getResultType";

import { uiComponent } from "@/router/routePath.ts";

// framework option
const uiValue = ref<string>("ionic");

const changeUI = (e) => {
  useChangeView(e.target.value);
};

// result color option
const colorArray: ColorArray = ["black", "green", "red", "blue"];
const colorStore = useColorStore();
const resultColors = ref<Colors>({ high: "red", middle: "black", low: "blue" });

const backgroundColor = ref<string>("#ffffff");
watch(backgroundColor, (newValue, oldValue) => {
  colorStore.changeBackground(newValue);
});

// counter
const counterStore = useCounterStore();
const countValue = ref<number>(0);
const changeCount = (type: string) => {
  counterStore.changeCount(type, Number(countValue.value));
};

//result
const getResultColor = (result: number) => {
  return { color: colorStore.color[getResultType(result)] };
};

const resultBackgroundColor = computed(() => colorStore.background);
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
      .button.plus {
        --background: lightpink;
        --color: deeppink;
      }
      .button.minus {
        --background: skyblue;
        --color: blue;
      }
      .button.random {
        --background: plum;
        --color: purple;
      }
    }
  }
  .result-box {
    overflow-y: auto;
  }
}
</style>
