import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
// 子组件注册到全局
import HeadNav from './components/HeadNav'
import AsideNav from './components/AsideNav'
import Carousel from './components/Carousel'
import FootNav from './components/FootNav'
import Tab from './components/Tab'


Vue.use(ElementUI);

Vue.component('HeadNav',HeadNav)
Vue.component('AsideNav',AsideNav)
Vue.component('Carousel',Carousel)
Vue.component('FootNav',FootNav)
Vue.component('Tab',Tab)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
