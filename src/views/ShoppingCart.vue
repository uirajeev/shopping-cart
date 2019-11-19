<template>
  <div>
    <Card :class="$style.info" v-if="!cartItems.length"
      >Please add items in your cart.</Card
    >
    <div :class="$style.shopingCart" v-else>
      <Card>
        <div :class="$style.productList">
          <span :class="$style.cardHearder"
            >Items <span>({{ cartItems.length }})</span></span
          >
          <span :class="[$style.cardHearder, $style.textCenter]"
            >Qty ({{ quantity }})</span
          >
          <span :class="$style.cardHearder">Price</span>
        </div>
        <CartItemList />
      </Card>
      <div>
        <TotalCart />
      </div>
    </div>
  </div>
</template>
<script>
import CartItemList from "@/components/CartItemList.vue";
import TotalCart from "@/components/TotalCart.vue";

import { mapGetters } from "vuex";
export default {
  name: "ShoppingCart",
  components: {
    CartItemList,
    TotalCart
  },
  computed: {
    quantity() {
      return this.cartItems.reduce((total, item) => (total += item.count), 0);
    },
    ...mapGetters({ cartItems: "cartItems" })
  }
};
</script>

<style lang="scss" module>
.shopingCart {
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 30px;
  margin: 30px;
  @media screen and (max-width: $breakpoint-md) {
    grid-template-columns: 2fr 1fr;
  }
  .productList {
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
    margin: 0 10px;
    align-items: center;
    .cardHearder {
      font-weight: bold;
      padding: 10px 15px;
      border-bottom: 1px solid $skyBlue;
    }
  }
}
.textCenter {
  text-align: center;
}
.info {
  border: 1px solid $marineBlue;
  background-color: $skyBlue;
  color: $marineBlue;
  margin: 30px;
}
</style>
