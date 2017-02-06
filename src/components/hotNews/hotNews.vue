<template>
  <section class="hot-wrapper">
    <v-title :titleNumber="0"></v-title>
    <article class="hotNews">
      <ul>
        <li v-for="item in News" class="new-list border-1px">
          <aside class="img-wrapper">
            <img :src="item.img" alt="" class="img">
            <div class="cover">
              <p class="cover-content">解盘</p>
            </div>
          </aside>
          <section class="content-wrapper">
            <a>
              <h1 class="title">{{item.title}}</h1>
            </a>
            <div class="date">{{item.date}}</div>
            <footer class="time">{{item.time}}</footer>
          </section>
        </li>
      </ul>

    </article>
  </section>
</template>

<script type="text/ecmascript-6">
  import title from 'components/title/title';

  export default {
    props: [],
    data() {
      return {
        News: [
          {
            img: 'http://m.91bee.com/image/bee1486106829511.jpg',
            title: '南松: 反弹结束 沪指破3000',
            date: '20170203',
            time: '02-03 16:49'
          },
          {
            img: 'http://m.91bee.com/image/bee1486086216429.jpg',
            title: '李博: 特朗普政策不确定性仍然存在',
            date: '20170203',
            time: '02-03 09:51'
          },
          {
            img: 'http://m.91bee.com/image/bee1486106007838.jpg',
            title: '老袁: 假日模式仍未结束 成交放大再作选择',
            date: '20170203',
            time: '02-03 16:49'
          }
        ]
      };
    },
    components: {
      'v-title': title
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "../../common/scss/mixin";
  @import "../../common/scss/base";

  .hot-wrapper {

    .hotNews {
      position: relative;

      .new-list {
        display: flex;
        padding: 10px 15px;

        .img-wrapper {
          flex: 0 0 40%;
          max-height: 90px;

          .img {
            width: 100%;
          }

          .cover {
            position: absolute;
            z-index: 10;
            top: 12px;
            left: 17px;
            background-color: rgba(255, 172, 51, 0.8);
            font-size: 12px;
            padding: 0 5px;
            color: #fff;
          }

        }

        .content-wrapper {
          flex: 1 55%;
          margin-left: 5%;

          .title {
            padding:0 0 5px;
            font-size: 18px;
            color: rgb(64, 64, 64);

            &:hover {
              color: #5a5a5a;
            }
          }

          .date {
            font-size: 16px;
            color: rgb(64, 64, 64);
          }

          .time {
            position: absolute;
            bottom: 10px;
            font-size: 14px;
            line-height: 1.2;
            color: #7d7d7d;
          }
        }
      }
      .border-1px {
        @include border-1px(#c8c7cc);
      }

    }
  }
</style>