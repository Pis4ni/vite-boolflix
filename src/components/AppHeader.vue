<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "boolflix",
    };
  },

  // components: {
  //   MyComponent,
  // },
};
</script>
<!-- todo  devo costruire un header con un logo e una barra di ricerca, l header fara un emit il quale conterra il valore della query cercato dall utente -->
<template>
  <header class="p-3">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <h1 class="text-uppercase text-danger">{{ title }}</h1>
        

        <div class="input-group w-50">
          <input
            type="text"
            class="form-control"
            placeholder="Search for films or TV Series"
            aria-label="searchBar"
            aria-describedby="button-searchBar"
          />
          <button
            class="btn btn-outline-danger"
            type="button"
            id="button-searchBar"
          >
            <!-- todo fa icon -->
            Search
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header{
    background-color: #000000;

}
</style>
