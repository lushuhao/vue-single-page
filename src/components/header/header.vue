<template>
  <header class="bar">
    <nav class="header-nav">
      <a href="#" class="header-a">
        <i class="icon-menu"></i>
      </a>
    </nav>
    <h1 class="header-title">小蜂财经</h1>
  </header>
</template>

<script type="text/ecmascript-6">
  export default {
    props: []
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  .bar {
    width: 100%;
    height: 44px;
    background: rgb(249, 214, 2);
    position: relative;

    .header-nav {
      display: inline-block;
      line-height: 44px;
      padding: 0 10px;

      .header-a {
        height: 44px;
        padding: 10px;
        margin: 0 -10px;
        font-size: 24px;
      }
    }

    .header-title{
      display: inline-block;
      position: absolute;
      right:40px;
      left:40px;
      line-height:44px;
      width:auto;
      vertical-align: top;
      text-align: center;
      font-size: 17px;
    }

  }
</style>