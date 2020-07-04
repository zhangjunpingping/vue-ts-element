<template>
  <div class="header-content">头部</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class HeaderBar extends Vue {}
</script>
<style lang="less" scoped>
.header-content {
  height: 90px;
  background: #e5e5e5;
}
</style>
