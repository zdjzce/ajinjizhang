<template>
  <div>
    <div class="block selecdate">
      <el-date-picker
        v-model="value1"
        type="date"
        size="small"
        placeholder="选择日期"
        value-format="yyyy-MM-dd"
        :clearable="false"
        @change="emitDate(value1)"
        class="date"
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
    this.$emit('update:value', this.value1)
  }
}
</script>
<style lang='scss' scoped>
.selecdate {
  display: flex;
  justify-content: center;
  margin-top: 0.4rem;
}
</style>