# vue-slide

# Demo

![](https://ww3.sinaimg.cn/large/69402bf8jw1fajs22iy8ng20xy0gsqv7.gif)

The demo page is [HERE](http://hilongjw.github.io/vue-slide/demo.html).

# Instllation

## npm

```shell
$ npm install vue-slide
```

# Usage

## Basic

```html
<rd-swipe :swipe="swipe">
    <div 
        class="rd-swipe-item" 
        :style="{ 'background-image': `url(${img})` }" 
        v-for="(img, index) in imgs">
    </div>
</rd-swipe>
```
```
<script>
import rdSwipe from 'vue-slide'
export default {
  data () {
    return {
      swipe: {
        activeIndex: 0
      },
      imgs: [
        'http://covteam.u.qiniudn.com/test18.jpg',
        'http://covteam.u.qiniudn.com/test19.jpg',
        'http://covteam.u.qiniudn.com/test20.jpg',
        'http://covteam.u.qiniudn.com/test21.jpg'
      ]
    }
  }
}
</script>
```

## Advance

```
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

```

# License

[The MIT License](http://opensource.org/licenses/MIT)

