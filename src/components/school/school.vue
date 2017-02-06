<template>
  <div>
    <v-title :titleNumber="3"></v-title>
    <div class="m-class class0 border-2px">
      <header>
        <h1 class="class-grade">{{classes[0]}}</h1>
      </header>
      <ul class="class-ul">
        <li v-for="item in school1" class="school-list">
          <div class="classes">
            <section>
              <header class="img-wrapper">
                <img :src="item.img" alt="" class="img">
              </header>
              <article class="class-title">{{item.title}}</article>
              <footer class="class-message">
                <p>{{item.name}}</p>
                <p class="price">{{item.price}}</p>
              </footer>
            </section>
          </div>
        </li>
      </ul>
    </div>
    <div class="m-class class1  border-2px">
      <header>
        <h1 class="class-grade">{{classes[1]}}</h1>
      </header>
      <ul class="class-ul">
        <li v-for="item in school2" class="school-list">
          <div class="classes">
            <section>
              <header class="img-wrapper">
                <img :src="item.img" alt="" class="img">
              </header>
              <article class="class-title">{{item.title}}</article>
              <footer class="class-message">
                <p>{{item.name}}</p>
                <p class="price">{{item.price}}</p>
              </footer>
            </section>
          </div>
        </li>
      </ul>
    </div>
    <div class="m-class class2 border-2px">
      <header>
        <h1 class="class-grade">{{classes[2]}}</h1>
      </header>
      <ul class="class-ul">
        <li v-for="item in school3" class="school-list">
          <div class="classes">
            <section>
              <header class="img-wrapper">
                <img :src="item.img" alt="" class="img">
              </header>
              <article class="class-title">{{item.title}}</article>
              <footer class="class-message">
                <p>{{item.name}}</p>
                <p class="price">{{item.price}}</p>
              </footer>
            </section>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import title from 'components/title/title';

  export default {
    props: [],
    data() {
      return {
        classes: ['初级课程', '中级课程', '高级课程'],
        school1: [
          {
            img: 'http://m.91bee.com/image/bee1452851637238.jpg',
            title: '生命K线：用K线判断头部和底部',
            name: '钱启敏',
            price: '¥5.0'
          },
          {
            img: 'http://m.91bee.com/image/bee1452858568361.jpg',
            title: '强势股操盘法：寻找强势板块与强势股',
            name: '郑楠',
            price: '¥5.0'
          }
        ],
        school2: [
          {
            img: 'http://m.91bee.com/image/bee1452841673859.jpg',
            title: '李萤的价值投资：我们为什么要进行价值投资',
            name: '李萤',
            price: '¥5.0'
          },
          {
            img: 'http://m.91bee.com/image/bee1452838327700.jpg',
            title: '龙虎榜秘籍：龙虎榜总纲',
            name: '张姚',
            price: '¥0.0'
          }
        ],
        school3: [
          {
            img: 'http://m.91bee.com/image/bee1460360760877.jpg',
            title: '《黄金波浪战法》第一课投资股票是王道',
            name: '余炜',
            price: '¥100.0'
          },
          {
            img: 'http://m.91bee.com/image/bee1460696951460.jpg',
            title: '“一线分牛熊ABK”战法（一）',
            name: '袁建新',
            price: '¥380.0'
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

  .m-class {

    .class-grade {
      padding: 10px 15px 0;
      font-size: 16px;
      color: #383838;
    }

    .class-ul {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 0 5px;

      .school-list {
        width: 50%;
        padding: 11px 10px;
        box-sizing: border-box;

        .classes {

          .img-wrapper {
            height: 100px;

            .img {
              width: 100%;
            }
          }

          .class-title {
            font-size: 18px;
            color: #404040;
          }

          .class-message {
            display: flex;
            justify-content: space-between;
            color: #7d7d7d;

            .price {
              color: #ffac33;
            }
          }
        }
      }
    }
  }

  .border-2px{
    @include border-1px(rgb(215, 215, 215));
  }
</style>