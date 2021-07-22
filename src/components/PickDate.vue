<template>
  <div class="total-box">
    <div class="block selecdate">
      <el-date-picker
        v-model="value1"
        type="month"
        placeholder="选择月"
        value-format="yyyy-MM"
        size="small"
        :clearable="false"
        @change="emitDate(value1)"
      >
      </el-date-picker>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import dayjs from 'dayjs'
@Component
export default class PickDate extends Vue {
  @Prop(String) value!: string
  value1 = dayjs(this.value).format('YYYY-MM')
  emitDate(value: string): void {
    this.$emit('update:value', this.value1)
  }
}
</script>
<style lang='scss' scoped>
.total-box {
  width: 90vw;
  margin: 0 auto;

  .selecdate {
    display: flex;
    justify-content: center;
    padding: 1.3rem 0;
  }
}
</style>