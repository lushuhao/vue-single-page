// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';

import 'common/scss/index.scss';

Vue.use(VueRouter);
Vue.use(VueResource);

let router = new VueRouter({
  linkActiveClass: 'active',
  routes: []
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  router: router,
  render: h => h('App')
});
