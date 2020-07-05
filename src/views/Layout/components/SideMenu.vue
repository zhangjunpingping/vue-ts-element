<template>
  <div class="side-content">
    <el-menu default-active="2" class="el-menu-vertical-demo">
      <template v-for="(item, index) in menuList">
        <el-submenu v-if="item.children" index="1" :key="index">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item v-for="it in item.children" :key="it.path">{{
            it.title
          }}</el-menu-item>
        </el-submenu>
        <el-menu-item index="2" v-else :key="index">
          <i class="el-icon-menu"></i>
          <span slot="title">{{ item.title }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { menuConfig } from '../config'

@Component
export default class SideMenu extends Vue {
  menuList = menuConfig
}
</script>
<style lang="less" scoped>
.side-content {
  width: 200px;
  height: 100%;
  background: #e5e5e5;
}
</style>
