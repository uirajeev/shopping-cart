import Vue from "vue";
import App from "./App.vue";

import "./utils/fa-icon.js"; // Font Awesome Icons
import router from "./router"; // Vue Router
import store from "./store"; // Vue Store

import BaseButton from "@/components/BaseButton.vue"; //
import Ribbon from "@/components/Ribbon.vue";
import Card from "@/components/Card.vue";
import Spinner from "@/components/Spinner.vue";

Vue.component("base-button", BaseButton);
Vue.component("Ribbon", Ribbon);
Vue.component("Card", Card);
Vue.component("Spinner", Spinner);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
