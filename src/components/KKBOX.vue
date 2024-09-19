<script lang="ts">
import type {
  Oauth2TokenResponse,
  SearchResponse,
} from "@/models/kkbox-api.model";
import axios from "axios";
import Vue from "vue";

interface Data {
  kkboxSearchRes: SearchResponse | null;
}

export default Vue.extend({
  name: "kkbox-search-item",

  data(): Data {
    return {
      kkboxSearchRes: null,
    };
  },
  props: {
    search: {
      type: String,
      required: true,
    },
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
        const searchRes = (await axios.get)<SearchResponse>(
          "https://api.kkbox.com/v1.1/search?q=五月天&type=track&territory=TW",
          {
            headers: {
              Authorization: `${response.data.token_type} ${response.data.access_token}`,
            },
          }
        );

        const json = await searchRes;

        this.kkboxSearchRes = json.data;
      });
  },

  computed: {
    getTracks() {
      return (
        this.kkboxSearchRes?.tracks?.data.filter(
          (d) => d.name.indexOf(this.search) > -1
        ) ?? []
      );
    },
  },
});
</script>

<template>
  <div v-if="kkboxSearchRes">
    <ul>
      <li v-for="(item, itemIndex) in getTracks" :key="itemIndex">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
