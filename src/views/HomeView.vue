<script lang="ts">
export default {
  data: () => {
    return {
      list: [
        { word: "apple", sentense: "This is an apple." },
        { word: "banana", sentense: "This is an banana." },
      ],
    };
  },
  computed: {
    activeFruit: function () {
      return this.list.filter((d, i) => i % 2 === 0);
    },
  },
};
</script>

<template>
  <div>
    <ul>
      <li v-for="(item, itemIndex) in activeFruit" :key="itemIndex">
        {{ item.word }}
      </li>
    </ul>
  </div>
</template>

<style scope>
p {
  color: red;
}
</style>
