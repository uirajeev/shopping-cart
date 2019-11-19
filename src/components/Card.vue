<template>
  <div :class="$style.card"><slot></slot></div>
</template>

<script>
export default {
  name: "Card"
};
</script>

<style lang="scss" module>
.card {
  position: relative;
  padding: 15px;
  border-radius: 10px;
  background: $white;
  box-shadow: $shadow;
}
</style>
