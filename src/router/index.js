import { createRouter, createWebHistory } from 'vue-router'

import carritodecompras from "@/views/carritodecompras.vue";

const routes = [
  {
    path: "/",
    name: "carritodeCompras",
    component: carritodecompras,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
