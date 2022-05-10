import { createRouter, createWebHashHistory } from "vue-router";
import CounterDefault from "@/views/CounterDefault.vue";
import CounterQuasar from "@/views/CounterQuasar.vue";
import CounterTailwind from "@/views/CounterTailwind.vue";
import CounterIonic from "@/views/CounterIonic.vue";

const routes = [
  {
    path: "/",
    name: "default",
    component: CounterDefault,
  },
  {
    path: "/quasar",
    name: "quasar",
    component: CounterQuasar,
  },
  {
    path: "/tailwind",
    name: "tailwind",
    component: CounterTailwind,
  },
  {
    path: "/ionic",
    name: "ionic",
    component: CounterIonic,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
