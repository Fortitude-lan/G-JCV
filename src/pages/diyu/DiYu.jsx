import React, { useEffect, useMemo, useState } from "react";
import "./DiYu.less";
import { BorderBox7, ScrollBoard, Charts } from "@jiaminghi/data-view-react";
import * as echarts from "echarts";
import { Menu, Echarts } from "@/components";
import { r1Data, r2Data, fzrsData, bmData } from "./datas/data";
import mapJson from "@/utils/China.json";
import Top7 from '@/assets/images/Top7.png'

export default function DiYu() {
  const [dataLLLL, setdataLLLL] = useState(null);
  // 地图组件
  const Map = () => {
    // 注册自定义地图类型, 类型名称, 地图数据
    echarts.registerMap("china", mapJson);
    // let dataList = [
    //   { name: "澳门", value: 18 },
    //   { name: "香港", value: 273 },
    //   { name: "台湾", value: 153 },
    //   { name: "新疆", value: 76 },
    //   { name: "宁夏", value: 75 },
    //   { name: "青海", value: 18 },
    //   { name: "甘肃", value: 134 },
    //   { name: "陕西", value: 248 },
    //   { name: "西藏", value: 1 },
    //   { name: "云南", value: 176 },
    //   { name: "贵州", value: 146 },
    //   { name: "四川", value: 543 },
    //   { name: "重庆", value: 576 },
    //   { name: "海南", value: 168 },
    //   { name: "广西", value: 254 },
    //   { name: "广东", value: 1407 },
    //   { name: "湖南", value: 1018 },
    //   { name: "湖北", value: 67800 },
    //   { name: "河南", value: 1273 },
    //   { name: "山东", value: 765 },
    //   { name: "江西", value: 936 },
    //   { name: "福建", value: 307 },
    //   { name: "安徽", value: 990 },
    //   { name: "浙江", value: 1237 },
    //   { name: "江苏", value: 633 },
    //   { name: "上海", value: 394 },
    //   { name: "黑龙江", value: 484 },
    //   { name: "吉林", value: 93 },
    //   { name: "辽宁", value: 126 },
    //   { name: "内蒙古", value: 75 },
    //   { name: "山西", value: 133 },
    //   { name: "河北", value: 319 },
    //   { name: "天津", value: 137 },
    //   { name: "北京", value: 512 },
    // ];
    // 设置不同区域的背景
    // let data = mapJson.features.map((item) => {
    //   return {
    //     name: item.properties.name,
    //     itemStyle: {
    //       normal: { areaColor: backgroundColorObj[item.properties.name] }, //区域颜色
    //     },
    //   };
    // });
    // dataList.find(i=>i.name==dataLLLL)
    // 配置项
    let dataList = [
      // { name: "澳门", value: 0 },
      // { name: "香港", value: 0 },
      // { name: "台湾", value: 0 },
      { name: "新疆", value: 3 },
      { name: "宁夏", value: 9 },
      { name: "青海", value: 3 },
      { name: "甘肃", value: 8 },
      { name: "陕西", value: 14 },
      { name: "西藏", value: 1 },
      { name: "云南", value: 28 },
      { name: "贵州", value: 11 },
      { name: "四川", value: 24 },
      { name: "重庆", value: 7 },
      { name: "海南", value: 8 },
      { name: "广西", value: 27 },
      { name: "广东", value: 40 },
      { name: "湖南", value: 41 },
      { name: "湖北", value: 14 },
      { name: "河南", value: 53 },
      { name: "山东", value: 27 },
      { name: "江西", value: 61 },
      { name: "福建", value: 29 },
      { name: "安徽", value: 25 },
      { name: "浙江", value: 19 },
      { name: "江苏", value: 22 },
      { name: "上海", value: 9 },
      { name: "黑龙江", value: 19 },
      { name: "吉林", value: 44 },
      { name: "辽宁", value: 43 },
      { name: "内蒙古", value: 26 },
      { name: "山西", value: 6 },
      { name: "河北", value: 38 },
      { name: "天津", value: 4 },
      { name: "北京", value: 2 },
    ];
    const option = {
      // 映射小图
      // visualMap: {
      //   min: 0,
      //   max: 100000,
      //   left: 20,
      //   bottom: 10,
      //   showLabel: true,
      //   text: ["高", "低"],
      //   textStyle: {
      //     color: "rgba(255, 255, 255, 1)",
      //   },
      //   pieces: [
      //     // color: ['#8A3310', '#C64918', '#E55B25', '#F2AD92', '#F9DCD1'],
      //     {
      //       gt: 10000,
      //       label: "> 10000人",
      //       // color: "#063f2e90",
      //       color: "#8A3310",
      //     },
      //     {
      //       gte: 1000,
      //       lte: 10000,
      //       label: "1000 - 10000人",
      //       // color: "#18886790",
      //       color: "#C64918",
      //     },
      //     {
      //       gte: 100,
      //       lt: 1000,
      //       label: "100 - 1000人",
      //       // color: "#085b4390",
      //       color: "#E55B25",
      //     },
      //     {
      //       gte: 10,
      //       lt: 100,
      //       label: "10 - 100人",
      //       // color: "#30ab8790",
      //       color: "#F2AD92",
      //     },
      //     {
      //       gte: 1,
      //       lt: 10,
      //       label: "1 - 10人",
      //       // color: "#71f0cb90",
      //       color: "#F9DCD1",
      //     },
      //   ],
      //   show: true,
      // },
      visualMap: {
        min: 0,
        max: 100000,
        left: 20,
        bottom: 10,
        showLabel: true,
        text: ["高", "低"],
        textStyle: {
          color: "rgba(255, 255, 255, 1)",
        },
        pieces: [
          {
            gt: 40,
            label: "> 40件",
            color: "#8A3310",
          },
          {
            gte: 30,
            lte: 40,
            label: "30 - 40件",
            color: "#C64918",
          },
          {
            gte: 20,
            lt: 30,
            label: "20 - 30件",
            color: "#E55B25",
          },
          {
            gte: 10,
            lt: 20,
            label: "10 - 20件",
            color: "#F2AD92",
          },
          {
            gte: 1,
            lt: 10,
            label: "1 - 10件",
            color: "#F9DCD1",
          },
        ],
        show: true,
      },
      // 距离盒子边距
      grid: {
        top: 1,
        bottom: 1,
        right: 1,
      },
      // 地图
      geo: [
        {
          layoutCenter: ["50%", "50%"],
          // layoutSize: 650,
          map: "china",
          type: "map",
          itemStyle: {
            normal: {
              borderColor: "rgba(0, 0, 0, 0.2)",
            },
            emphasis: {
              areaColor: "#f2d5ad",
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              borderWidth: 0,
            },
          },
        },
      ],
      //数据渲染
      series: [
        {
          name: "china数据",
          type: "map",
          geoIndex: 0,
          data: dataList,
        },
      ],
    };

    const onClick = (p) => {
      console.log(p);
      setdataLLLL(p.name);
    };

    return (
      <div className="center-content">
        <Echarts
          name="map"
          style={{ width: "100%", height: "100%" }}
          option={option}
          onClick={onClick}
        />
      </div>
    );
  };
  const Right3Config = {
    header: [
      `<span style="font-size:20px">时间</span>`,
      `<span style="font-size:20px">案件信息</span>`,
    ],
    data: [
      [`<a>2017年12月1日</a>`, `<a>四川大竹13岁男孩弑母案</a>`],
      [`<a>2012年4月13日</a>`, `<a>湖南衡阳12岁男孩杀死姑妈一家三口</a>`],
      [`<a>2014年10月12日</a>`, `<a>14岁少女与男友杀人抛尸案</a>`],
      [`<a>2010年7月12日到25日</a>`, `<a>17岁少年14天连害九命</a>`],
      [`<a>2013年11月25日</a>`, `<a>重庆10岁女孩摔婴案</a>`],
      [`<a>2017年2月28日</a>`, `<a>北京西城区校园欺凌案</a>`],
      [`<a>2016年5月19日</a>`, `<a>新东方17岁男生奸杀同学案</a>`],
      [`<a>2017年12月16日</a>`, `<a>15岁少年性侵7岁女童杀人案</a>`],
      [`<a>2013年2月19日</a>`, `<a>李天一强奸案</a>`],
    ],
    index: true, //显示行号
    columnWidth: [10], //列宽度
    align: ["center", "left", "left"],
    rowNum: 7,
    headerHeight: 40,
    headerBGC: "rgba(189, 0, 0, .5)", //表头颜色
    oddRowBGC: "rgba(189, 0, 0, .3)", //奇数颜色
    evenRowBGC: "transparent", //偶数颜色
    //   headerBGC: "", //表头颜色
    //   oddRowBGC: "#3f96a550", //奇数颜色
    //   evenRowBGC: "#3fa58630", //偶数颜色
  };
  //颜色列表
  const colorList = [
    new echarts.graphic.LinearGradient(1, 0, 0, 0, [
      {
        offset: 0,
        color: "rgba(24,136,103,1)",
      },
      {
        offset: 1,
        color: "rgba(24,136,103,0.2)",
      },
    ]),
    new echarts.graphic.LinearGradient(1, 0, 0, 0, [
      {
        offset: 0,
        color: "rgba(113,240,203,1)",
      },
      {
        offset: 1,
        color: "rgba(113,240,203,0.2)",
      },
    ]),
  ];
  const Leftoption = {
    title: {
      text: "各省未成年人犯罪人数统计",
      textStyle: {
        color: "rgba(255, 255, 255, 1)",
        fontFamily: "font3",
      },
    },
    itemStyle: {
      color: "#c23531",
      shadowBlur: 200,
      shadowColor: "rgba(0, 0, 0, 0.5)",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      top: "25",
      left: "0",
      textStyle: {
        color: "rgba(255, 255, 255, 1)",
      },
    },
    grid: {
      left: "0%",
      right: "-3%",
      bottom: "1%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.5],
    },
    yAxis: {
      type: "category",
      data: fzrsData[0].list.map((i) => i.name),
    },
    series: fzrsData.map((i, idx) => {
      console.log(colorList[idx]);
      return {
        name: i.year,
        type: "bar",
        data: i.list.map((j) => j.value),
        itemStyle: { color: colorList[idx] },
      };
    }),
  };

  const Bottomoption = {
    tooltip: {
      trigger: "axis",
      color: "#00",
      fontSize: 14,
      borderColor: "rgba(255, 255, 255, .16)",
      textStyle: {
        color: "#00",
        fontSize: 14,
      },
      axisPointer: {
        lineStyle: {
          color: "rgba(28, 124, 196, .6)",
        },
      },
    },
    grid: {
      top: "11%",
      left: "5%",
      right: "4%",
      bottom: "1%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: bmData.xData,
        axisLine: {
          show: true,
        },
        axisLabel: {
          color: "#FFF",
          fontSize: 14,
          formatter(params) {
            return params.replace(/-/, "\n");
          },
        },
        boundaryGap: false,
        axisTick: {
          //坐标轴刻度相关设置。
          show: true,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        min: 5,
        axisTick: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "#FFF",
          },
        },
        axisLabel: {
          color: "#FFF",
          fontSize: 14,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "#000",
            type: "dashed",
            opacity: 0.1,
          },
        },
      },
    ],
    series: [
      {
        type: "line",
        data: bmData.yData,
        smooth: true,
        symbolSize: 10,
        // lineStyle: {
        //     color: 'rgba(34,150,243, 1)', // 折线颜色
        //     width: 2,
        //     shadowColor: 'rgba(34,150,243, 0.3)', // 折线阴影颜色
        //     shadowOffsetY: 5
        // },
        itemStyle: {
          color: "rgba(113, 240, 203, 1)", // 折线点的颜色
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
            // 折线点的阴影
            {
              offset: 0,
              color: "rgba(113, 240, 203, 0)",
            },
            {
              offset: 1,
              color: "rgba(113, 240, 203, 0.7)",
            },
          ]),
        },
      },
    ],
  };

  const Right1option = {
    title: {
      text: "2023年未成年人犯罪具体数量",
      textStyle: {
        color: "rgba(255, 255, 255, 1)",
        fontFamily: "font3",
      },
    },
    // 鼠标悬浮提示
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      backgroundColor: "rgba(9, 24, 48, 0.5)",
      borderColor: "rgba(75, 253, 238, 0.4)",
      textStyle: {
        color: "#FFf",
      },
    },
    // 图表填充盒子比例
    grid: {
      left: "20",
      right: "20",
      bottom: "20",
      top: "50",
      containLabel: true,
    },
    // x轴配置
    xAxis: {
      type: "category",
      data: bmData.xData,
      // x轴线的样式
      axisLine: {
        lineStyle: {
          // color: "rgba(118, 169, 250, .8)",
          color: "rgba(24, 136, 103)",
        },
      },
      // 是否显示x轴刻度尺
      axisTick: {
        show: false,
      },
      // x轴文字配置
      axisLabel: {
        interval: 0,
        // formatter: function (value) {
        //   // 当文字长度大于2时,使用slice方法截取字符串并拼接省略号；否则直接返回原文字
        //   if (value.length > 2) {
        //     return `${value.slice(0, 2)}...`;
        //   } else {
        //     return value;
        //   }
        // },
        color: "#fff",
        // 默认x轴字体大小
        fontSize: 10,
        // margin:文字到x轴的距离
        margin: 5,
      },
    },
    // y轴配置
    yAxis: {
      // // interval: 10,
      type: "value",
      axisTick: {
        show: false,
      },
      // y轴线样式
      axisLine: {
        show: false,
        lineStyle: {
          color: "#DCE2E8",
        },
      },
      // y轴文字样式
      axisLabel: {
        color: "#FFF",
      },
      // y轴每一条横线样式
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
          // color: "rgba(118, 169, 250, .5)",
          color: "rgba(24, 136, 103, 0.7)",
        },
      },
    },

    series: [
      {
        name: "数量",
        // 柱子宽度
        barWidth: 100,
        // 塔尖柱子类型
        type: "pictorialBar",
        barCategoryGap: "0",
        // 必须引入该项
        symbol: "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
        itemStyle: {
          //barBorderRadius: 5,
          //渐变色
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(113, 240, 203)",
            },
            {
              offset: 1,
              color: "rgba(113, 240, 203, 0)",
            },
          ]),
        },
        // 柱状图上方数据
        label: {
          show: true,
          position: "top",
          color: "#FFF",
        },
        data: r1Data.datas,
        z: 10,
      },
    ],
  };
  const Right2option = {
    title: {
      text: "2023年未成年人犯罪人数占比",
      textStyle: {
        color: "rgba(255, 255, 255, 1)",
        fontFamily: "font3",
      },
    },
    tooltip: {
      trigger: "item",
      formatter: function (params) {
        let total = r2Data.reduce((accumulator, currentValue) => {
          return accumulator + Number(currentValue.value);
        }, 0);

        let str =
          params.name +
          "</br>" +
          "数量：" +
          params.value +
          "</br>" +
          "占比：" +
          ((params.data.value / total) * 100).toFixed(2) +
          "%";
        return str;
      },
    },

    legend: {
      top: "30",
      icon: "roundRect",
      textStyle: {
        color: "#fff",
        fontSize: 12,
      },
      itemWidth: 10,
      itemHeight: 10,
    },
    // color: ["#5c7bd9", "#91cc75", "#fac858", "#ee6666", "#73c0de"],
    color: ["#063f2e", "#188867", "#085b43", "#30ab87", "#71f0cb"],
    series: [
      {
        name: "",
        type: "pie",
        startAngle: -180,
        hoverAnimation: false,
        radius: ["50%", "95%"],
        center: ["50%", "95%"],
        data: [
          ...r2Data,
          {
            value: r2Data.reduce((accumulator, currentValue) => {
              return accumulator + Number(currentValue.value);
            }, 0),
            name: "",
            itemStyle: {
              normal: {
                color: "rgba(0,0,0,0)",
              },
            },
          },
        ],
        label: {
          normal: {
            formatter: function (params) {
              let total = r2Data.reduce((accumulator, currentValue) => {
                return accumulator + Number(currentValue.value);
              }, 0);
              if (params.name) {
                return (
                  params.data.name +
                  "(" +
                  ((params.data.value / total) * 100).toFixed(2) +
                  "%)"
                );
              }
            },
            color: "#fff",
          },
        },
        emphasis: {
          scale: true,
          scaleSize: 10,
        },
        labelLine: {
          normal: {
            length: 30,
            length2: 20,
            lineStyle: {
              width: 1,
            },
          },
        },
      },
    ],
  };
  // 封装组件
  const Section = ({ className, name, option, map, scrollBoard }) => {
    return (
      <div className={className}>
        <BorderBox7 color={["red", " #FF574A"]} backgroundColor="">
          {map ? (
            <Map />
          ) : scrollBoard ? (
            <ScrollBoard config={option} />
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
    <div className="DY">
      <div className="Header">
        <Menu />
        <img src={Top7} alt="" />
        <p className="P1">地域分布</p>
        <p className="P2">BAO GANG BIG DATA PLATFORM</p>
      </div>
      <Section className="Center" map={true} />
      <Section className="Left" name="Left" option={Leftoption} />
      <div className="Right">
        <Section className="MinRight1" name="Right1" option={Right1option} />
        <Section className="MinRight2" name="Right2" option={Right2option} />
        <Section
          className="MinRight3"
          name="Right3"
          scrollBoard
          option={Right3Config}
        />
      </div>
      <Section className="Bottom" name="Bottom" option={Bottomoption} />
    </div>
  );
}