<template>
  <Card :class="$style.card">
    <div :class="$style.total">Total</div>
    <div :class="$style.disc">
      <span :class="$style.item">Items ({{ cartItems.length }})</span>
      <span :class="$style.semicolon">:</span>
      <span :class="$style.price">${{ cartTotal }}</span>

      <span :class="$style.item">Discount</span>
      <span :class="$style.semicolon">:</span>
      <span :class="$style.price">-${{ cartTotalDiscount }}</span>

      <span :class="$style.item">Type Discount</span>
      <span :class="$style.semicolon">:</span>
      <span :class="$style.price">-$0</span>
    </div>
    <div :class="$style.amountPay">
      <span>Order Total</span>
      <span :class="$style.semicolon">:</span>
      <span :class="$style.price">${{ cartTotal - cartTotalDiscount }}</span>
    </div>
  </Card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TotalCart",
  computed: {
    ...mapGetters({
      cartItems: "cartItems",
      cartTotal: "cartTotal",
      cartTotalDiscount: "cartTotalDiscount"
    })
  }
};
</script>

<style lang="scss" module>
.card {
  padding: 0 !important;
  .total {
    background: $skyBlue;
    border-bottom: 1px solid $marineBlue;
    border-radius: 10px 10px 0 0;
    font-weight: bold;
    padding: 10px 15px;
  }
  .disc {
    display: grid;
    grid-template-columns: 3fr 1fr 3fr;
    padding: 10px 15px;
    line-height: 30px;
  }
  .amountPay {
    background: $skyBlue;
    border-top: 1px solid $marineBlue;
    border-radius: 0 0 10px 10px;
    font-weight: bold;
    display: grid;
    grid-template-columns: 3fr 1fr 3fr;
    padding: 10px 15px;
  }
  .item {
    font-weight: bold;
  }
  .semicolon {
    text-align: center;
    font-weight: bold;
  }
  .price {
    text-align: right;
  }
}
</style>
