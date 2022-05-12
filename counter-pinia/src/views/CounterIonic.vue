<template>
  <ion-content>
    <div>컴포넌트로 분리하기</div>
    <main class="contents">
      <ion-card class="option-box">
        <ion-item>
          <ion-label>UI Framework</ion-label>
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
        <ion-list>
          <ion-item>
            <ion-label>? > 100</ion-label>

            <ion-select
              placeholder="red"
              interface="action-sheet"
              v-model="resultColors.high"
              :style="{ color: resultColors.high }"
              @ionChange="(e) => colorStore.changeColor('high', e.target.value)"
            >
              <ion-select-option
                v-for="(item, index) in colorArray"
                :key="index"
                :value="item"
                >{{ item }}</ion-select-option
              >
            </ion-select>
          </ion-item>
          <ion-item>
            <ion-label>0 {{ "<=" }} ? {{ "<=" }} 100</ion-label>

            <ion-select
              placeholder="red"
              interface="action-sheet"
              v-model="resultColors.middle"
              :style="{ color: resultColors.middle }"
              @ionChange="
                (e) => colorStore.changeColor('middle', e.target.value)
              "
            >
              <ion-select-option
                v-for="(item, index) in colorArray"
                :key="index"
                :value="item"
                >{{ item }}</ion-select-option
              >
            </ion-select>
          </ion-item>
          <ion-item>
            <ion-label>? {{ "<" }} 0</ion-label>

            <ion-select
              placeholder="red"
              interface="action-sheet"
              v-model="resultColors.low"
              :style="{ color: resultColors.low }"
              @ionChange="(e) => colorStore.changeColor('low', e.target.value)"
            >
              <ion-select-option
                v-for="(item, index) in colorArray"
                :key="index"
                :value="item"
                >{{ item }}</ion-select-option
              >
            </ion-select>
          </ion-item>
          <ion-item>
            <ion-label>Result box background</ion-label>
            <input type="color" v-model="backgroundColor" />
          </ion-item>
        </ion-list>
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
        <ion-list :style="{ background: resultBackgroundColor }">
          <ion-item
            v-for="(item, index) in counterStore.result"
            :key="index"
            :style="{ '--background': resultBackgroundColor }"
          >
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
  IonLabel,
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
    IonLabel,
  },
});
</script>

<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { useCounterStore, useColorStore } from "@/store";
import { Colors, ColorArray } from "@/types/color";
import useChangeView from "@/methods/useChangeView";
import { getResultType } from "@/methods/getResultType";

import { uiComponent } from "@/router/routePath";

// framework option
const changeUI = (e) => {
  useChangeView(e.target.value);
};

// result color option
const colorArray: ColorArray[] = ["black", "green", "red", "blue"];
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    padding: 20px 50px;
    align-items: center;
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
