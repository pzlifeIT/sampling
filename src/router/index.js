import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import activate from '@/components/activate.vue'
import appointment from '@/components/appointment'
import login from '@/components/login'
import card from '@/components/cardList'
import qrcode from '@/components/qrcode'
import tabble from '@/components/tabble'
import ctc from '@/components/ctc'
import project from '@/components/project'
import ctcimg from '@/components/ctcimg'
import projectimg from '@/components/projectimg'

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
    }, {
      path: '/ctc',
      component: ctc
    },
    {
      path: '/project',
      component: project
    }, {
      path: '/ctcimg',
      component: ctcimg
    }, {
      path: '/projectimg',
      component: projectimg
    }
  ]
})
