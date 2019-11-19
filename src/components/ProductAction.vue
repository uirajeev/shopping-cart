<template>
  <div :class="$style.productInfo">
    <div :class="$style.productName">{{ name }}</div>
    <div :class="$style.priceRow">
      <span :class="$style.price">
        <i>${{ price }}</i>
      </span>
      <span :class="$style.discountedPrice">$ {{ discountedPrice }}</span>
      <div :class="$style.addToCart">
        <base-button
          @click.native="ADD_TO_CART(id)"
          :buttonClass="$style.button"
        >
          Add to cart
          <fa-icon icon="cart-plus"></fa-icon>
        </base-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ProductAction",
  props: {
    id: Number,
    name: String,
    price: Number,
    discount: Number
  },
  computed: {
    discountedPrice() {
      return this.price - this.price * (this.discount / 100);
    }
  },
  methods: {
    ...mapActions(["ADD_TO_CART"])
  }
};
</script>

<style lang="scss" module>
.productInfo {
  background: $skyBlue;
  border-radius: 0 0 10px 10px;
  padding: 5px 10px 8px;
  .productName {
    font-weight: bold;
  }
  .priceRow {
    display: grid;
    grid-template-columns: 0.5fr 0.5fr 1fr;
    align-items: center;
    .price {
      text-decoration: line-through;
      color: $red;
      font-weight: bold;
      i {
        color: $darkBlue;
        font-style: normal;
        font-weight: normal;
      }
    }
    .discountedPrice {
      font-weight: bold;
    }
    .addToCart {
      text-align: right;
      .button {
        font-size: 14px !important;
      }
    }
  }
}
</style>
