import Vue from "vue";
import Vuex from "vuex";

import createPersistedState from "vuex-persistedstate"; // Persist the state after page hard reload

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    products: [],
    cart: [],
    isLoading: false,
    isError: false,
    itemAdded: false
  },
  mutations: {
    setData(state, data) {
      state.products = data;
      state.isLoading = false;
      state.isError = false;
    },
    loadingProduct(state, payload) {
      state.isLoading = payload ? payload : false;
    },
    setError(state, payload) {
      state.isError = payload ? payload : false;
    },
    setAdded(state, payload) {
      state.itemAdded = payload ? payload : false;
    },
    addToCart(state, payload) {
      let isInCart = state.cart.some(item => item.id === payload);
      if (isInCart) return;

      let product = state.products.find(item => item.id === payload);
      product.count = 1;
      state.cart = [...state.cart, product];
      state.itemAdded = true;
    },
    increaseCount(state, payload) {
      state.cart = state.cart.map(item => {
        if (item.id === payload) {
          item.count = item.count + 1;
          return item;
        }
        return item;
      });
    },
    decreaseCount(state, payload) {
      state.cart = state.cart.map(item => {
        if (item.id === payload && item.count > 1) {
          item.count = item.count - 1;
          return item;
        }
        return item;
      });
    },
    removeItem(state, payload) {
      let index = state.cart.findIndex(item => item.id === payload);
      state.cart.splice(index, 1);
    }
  },
  actions: {
    async getData({ commit, getters }) {
      if (getters.productList.length) {
        return;
      }
      commit("loadingProduct", true);
      try {
        const response = await fetch("https://api.myjson.com/bins/qhnfp");
        const data = await response.json();
        commit("setData", data);
      } catch (error) {
        commit("setError", true);
        commit("loadingProduct");
      }
    },
    ADD_TO_CART({ commit }, payload) {
      commit("addToCart", payload);
    },
    INCREASE_COUNT({ commit }, payload) {
      commit("increaseCount", payload);
    },
    DECREASE_COUNT({ commit }, payload) {
      commit("decreaseCount", payload);
    },
    SET_ADDED({ commit }, payload) {
      commit("setAdded", payload);
    },
    REMOVE_ITEM({ commit }, payload) {
      commit("removeItem", payload);
    }
  },
  getters: {
    productList(state) {
      return state.products;
    },
    cartItems(state) {
      return state.cart;
    },
    isAdded(state) {
      return state.itemAdded;
    },
    isError(state) {
      return state.isError;
    },
    isLoading(state) {
      return state.isLoading;
    },
    cartTotal(state) {
      return state.cart.reduce(
        (total, item) => (total += item.price * item.count),
        0
      );
    },
    cartTotalDiscount(state) {
      return state.cart.reduce((total, item) => {
        let discount = item.price * item.count * (item.discount / 100);
        return (total += discount);
      }, 0);
    }
  }
});
