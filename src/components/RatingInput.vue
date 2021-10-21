<template>
  <div class="review-comment">
    <input type="text" @keyup="validateData"  name="comment" id="comment" v-model="comment" placeholder="What do you have to say about our service" autocomplete="off">
    <small id="error" class="submit-error">Review comment cannot be empty</small>
    <button type="submit" @click.prevent="review">Send</button>
  </div>
</template>

<script>
export default {
  name: "RatingInput",
  data(){
    return{
      comment: '',
    }
  },
  methods:{
    review(){
      if(this.comment === ''){
        document.getElementById('comment').classList.add('error');
        document.getElementById('error').classList.add('toggle');
      }else{
        document.getElementById('comment').classList.remove('error');
        this.$emit('add-data', this.comment);
      }
    },
    validateData(){
      if(this.comment !== ''){
        document.getElementById('error').classList.remove('toggle');
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .review-comment{
    width: 80%;
    position: relative;
    margin: 40px auto;

    input{
      display: block;
      position: relative;
      width: 100%;
      height: 60px;
      border: 1px solid #4f4f4f;
      border-radius: 5px;
      padding: 0 115px 0 10px;
      background: transparent;
      color: #171717;
      font-size: .9rem;
      font-family: inherit;

      &:focus{
        border: 2px solid #171717;
      }

      &.error{
        border: 2px solid #fc2e2e;
      }
    }
    .submit-error{
      visibility: hidden;
      color: #fc2e2e;
      font-style: italic;

      &.toggle{
        visibility: visible;
      }
    }
    button{
      position: absolute;
      right: 10px;
      top: 30%;
      transform: translateY(-30%);
      padding: 10px 30px;
      background-color: $pink;
      // background-color: $darkest-blue;
      color: #fff;
      font-weight: 500;
      outline: none;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: .2s ease;

      &:hover{
        background-color: darken($color: $pink, $amount: 10%);
      }
    }
  }
</style>