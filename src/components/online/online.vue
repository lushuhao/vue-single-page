<template>
  <div>
    <v-title :titleNumber="2"></v-title>
    <section class="online-wrapper">
      <ul class="online">
        <li v-for="item in online" class="online-list">
          <a>
            <div class="img-wrapper">
              <img :src="item.img" alt="" class="img">
            </div>
            <p class="name">{{item.name}}</p>
          </a>
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
        online: [
          {
            img: 'http://m.91bee.com//image/bee1444301121295.png',
            name: '钱启敏'
          },
          {
            img: 'http://m.91bee.com//image/bee1467592688746.jpg',
            name: '郑楠'
          },
          {
            img: 'http://m.91bee.com//image/bee1459538240416.jpg',
            name: '蔡钧毅'
          },
          {
            img: 'http://m.91bee.com//image/bee1459538431197.jpg',
            name: '阮军'
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
  .online-wrapper {
    padding: 20px;

    .online {
      display: flex;
      justify-content: space-between;

      .online-list {
        text-align: center;

        .img-wrapper {
          display: inline-block;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          overflow: hidden;

          .img{
            width:100%;
          }
        }
        
        .name{
          font-size: 14px;
          color: #404040;
        }
      }
    }
  }
</style>