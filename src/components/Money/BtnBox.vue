<template>
  <div class="btn-box">
    <types :inComeIsClick.sync="inComeIsClick" :expendIsClick.sync="expendIsClick" />
    <div class="box-contnet">
      <box-content :iconArray="iconArray1" v-if="expendIsClick"></box-content>
      <box-content :iconArray="iconArray2" v-if="inComeIsClick"></box-content>
    </div>
  </div>
</template>

<script>
import BoxContent from '@/components/Money/BtnBox/BoxContent.vue'
import iconArray1 from '@/components/Money/BtnBox/iconArray1'
import iconArray2 from '@/components/Money/BtnBox/iconArray2'
import Types from '@/components/Money/BtnBox/Types.vue'
export default {
  name: 'btnbox',
  components: { BoxContent, Types },
  data() {
    return {
      inComeIsClick: false,
      expendIsClick: true,
      iconArray1,
      iconArray2
    }
  },
  methods: {}
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
  .box-contnet {
    height: 12rem;
    overflow: scroll;
    @media screen and(min-width: 360px) and(max-width: 374px) {
      height: 15rem;
    }
    @media screen and(min-width: 375px) and(max-width: 385px) {
      height: 16rem;
    }
    @media screen and(min-width: 401px) and(max-width: 414px) {
      height: 18rem;
    }
    @media screen and(min-width: 750px) {
      height: 21rem;
    }
  }
}
</style>