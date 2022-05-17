<template>
  <section class="count-dnd">
    <draggable
      v-model="items"
      @start="drag = true"
      @end="drag = false"
      item-key="id"
      handle=".handle"
      @change="changeList"
      class="dnd-box"
    >
      <template #item="{ element, index }">
        <div class="dnd-item" :math="element.math">
          <div class="handle"><span /><span /><span /></div>
          <div class="dnd-item-inner">
            <MathSelector
              v-model="items[index].math"
              @change="changeMath(element.math, element.count, index)"
            />
            <input type="number" v-model="element.count" />
            <button @click="deleteItem(index)">delete</button>
          </div>
        </div>
      </template>
    </draggable>
    <div class="button-box">
      <button @click="addItem">Add Card</button>
      <button @click="runDndCounter">Run</button>
    </div>
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

const isDivision = (math: string) => {
  return math == "/" || math == "%";
};

const changeMath = (math: string, count: number, index: number) => {
  isDivision(math) && !count ? (items.value[index].count = 1) : null;
};
</script>

<style lang="scss" scoped>
.count-dnd {
  button {
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
}
.dnd-item {
  --theme-color: lightblue;
  &[math="+"] {
    --theme-color: lightblue;
  }
  &[math="-"] {
    --theme-color: lightpink;
  }
  &[math="/"] {
    --theme-color: lightgreen;
  }
  &[math="%"] {
    --theme-color: plum;
  }
  &[math="*"] {
    --theme-color: orange;
  }

  background: white;
  border: 1px solid var(--theme-color);
  box-shadow: 3px 3px 1px var(--theme-color);
  display: flex;
  border-radius: 10px;
  overflow: hidden;

  &:not(:first-child) {
    margin-top: 10px;
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
      background: var(--theme-color);
      border-radius: 100%;
    }
  }
  .dnd-item-inner {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 2fr auto;
    gap: 20px;
    padding: 20px;

    button {
      min-width: 80px;
    }
    select,
    input {
      border: 1px solid var(--theme-color);
      padding: 0 20px;
    }
  }
}

.button-box {
  margin-top: 20px;
  button {
    min-width: 100px;
    min-height: 40px;
    border-radius: 5px;
    background: rgb(130, 243, 196);
    border: 1px solid seagreen;
    color: rgb(19, 119, 139);
    &:first-child {
      margin-right: 10px;
      background: pink;
      border: 1px solid hotpink;
      color: rgb(165, 0, 88);
    }
  }
}
</style>
