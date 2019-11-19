import Vue from "vue";
import VueRouter from "vue-router";
import ProductList from "../views/ProductList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Products",
    component: ProductList
  },
  {
    path: "/cart",
    name: "ShoppingCart",
    // route level code-splitting
    // this generates a separate chunk (ShoppingCart.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "ShoppingCart" */ "../views/ShoppingCart.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
