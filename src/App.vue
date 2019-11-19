<template>
  <div id="app">
    <AppNav />
    <keep-alive><router-view /></keep-alive>
  </div>
</template>
<script>
import AppNav from "@/components/AppNav";
export default {
  name: "App",
  components: {
    AppNav
  }
};
</script>
<style lang="scss" module></style>
