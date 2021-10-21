<template>
  <div class="review-output-component" v-for="data in reviewData" :key="data.id">
    <span class="review-number">{{ data.rateNumber }}</span>
    <p class="review-comment">{{ data.comment }}</p>
    <span class="cancel" title="delete" @click="deleteReview(data.id)">x</span>
  </div>
</template>

<script>
export default {
  name: "ReviewOutput",
  props: {
    reviewData: Array
  },
  emits:['delete-review'],
  methods:{
    deleteReview(id){
      this.$emit('delete-review', id);
    }
  }
}
</script>

<style scoped lang="scss">
  .review-output-component{
    position: relative;
    width: 100%;
    border-radius: 10px;
    padding: 38px;
    background-color: $gray;
    margin-bottom: 30px;

    &:hover > .cancel{
      visibility: visible;
    }

    .review-number{
      width: 50px;
      height: 50px;
      background-color: $pink;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: 2px solid $gray;
      position: absolute;
      top: -15px;
      left: -15px;
    }
    .review-comment{
      display: block;
      line-height: 1.7;
      font-size: .9rem;

    }

    .cancel{
      visibility: hidden;
      position: absolute;
      right: 15px;
      top: 10px;
      font-size: 1.4rem;
      cursor: pointer;
      transition: visibility .25s ease;

      &:hover{
        color: #fc2e2e;
      }
    }
  }
</style>