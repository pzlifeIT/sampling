// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/js/rem'
import Vant from 'vant';
import {request} from './assets/js/ajax'
import 'vant/lib/index.css';
import 'element-ui/lib/theme-chalk/index.css';
import Elementui from 'element-ui'
import Router from 'vue-router'
Vue.prototype.$request = request
Vue.config.productionTip = false
Vue.use(Vant)
Vue.use(Router)
Vue.use(Elementui)
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
