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
            <button @click="deleteItem(index)">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path
                  d="M19 24h-14c-1.104 0-2-.896-2-2v-17h-1v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2h-1v17c0 1.104-.896 2-2 2zm0-19h-14v16.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-16.5zm-9 4c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm-2-7h-4v1h4v-1z"
                />
              </svg>
            </button>
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
.dnd-item {
  --theme-color: lightblue;
  --theme-color-ex: rgb(239, 251, 255);
  &[math="+"] {
    --theme-color: lightblue;
    --theme-color-ex: rgb(239, 251, 255);
  }
  &[math="-"] {
    --theme-color: lightpink;
    --theme-color-ex: rgb(255, 243, 245);
  }
  &[math="/"] {
    --theme-color: lightgreen;
    --theme-color-ex: rgb(239, 251, 255);
  }
  &[math="%"] {
    --theme-color: plum;
    --theme-color-ex: rgb(255, 240, 255);
  }
  &[math="*"] {
    --theme-color: orange;
    --theme-color-ex: rgb(255, 249, 238);
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
    gap: 10px;
    padding: 20px;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 10px;
      border: none;
      font-weight: 700;
      background: none;
      cursor: pointer;
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
      svg path {
        fill: lightgray;
      }
      &:hover svg path {
        fill: gray;
      }
    }
    select,
    input {
      border: 1px solid var(--theme-color);
      padding: 0 20px;
      &:focus {
        outline: none;
        background: var(--theme-color-ex);
      }
    }
    select {
      cursor: pointer;
    }
  }
}

.button-box {
  margin-top: 20px;
  button {
    min-width: 100px;
    min-height: 40px;
    border-radius: 5px;
    background: rgb(119, 230, 183);
    border: none;
    color: rgb(37, 123, 74);
    border: 1px solid rgb(77, 176, 120);

    &:hover {
      background: rgb(119, 230, 183);
      box-shadow: inset 2.5px 2.5px 3px rgb(77, 176, 120);
    }
    &:first-child {
      margin-right: 10px;
      background: pink;
      border: 1px solid rgb(222, 127, 143);
      color: rgb(165, 0, 88);
      &:hover {
        background: rgb(249, 182, 193);
        box-shadow: inset 2.5px 2.5px 3px rgb(222, 127, 143);
      }
    }
  }
}
</style>
