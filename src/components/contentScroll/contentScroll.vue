<template>
  <div class="contentScroll">
    <slider></slider>
    <v-content></v-content>
  </div>
</template>

<script type="text/ecmascript-6">
  import slider from 'components/slider/slider.vue';
  import content from 'components/content/content.vue';

  export default {
    props: {},
    components: {
      'slider': slider,
      'v-content': content
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  
</style>