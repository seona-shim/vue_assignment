<template>
  <section class="options-box">
    <section class="select-ui">
      <label>
        <h3>UI component</h3>
        <element-select
          :value="uiValue"
          :options="uiComponent"
          @change="changeUI"
        ></element-select>
      </label>
    </section>
    <color-picker-box></color-picker-box>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ColorPickerBox from "./ColorPickerBox.vue";
import ElementSelect from "../elements/ElementSelect.vue";

export default defineComponent({
  components: { ColorPickerBox, ElementSelect },
  name: "OptionsBox",
});
</script>
<script setup lang="ts">
import { ref } from "vue";
import router from "@/router";
interface UiComponent {
  ui: "default" | "quasar";
}
const uiValue = ref<string>("default");

const uiComponent: UiComponent = ["default", "quasar"];

const changeUI = (e) => {
  console.log(e.target.value);
  if (e.target.value !== "default") {
    router.push(e.target.value);
  } else {
    router.push("/");
  }
};
</script>

<style lang="scss" scoped>
.options-box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10%;
  padding: 20px 5%;

  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 80%;
    background: lightgray;
    left: 50%;
    transform: translateX(-50%);
  }
}
.select-ui {
  flex: 1;
  h3 {
    text-align: left;
  }
  select {
    color: black;
    margin-top: 10px;
  }
}
</style>
