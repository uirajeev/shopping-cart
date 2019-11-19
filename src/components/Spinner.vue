<template>
  <div :class="[$style.fadingCircle, $style[size], $style[color]]">
    <div :class="[$style.circle1, $style.circle]"></div>
    <div :class="[$style.circle2, $style.circle]"></div>
    <div :class="[$style.circle3, $style.circle]"></div>
    <div :class="[$style.circle4, $style.circle]"></div>
    <div :class="[$style.circle5, $style.circle]"></div>
    <div :class="[$style.circle6, $style.circle]"></div>
    <div :class="[$style.circle7, $style.circle]"></div>
    <div :class="[$style.circle8, $style.circle]"></div>
    <div :class="[$style.circle9, $style.circle]"></div>
    <div :class="[$style.circle10, $style.circle]"></div>
    <div :class="[$style.circle11, $style.circle]"></div>
    <div :class="[$style.circle12, $style.circle]"></div>
  </div>
</template>

<script>
export default {
  name: "Spinner",
  props: {
    color: {
      type: String,
      default: "white",
      validator(value) {
        return ["white", "blue"].includes(value);
      }
    },
    size: {
      type: String,
      default: "md",
      validator(value) {
        return ["md", "lg"].includes(value);
      }
    }
  }
};
</script>

<style lang="scss" module>
.fadingCircle {
  position: relative;
  display: inline-block;

  &.md {
    height: 22px;
    width: 22px;
  }
  &.lg {
    height: 100px;
    width: 100px;
  }

  &.white .circle:before {
    background-color: $white;
  }
  &.blue .circle:before {
    background-color: $marineBlue;
  }
}

.fadingCircle .circle {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.fadingCircle .circle:before {
  display: block;
  height: 15%;
  width: 15%;
  margin: 0 auto;
  border-radius: 100%;
  animation: circleFadeDelay 1.2s infinite ease-in-out both;

  content: "";
}

.fadingCircle .circle2 {
  transform: rotate(30deg);

  &:before {
    animation-delay: -1.1s;
  }
}
.fadingCircle .circle3 {
  transform: rotate(60deg);

  &:before {
    animation-delay: -1s;
  }
}
.fadingCircle .circle4 {
  transform: rotate(90deg);

  &:before {
    animation-delay: -0.9s;
  }
}
.fadingCircle .circle5 {
  transform: rotate(120deg);

  &:before {
    animation-delay: -0.8s;
  }
}
.fadingCircle .circle6 {
  transform: rotate(150deg);

  &:before {
    animation-delay: -0.7s;
  }
}
.fadingCircle .circle7 {
  transform: rotate(180deg);

  &:before {
    animation-delay: -0.6s;
  }
}
.fadingCircle .circle8 {
  transform: rotate(210deg);

  &:before {
    animation-delay: -0.5s;
  }
}
.fadingCircle .circle9 {
  transform: rotate(240deg);

  &:before {
    animation-delay: -0.4s;
  }
}
.fadingCircle .circle10 {
  transform: rotate(270deg);

  &:before {
    animation-delay: -0.3s;
  }
}
.fadingCircle .circle11 {
  transform: rotate(300deg);

  &:before {
    animation-delay: -0.2s;
  }
}
.fadingCircle .circle12 {
  transform: rotate(330deg);

  &:before {
    animation-delay: -0.1s;
  }
}

@keyframes circleFadeDelay {
  0%,
  39%,
  100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
</style>
