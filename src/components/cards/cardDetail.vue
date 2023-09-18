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
};
</script>

<template>
  <div class="card-content">
    <div class="img-element">
      <img :src="card.poster" alt="">

    </div>
    <div class="card-text p-2">
      <span>Name: {{ card.name }}</span>
      <span>Original Name: {{ card.original_title }}</span>
      <div class="languages-flags d-flex align-items-center">
        <span class="me-2">Original language: {{ card.language }}</span>
        <span :class="'fi fi-'+ card.language"></span>
        <span v-if="card.language == 'gb'" class="m-2">/</span>
        <span  v-if="card.language == 'gb'" class="fi fi-us ms-1"></span>
      </div>
      <div class="vote-stars">
        <span>Vote: {{ card.vote }} / 10</span>

        <font-awesome-icon icon="fa-solid fa-star" v-for="n in card.starVote"/>
        <font-awesome-icon icon="fa-regular fa-star" v-for="n in (5 - card.starVote)"/>

      </div>
      <span>ID: {{ card.id }}</span>
    </div>

  </div>
</template>

<style lang="scss" scoped>

  .card-content{
    overflow: hidden;
    position: relative;
    display: flex;
    color: #f9f9f9;
    flex-direction: column;
    align-items: center;
    border: 1px  solid black;
    min-width: 320px;
    height: 440px;
    &:hover .card-text{
      display: block;
    }
    .img-element{
      position: absolute;
      img{
        width: 100%
      }
    }
    .card-text{
      display: none;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      top:50%;
      background-color: #10101099;
      z-index: 1;
      span{
        display: block;
      }

    }
  }
</style>