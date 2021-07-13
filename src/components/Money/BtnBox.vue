<template>
  <div class="btn-box">
    <div class="income-expend">
      <button @click="inComeClick" :class="{ btnclick: inComeIsClick }">收入</button>
      <button @click="expendClick" :class="{ btnclick: expendIsClick }">支出</button>
    </div>
    <div class="box-contnet">
      <box-content :iconArray="iconArray1"></box-content>
    </div>
  </div>
</template>

<script lang='ts'>
import BoxContent from '@/components/Money/BtnBox/BoxContent.vue'
import iconArray1 from '@/components/Money/BtnBox/iconArray1'
import iconArray2 from '@/components/Money/BtnBox/iconArray2'
export default {
  name: 'btnbox',
  components: { BoxContent },
  data() {
    return {
      inComeIsClick: true,
      expendIsClick: false,
      iconArray1,
      iconArray2
    }
  },
  methods: {
    inComeClick() {
      this.inComeIsClick = true
      this.expendIsClick = false
    },
    expendClick() {
      this.expendIsClick = true
      this.inComeIsClick = false
    }
  }
}
</script>
<style lang='scss' scoped>
@import '~@/assets/style/helper.scss';
.btn-box {
  margin-left: 7.5%;
  margin-top: 0.666667rem;
  border-radius: 10px;
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 12px 14px rgba(209, 212, 226, 0.4);
  & .income-expend {
    margin-top: 0.4rem;
    button {
      border: 1px solid #d2d2d2;
      background: transparent;
      margin: 0.133333rem 0.666667rem;
      padding: 0.333333rem 1.333333rem;
      border-radius: 8px;
      color: $font;
    }
    .btnclick {
      border: 1px solid #1c1c1c;
    }
  }
  .box-contnet {
    height: 12rem;
    overflow: scroll;
  }
}
</style>