<template>
  <div class="btn-box">
    <types :value.sync="btnselected" />
    <div class="box-contnet">
      <box-content
        :iconArray="iconArray1"
        v-if="btnselected === '-'"
        @update:value="onUpdateTags"
        :btnselected="btnselected"
      ></box-content>
      <box-content
        :iconArray="iconArray2"
        v-if="btnselected === '+'"
        @update:value="onUpdateTags"
        :btnselected="btnselected"
      ></box-content>
    </div>
  </div>
</template>

<script lang ='ts'>
import iconListModel2 from '@/models/iconListModel2'
import BoxContent from '@/components/Money/BtnBox/BoxContent.vue'
import Types from '@/components/Money/BtnBox/Types.vue'
const iconArray2 = iconListModel2.data
import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
@Component({
  components: { BoxContent, Types }
})
export default class BtnBox extends Vue {
  btnselected = '-'
  iconArray2 = iconArray2
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  get iconArray1() {
    return this.$store.state.tagList
  }
  onUpdateTags(value: any): void {
    this.$emit('Boxupdate-value', value)
  }
  @Watch('btnselected')
  OnTypeUpdate(): void {
    this.$emit('Typeupdate-value', this.btnselected)
  }
  created(): void {
    this.$store.commit('fetchTags')
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