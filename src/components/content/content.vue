<template>
  <div class="content-wrapper">
    <hotNews></hotNews>
    <column></column>
    <online></online>
    <school></school>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import hotNews from 'components/hotNews/hotNews.vue';
  import column from 'components/column/column.vue';
  import online from 'components/online/online.vue';
  import school from 'components/school/school.vue';

  export default {
    props: [],
    created() {
      this.$nextTick(() => {
        this._initScroll();
      });
    },
    methods: {
      _initScroll() {
        this.contentScroll = new BScroll(this.$refs.contentWrapper, {});
      }
    },
    components: {
      'hotNews': hotNews,
      'column': column,
      'online': online,
      'school': school
    }

  };
</script>

<style lang="scss" rel="stylesheet/scss">
  .content-wrapper {
    display: block;
    width: 100%;
    background: #ffffff;
    font-size: 17px;
    line-height:21px;
  }
</style>