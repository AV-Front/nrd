import Vue from "vue";
import VueRouter from "vue-router";
import Catalog from "../pages/Catalog/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Catalog",
    component: Catalog,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../pages/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
