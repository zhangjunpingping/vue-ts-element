import Vue, { AsyncComponent } from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Layout from '@v/Layout/index.vue'

Vue.use(VueRouter)

const loadView = (view: string): AsyncComponent => (): any =>
  import(`@v/${view}/index.vue`)

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/page1',
    children: [
      {
        path: '/page1',
        component: loadView('Course/Page1')
      },
      {
        path: '/page2',
        component: loadView('Course/Page2')
      }
    ]
  },
  {
    path: '/login',
    children: [
      {
        path: '/login',
        component: loadView('Account/Login')
      }
    ]
  }
]

const router = new VueRouter({
  scrollBehavior(_to, _from, position) {
    return position ? position : { x: 0, y: 0 }
  },
  routes
})

export default router
