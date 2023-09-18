<script>


export default {
  data() {
    return {
      title: "Hello cardDetail",

    }
  },
  props:{
    card:Object
  }

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <div class="card-content p-3">

    <span>{{ card.name }}</span>
    <span>{{ card.original_title }}</span>
    <span>{{ card.language }}</span>
    <span :class="'fi fi-'+ card.country"></span>
    <span class="fi fi-"></span>
    <span>{{ card.vote }}</span>
    <span>{{ card.id }}</span>

  </div>
</template>

<style lang="scss" scoped>
  .card-content{
    display: flex;
    color: #f9f9f9;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 1px 1px #101010;
    min-width: 320px;
  }
</style>