<template>
  <div class="modal-wrapper" :class="[display ? 'active' : '']">
    <div class="modal">
      <h1>{{ message }}</h1>
      <div class="btn-group">
        <button class="secondary" @click="closeModal()">No, Cancel</button>
        <button class="primary" @click="confirmAction()">Yes, Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    message: String,
    display: Boolean
  },
  methods:{
    closeModal(){
      document.querySelector('.modal-wrapper').classList.remove('active');
      document.querySelector('.modal-wrapper').classList.add('not-active');
    },
    confirmAction(){
      this.$emit('del-review')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-wrapper{
  width: 100%;
  height: 100vh;
  background-color: rgba($color: #000000, $alpha: .6);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  align-items: center;
  justify-content: center;

  &.active{
    display: flex;
  }

  .modal{
    width: 40%;
    height: 300px;
    background-color: #fff;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;

    h1{
      color: #1f1d1d;
      text-align: center;
    }

    .btn-group{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 70%;

      button{
        width: 48%;
        display: block;
        padding: 20px;
        outline: none;
        border: none;
        border-radius: 15px;
        cursor: pointer;
        font-weight: 500;
        transition: .2s ease-out;

        &.secondary{
          border: 2px solid $darkest-blue;
          background: transparent;
          
          &:hover{
            background-color: $darkest-blue;
            color: #fff;
          }
          
        }
        &.primary{
          background-color: $darkest-blue;
          color: #fff;

          &:hover{
            background-color: darken($color: $darkest-blue, $amount: 10%);
          }
        }
      }
    }
  }
}
</style>