<template>
  <div class="echart-f">
    <div class="echart" id="main"></div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import * as echarts from 'echarts'
@Component
export default class Echars extends Vue {
  // 基于准备好的dom，初始化echarts实例
  mounted() {
    let myChart = echarts.init(document.getElementById('main') as HTMLDivElement)
    // 绘制图表

    myChart.setOption({
      // title: {
      //   text: '收入与支出'
      // },
      //提示框组件，专门配置提示框的。
      tooltip: {
        trigger: 'axis',
        // 坐标轴指示器配置项。
        axisPointer: {
          type: 'cross' //指示器样试
        }
      },
      //工具栏。内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具。
      toolbox: {
        feature: {
          // 动态类型切换,切换图表
          magicType: {
            type: ['line']
          },
          //数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新。
          // dataView: {
          //   show: true, //是否显示 数据示图
          //   readOnly: false //是否 直接可以编辑数据。
          // },
          //保存为图片的配置
          saveAsImage: {
            show: true
          },
          //配置项还原
          restore: { show: true }
        }
      },
      //图例组件展现了不同系列的标记(symbol)，颜色和名字。可以通过点击图例控制哪些系列不显示。
      legend: {
        data: ['收入', '支出'] //对应的是name
      },
      grid: {
        left: '15%', //设置canvas图距左的距离
        top: '15%'
      },
      //配置X轴
      xAxis: {
        //坐标轴类型
        type: 'category',
        //配置类目名称。 可以逐一设置，具体看文档
        data: [
          '一月',
          '二月',
          '三月',
          '四月',
          '五月',
          '六月',
          '七月',
          '八月',
          '九月',
          '十月',
          '十一月',
          '十二月',
          '一月',
          '二月',
          '三月',
          '四月',
          '五月',
          '六月',
          '七月',
          '八月',
          '九月',
          '十月',
          '十一月',
          '十二月',
          '一月',
          '二月',
          '三月',
          '四月',
          '五月',
          '六月',
          '七月',
          '八月',
          '九月'
        ],
        //配置 鼠标移入时显示的 阴影指示器'line' 直线指示器 'shadow' 阴影指示,器  'none' 无指示器
        axisPointer: {
          show: true, //show 必须写，开关的作用
          type: 'shadow'
        }
      },
      //配置Y轴
      yAxis: [
        {
          type: 'value', //坐标轴类型
          name: '收入', //名称
          min: 0, //最小值
          max: 100, //最大值
          interval: 20, //列数
          axisLabel: {
            //坐标轴刻度标签的相关设置。
            formatter: '{value}' //字符串模板
          }
        }
      ],
      //系列列表。每个系列通过 type 决定自己的图表类型,一个对象表示一个列表
      series: [
        {
          name: '收入',
          type: 'bar',
          data: [15, 25, 40, 20, 20, 22, 23, 44, 42, 25, 32, 45],
          itemStyle: {
            //图形的颜色。默认指向全局的option.color
            color: '#F68D8B'
          }
        },
        {
          name: '支出',
          type: 'line',
          data: [45, 54, 66, 50, 40, 32, 43, 76, 65, 55, 87, 75]
        }
      ],
      //图表的颜色
      color: ['#FFB382', '#F07590', '#F07590']
    })
    window.onresize = myChart.resize
  }
}
</script>
<style lang='scss' scoped>
.echart-f {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  .echart {
    width: 100vw;
    height: 50vh;
  }
}
</style>