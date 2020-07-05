import Vue, { AsyncComponent } from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Layout from '@v/Layout/index.vue'
import { routesLayout, routesAlone } from './config'

Vue.use(VueRouter)

const loadView = (view: string): AsyncComponent => (): any =>
  import(`@v/${view}/index.vue`)

const routerLayoutList = fn => {
  return Object.entries(fn).map((item: any) => {
    if (item[1] instanceof Object) {
      const { path, component, redirect, children } = item[1]
      return {
        path,
        component: loadView(component),
        redirect,
        children: routerLayoutList(children)
      }
    } else {
      return { path: item[0], component: loadView(item[1]) }
    }
  })
}

const routesAloneList = fn => {
  return Object.entries(fn).map((item: any) => {
    return { path: item[0], component: loadView(item[1]) }
  })
}

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/course1',
    children: routerLayoutList(routesLayout)
  },
  ...routesAloneList(routesAlone)
]

const router = new VueRouter({
  scrollBehavior(_to, _from, position) {
    return position ? position : { x: 0, y: 0 }
  },
  routes
})

export default router
