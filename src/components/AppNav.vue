<template>
  <div :class="$style.nav">
    <div>
      <fa-icon :class="$style.logo" icon="store"></fa-icon>

      <router-link to="/">
        <template v-if="routerPath === '/cart'">
          <fa-icon icon="chevron-left"></fa-icon>
        </template>
        <template v-else>
          All products
        </template>
      </router-link>
      <h3 v-if="routerPath === '/cart'">Order Summary</h3>
    </div>

    <div :class="$style.headerInfo">
      <span :class="$style.itemAdded" v-if="isAdded"
        >{{ cartItems[cartItems.length - 1].name }} is added to cart</span
      >
    </div>

    <div :class="$style.cartbutton" v-if="routerPath !== '/cart'">
      <i :class="$style.count" v-if="cartItems.length">{{
        cartItems.length
      }}</i>
      <base-button @click.native="goToCart" :buttonClass="$style.button">
        Go to cart
        <fa-icon icon="shopping-cart"></fa-icon>
      </base-button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AppNav",
  watch: {
    isAdded(newVal) {
      if (newVal) {
        setTimeout(() => {
          this.SET_ADDED();
        }, 1000);
      }
    }
  },
  computed: {
    routerPath() {
      return this.$route.path;
    },
    ...mapGetters({ cartItems: "cartItems", isAdded: "isAdded" })
  },
  methods: {
    goToCart() {
      this.$router.push({
        path: "/cart"
      });
    },
    ...mapActions(["SET_ADDED"])
  }
};
</script>

<style lang="scss" module>
.nav {
  background: $darkBlue;
  padding: 10px 30px;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  box-shadow: $shadow;
  div {
    min-height: 36px;
  }
  a {
    color: $iceBlue;
    opacity: 0.7;
    text-decoration: none;
    &:hover,
    .router-link-exact-active {
      opacity: 1;
    }
  }
  .count {
    display: inline-block;
    position: absolute;
    right: -7px;
    top: -7px;
    width: 25px;
    height: 25px;
    line-height: 25px;
    font-size: 14px;
    text-align: center;
    font-style: normal;
    color: $white;
    text-align: center;
    background: $marineBlue;
    box-shadow: $shadow;
    border-radius: 50%;
    z-index: 3;
  }
  .headerInfo {
    text-align: center;
    .itemAdded {
      border-radius: 3px;
      background: $goldenRod;
      padding: 3px 10px;
      vertical-align: middle;
      animation: blink 1s linear infinite;
    }
    @keyframes blink {
      0% {
        opacity: 0.3;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0.3;
      }
    }
  }

  h3 {
    display: inline-block;
    font-weight: 300;
    color: $white;
    margin: 0 0 0 20px;
  }
}
.cartbutton {
  text-align: right;
  position: relative;
}
.button {
  font-size: 16px !important;
  font-weight: bold !important;
  width: 200px !important;
}
.logo {
  color: $white;
  font-size: 25px;
  margin-right: 20px;
}
</style>
