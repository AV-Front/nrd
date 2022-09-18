<template>
  <section class="order">
    <div class="order__wrapper container">
      <Title :heading-size="1">Make order</Title>
      <div class="order__info">
        <div class="order__info__title">{{ itemForOrder.title }}:</div>
        <div class="order__info__price">{{ itemForOrder.price }}</div>
      </div>
      <div class="order__address">
        <div class="order__address__title">Address</div>
        <OrderForm @submit="submit($event)" />
      </div>
    </div>
  </section>
</template>

<script>
import pizzaData from "../../assets/jsonData/pizzaData.json";
import Title from "../../components/UI/Title";
import OrderForm from "../../components/OrderForm";
export default {
  name: "Order",
  components: { Title, OrderForm },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      itemForOrder: null,
    };
  },
  methods: {
    submit(e) {
      alert(
        `YOUR PIZZA IS : ${JSON.stringify(this.itemForOrder)}
         YOUR ADDRESS IS: ${JSON.stringify(e)}`
      );
    },
  },
  created() {
    // Of course, everything is decided through the state manager, but I did not install
    // Therefore, this like data finding
    this.itemForOrder = pizzaData.find((i) => i.id === this.id);
  },
};
</script>

<style lang="scss">
.order {
  &__wrapper {
    margin: 0 auto;

    & .title {
      font-size: 32px;
      margin-bottom: 40px;
    }
  }

  &__info {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 32px;

    &__title {
      font-size: 24px;
      font-weight: 800;
    }

    &__price {
      font-size: 36px;
      font-weight: 800;
    }
  }

  &__address {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 120px;

    @media (max-width: 1023px) {
      gap: 40px;
    }

    @media (max-width: 599px) {
      align-items: center;
      flex-direction: column;
      gap: 40px;
    }

    &__title {
      font-size: 32px;
    }
  }
}
</style>
