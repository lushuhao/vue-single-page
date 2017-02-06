<style>
body {
  padding: 0;
  margin: 0;
  background: #2196F3;
}
.contacts {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #fff;
  margin-bottom: 1rem;
}
.contact {
  color: #fff;
  font-size: 14px;
  width: 100%;
  line-height: 3rem;
  text-align: center;
  border-bottom: 2px solid rgba(0,0,0,0);
  cursor: pointer;
}
.contact.active {
  border-bottom: 2px solid #fff;
}
.swiper-box {
  height: 600px;
  width: 1000px;
  margin: auto;
}
.swiper-box  .rd-swipe {
  height: 500px;
  width: 1000px;
}
</style>

<template>
  <div id="app">
    <div class="swiper-box">
      <div class="contacts">
        <div 
          class="contact"
          :class="{ 'active': index === swipe.activeIndex }" 
          v-for="(contact, index) in contacts"
          @click="turnTo(index)"
        >
          {{contact.text}}
        </div>
      </div>
      <rd-swipe :swipe="swipe">
        <div class="rd-swipe-item" :style="{ 'background-image': `url(${img})` }" v-for="(img, index) in imgs">
        </div>
      </rd-swipe>
    </div>
  </div>
</template>

<script>
import rdSwipe from './Slide.vue'
export default {
  data () {
    return {
      swipe: {
        activeIndex: 0
      },
      contacts: [{
        text: 'Page 1'
      }, {
        text: 'Page 2'
      }, {
        text: 'Page 3'
      }, {
        text: 'Page 4'
      }],
      imgs: [
        'http://covteam.u.qiniudn.com/test18.jpg',
        'http://covteam.u.qiniudn.com/test19.jpg',
        'http://covteam.u.qiniudn.com/test20.jpg',
        'http://covteam.u.qiniudn.com/test21.jpg'
      ]
    }
  },
  components: {
    rdSwipe
  },
  methods: {
    turnTo (index) {
      this.$children.map(swipe => {
          if (swipe.turnTo) {
              swipe.turnTo(index)
          }
      })
    }
  }
}
</script>
