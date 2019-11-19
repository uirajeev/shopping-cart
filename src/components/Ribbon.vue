<template>
  <div :class="[$style.ribbon, $style.ribbonTopLeft]">
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "Ribbon"
};
</script>

<style lang="scss" module>
.ribbon {
  width: 70px;
  height: 70px;
  overflow: hidden;
  position: absolute;
  &::before,
  &::after {
    position: absolute;
    z-index: -1;
    content: "";
    display: block;
    border: $ribbonBorder;
  }
  span {
    position: absolute;
    display: block;
    width: 75px;
    padding: 2px 14px;
    font-size: 14px;
    font-weight: bold;
    background-color: $ribbonBg;
    box-shadow: $shadow;
    color: $white;
    text-transform: uppercase;
    text-align: center;
  }
  &.ribbonTopLeft {
    top: -10px;
    left: -10px;
    span {
      top: 15px;
      left: -22px;
      transform: rotate(-45deg);
    }
    &::before,
    &::after {
      border-top-color: transparent;
      border-left-color: transparent;
    }
    &::after {
      bottom: 0;
      left: 0;
    }
    &::before {
      top: 0;
      right: 0;
    }
  }
}
</style>

