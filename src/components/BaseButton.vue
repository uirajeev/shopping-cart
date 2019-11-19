<template>
  <button :class="[$style.btn, $style.btnPill, buttonClass]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    buttonClass: String
  }
};
</script>

<style lang="scss" module>
.btn {
  font-family: "made_evolve_sansregular", sans-serif;
  position: relative;
  margin: 0;
  padding: 8px 12px;
  max-width: 250px;
  max-width: 150px;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  background: $white;
  border: 0;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
  &:hover {
    animation: rotate 0.7s ease-in-out both;
    span {
      animation: storm 0.7s ease-in-out both;
      animation-delay: 0.06s;
    }
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
  25% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
  50% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
  75% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
  100% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
}
@keyframes storm {
  0% {
    transform: translate3d(0, 0, 0) translateZ(0);
  }
  25% {
    transform: translate3d(4px, 0, 0) translateZ(0);
  }
  50% {
    transform: translate3d(-3px, 0, 0) translateZ(0);
  }
  75% {
    transform: translate3d(2px, 0, 0) translateZ(0);
  }
  100% {
    transform: translate3d(0, 0, 0) translateZ(0);
  }
}

.btnPill {
  &:before,
  &:after {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #1d89ff;
    content: "";
    opacity: 0;
    transition: transform 0.15s cubic-bezier(0.02, 0.01, 0.47, 1),
      opacity 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
    z-index: -1;
    transform: translate(100%, -25%) translate3d(0, 0, 0);
  }
  &:hover {
    &:before,
    &:after {
      opacity: 0.15;
      transition: transform 0.2s cubic-bezier(0.02, 0.01, 0.47, 1),
        opacity 0.2s cubic-bezier(0.02, 0.01, 0.47, 1);
    }
    &:before {
      transform: translate3d(50%, 0, 0) scale(2);
    }
    &:after {
      transform: translate(50%, 0) scale(2.5);
    }
  }
}
</style>
