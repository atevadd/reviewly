<template>
  <!-- The review app input fields starts here -->
  <form class="review">
    <h1>How would you rate your service with us?</h1>
    <RatingNumber @user-rate-number="getRatingNumber($event)" />
    <RatingInput @add-data="getComment($event)" />
  </form>
  <!-- ends here -->

  <!-- The review output starts here -->
  <div class="review-output" v-if="retrievedData.length !== 0">
    <ReviewOutput
      :reviewData="retrievedData"
      @delete-review="deleteReview($event)"
    />
  </div>
  <!-- ends here       -->
</template>

<script>
import RatingNumber from "@/components/RatingNumber";
import RatingInput from "@/components/RatingInput";
import ReviewOutput from "@/components/ReviewOutput";

export default {
  name: "App",
  components: {
    RatingNumber,
    RatingInput,
    ReviewOutput,
  },
  data() {
    return {
      ratingNumber: "",
      comment: "",
      reviewData: [],
      id: 0,
      retrievedData: [],
    };
  },
  methods: {
    getComment(comment) {
      this.comment = comment;
      let date = new Date();
      this.id += 1;

      // adding the user review to the array
      this.reviewData.push({
        id: this.id,
        rateNumber: this.ratingNumber,
        comment: this.comment,
        datePosted: date.toDateString(),
      });

      // adding the reviewData array to local Storage
      this.addReview(this.reviewData);
      this.ratingNumber = "";
      this.comment = "";
      this.displayReview();
    },
    getRatingNumber(num) {
      this.ratingNumber = num;
    },
    addReview(data) {
      if (localStorage.getItem("reviewly") !== null) {
        let storedData = JSON.parse(localStorage.getItem("reviewly"));
        storedData.push(data[data.length - 1]);
        localStorage.setItem("reviewly", JSON.stringify(storedData));
      } else {
        let convertedData = JSON.stringify(data);
        localStorage.setItem("reviewly", convertedData);
      }
    },
    displayReview() {
      // retriving the stored reviews from local storage
      let returnedData = JSON.parse(localStorage.getItem("reviewly"));

      // checking if the retrieved data exists
      if (returnedData === null) { 
        //sets retrievedData variable to an empty array if its null.
        this.retrievedData = []; 
      } else {
        // sets retrievedData to the existing array.
        this.retrievedData = returnedData;
      }
    },
    deleteReview(id) {
      // fetching the reviews from local storage
      let storedData = JSON.parse(localStorage.getItem("reviewly"));

      let filteredReview = storedData.filter((item) => item.id !== id);

      localStorage.setItem("reviewly", JSON.stringify(filteredReview));

      this.displayReview();
    },
  },
  mounted() {
    this.displayReview();
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "montserrat", sans-serif;
}

body {
  background-color: $darker-blue;
  width: 100%;
  display: block;

  .review {
    display: block;
    margin: 20px auto;
    width: 70%;
    background-color: $gray;
    border-radius: 10px;
    padding: 20px 0;

    @include mobile {
      width: 100%;
      margin: 0;
      padding: 10px;
      border-radius: 0;
    }
    @include tablet {
      width: 85%;
      padding: 10px;
      border-radius: 10px;
    }

    h1 {
      font-size: 1.6rem;
      font-weight: 600;
      text-align: center;
      padding: 20px 0;
      color: #333;
      text-transform: capitalize;
    }
  }

  .review-output {
    width: 70%;
    margin: 50px auto 20px;
    display: block;

    @include mobile {
      width: 90%;
    }

    @include tablet {
      width: 85%;
    }
  }
}
</style>
