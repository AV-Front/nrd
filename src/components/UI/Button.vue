<template>
  <button class="button" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
  emits: ["click"],
};
</script>

<style lang="scss">
.button {
  width: 300px;
  height: 42px;
  font-size: 16px;
  line-height: 18px;
  background-color: #2c3e50;
  border: 1px solid antiquewhite;
  border-radius: 8px;
  cursor: pointer;
  color: white;

  &:hover {
    border: 1px solid #2c3e50;
    background-color: antiquewhite;
    color: #2c3e50;
    transform: scale(1.01);
  }
}
</style>
