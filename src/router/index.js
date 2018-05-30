import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import myComponent from '@/components/diy'
import Apple from '@/components/apple'
import Banana from '@/components/banana'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/diy',
      name: 'diy',
      component: myComponent
    },
    {
      path: '/apple',
      name: 'apple',
      component: Apple
    },
    {
      path: '/banana',
      name: 'apple',
      component: Banana
    }
  ]
})
