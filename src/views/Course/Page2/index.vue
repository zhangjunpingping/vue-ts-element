<template>
  <div class="archive left">
    <el-button>Course/Page2</el-button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class Page2 extends Vue {
  isLoadEnd = false
  total: number | string = 0
  params = { name: 1 }

  mounted(): void {
    console.log('2424')
  }
}
</script>
<style lang="less" scoped></style>
