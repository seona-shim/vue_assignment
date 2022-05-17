<template>
  <section class="count-dnd">
    <draggable
      v-model="items"
      @start="drag = true"
      @end="drag = false"
      item-key="id"
      handle=".handle"
      @change="changeList"
    >
      <template #item="{ element, index }">
        <div class="dnd-item">
          <div class="handle"><span /><span /><span /></div>
          <MathSelector v-model="items[index].math" />
          <input type="number" v-model="element.count" />
          <button @click="deleteItem(index)">delete</button>
        </div>
      </template>
    </draggable>
    <button @click="addItem">Add</button>
    <button @click="runDndCounter">Run</button>
  </section>
</template>

<script lang="ts">
import { DndItem } from "@/types/dnd";
import { defineComponent, ref } from "vue";
import draggable from "vuedraggable";
export default defineComponent({
  name: "CounterDnd",
  components: { draggable },
});
</script>

<script setup lang="ts">
import MathSelector from "./MathSelector.vue";
import { useCounterStore } from "@/store";

const drag = ref(false);
const items = ref<DndItem[]>([
  {
    math: "+",
    count: 0,
    id: 0,
  },
]);

const deleteItem = (id: number) => {
  items.value.splice(id, 1);
};

const addItem = () => {
  const item: DndItem = {
    math: "+",
    count: 0,
    id: items.value.length,
  };
  items.value.push(item);
};

const changeList = () => {
  console.log(items.value[0]);
};

const counterStore = useCounterStore();
const runDndCounter = () => {
  counterStore.addDndResult(items.value);
};
</script>

<style lang="scss">
.count-dnd {
  background: pink;
  overflow: scroll;
}
.handle {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 80px;
  cursor: grab;
  span {
    display: block;
    width: 5px;
    height: 5px;
    background: black;
    border-radius: 100%;
  }
}
.dnd-item {
  background: white;
  border: 1px solid black;
  display: flex;
}
</style>
