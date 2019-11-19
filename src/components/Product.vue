<template>
  <Card>
    <Ribbon>{{ discount }}%</Ribbon>
    <ProductImage :url="img_url"></ProductImage>
    <ProductAction v-bind="product"></ProductAction>
  </Card>
</template>

<script>
import ProductImage from "@/components/ProductImage.vue";
import ProductAction from "@/components/ProductAction.vue";
export default {
  name: "Product",
  data() {
    return {
      product: {}
    };
  },
  components: {
    ProductImage,
    ProductAction
  },
  props: {
    id: Number,
    name: String,
    price: Number,
    discount: Number,
    type: String,
    img_url: String
  },
  mounted() {
    this.product = {
      id: this.id,
      name: this.name,
      price: this.price,
      discount: this.discount
    };
  }
};
</script>
