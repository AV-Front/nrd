import Vue from "vue";
import VueRouter from "vue-router";
import Pizza from "../pages/Pizza/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Pizza",
    component: Pizza,
  },
  {
    path: "/order",
    name: "",
    component: () => import("../pages/Order/index"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
