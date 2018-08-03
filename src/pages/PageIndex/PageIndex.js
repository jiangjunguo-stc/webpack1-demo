import React from 'react'
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts'
// 引入柱状图
require('echarts/lib/chart/line');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('echarts/lib/component/legend');
require('./PageIndex.less')

class PageIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const myChart = echarts.init(document.getElementById('demo'), 'light');
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例'
      },
      legend: {
        data: ['昨日销量', '今日销量']
      },
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {},
      series: [
        {
          name: '昨日销量',
          // color: ['#999','#759aa0','#e69d87','#8dc1a9','#ea7e53','#666'],
          type: 'line',
          data: [5, 20, 36, 10, 10, 20]
        },
        {
          name: '今日销量',
          // color: ['#999','#759aa0','#e69d87','#8dc1a9','#ea7e53','#666'],
          type: 'line',
          data: [6, 30, 16, 8, 50, 10]
        }
      ]
    });
  }

  render() {
    return (
      <div id='demo' className='demo'></div>
    )
  }
}

module.exports = PageIndex