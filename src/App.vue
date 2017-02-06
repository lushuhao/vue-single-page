<template>
  <div id="app">
    <v-header></v-header>
   <contentScroll></contentScroll>
  </div>
</template>

<script>
  import header from 'components/header/header.vue';
  import contentScroll from 'components/contentScroll/contentScroll.vue';

  const ERR_OK = 0;  // 状态码

  export default {
    data() {
      return {
        seller: {}
      };
    },
    created() {
      this.$http.get('/api/seller').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.seller = response.data;
        }
      });
    },
    components: {
      'v-header': header,
      'contentScroll': contentScroll
    }
  }
  ;
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
