<template>
  <label class="input" :for="name">
    <input
      v-model="value"
      :type="type"
      :placeholder="placeholder"
      :name="name"
      autocomplete="off"
      @input="$emit('input', $event.target.value)"
    />
  </label>
</template>

<script>
export default {
  name: "Input",
  props: {
    value: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.input {
  height: 32px;
  width: 100%;
  padding: 0 8px;
  border: 1px solid #2c3e50;
  border-radius: 8px;

  & > input {
    width: 100%;
    max-width: 100%;
    height: 100%;
    border: none;
    color: #2c3e50;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    appearance: none;
    outline: none;
  }

  &:focus-within {
    border: 2px solid antiquewhite;
  }
}
</style>
