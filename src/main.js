// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import VueI18n from 'vue-i18n'
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import './style/element-library.css'
import './style/homepage.less'
import './style/index.less'
import en from './lang/en';
import zh from './lang/zh';
// import VueParticles from 'vue-particles'

Vue.config.productionTip = false
// Vue.use(VueParticles)
Vue.use(ElementUI);
Vue.use(VueI18n);

const messages = {
  //英文
  en: en,
  //简体中文
  zh: zh
}
const i18n = new VueI18n({
  //定义默认语言
  locale: 'en',
  messages
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
});
