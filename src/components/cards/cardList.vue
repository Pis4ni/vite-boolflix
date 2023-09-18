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
  <h1>{{ title }}</h1>
  <div class="container">
        <div class="d-flex slider">

          <!-- film -->
          <cardDetail v-for="card in store.films" key="card.id" :card="card" />
          
        </div>
        <div class="d-flex slider">

            <!-- series -->
            <cardDetail v-for="card in store.series" key="card.id" :card="card" />
        </div>
  </div>
  
  
</template>

<style lang="scss" scoped>
.slider{
    max-width: 100%;
    overflow-x:auto ;
}
</style>