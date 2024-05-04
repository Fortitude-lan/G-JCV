/*
 * @Descripttion:
 * @version:
 * @Author: wanghexing
 * @Date: 2024-03-24 16:54:46
 * @LastEditors: wanghexing
 * @LastEditTime: 2024-05-04 17:51:57
 */
import React, { useEffect, useRef, useState } from "react";
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from "echarts";
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart } from "echarts/charts";
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
} from "echarts/components";
// 标签自动布局、全局过渡动画等特性
import { LabelLayout, UniversalTransition } from "echarts/features";
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from "echarts/renderers";
// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
]);
import "echarts-wordcloud";

export default function Echart(props) {
  const [render, setrender] = useState(false);
  const {
    option,
    name,
    style,
    className,
    onHoverChange = () => {},
    auto,
    datas,
    onClick = () => {},
    onPlay = () => {},
  } = props;
  let chart = useRef();
  let timer = null;
  //创建一个resize事件
  const echartsResize = () => {
    console.log("重新resize");
    chart.current.resize();
  };
  /**
   * 初始化图表组件
   */
  useEffect(() => {
    const element = document.getElementById(name ? name : "echarts");
    setTimeout(() => {
      chart.current = echarts.init(element);

      chart.current.on("click", (params) => {
        if (onClick) {
          // console.log(params);
          onClick(params.data);
        }
      });
      // chart.current.on("mousemove", (params) => {
      //   onHoverChange(params);
      // });
      window.removeEventListener("resize", echartsResize);
      if (chart.current) {
        window.addEventListener("resize", echartsResize);
        chart.current.setOption(option, false);
      }
      // console.log("初始化");
      if (auto) {
        initialScroll(option, chart);
      }
    }, 20);
  }, []);
  /**
   * option 发生改变
   */
  useEffect(() => {
    // //页面卸载，销毁监听
    window.removeEventListener("resize", echartsResize);

    // //监听echartsResize函数，实现图表自适应
    if (chart.current) {
      window.addEventListener("resize", echartsResize);
      chart.current.setOption(option, true);
    }
  }, [option]);
  const handleClick = () => {};

  //定时器
  // 开启定时器
  const initialScroll = (option, chart) => {
    onPlay(option, chart);
    // 只有当大于10条数据的时候 才会看起来滚动
    // let data1 = option.series[0].data; //value
    // let data2 = option.yAxis.data; //name
    // let data1 = datas.map((i) => ({ value: i.value, itemStyle: i.itemStyle })); //value
    // let data2 = datas.map((i) => i.name); //name
    // let beginK = 0;
    // let beginArr1 = data1.splice(0, beginK);
    // let beginArr2 = data2.splice(0, beginK);
    // let time = setInterval(() => {
    //   let first1 = data1.shift();
    //   let first2 = data2.shift();
    //   data1.push(first1);
    //   data2.push(first2);
    //   // console.log([...beginArr1, ...data1]);
    //   // console.log([...beginArr2, ...data2]);
    //   chart.current.setOption({
    //     yAxis: {
    //       ...option.yAxis.data,
    //       data: [...beginArr2, ...data2],
    //     },
    //     series: [
    //       {
    //         ...option.series[0].data,
    //         data: [...beginArr1, ...data1],
    //       },
    //     ],
    //   });
    // }, 3000);
    // timer = time;
  };
  return name ? (
    <div
      id={name}
      style={style ? style : { width: "100%", height: "100%" }}
      // onClick={onClick ? onClick : handleClick}
    ></div>
  ) : (
    <div
      id="echarts"
      style={style ? style : { width: "100%", height: "100%" }}
      // onClick={onClick ? onClick : handleClick}
    ></div>
  );
}
