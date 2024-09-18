<script lang="ts">
import Vue from "vue";
import TodoItem from "@/components/KKBOX.vue";

//使用 Vue.extend 才能加入 data 的型別
export default Vue.extend({
  components: { TodoItem },
});
</script>

<template>
  <todo-item></todo-item>
</template>
