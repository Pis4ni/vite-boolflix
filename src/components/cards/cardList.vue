<script>
import cardDetail from "./cardDetail.vue";
import { store } from "../../data/store";

export default {
  data() {
    return {
      title: "Hello cardList",
      store
    }
  },
  components: {
    cardDetail,
  },
};
</script>

<template>
    <main>

        <div class="container">
          <h2 v-if="store.films.length !== 0">Film</h2>
          <div class="d-flex slider">
              
            <!-- film -->
            <cardDetail v-for="card in store.films" key="card.id" :card="card" />
              
          </div>
          <h2 v-if="store.series.length !== 0">TV Series</h2>
          <div class="d-flex slider">
      
             <!-- series -->
             <cardDetail v-for="card in store.series" key="card.id" :card="card" />
          </div>
        </div>
    </main>

  
  
</template>

<style lang="scss" scoped>
main{
    color: #f9f9f9;
    .slider{
        max-width: 100%;
        overflow-x:auto ;
    }
}
</style>