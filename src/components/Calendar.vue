<template>
  <div>
    <!-- <input type="date" placeholder="" :value="x(value)" @input="emitDate($event.target.value)" /> -->
    <div class="block">
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="选择日期"
        value-format="yyyy-MM-dd"
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
export default class Types extends Vue {
  @Prop(String) value!: string
  value1 = dayjs(this.value).format('YYYY-MM-DD')
  emitDate(value: string) {
    this.$emit('update:value', value)
  }
}
</script>
<style lang='scss' scoped>
</style>