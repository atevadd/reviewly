<template>
  <div class="review-number">
    <div class="number" v-for="number in 10" :key="number">
      <input
        type="radio"
        name="rating"
        @change="userRatingNumber"
        v-model.lazy="ratingNumber"
        :id="'rating' + number"
        :value="number"
        hidden
      />
      <label :for="'rating' + number">{{ number }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "RatingNumber",
  data() {
    return {
      ratingNumber: 0,
    };
  },
  methods: {
    userRatingNumber() {
      this.$emit("user-rate-number", this.ratingNumber);
    },
  },
};
</script>

<style scoped lang="scss">
.review-number {
  width: 80%;
  border-radius: 5px;
  margin: 15px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  .number {
    position: relative;

    input[type="radio"]:checked + label {
      background: $pink;
      color: #fff;
      border: none;
    }

    label {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      border: 1px solid #4f4f4f;
      border-radius: 50px;
      font-weight: 500;
      cursor: pointer;

      &:hover {
        background: $pink;
        color: #fff;
        border: none;
      }
    }
  }
}
</style>