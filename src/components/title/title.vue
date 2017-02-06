<template>
  <div class="title">
    <header class="hd">
      <h1 class="title-h1">
        {{ titleH[titleNumber] }}
      </h1>
    </header>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      titleNumber: {
        type: Number
      }
    },
    data() {
      return {
        titleH: ['热点', '名家专栏', '名家在线', '投资学堂']
      };
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "../../common/scss/mixin";

  .title {
    position: relative;

    .hd {
      padding: 10px 15px;
      @include border-1px(rgb(215, 215, 215));
      line-height: 22px;

      &:before {
        content: '';
        display: block;
        position: absolute;
        width: 5px;
        background-color: #f9d602;
        left: 0;
        top: 10px;
        vertical-align: middle;
        height: 22px;
      }

      .title-h1 {
        font-size: 18px;
        color: #404040;
      }
    }
  }
</style>