<template>
  <q-card class="option-box">
    <section>
      <q-select
        outlined
        v-model="uiOption"
        :options="uiComponent"
        @update:model-value="useChangeView"
        label="UI Framework"
      />
    </section>
    <section>
      <color-select title="? > 100" type="high" />
      <color-select title="0 <= ? <= 100" type="middle" />
      <color-select title="? < 0" type="low" />
    </section>
  </q-card>
</template>
<script lang="ts">
import ColorSelect from "./ColorSelect.vue";
export default {
  name: "OptionBox",
  components: {
    ColorSelect,
  },
};
</script>
<script setup lang="ts">
import { ref } from "vue";
import useChangeView from "@/methods/useChangeView.ts";
import { uiComponent } from "@/router/routePath.ts";

const uiOption = ref("quasar");
</script>
<style lang="scss" scoped>
.option-box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 100px;
}
</style>
