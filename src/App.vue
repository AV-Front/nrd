<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import "assets/styles/main.scss";

#app {
  min-height: calc(100vh - 56px);
}
</style>
