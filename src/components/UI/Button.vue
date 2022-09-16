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
  width: 240px;
  height: 32px;
  font-size: 16px;
  line-height: 18px;
  background-color: aliceblue;
  border: 1px solid chocolate;
  border-radius: 4px;
  cursor: pointer;
  color: #2c3e50;

  &:hover {
    background-color: antiquewhite;
    transform: scale(1.01);
  }
}
</style>
