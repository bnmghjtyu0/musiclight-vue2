<script lang="ts">
import KkboxSearchItem from "@/components/KKBOX.vue";
import CustomInput from "@/components/form/CustomInput.vue";
import Vue from "vue";

interface Data {
  searchInput: string;
  form: {
    email: string;
  };
}

//使用 Vue.extend 才能加入 data 的型別
export default Vue.extend({
  components: { CustomInput, KkboxSearchItem },
  data(): Data {
    return { searchInput: "", form: { email: "白鹿" } };
  },
  methods: {
    onChange(e: Event) {
      this.searchInput = (e.target as HTMLInputElement).value;
    },
    onSearch() {
      this.searchInput = this.form.email;
    },
  },
  mounted() {
    this.onSearch();
  },
});
</script>

<template>
  <div>
    <CustomInput labelText="Email" v-model="form.email" @enter="onSearch" />
    <button @click="onSearch">搜尋</button>
    <kkbox-search-item :search="searchInput"></kkbox-search-item>
  </div>
</template>
