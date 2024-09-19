<script>
export default {
  props: {
    value: String,
  },
};
</script>

<template>
  <input type="text" :value="value" @change.enter="$emit('change', $event)" />
</template>
