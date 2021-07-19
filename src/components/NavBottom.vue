<template>
  <div class="nav-content">
    <nav class="nav-bottom">
      <router-link to="/home" class="item font-a" active-class="selected">
        <icon-font icon="zhangdan" />
        概览
      </router-link>
      <span class="item"></span>
      <router-link to="/statistics" class="item font-a" active-class="selected">
        <icon-font icon="tubiao" />
        图表
      </router-link>
    </nav>
    <router-link to="/money" class="addMoney font-a" active-class="selected">
      <span class="item-add">
        <icon-font icon="tianjiajiahaowubiankuang" class="icon" />
      </span>
    </router-link>
  </div>
</template>

<script lang='ts'>
export default {
  // eslint-disable-next-line prettier/prettier
  name: 'navbottom'
}
</script>
<style lang='scss' scoped>
.nav-content {
  .nav-bottom {
    min-width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0px -2px 12px rgba(209, 212, 226, 0.3);
    .item {
      flex: 33%;
      text-align: center;
      background: rgb(255, 255, 255);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0.666667rem;
    }
  }
  .addMoney {
    display: block;
    position: absolute;
    bottom: 0.5rem;
    width: 3.3rem;
    height: 3.3rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    .item-add {
      color: white;
      position: absolute;
      display: block;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .addMoney::before {
    content: '';
    width: 3.3rem;
    height: 3.3rem;
    display: block;
    position: absolute;
    background: linear-gradient(222.7deg, #ffb382 -6.37%, #f07590 84.84%);
    box-shadow: (1px 5px 5px rgba(0, 0, 0, 0.25));
    transform: rotateZ(45deg);
    border-radius: 0.666667rem;
    z-index: -1;
  }
  .addMoney2 {
    display: block;
    border-left: 3.333333rem solid transparent;
    border-right: 3.333333rem solid transparent;
    border-top: 5rem solid #f7f8fe;
    position: absolute;
    border-radius: 0.666667rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
  .selected {
    color: #f07590;
  }
}
</style>