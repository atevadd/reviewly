module.exports = {
  css:{
    loaderOptions:{
      sass:{
        prependData: `
        @import "@/assets/sass/_variable.scss";
        @import "@/assets/sass/_mixins.scss";
        `
      }
    }
  }
}