// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import rem from './rem/rem';
import Axios from 'axios';
import './assets/font-awesome-4.7.0/css/font-awesome.css';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import 'swiper/dist/css/swiper.css';
import store from './vuex/store';

Axios.defaults.withCredentials=true; //设置默认的cookie
Vue.config.productionTip = false;
Vue.prototype.gloBaL='192.168.1.101';//全局变量
// Vue.prototype.gloBaL='192.168.43.94';//全局变量
Vue.use(Mint);
rem();//动态设置rem
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
