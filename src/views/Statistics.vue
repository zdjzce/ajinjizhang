<template>
  <div>
    <top-nav>
      <span>图表</span>
    </top-nav>
    <nav-bottom />
    <el-button :plain="true" @click="open3">警告</el-button>
    <el-button :plain="true" @click="open1">消息</el-button>
    <el-button :plain="true" @click="open2">消息</el-button>
    <el-button :plain="true" @click="open4">错误</el-button>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
@Component
export default class Types extends Vue {
  open1() {
    this.$message('这是一条消息提示')
  }
  open2() {
    this.$message({
      message: '恭喜你，这是一条成功消息',
      type: 'success'
    })
  }

  open3() {
    this.$message({
      message: '警告哦，这是一条警告消息',
      type: 'warning'
    })
  }

  open4() {
    this.$message.error('错了哦，这是一条错误消息')
  }
}
</script>
<style lang='scss' scoped>
</style>