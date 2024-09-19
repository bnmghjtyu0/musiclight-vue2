<script>
export default {
  props: ["value"],
  model: {
    prop: "value",
    event: "update",
  },
};
</script>

<template>
  <input
    type="text"
    :value="value"
    @input="$emit('update', $event.target.value)"
  />
</template>
