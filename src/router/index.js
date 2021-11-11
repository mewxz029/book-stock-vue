import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ShowBook from "../views/ShowBook.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/addbook",
    name: "AddBook",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AddBook.vue"),
  },
  {
    path: "/editbook/:id",
    name: "EditBook",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/EditBook.vue"),
  },
  {
    path: "/book/:id",
    name: "ShowBook",
    component: ShowBook,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
