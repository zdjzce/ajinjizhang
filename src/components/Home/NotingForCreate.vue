<template>
  <div class="noting">
    <div class="content">
      <img src="@/assets/png/bgc.png" alt="" />
      <span> 什么都没有，点击下方加号记一笔吧!</span>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
@Component
export default class NothingForCreate extends Vue {}
</script>
<style lang='scss' scoped>
.noting {
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  height: 50vh;
  background: white;
  border-radius: 0.666667rem;
  box-shadow: 0px 0.8rem 0.933333rem rgba(209, 212, 226, 0.4);
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 8rem;
      height: 9rem;
    }
    span {
      font-size: 0.933333rem;
      margin-top: 2.333333rem;
      color: #414141;
    }
  }
}
</style>