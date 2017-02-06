<template>
  <div class="slider">
    <swipe class="my-swipe">
      <swipe-item class="slide1"></swipe-item>
      <swipe-item class="slide2"></swipe-item>
      <swipe-item class="slide3"></swipe-item>
    </swipe>
  </div>
</template>

<script type="text/ecmascript-6">
  require('vue-swipe/dist/vue-swipe.css');
  import { Swipe, SwipeItem } from 'vue-swipe';

  export default {
    el: 'body',
    props: [],
    components: {
      'swipe': Swipe,
      'swipe-item': SwipeItem
    }

  };
</script>

<style lang="scss" rel="stylesheet/scss">
  .slider{
    height: 187px;

    .my-swipe {
      width:100%;
      color: #fff;
      font-size: 62px;
      text-align: center;
    }

    .slide1 {
      width:100%;
      background-image: url('slider1.jpg');
      background-size: 100%;
    }

    .slide2 {
      background-image: url('slider2.jpg');
      background-size: 100%;
    }

    .slide3 {
      background-image: url('slider3.jpg');
      background-size: 100%;
    }
  }
</style>