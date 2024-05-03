import React, { useEffect, useState } from "react";
import "./QuShi.less";
import { BorderBox7 } from "@jiaminghi/data-view-react";
import * as echarts from "echarts";
import { Menu, Echarts } from "@/components";
import { jjbhData, jj, season, colorList, lData } from "./datas/data";
import Top7 from '@/assets/images/Top7.png'

export default function QuShi() {
  // 初始化series
  const getSeries = () => {
    const generateRandomArray = (size, min, max, decimalPlaces = 0) => {
      let arr = [];
      if (min > max) {
        [min, max] = [max, min];
      }
      for (let i = 0; i < size; i++) {
        // 生成一个介于min和max之间的随机数
        let randomNum = min + Math.random() * (max - min);
        // 将随机数格式化为指定的小数位数
        arr.push(randomNum.toFixed(decimalPlaces));
      }
      console.log(arr);
      return arr;
    };
    let series = [];
    season.map((i, index) => {
      series.push({
        name: i.name,
        type: "line",
        // smooth:true,
        stack: "总量",
        symbolSize: 0,
        itemStyle: {
          normal: {
            color: colorList[index],
            lineStyle: {
              color: colorList[index],
              width: 2,
            },
          },
        },
        // data: i.value,
        data: generateRandomArray(6, 0, 100),
      });
    });
    return series;
  };
  const Leftoneoption = {
    title: {
      text: "2017-2021年未成年人犯罪家庭情况",
      textStyle: {
        fontSize: 25,
        fontWeight: "bold",
        color: '#FFF',
        fontFamily: "font3",
      },
      left: "center",
      top: "5%",
    },
    color: colorList,
    grid: {
      left: "5%",
      right: "5%",
      top: "15%",
      bottom: "5%",
      // containLabel: true
    },
    tooltip: {
      show: true,
      trigger: "axis",
    },
    legend: {
      show: true,
      icon: "stack",
      itemWidth: 15,
      itemHeight: 4,
      textStyle: {
        color: "white",
      },
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: 1,
        axisLine: {
          show: false,
        },
        axisLabel: {
          color: "#FFF",
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        data: lData.xDate,
      },
    ],
    yAxis: [
      {
        type: "value",
        name: lData.unit,
        nameTextStyle: {
          align: "center",
          padding: [10, -10, 0, -50],
          color: "#FFF",
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "#FFF",
            type: "dashed",
          },
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: true,
          margin: 10,
          textStyle: {
            color: "#FFF",
          },
        },
        axisTick: {
          show: false,
        },
      },
    ],
    dataZoom:
      lData.xDate.length > 7
        ? [
          {
            show: true,
            height: 12,
            xAxisIndex: [0],
            bottom: "3%",
            start: 10,
            end: 90,
            handleIcon:
              "path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",
            handleSize: "110%",
            handleStyle: {
              color: "#d3dee5",
            },
            textStyle: {
              color: "#313131",
            },
            borderColor: "#90979c",
          },
          {
            type: "inside",
            show: true,
            height: 15,
            start: 1,
            end: 35,
          },
        ]
        : [],
    series: getSeries(),
  };
  //变量  左二
  const jjbhOption = {
    title: {
      text: "2016-2017年未成年人犯罪中被告人家庭情况统计",
      textStyle: {
        fontSize: 16,
        fontWeight: "bold",
        color: '#FFF',
        fontFamily: "font3",
      },
      left: "0",
      top: "5%",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#999",
        },
      },
    },
    grid: {
      top: "30%",
      left: "15%",
      right: 1,
      bottom: "10%",
    },
    color: ["#5AD8A6"],
    legend: [
      {
        data: [
          {
            name: "人数（人）",
            icon: "rect",
          },
        ],
        itemWidth: 8,
        itemHeight: 8,
        textStyle: {
          fontSize: 12,
          color: '#FFF',
        },
        right: "23%",
        top: "20%",
      },
      {
        data: [
          {
            name: "犯罪比例",
            icon: "rect",
          },
        ],
        itemWidth: 12,
        itemHeight: 2,
        textStyle: {
          fontSize: 12,
          color:"#FFF"
        },
        right: "10%",
        top: "20%",
      },
    ],
    xAxis: [
      {
        type: "category",
        data: season.map((i) => i.name),
        axisPointer: {
          type: "shadow",
        },
        axisLabel: {
          color: "#FFF",
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        min: 0,
        max: 6000,
        interval: 1000,
        axisLabel: {
          formatter(value) {
            return `${value.toFixed(1)}`; // 保留一位小数
          },
          color: "#FFF",
        },
      },
    ],
    series: [
      {
        name: "人数（人）",
        type: "bar",
        barWidth: 30,
        itemWidth: 8,
        itemHeight: 8,
        itemStyle: {
          color: params => {
            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(24,136,103,1)'
            }, {
              offset: 1,
              color: 'rgba(24,136,103,0.3)'
            }])
          }
        },
        label: {
          normal: {
            textStyle: {
              color: "#fff",
              fontSize: 13,
            },
          },
        },
        data: jj.data1,
      },
      {
        name: "犯罪比例",
        type: "line",
        symbol: "circle",
        symbolSize: 10,
        lineStyle: {
          color: "rgba(113,240,203)",
        },
        label: {
          show: true,
          position: "top",
          textStyle: {
            color: "#fff",
            fontSize: 10,
          },
        },
        data: jj.data2,
      },
    ],
  };
  // 变量 左三
  const jtOption = {
    title: {
      text: "2017-2021年家庭教育程度对未成年人犯罪的影响",
      textStyle: {
        fontSize: 16,
        color: '#FFF',
        fontFamily: "font3",
      },
      left: "0",
      top: '5%'
    },
    tooltip: {
      trigger: "item",

    },
    legend: {
      // orient: "vertical", //垂直
      // padding: 5,
      // left: "left",
      // itemWidth: 10,
      // itemHeight: 10,
      top: "bottom",
      textStyle:{
        color:"#FFF",
      }
    },
    color: ["#063f2e", "#188867", "#085b43", "#30ab87", "#71f0cb"],
    series: [
      {
        name: "家庭教育程度的影响",
        type: "pie",
        radius: "50%",
        data: jjbhData,
        selectedMode: true,
        selectedOffset: 15,
        select: {
          itemStyle: {
            shadowBlur: 10,
          },
        },
        label: {
          normal: {
            textStyle: {
              color: "#fff",
              fontSize: 13,
            },
          },
        },
        labelLine: {
          show: false,
        },
        emphasis: {
          disabled: true,
        },
      },
    ],
  };
  // 变量 right1，
  const right1option = {
    title: {
      text: "2022年未成年人犯罪动机",
      textStyle: {
        fontSize: 25,
        fontWeight: "bold",
        color:"#FFF",
        fontFamily: "font3",
      },
      left: "center",
      top: "5%",
    },
    // backgroundColor: 'white',
    grid: {
      top: '15%',
      left: '5%',
      right: '5%',
      bottom: '5%',
      containLabel: true,
    },

    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      data: ['冲动', '义气', '享乐', '好奇', '教唆', '金钱', '网瘾', '报复', '性需求',],
      axisLine: {
        show: true,
        lineStyle: {
          color: '#E5E6EB',
        }
      },
      axisLabel: {
        color: '#FFF',
        fontSize: 12,
      },
    },
      yAxis: [{
      type: 'value',
      nameTextStyle: {
        color: "#000",
        fontSize: 14,
        padding: [0, 0, 0, 30]
      },
      axisLabel: {
        formatter: "{value} %",
        textStyle: {
          color:"#FFF"
        },
      },
      splitLine: {     //网格线
        "show": false,
      }
    }],
    series: [
      {
        type: 'bar',
        barWidth: 35,
        data: [40.40, 24.70, 18.30, 14.90, 12.50, 10.50, 6.90, 3, 2],
        itemStyle: {
          //barBorderRadius: 5,
          //渐变色
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#188867",
            },
            {
              offset: 1,
              color: "rgba(24, 136, 103, 0.3)",
            },
          ]),
        },
        showBackground: true,
      }
    ]
  }

  //  right2
  const right2option = {
    title: {
      text: "2020年在各个学历中的犯罪率",
      textStyle: {
        fontSize: 16,
        fontWeight: "bold",
        color: '#FFF',
        fontFamily: "font3",
      },
      left: "0",
      top: "5%",
    },
    grid: {
      top: 40,
      bottom: 40,
      left: 40,
      right: 40
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: function (data) {
        console.log(data)
        let html = ``
        html = `
        <div>${data[0].marker} ${data[0].name}: ${data[0].value}%</div>
        `
        return html
      }
    },
    calculable: true,
    legend: {
      show: false
    },
    xAxis: [
      {
        type: 'category',
        axisLabel: {
          // rotate: 45 // 旋转角度
          color: "#FFF",
        },
        data: [
          '初中',
          '文盲',
          '高中',
          '小学',
          '中专',
          '大专',
          '本科',
        ]
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '',
        axisLabel: {
          formatter: '{value}%',
          color: "#FFF",
        }
      },

    ],
    series: [
      {
        name: '百分比',
        type: 'bar',
        itemStyle: {
          color: params => {
            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(113,240,203,1)'
            }, {
              offset: 1,
              color: 'rgba(113,240,203,0.3)'
            }])
          }
        },
        data: [
          47.8, 4.36, 10.6, 26.9, 6.5, 1.46, 1.93
        ]
      },

    ]
  }

  //  变量 right3
  const right3option = {
    title: {
      text: "2017-2021年未成年人犯罪人员情况%",
      textStyle: {
        fontSize: 16,
        fontWeight: "bold",
        color: '#FFF',
        fontFamily: "font3",
      },
      left: "0",
      top: "5%",
    },
    // backgroundColor:'#000',
    color: ["#063f2e", "#188867", "#085b43", "#30ab87", "#71f0cb"],
    tooltip: {
      trigger: 'item'
    },
    legend: {
      // orient: 'vertical',
      // icon: 'rect',
      // itemWidth: 16,
      // itemHeight: 16,
      // itemGap: 40,
      // bottom: 'left',
      top: "bottom",
      // color:"#FFF",
      // right: 20,
      textStyle: {
        color: '#FFF'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '10%',
      top: '10%',
    },
    series: [
      {
        name: '占比',
        type: 'pie',
        radius: '50%',
        labelLine: {
          show: false
        },
        label: {
          show: false,
          position: 'center'
        },
        itemStyle: {
          borderColor: '#000',
          borderWidth: 5,
        },
        data: [
          { value: 45.9, name: '家庭经济困难' },
          { value: 17.56, name: '辍学' },
          { value: 12, name: '遭遇双重家庭变故' },
          { value: 2.5, name: '流浪、乞讨' },
          { value: 15, name: '家庭有服刑前例' }
        ],
      }
    ]
  };
  // 封装组件
  const Section = ({ className, name, option, map }) => {
    return (
      <div className={className}>
        <BorderBox7 color={["red", " #FF574A"]} backgroundColor="">
          {map ? (
            <Map />
          ) : option ? (
            <Echarts
              name={name}
              style={{ width: "100%", height: "97%" }}
              option={option}
            />
          ) : (
            ""
          )}
        </BorderBox7>
      </div>
    );
  };
  return (
    <div className="QS">
      <div className="Header">
        <img src={Top7} alt="" />
        <Menu />
        <p className="P1">犯罪趋势</p>
        <p className="P2">BAO GANG BIG DATA PLATFORM</p>
      </div>
      <Section className="Left1" name="Leftone" option={Leftoneoption} />
      <Section className="Right1" name="right1" option={right1option} />
      <Section className="Left2" name="jjbh" option={jjbhOption} />
      <Section className="Left3" name="jt" option={jtOption} />
      <Section className="Right2" name="right2" option={right2option} />
      <Section className="Right3" name="right3" option={right3option} />

    </div>
  );
}
