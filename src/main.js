// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader
import App from './App';
import router from './router';


// icons
import 'vue-awesome/icons/home'
import 'vue-awesome/icons/book'
import 'vue-awesome/icons/info'
import 'vue-awesome/icons/align-justify'
import 'vue-awesome/icons/caret-square-down'

import VueTouch from 'vue-touch';

import Icon from 'vue-awesome/components/Icon'

// globally (in your main .js file)
Vue.component('icon', Icon)
// import cordova from 'cordova';

Vue.use(Vuetify);
Vue.use(VueTouch);

Vue.config.productionTip = false;

Vue.config.ignoredElements = [];

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});

// function onDeviceReady() {
//   // console.log(cordova.file);
// }
// document.addEventListener('deviceready', onDeviceReady, false);
