<template>
  <main class="pizza">
    <div class="pizza__wrapper container">
      <Title :heading-size="1">Choose your pizza</Title>
      <Carousel>
        <template v-for="(item, idx) in pizza">
          <PizzaItem
            class="swiper-slide"
            :key="idx"
            :pizza="item"
            @pizza-click="makeOrder"
          />
        </template>
      </Carousel>
    </div>
  </main>
</template>

<script>
import Title from "../../components/UI/Title";
import Carousel from "../../components/Carousel";
import PizzaItem from "../../components/PizzaItem";
import pizzaData from "../../assets/jsonData/pizzaData.json";

export default {
  name: "Pizza",
  components: { Title, PizzaItem, Carousel },
  data() {
    return {
      pizza: [],
    };
  },
  methods: {
    makeOrder(id) {
      // I could, of course, immediately transfer the item for the order, but I considered it right to transfer the ID and then find it
      const pizzaToOrder = this.pizza.find((i) => i.id === id);
      localStorage.setItem("item", JSON.stringify(pizzaToOrder));
      this.$router.push("/order");
    },
  },
  created() {
    // pseudoFetching
    setTimeout(() => {
      this.pizza = pizzaData;
    }, 500);
  },
};
</script>
<style lang="scss">
.pizza {
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & > .title {
      @media (max-width: 599px) {
        margin-bottom: 40px;
      }
    }
  }
}
</style>
