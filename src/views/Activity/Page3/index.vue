<template>
  <div class="archive left">
    <el-button @click="handleSearch">默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
    <el-button plain>朴素按钮</el-button>
    <el-button type="primary" plain>主要按钮</el-button>
    <el-button type="success" plain>成功按钮</el-button>
    <el-button type="info" plain>信息按钮</el-button>
    <el-button type="warning" plain>警告按钮</el-button>
    <el-button type="danger" plain>危险按钮</el-button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class Page3 extends Vue {
  isLoadEnd = false
  total: number | string = 0
  params = { name: 1 }

  mounted(): void {
    console.log('2424')
  }

  async handleSearch() {
    console.log('9999')
  }
}
</script>
<style lang="less" scoped></style>
