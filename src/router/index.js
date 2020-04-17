import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import activate from '@/components/activate.vue'
import appointment from '@/components/appointment'
import login from '@/components/login'
import card from '@/components/cardList'

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
    }
  ]
})
