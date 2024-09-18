<script lang="ts">
import Vue from "vue";
import axios from "axios";
import type {
  SearchResponse,
  Oauth2TokenResponse,
} from "@/models/kkbox-api.model";

interface Data {
  searchData: SearchResponse | null;
}

//使用 Vue.extend 才能加入 data 的型別
export default Vue.extend({
  data(): Data {
    return {
      searchData: null,
    };
  },
  mounted() {
    const urlencoded = new URLSearchParams();
    urlencoded.append("client_id", "553a1507830c7ab1e16a170256e21983");
    urlencoded.append("grant_type", "client_credentials");
    urlencoded.append("client_secret", "8429837199a5542bf73c5857c1421ebc");

    axios
      .post<Oauth2TokenResponse>("/oauth2/token", urlencoded, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then(async (response) => {
        const searchRes = await axios.get<SearchResponse>(
          "https://api.kkbox.com/v1.1/search?q=五月天&type=track&territory=TW",
          {
            headers: {
              Authorization: `${response.data.token_type} ${response.data.access_token}`,
            },
          }
        );

        const json = await searchRes;

        this.searchData = json.data;
      });
  },
});
</script>

<template>
  <div v-if="searchData">
    <ul>
      <li v-for="(item, itemIndex) in searchData.tracks.data" :key="itemIndex">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
