import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import activate from '@/components/activate.vue'
import appointment from '@/components/appointment'
import login from '@/components/login'
import card from '@/components/cardList'
import qrcode from '@/components/qrcode'
import tabble from '@/components/tabble'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'activate',
      component: activate
    },
    {
      path: '/appointment',
      name: 'appointment',
      component: appointment
    }, {
      path: '/login',
      name: 'login',
      component: login
    }, {
      path: '/card',
      name: "cardList",
      component: card
    }, {
      path: '/qrcode',
      name: 'qrcode',
      component: qrcode
    }, {
      path: '/tabble',
      name: 'tabble',
      component: tabble
    }
  ]
})
