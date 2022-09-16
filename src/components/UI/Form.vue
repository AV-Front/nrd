<template>
  <form class="form" @submit.prevent="onSubmit">
    <input v-model="street" type="text" placeholder="Street" />
    <input v-model="house" type="number" placeholder="House" />
    <input v-model="flat" type="number" placeholder="Flat" />
    <Button>Make order</Button>
  </form>
</template>

<script>
import Button from "./Button";

export default {
  name: "Form",
  components: { Button },
  data() {
    return {
      street: "",
      house: null,
      flat: null,
    };
  },
  methods: {
    onSubmit() {
      this.$emit("submit", {
        street: this.street,
        house: this.house,
        flat: this.flat,
      });

      this.street = "";
      this.house = null;
      this.flat = null;
    },
  },
};
</script>

<style lang="scss">
.form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 600px;

  & > input {
    height: 32px;
    padding: 4px 12px;
    color: #2c3e50;
    font-size: 16px;

    &:focus {
      border: 2px solid antiquewhite;
    }
  }

  & > .button {
    margin-left: auto;
  }
}
</style>
