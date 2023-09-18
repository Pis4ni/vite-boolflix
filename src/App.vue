<script>
import axios from "axios";
import { store } from "./data/store";

import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {
      title: "Hello vue",
      store,
    };
  },
  methods: {
    fetchFilmsByQuery(query) {
      this.store.films = [];
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=ec7c2a01f53a9f1575d6b83c89996dd0&query=" +
            query
        )
        .then((res) => {
          const moviesData = res.data.results.map((movie) =>{

            const id = movie.id
            const title = movie.title
            const original_title = movie.original_title
            let original_language = movie.original_language
            const vote_average = movie.vote_average
            const starVote = Math.round((movie.vote_average /2 )) 

            const poster = 'https://image.tmdb.org/t/p/w342' + movie.poster_path

            original_language = (original_language == 'en') ? 'gb' : original_language;
            original_language = (original_language == 'ja') ? 'jp' : original_language;


            return{
              id,
              name:title,
              original_title,
              language:original_language,
              vote: vote_average,
              poster: poster,
              starVote:starVote

            }

          })
          store.films = moviesData 
          
          console.log(moviesData);
        });
    },
    fetchTvSeriesByQuery(query) {
      this.store.series = [];
      axios
      .get(
          "https://api.themoviedb.org/3/search/tv?api_key=ec7c2a01f53a9f1575d6b83c89996dd0&query=" +
            query
        )
        .then((res) => {
          const seriesData = res.data.results.map((tvSerie) =>{
            const id = tvSerie.id
            const title = tvSerie.name
            const original_title = tvSerie.original_name
            let original_language = tvSerie.original_language
            const vote_average = tvSerie.vote_average
            const starVote = Math.round((tvSerie.vote_average /2 )) 
            const poster = 'https://image.tmdb.org/t/p/w342' + tvSerie.poster_path

            original_language = (original_language == 'en') ? 'gb' : original_language;
            original_language = (original_language == 'ja') ? 'jp' : original_language;
            

            return{
              id,
              name:title,
              original_title,
              language:original_language,
              vote: vote_average,
              poster: poster,
              starVote:starVote

            }

          })
          store.series = seriesData     
          console.log(seriesData);
        });
    },
    handleSearch(query) {
      this.fetchFilmsByQuery(query);
      this.fetchTvSeriesByQuery(query);

    },
  },
  components: {
    AppHeader,
    AppMain,
  },
};
</script>

<template>
  <AppHeader @search="handleSearch" />
  <AppMain />
</template>

<style lang="scss" scoped></style>
