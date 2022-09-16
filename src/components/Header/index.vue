<template>
  <header class="header">
    <div class="header__wrapper container">
      <img src="../../assets/logo.png" alt="logo" />
      <h1 class="header__title">Pizza NRD</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss">
.header {
  height: 48px;
  padding: 8px 0;
  background-color: antiquewhite;

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;

    img {
      width: 32px;
    }
  }

  &__title {
    font-size: 1.4rem;
  }
}
</style>
