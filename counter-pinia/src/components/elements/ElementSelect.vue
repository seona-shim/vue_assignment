<template>
  <select
    class="select-color"
    v-model="selectBackground"
    :style="{ background: selectBackground }"
  >
    <option>black</option>
    <option>green</option>
    <option>red</option>
    <option>blue</option>
  </select>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ElementSelect",
});
</script>
<script setup lang="ts">
import { ref, defineProps } from "vue";

const props = defineProps<{
  value: string;
}>();

const selectBackground = ref<string>(props.value);
</script>
<style lang="scss" scoped>
.select-color {
  width: 100%;
  padding: 10px 20px;
  color: white;
}
</style>
