<template>
  <header class="header">
    <div class="header__wrapper container">
      <router-link to="/" exact>
        <img src="../../assets/images/logo.png" alt="logo" />
        <span class="header__title">pizza nrd</span>
      </router-link>
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
  height: 56px;
  padding: 8px 0;
  background-color: antiquewhite;
  margin-bottom: 16px;

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;

    a {
      display: flex;
      align-items: center;
      gap: 12px;
      color: #2c3e50;

      img {
        width: 32px;
      }
    }
  }

  &__title {
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
    text-transform: uppercase;
  }
}
</style>
