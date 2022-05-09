import { createRouter, createWebHashHistory } from "vue-router";
import CounterDefault from "@/views/CounterDefault.vue";
import CounterQuasar from "@/views/CounterQuasar.vue";
import CounterTailwind from "@/views/CounterTailwind.vue";

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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
