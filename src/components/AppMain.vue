<script>
import cardList from "../components/cards/cardList.vue";

export default {
  data() {
    return {
      title: "Hello main"
    }
  },
  components: {
    cardList,
  },
};
</script>

<template>
    <main>
        
        <!-- list -->
        <cardList />
        
    </main>
</template>

<style lang="scss" scoped>
    main{
        overflow: auto;
        height: calc(100vh - 88px);
        background-color: #343434;
    }
</style>