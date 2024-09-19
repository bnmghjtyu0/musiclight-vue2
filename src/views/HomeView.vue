<script lang="ts">
import Vue from "vue";
import TodoItem from "@/components/KKBOX.vue";
import CustomInput from "@/components/form/CustomInput.vue";

//使用 Vue.extend 才能加入 data 的型別
export default Vue.extend({
  components: { CustomInput },
  data(): any {
    return { email: "123" };
  },
});
</script>

<template>
  <div>
    <CustomInput id="email" labelText="Email" v-model="email" />
    {{ email }}
    <!-- <todo-item></todo-item> -->
  </div>
</template>
