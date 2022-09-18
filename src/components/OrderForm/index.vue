<template>
  <form class="form" @submit.prevent="onSubmit">
    <p v-if="error" class="form__error">{{ error }}</p>
    <div class="form__fields">
      <Input v-model="street" type="text" placeholder="Street" name="street" />
      <Input v-model="house" type="text" placeholder="House" name="house" />
      <Input v-model="flat" type="text" placeholder="Flat" name="flat" />
    </div>
    <Button>Make order</Button>
  </form>
</template>

<script>
import Button from "../UI/Button";
import Input from "../UI/Input";

export default {
  name: "Form",
  components: { Input, Button },
  data() {
    return {
      street: null,
      house: null,
      flat: null,
      error: null,
    };
  },
  methods: {
    onSubmit() {
      if (!this.street || !this.house || !this.flat) {
        this.error = "All fields are required";
        return;
      }

      this.$emit("submit", {
        street: this.street,
        house: this.house,
        flat: this.flat,
      });

      this.error = null;
      this.street = null;
      this.house = null;
      this.flat = null;

      this.$router.push("/");
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
  max-width: 800px;

  &__error {
    color: red;
  }

  &__fields {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-right: 40px;
  }

  & > .button {
    margin-left: auto;
  }

  @media (max-width: 599px) {
    &__fields {
      padding-right: 0;
    }
    & > .button {
      width: 100%;
    }
  }
}
</style>
