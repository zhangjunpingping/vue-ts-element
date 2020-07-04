<template>
  <div class="wrapper">
    <side-menu></side-menu>
    <div class="content-box">
      <div class="content">
        <header-bar></header-bar>
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SideMenu from './components/SideMenu.vue'

import HeaderBar from './components/HeaderBar.vue'

@Component({
  components: { HeaderBar, SideMenu }
})
export default class Page1 extends Vue {
  isLoadEnd = false
  total: number | string = 0
  params = { name: 1 }

  mounted(): void {
    console.log('2424')
  }
}
</script>
<style lang="less" scoped>
.wrapper {
  display: flex;
  height: 100vh;
  min-height: 400px;
  .content-box {
    flex: 1;
    background: red;
  }
}
</style>
