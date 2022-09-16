<template>
  <component class="title" :is="`h${headingSize}`">
    <slot />
  </component>
</template>

<script>
export default {
  name: "Title",
  props: {
    headingSize: {
      type: Number,
      default: 1,
    },
  },
};
</script>
