<script lang="ts">
import Vue from "vue";
import KkboxSearchItem from "@/components/KKBOX.vue";
import CustomInput from "@/components/form/CustomInput.vue";

interface Data {
  search: string;
}

//使用 Vue.extend 才能加入 data 的型別
export default Vue.extend({
  components: { CustomInput, KkboxSearchItem },
  data(): Data {
    return { search: "" };
  },
});
</script>

<template>
  <div>
    <CustomInput id="email" labelText="Email" v-model="search" />
    <kkbox-search-item :search="this.search"></kkbox-search-item>
  </div>
</template>
