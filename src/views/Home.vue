<template>
  <div>
    <full-screen-container>

      <!-- 头部内容 -->
      <div class="loadingline">
        <div small-bg>
          <dv-decoration-10 style="width: 100%;height: 1px;"/>
        </div>
      </div>

      <div class="header">
        <div class="arrow-left">
          <img src="@/assets/jiantou2.png" alt="">
        </div>
        <div>
          <img src="@/assets/wangluo.png" alt="" style="width: 50px;transform: translate(80px,-5px)">
        </div>
        <div class="center-title">智能决策&ensp;·数据驾驶舱</div>
        <div class="highlight">
          <img src="@/assets/xuanguang.png" alt="">
        </div>

        <div class="icons">
          <el-icon :size="20" style="margin-right: 10px; color: #c2dbf1;box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);"><List /></el-icon>
          <el-icon :size="20" style="margin-right: 10px; color: #c2dbf1;box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);"><DataBoard /></el-icon>
          <el-icon :size="20" style="margin-right: 10px; color: #c2dbf1;box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);"><Share /></el-icon>
          <el-popconfirm title="Are you sure to exit?">
            <template #reference>
              <el-icon :size="20" style="margin-right: 10px; color: #c2dbf1;box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);"><CloseBold /></el-icon>
            </template>
          </el-popconfirm>
        </div>

        <div class="arrow-right">
          <img src="@/assets/jiantou.png" alt="">
        </div>
      </div>

    <main>
      <section>
      </section>
      <section>
        <div class="shownum">
          <count-to :startVal="0" :endVal="11234567890" :decimals="0" :duration="10000"></count-to>
        </div>
      </section>

      <section>
        <div class="main-title">数据监控大屏</div>
      </section>

      <section class="lt">
        <div class="leftClass">
          <div id="left-top-chart"></div>
        </div>
      </section>

      <section class="lm">
        <div class="leftClass">
          <div id="left-middle-chart"></div>
        </div>
      </section>

      <section class="lb">
        <div class="leftClass">
          <div id="left-bottom-chart"></div>
        </div>
      </section>

      <section class="rt">
        <div class="rightClass">
          <div id="right-top-chart"></div>
        </div>
      </section>

      <section class="rb">
        <div class="rightClass" style="padding-top: 30px;">
          <div demo-bg>
            <dv-scroll-board :config="config" style="width:450px; height:220px;" @mouseover="mouseoverHandler" @click="clickHandler" />
          </div>
        </div>
      </section>



    </main>


    </full-screen-container>
  </div>



</template>

<script lang="ts" setup>
import {onMounted, reactive ,nextTick,ref} from 'vue'
import { BorderBox1,BorderBox3,BorderBox5,BorderBox8,Decoration8,Decoration5,
  Decoration10,DigitalFlop,Button,FullScreenContainer,CapsuleChart,Charts,
  ActiveRingChart} from "@kjgl77/datav-vue3";
import {DataBoard, CloseBold, List, Share} from "@element-plus/icons-vue";
import { CountTo} from "vue3-count-to";
import * as echarts from 'echarts';
import { startUpdatingTime } from '@/utils/time'



const config = reactive({
  header: ['列1', '列2', '列3'],
  data: [
    ['行1列1', '行1列2', '行1列3'],
    ['行2列1', '行2列2', '行2列3'],
    ['行3列1', '行3列2', '行3列3'],
    ['行4列1', '行4列2', '行4列3'],
    ['行5列1', '行5列2', '行5列3'],
    ['行6列1', '行6列2', '行6列3'],
    ['行7列1', '行7列2', '行7列3'],
    ['行8列1', '行8列2', '行8列3'],
    ['行9列1', '行9列2', '行9列3'],
    ['行10列1', '行10列2', '行10列3'],
  ],
  index: true,
  columnWidth: [50],
  align: ['center'],
})

const mouseoverHandler = (e: any) => {
  console.log(e)
}

const clickHandler = (e: any) => {
  console.log(e)
}

// 左上部分
onMounted(() => {
  setTimeout(() => {
    const lt_chartDom = document.getElementById('left-top-chart');
    if (lt_chartDom) {
      // 基于准备好的 dom，初始化 echarts 实例
      const ltChart = echarts.init(lt_chartDom);
      console.log("left-top-chartDom: ", lt_chartDom)
      const ltoption = {
        xAxis: {
          color:[
            '#ffffff',
          ],
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          color:[
            '#ffffff',
          ],
          type: 'value'
        },
        series: [
          {
            color:[
              '#41bcf1',
            ],
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle: {}
          }
        ]
      };
      ltChart.setOption(ltoption)

    } else {
      console.log("未找到right-top-chart的dom元素")
    }
  }, 1);
});

// 左中部分
onMounted(() => {
  setTimeout(() => {
    const lm_chartDom = document.getElementById('left-middle-chart');
    if (lm_chartDom) {
      // 基于准备好的 dom，初始化 echarts 实例
      const lmChart = echarts.init(lm_chartDom);
      console.log("left-top-chartDom: ", lm_chartDom)
      const lmoption = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Direct',
            type: 'bar',
            emphasis: {
              focus: 'series'
            },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: 'Email',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Union Ads',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ads',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'Search Engine',
            type: 'bar',
            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
            emphasis: {
              focus: 'series'
            },
            markLine: {
              lineStyle: {
                type: 'dashed'
              },
              data: [[{ type: 'min' }, { type: 'max' }]]
            }
          },
          {
            name: 'Baidu',
            type: 'bar',
            barWidth: 5,
            stack: 'Search Engine',
            emphasis: {
              focus: 'series'
            },
            data: [620, 732, 701, 734, 1090, 1130, 1120]
          },
          {
            name: 'Google',
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 290, 230, 220]
          },
          {
            name: 'Bing',
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
              focus: 'series'
            },
            data: [60, 72, 71, 74, 190, 130, 110]
          },
          {
            name: 'Others',
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
              focus: 'series'
            },
            data: [62, 82, 91, 84, 109, 110, 120]
          }
        ]
      };
      lmChart.setOption(lmoption)

    } else {
      console.log("未找到right-top-chart的dom元素")
    }
  }, 1);
});

// 左下部分
onMounted(() => {
  setTimeout(() => {
    const lb_chartDom = document.getElementById('left-bottom-chart');
    if (lb_chartDom) {
      // 基于准备好的 dom，初始化 echarts 实例
      const lbChart = echarts.init(lb_chartDom);
      console.log("left-top-chartDom: ", lb_chartDom)
      const lboption = {
        title: {
          text: 'Referer of a Website',
          subtext: 'Fake Data',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      lbChart.setOption(lboption)

    } else {
      console.log("未找到right-top-chart的dom元素")
    }
  }, 1);
});

// 右上部分
onMounted(() => {
  setTimeout(() => {
    const rt_chartDom = document.getElementById('right-top-chart');
    if (rt_chartDom) {
      // 基于准备好的 dom，初始化 echarts 实例
      const rtChart = echarts.init(rt_chartDom);
      console.log("right-top-chartDom: ", rt_chartDom)
      const rtoption = {
        title: {
          text: 'Stacked Line'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      };
      // 设置图表选项
      rtChart.setOption(rtoption);
    } else {
      console.log("未找到right-top-chart的dom元素")
    }
  }, 1);
});
</script>


<style>

body,html {
  background-color: black;
  margin:0;
}

p {
  margin: 0;
  padding: 0;
  color: white;
}

#dv-full-screen-container {
  width: 100%;
  height: 100vh;
  z-index:-1;
  background-size: 100% 100%;
  position:absolute;
  background-image: url("@/assets/bg3.png") , linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5));
  color: #fff;
  display: flex;
  flex-direction: column;
  background-blend-mode: overlay; /* 使用叠加模式 */
}

main{
  position: relative;
  flex: 1;
}

.header{
  height: 40px;
  top: 2px;
  display: flex;
  justify-content: space-between;
  padding: 5px 50px;
  position: relative;
  background-size: 100% 120%;
  background-position: center; /* 背景图像居中 */
  background-repeat: no-repeat; /* 背景图像不重复 */
  background-image: url(@/assets/biaoti2.png);
}


.center-title {
  color:white;  /*设置文字颜色*/
  text-align: center;  /*设置文字居中*/
  font-family: 'MyFont', sans-serif;
  font-size: 30px;
  letter-spacing: 3px; /* 设置字体间距 */
  position: absolute;
  left: 38%;
  top: 20%;
  font-weight: 500;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2),
  -2px 2px 10px rgba(0, 0, 0, 0.2),
  -2px -2px 10px rgba(0, 0, 0, 0.2);
}

.icons {
  width: 150px;
  transform: translate(180px,10px);
}

.nums{
  display: flex;
  width: 900px;
  margin: 0 auto;
  padding-top: 30px;
}

.nums > .cell {
  width: 100px;
  height: 80px;
  background: rgba(6, 22 ,62 , 0.5);
  border-right: 3px solid blue;
}

.lt,.lb,.lm {
  position: absolute;
  width: 400px;
  height: 400px;
}

.rt,.rb {
  position: absolute;
  width: 400px;
  height: 350px;
}

.lt {
  left: 20px;
  top: 30px;
}

.lm {
  left: 20px;
  top: calc(100vh - 640px);
}

.lb {
  left: 20px;
  bottom: 10px;
}

.rt {
  right: 70px;
  top: 30px;
}

.rb {
  right: 70px;
  bottom: 110px;
}


.arrow-left img{
  width: 250px;
  height: 50px;
  transform: translate(15px,-5px);
  opacity: 0.9;
}

.arrow-right img{
  width: 250px;
  height: 50px;
  transform: translate(-15px,-5px);
  opacity: 0.9;
}

.highlight {
  width: 200px;
  transform: translate(-170px,-120px);
}

@font-face {
  font-family: 'MyFont';
  src: url('@/assets/douyufont.ttf') format('truetype');
}

.databg img{
  height: 200px;
  width: 200px;
  position: relative;
}

.main-title {
  position: absolute;
  left: 45%;
  color: transparent;
  font-size: 20px;
  font-weight: 900;
  //letter-spacing: 0.25vw;
  background: linear-gradient(183deg, #FFF 35%, #3FB4FF);
  background-clip: text;
  -webkit-background-clip: text;
}



#left-top-chart {
  width: 100%;
  height: 300px;
}

#left-middle-chart {
  width: 100%;
  height: 300px;
}

#left-bottom-chart {
  width: 100%;
  height: 300px;
}

#right-top-chart {
  width: 100%;
  height: 300px;
}

#time {
  font-size: 24px;
  font-family: Arial, sans-serif;
  color: #333;
  text-align: center;
  margin-top: 50px;
}


</style>


<style scoped>
@import url("@/css/border.css");
@import url("@/css/shownum.css");

</style>