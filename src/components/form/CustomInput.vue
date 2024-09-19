<script>
export default {
  props: ["value"],
  model: {
    prop: "value",
    event: "update",
  },
  methods: {
    onKeyUp(event) {
      this.$emit("change", event);
    },
    onEnter(event) {
      this.$emit("enter", event);
    },
  },
};
</script>

<template>
  <input
    type="text"
    :value="value"
    @input="$emit('update', $event.target.value)"
    @keyup="onKeyUp"
    v-on:keyup.enter="onEnter"
  />
</template>
