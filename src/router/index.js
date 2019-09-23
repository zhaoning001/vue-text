import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import zn from '@/components/zn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'zn',
      component: zn
    },
    {
      path: '/hell',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
