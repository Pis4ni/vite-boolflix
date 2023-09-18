<script>
import axios from "axios";
import { store } from "./data/store";

import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {
      title: "Hello vue",
      store
    }
  },
  methods:{
    fetchFilmsByQuery (query){
      store.films = []
      axios.get("" + query).then((res) => {
        store.films = res.data.data;
      },)},
    fetchTvSeriesByQuery (query){
      store.series = []
      axios.get("" + query).then((res) => {
        store.series = res.data.data;
      },)},
    handleSearch(query){
      fetchFilmsByQuery(query)
      fetchTvSeriesByQuery(query)
    }

},
  components: {
    AppHeader,AppMain
  },
};
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss" scoped></style>