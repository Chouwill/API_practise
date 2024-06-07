import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "ApiTest",
    component: () => import("../views/ApiTest.vue"),
  },
  {
    path: "/pokemonapi",
    name: "Pokemonapi",
    component: () => import("../views/Pokemonapi.vue"),
  },
  {
    path: "/time",
    name: "Time",
    component: () => import("../views/Time.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
