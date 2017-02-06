<template>
  <div class="column-wrapper">
    <v-title :titleNumber="1"></v-title>
    <section class="column">
      <ul class="column-ul">
        <li v-for="item in News" class="column-list">
          <img :src="item.img" alt="" class="column-big">
          <h1 class="column-title">{{item.title}}</h1>
          <div class="footer">
            <p class="avatar-wrapper">
              <img :src="item.avatar" alt="" class="avatar">
            </p>
            <p class="column-name">{{item.name}}</p>
          </div>
        </li>
      </ul>
    </section>
    <section class="column-aside">
      <ul>
        <li v-for="item in news" class="aside-list">
          <section class="aside-wrapper">
            <aside class="aside">
              <p class="avatar-wrapper">
                <img :src="item.avatar" alt="" class="avatar">
              </p>
            </aside>
            <article class="article-content">
              <header>
                <h1>{{item.title}}</h1>
              </header>
              <div class="message">
                <p>{{item.name}}
                  <span>{{item.company}}</span>
                </p>
                <p>{{item.time}}</p>
              </div>
              <footer class="footer">
                <div v-show="item.topic" class="topic">{{item.topic}}</div>
                <div class="content">{{item.content}}</div>
              </footer>
            </article>
          </section>
        </li>
      </ul>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import title from 'components/title/title';

  export default {
    props: [],
    data() {
      return {
        News: [
          {
            img: 'http://m.91bee.com//image/bee1486106874127.jpg',
            title: '南松: 开盘八法之三点低盘实战运用20170203',
            avatar: 'http://m.91bee.com//image/bee1464144728652.jpg',
            name: '南松'

          },
          {
            img: 'http://m.91bee.com//image/bee1486100914444.jpg',
            title: '史月波: 央行利率走高 资金面供给偏紧20170203',
            avatar: 'http://m.91bee.com//image/bee1457484323885.jpg',
            name: '史月波'
          },
          {
            img: 'http://m.91bee.com//image/bee1486087750880.jpg',
            title: '周雪松: 技术形态多头蓄势 新年红包行情可期20170203',
            avatar: 'http://m.91bee.com//image/bee1459990438445.jpg',
            name: '周雪松'

          },
          {
            img: 'http://m.91bee.com//image/bee1486106066239.jpg',
            title: '解密龙虎榜 ( 下午 ) : 互动答疑 20170203',
            avatar: 'http://m.91bee.com//image/bee1459830952333.jpg',
            name: '张姚'

          }
        ],
        news: [
          {
            avatar: 'http://m.91bee.com//image/bee1464662379783.jpg',
            title: '良性调整，逢低布局',
            name: '黄岑栋',
            company: '国金证券策略分析师',
            time: '1小时前',
            topic: '市场判断',
            content: '    由于节假效应，大盘在节前节后成交量萎缩明显。上周五节假日首个交易日，由于节假日期间外围股市普遍调整，且国内央行上调逆回购、SLF利率，大盘也随之出现调整。但整体而言，跌幅较大的个股数并不多，显示市场人气较为稳定。'
          },
          {
            avatar: 'http://m.91bee.com//image/bee1453086432470.jpg',
            title: '春耕行情逢低布局更符合管理层的思路',
            name: '徐世荣',
            company: '大通证券首席投资顾问',
            time: '1小时前',
            content: '    鸡年的第一个交易日也是"立春”日，市场并未走出开门红，主要指数全线尽墨，股指小幅高开后一路走低，最低下探至3136.01点，此后跌幅略有收窄，但尾盘再度回落。'
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
  .column-wrapper {

    .column {

      .column-ul {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 0 5px;

        .column-list {
          width: 50%;
          padding: 11px 10px;
          box-sizing: border-box;

          .column-big {
            width: 100%;
            height: 100px;
          }

          .column-title {
            font-size: 18px;
            color: #404040;
          }
          .footer {
            display: flex;
            margin-top: 5px;
            align-items: center;

            .avatar-wrapper {
              display: inline-block;
              margin-right: 6px;
              width: 32px;
              height: 32px;
              border-radius: 50%;
              overflow: hidden;

              .avatar {
                width: 100%;
              }
            }

            .column-name {
              display: inline-block;
              font-size: 14px;
              color: #404040;
            }
          }
        }
      }
    }

    .column-aside {
      margin-top: 10px;
      position: relative;

      .aside-list {
        position: relative;
        overflow: hidden;
        padding: 11px 15px;
        box-sizing: border-box;

        .aside-wrapper {
          display: flex;
          justify-content: space-between;
          padding: 5px 0;

          .aside {
            width: 15%;

            .avatar-wrapper {
              display: inline-block;
              margin-right: 6px;
              width: 40px;
              height: 40px;
              border-radius: 50%;
              overflow: hidden;

              .avatar {
                width: 100%;
              }
            }
          }

          .article-content {
            margin-left: 10px;
            width: 100%;

            .message {
              padding: 3px 0 1px;
              display: flex;
              justify-content: space-between;
              color: #bbb;
              font-size: 14px;

            }

            .footer {
              max-height: 61px;
              overflow: hidden;

              .topic {
                margin: 10px 0;
                font-size: 30px;
                color: #757272;
                font-weight: 700;
                font-family: 'Microsoft YaHei', arial, sans-serif, 'Droid Sans Fallback';
              }

              .content {
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }
</style>