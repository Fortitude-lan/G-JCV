import React from "react";
import "./LeiXing.less";
import {
  BorderBox12,
  BorderBox8,
  BorderBox7,
  BorderBox13,
} from "@jiaminghi/data-view-react";
import { Menu, Echarts } from "@/components";
import {
  l1Data,
  l2Data,
  r1Data,
  r2Data,
  bl1Data,
  bl2Data,
  brData,
} from "./datas/data";
import * as echarts from "echarts";
import Top7 from "@/assets/images/Top7.png";

export default function LeiXing() {
  // 左1
  const Left1 = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      data: l1Data.type,
      orient: "vertical",
      top: "5%",
      left: "1%",
      textStyle: {
        color: "#fff",
        fontSize: 10,
      },
    },
    color: ["#063f2e", "#188867", "#085b43", "#30ab87", "#71f0cb"],
    series: [
      {
        name: "犯罪类型",
        type: "pie",
        left: "20%",
        radius: "80%", // 调节大小，半径
        center: ["40%", "53%"], // 调节位子 name: 'Radius Mode',
        roseType: "radius",
        itemStyle: {
          borderRadius: 0,
        },
        label: {
          show: true,
          normal: {
            textStyle: {
              color: "#fff",
              // fontSize: 13,
            },
          },
        },
        emphasis: {
          label: {
            show: true,
          },
        },
        data: [
          { value: 490, name: "侵犯财产犯罪" },
          { value: 230, name: "妨害社会管理秩序罪" },
          { value: 210, name: "侵犯公民人身权利、民主权利罪" },
          { value: 30, name: "危害公共安全罪" },
          { value: 30, name: "破坏社会主义市场经济秩序罪" },
          { value: 10, name: "贪污贿赂罪" },
        ].sort(function (a, b) {
          return a.value - b.value;
        }),
      },
    ],
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
  // 左2
  const Left2 = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    xAxis: {
      type: "category",
      data: l2Data.xAxis,
      axisTick: {
        show: false,
      },
      axisLabel: {
        //坐标轴字体颜色
        interval: 0,
        textStyle: {
          // color: '#545454'
          color: "#fff",
        },
        formatter: (value, index) => {
          if (value.length > 3) {
            return value.substring(0, 2) + "...";
          }
          return value;
        },
      },
      axisLine: {
        lineStyle: {
          // color: "#e5e5e5"
          color: "#fff",
        },
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        //坐标轴字体颜色
        textStyle: {
          // color: '#545454'
          color: "#fff",
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
          // color: "rgba(118, 169, 250, .5)",
          color: "#fff",
        },
      },
    },
    series: [
      {
        data: l2Data.data,
        type: "bar",
        label: {
          show: true,
          position: "outside",
          textStyle: {
            color: "#fff",
          },
        },
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(113,240,203,1)",
            },
            {
              offset: 1,
              color: "rgba(113,240,203,0.2)",
            },
          ]),
        },
        showBackground: true,
      },
    ],
    dataZoom: [
      {
        show: false, // 为true 滚动条出现
        realtime: true,
        type: "slider", // 有type这个属性，滚动条在最下面，也可以不行，写y：36，这表示距离顶端36px，一般就是在图上面。
        startValue: 0, // 表示默认展示20%～80%这一段。
        endValue: 5,
        xAxisIndex: 0, //关联多个y轴
      },
      {
        type: "inside",
        xAxisIndex: 0, //关联多个y轴
        zoomOnMouseWheel: false, //滚轮是否触发缩放
        moveOnMouseMove: false,
      },
    ],
  };
  // 右1
  const Right1 = {
    title: {
      text: "2017-2021 毒品犯罪",
      left: 20,
      top: 0,
      textStyle: {
        color: "#FFF",
        fontFamily: "font3",
      },
    },
    grid: {
      top: "25%",
      bottom: "12%",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#BD0000",
        },
      },
    },
    // toolbox: {
    //   feature: {
    //     dataView: { show: true, readOnly: false },
    //     magicType: { show: true, type: ["line", "bar"] },
    //     restore: { show: true },
    //     saveAsImage: { show: true },
    //   },
    // },
    legend: {
      right: "80",
      data: ["人数", "占比"],
      textStyle: {
        color: "#FFF",
      },
    },
    xAxis: [
      {
        type: "category",
        data: r1Data.time,
        axisPointer: {
          type: "shadow",
        },
        axisLabel: {
          //坐标轴字体颜色
          textStyle: {
            // color: '#545454'
            color: "#fff",
          },
        },
        // axisLine: {
        //   lineStyle: {
        //     // color: "#e5e5e5"
        //     // color: "#fff",
        //   },
        // },
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "人数",
        min: 0,
        max: 2500,
        interval: 500,
        axisLabel: {
          formatter: "{value}",
          textStyle: {
            // color: '#545454'
            color: "#fff",
          },
        },
      },
      {
        type: "value",
        name: "占比",
        min: 0,
        max: 3.5,
        interval: 0.5,
        axisLabel: {
          formatter: "{value} %",
          textStyle: {
            // color: '#545454'
            color: "#fff",
          },
        },
      },
    ],
    series: [
      {
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
              color: "rgba(24, 136, 103, 0.2)",
            },
          ]),
        },
        // color: "#085b43",
        // color: "#A60000",
        name: "人数",
        type: "bar",
        tooltip: {
          valueFormatter: function (value) {
            return value + " 人";
          },
        },
        data: r1Data.people,
      },
      {
        color: "rgba(113, 240, 203)",
        // color: "#F08784",
        name: "占比",
        type: "line",
        yAxisIndex: 1,
        tooltip: {
          valueFormatter: function (value) {
            return value + " %";
          },
        },
        data: r1Data.proportion,
      },
    ],
  };
  // 右2
  const Right2 = {
    title: {
      text: "2017-2021 暴力犯罪",
      left: 20,
      textStyle: {
        color: "#fff",
        fontFamily: "font3",
      },
    },
    legend: {
      right: 0,
      data: ["人数", "占比"],
      textStyle: {
        color: "#FFF",
      },
    },
    tooltip: {
      valueFormatter: function (value) {
        return value;
      },
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: "2017", max: 25000 },
        { name: "2018", max: 25000 },
        { name: "2019", max: 25000 },
        { name: "2020", max: 25000 },
        { name: "2021", max: 25000 },
      ],
      radius: 70, //缩放
      center: ["50%", "50%"], //位置
    },
    series: [
      {
        name: "人数 vs 占比",
        type: "radar",
        color: ["#30ab87", "rgba(113, 240, 203)"],
        data: [
          {
            value: r2Data.num,
            name: "人数",
          },
          {
            value: r2Data.proportionNum,
            name: "占比",
          },
        ],
      },
    ],
  };
  // 下左1
  const BottomLeft1 = {
    title: {
      text: "2017-2021 校园欺凌",
      left: 20,
      textStyle: {
        color: "#fff",
        fontFamily: "font3",
      },
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      top: 10,
      right: 80,
      data: ["批准逮捕", "提起公诉"],
      textStyle: {
        color: "#fff",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: r2Data.year,
      axisLabel: {
        //坐标轴字体颜色
        textStyle: {
          // color: '#545454'
          color: "#fff",
        },
      },
      axisLine: {
        lineStyle: {
          // color: "#e5e5e5"
          color: "#fff",
        },
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        //坐标轴字体颜色
        textStyle: {
          // color: '#545454'
          color: "#fff",
        },
      },
    },
    series: [
      {
        color: "rgba(113, 240, 203)",
        // color: "#FD5400",
        name: "批准逮捕",
        type: "line",
        stack: "Total",
        data: bl1Data.dbNum,
      },
      {
        color: "#085b43",
        // color: "#A60000",
        name: "提起公诉",
        type: "line",
        stack: "Total",
        data: bl1Data.gsNum,
      },
    ],
  };
  // 下左2
  const BottomLeft2 = {
    title: {
      text: "2017-2021 性侵害",
      left: 20,
      textStyle: {
        color: "#fff",
        fontFamily: "font3",
      },
    },
    // backgroundColor: '#fff',
    tooltip: {
      trigger: "axis",
    },
    grid: {
      left: "5%",
      right: "6%",
      bottom: "3%",
      top: "20%",
      containLabel: true,
    },
    legend: {
      icon: "rect",
      right: "80",
      top: "10%",
      itemWidth: 20,
      itemHeight: 10,
      textStyle: {
        color: "#fff",
      },
      // data:['新增','修改','删除']
    },
    xAxis: {
      type: "category",
      data: r2Data.year,
      axisLabel: {
        //坐标轴字体颜色
        textStyle: {
          // color: '#545454'
          color: "#fff",
        },
      },
      axisLine: {
        lineStyle: {
          // color: "#e5e5e5"
          color: "#fff",
        },
      },
      axisTick: {
        //y轴刻度线
        show: false,
      },
      splitLine: {
        //网格
        show: false,
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        //坐标轴字体颜色
        textStyle: {
          // color: '#545454'
          color: "#fff",
        },
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        //y轴刻度线
        show: false,
      },
      splitLine: {
        //网格
        show: true,
        lineStyle: {
          // color: '#dadde4',
          color: "#fff",
          type: "dashed",
        },
      },
    },
    series: [
      {
        name: "强奸",
        type: "bar",
        stack: "策略变更",
        barWidth: "40%", //柱子宽度
        itemStyle: {
          //柱子颜色
          normal: {
            color: "rgba(113, 240, 203)",
            // color: "#febc5d",
            // color: '#fff',
            // borderColor: "#fff",
            // borderWidth: 1,
          },
        },
        data: bl2Data.qjNum,
      },
      {
        name: "猥亵儿童",
        type: "bar",
        stack: "策略变更",
        barWidth: "40%", //柱子宽度
        itemStyle: {
          //柱子颜色
          normal: {
            color: "#30ab87",
            // color: "#ff7659",
            // color: '#fff',
            // borderColor: "#fff",
            // borderWidth: 1,
          },
        },
        data: bl2Data.wxNum,
      },
      {
        name: "强制猥亵、侮辱",
        type: "bar",
        stack: "策略变更",
        barWidth: "40%", //柱子宽度
        itemStyle: {
          //柱子颜色
          normal: {
            color: "#085b43",
            // color: "#d11b1b",
            // borderColor: "#fff",
            // borderWidth: 1,
          },
        },
        data: bl2Data.qzwrNum,
      },
    ],
  };
  // 下右
  const BottomRight = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {d}%",
    },
    title: {
      text: "2017-2021 盗窃",
      left: 20,
      textStyle: {
        color: "#fff",
        fontFamily: "font3",
      },
    },
    legend: {
      top: "bottom",
      textStyle: {
        color: "#fff",
      },
    },
    series: [
      {
        name: "盗窃占比",
        type: "pie",
        radius: [22, 120],
        center: ["50%", "50%"],
        roseType: "area",
        label: {
          normal: {
            textStyle: {
              color: "#fff",
              fontSize: 13,
            },
          },
        },
        itemStyle: {
          borderRadius: 8,
        },
        color: ["#063f2e", "#085b43", "#188867", "#30ab87", "#71f0cb"],
        data: brData.dqNum,
      },
    ],
  };

  const Section = ({ className, name, option, map, ...rest }) => {
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
              {...rest}
            />
          ) : (
            ""
          )}
        </BorderBox7>
      </div>
    );
  };
  const onPlay = (option, chart) => {
    console.log("滚动");
    let datas = l2Data.data.map((v, id) => ({
      name: l2Data.xAxis[id],
      value: v,
      itemStyle: { color: colorList[id % 2] },
    }));

    let data1 = datas.map((i) => ({ value: i.value, itemStyle: i.itemStyle })); //value
    let data2 = datas.map((i) => i.name); //name
    let beginK = 0;
    let beginArr1 = data1.splice(0, beginK);
    let beginArr2 = data2.splice(0, beginK);
    let time = setInterval(() => {
      let first1 = data1.shift();
      let first2 = data2.shift();
      data1.push(first1);
      data2.push(first2);
      // console.log([...beginArr1, ...data1]);
      // console.log([...beginArr2, ...data2]);

      chart.current.setOption({
        xAxis: {
          ...option.xAxis.data,
          data: [...beginArr2, ...data2],
        },
        series: [
          {
            ...option.series[0].data,
            data: [...beginArr1, ...data1],
          },
        ],
      });
    }, 3000);
  };
  return (
    <div className="LX">
      <div className="Header">
        <Menu />
        <img src={Top7} alt="" />
        <p className="P1">犯罪类型</p>
        <p className="P2">BAO GANG BIG DATA PLATFORM</p>
      </div>

      <div className="lxLeft">
        <BorderBox12 color={["#A60000", "#FF574A"]}>
          <Section
            className="lxLeft1"
            name="PieL"
            style={{ width: "50%", height: "105%" }}
            option={Left1}
          />
          <Section
            className="lxLeft2"
            name="zzt"
            style={{ width: "50%", height: "105%" }}
            option={Left2}
            auto={true}
            onPlay={onPlay}
          />
        </BorderBox12>
      </div>
      <div className="lxRight">
        <Section className="lxRight1" name="xidu" option={Right1} />
        <Section className="lxRight2" name="baoli" option={Right2} />
      </div>
      <div className="lxBottom-left">
        <Section
          className="lxBottom-left1"
          name="xiaoyuan"
          option={BottomLeft1}
        />
        <Section
          className="lxBottom-left2"
          name="xingqin"
          option={BottomLeft2}
        />
      </div>
      <Section className="lxBottom-right" name="daoqie" option={BottomRight} />
    </div>
  );
}
