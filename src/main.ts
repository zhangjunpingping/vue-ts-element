import Vue from 'vue'
import '../theme/index.css'
import {
  Button,
  Select,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup
} from 'element-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import 'babel-polyfill' // 解决ie9以上的兼容性问题
import '@/assets/less/common.less'

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }
Vue.use(Button)
Vue.use(Select)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
