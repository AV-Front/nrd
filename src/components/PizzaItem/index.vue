<template>
  <article class="pizza-item" @click="$emit('pizza-click', pizza.id)">
    <picture class="pizza-item__img">
      <img src="../../assets/images/pizza.png" alt="pizza" />
    </picture>
    <div class="pizza-item__desc">
      <Title :heading-size="2">{{ pizza.title }}</Title>
      <div class="pizza-item__desc__price">
        <b>Price:</b>
        <span>{{ pizza.price }}</span>
      </div>
    </div>
  </article>
</template>

<script>
import Title from "../UI/Title";
export default {
  name: "PizzaItem",
  components: { Title },
  props: {
    pizza: {
      type: Object,
      default: () => {},
    },
  },
  emits: ["pizza-click"],
};
</script>

<style lang="scss">
.pizza-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  min-width: 260px;
  max-width: 320px;
  max-height: 360px;
  padding: 20px;
  border: 1px solid antiquewhite;
  border-radius: 4px;
  cursor: pointer;

  & .pizza-item__img {
    width: 100%;
    max-width: 280px;
    margin: 0 0 12px 0;
    position: relative;
    top: 0;
    transition: top 150ms ease-out 0s;
    border-radius: 12px;

    &:hover {
      top: 4px;
    }

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  & .pizza-item__desc {
    width: 100%;
    text-align: left;

    &__title {
      font-size: 20px;
      line-height: 24px;
      margin-bottom: 8px;
    }

    &__price {
      display: flex;
      justify-content: space-between;

      & > span {
        display: inline-block;
        font-size: 16px;
        font-weight: 600;
        line-height: 22px;
      }
    }
  }
}
</style>
