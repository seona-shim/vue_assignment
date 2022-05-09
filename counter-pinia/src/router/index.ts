import { createRouter, createWebHashHistory, Router } from "vue-router";
import CounterDefault from "@/views/CounterDefault.vue";
import CounterQuasar from "@/views/CounterQuasar.vue";

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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
