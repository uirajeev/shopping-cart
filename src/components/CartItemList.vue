<template>
  <div :class="$style.productList">
    <template v-for="(item, index) in cartItems">
      <span :class="[$style.cardItem, $style.name]" :key="item.id"
        ><ProductImage
          :url="item.img_url"
          :imageClass="$style.image"
        ></ProductImage
        >{{ item.name }}

        <base-button
          :buttonClass="$style.button"
          @click.native="REMOVE_ITEM(item.id)"
          ><fa-icon icon="times"></fa-icon></base-button
      ></span>

      <div :key="item.name + index" :class="[$style.cardItem, $style.quantity]">
        <base-button
          :buttonClass="$style.button"
          @click.native="DECREASE_COUNT(item.id)"
          ><fa-icon icon="minus"></fa-icon
        ></base-button>

        <span>{{ item.count }}</span>

        <base-button
          :buttonClass="$style.button"
          @click.native="INCREASE_COUNT(item.id)"
          ><fa-icon icon="plus"></fa-icon
        ></base-button>
      </div>

      <span :key="index" :class="[$style.cardItem, $style.price]"
        ><span>${{ item.price * item.count }}</span></span
      >
    </template>
  </div>
</template>

<script>
import ProductImage from "@/components/ProductImage.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CartItemList",
  components: {
    ProductImage
  },
  computed: {
    ...mapGetters({ cartItems: "cartItems" })
  },
  methods: {
    ...mapActions(["INCREASE_COUNT", "DECREASE_COUNT", "REMOVE_ITEM"])
  }
};
</script>

<style lang="scss" module>
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
  .cardItem {
    background: $iceBlue;
    align-self: stretch;
    border-bottom: 1px solid $skyBlue;
    padding: 0 15px;
    vertical-align: middle;
  }
  .quantity {
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: 18px;
  }
  .price {
    align-items: center;
    display: flex;
  }
  .name {
    font-weight: bold;
  }
}
.image {
  display: inline-block;
  max-width: 50px !important;
  vertical-align: middle;
  margin-right: 20px;
  img {
    max-height: 50px !important;
  }
}
.button {
  margin: 0 10px !important;
}
</style>
