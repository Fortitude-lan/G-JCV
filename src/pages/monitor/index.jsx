// import React, { useState, useEffect, useMemo } from "react";
// import { Echarts } from "@/components";
// import * as echarts from "echarts";
// export default function Monitor() {
//   const [data, setdata] = useState([120, 200, 150, 80, 70, 110, 130]);
//   const [count, setCount] = useState(0);

//   const Counter = (counts, time = 1000) => {
//     //counts：传入的数字，time: 默认500毫秒之内整个动画完成
//     useEffect(() => {
//       const step = counts <= time ? 1 : Math.ceil(counts / time); // 两种情况：1.总数小于time时，就以每毫秒递增1的形式增加；2.总数大于500，计算出每毫秒至少要递增多少
//       const timer = setInterval(() => {
//         setCount((pre) => (pre + step > counts ? counts : pre + step));
//       }, 1);
//       return () => clearInterval(timer);
//     }, [counts]);
//     useEffect(() => {
//       const interval = setInterval(() => {
//         // 每间隔3秒重新归0
//         setCount(0);
//         // This will run every 5 seconds
//         console.log("Executed every 5 seconds");
//       }, 3000);
//       return () => clearInterval(interval);
//     }, [count]);

//     return count;
//   };
//   useEffect(() => {
//     const interval = setInterval(() => {
//       // This will run every 5 seconds
//       const randomArray = Array.from(
//         { length: 5 },
//         () => Math.floor(Math.random() * 51) + 50
//       );
//       setdata([...randomArray]);
//       console.log("刷新");
//       console.log(randomArray);
//     }, 1000);
//     return () => clearInterval(interval);
//   }, [data]);
//   const option = {
//     xAxis: {
//       type: "category",
//       data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
//     },
//     yAxis: {
//       type: "value",
//     },
//     series: [
//       {
//         data: data,
//         type: "bar",
//       },
//     ],
//   };

//   return (
//     <div>
//       {Counter(100)}
//       <div style={{ width: "50%", height: "50vh" }}>
//         <Echarts
//           ket="aaa"
//           name="aa"
//           option={option}
//           style={{ width: "100%", height: "100%" }}
//         />
//       </div>
//     </div>
//   );
// }

import React from "react";
import {
  FullScreenContainer,
  Decoration5,
  Decoration8,
  BorderBox6,
  BorderBox8,
  WaterLevelPond,
  BorderBox9,
  BorderBox11,
  BorderBox12,
  ScrollBoard,
  CapsuleChart,
  Charts,
} from "@jiaminghi/data-view-react";
import { Echarts } from "@/components";
import { mapJson } from "./datas/data";
import * as echarts from "echarts";
import './index.less'
export default function Monitor() {

  const TopContent = () => {
    return (
      <div className="top-content">
        <Decoration8 />
        <Decoration5 />
        <Decoration8 reverse={true} />
        <div className="title">大屏幕大屏幕大屏幕</div>
      </div>
    );
  };
  const LeftContent = () => {
    const config = {
      data: [
        {
          name: "南阳",
          value: 167,
        },
        {
          name: "周口",
          value: 67,
        },
        {
          name: "漯河",
          value: 123,
        },
        {
          name: "郑州",
          value: 55,
        },
        {
          name: "西峡",
          value: 98,
        },
        {
          name: "南阳1",
          value: 167,
        },
        {
          name: "周口1",
          value: 67,
        },
        {
          name: "漯河1",
          value: 123,
        },
        {
          name: "郑州1",
          value: 55,
        },
        {
          name: "西峡1",
          value: 98,
        },
      ],
      //   colors: ['#8fffe2', '#8fffe2', '#8fffe2', '#8fffe2', '#8fffe2'],
    };

    const option = {
      legend: {
        data: ["设备完好率"],
        textStyle: {
          fill: "#fff",
        },
      },

      xAxis: {
        data: [
          "10/01",
          "10/02",
          "10/03",
          "10/04",
          "10/05",
          "10/06",
          "10/07",
          "10/07",
          "10/08",
        ],
        boundaryGap: false,
        axisLine: {
          style: {
            stroke: "#999",
          },
        },
        axisLabel: {
          style: {
            fill: "#999",
          },
        },
        axisTick: {
          show: false,
        },
      },
      grid: {
        top: 10,
      },
      yAxis: {
        data: "value",
        splitLine: {
          show: false,
        },
        axisLine: {
          style: {
            stroke: "#999",
          },
        },
        axisLabel: {
          style: {
            fill: "#999",
          },
          formatter({ value }) {
            return value.toFixed(2);
          },
        },
        axisTick: {
          show: false,
        },
        min: 98,
        max: 100,
        interval: 0.5,
      },
      series: [
        {
          data: [99.56, 99.66, 99.84, 99.22, 99.11, 99.45, 99.44, 99.81, 99.84],
          type: "line",
          name: "设备完好率",
          smooth: true,
          lineArea: {
            show: true,
            gradient: ["rgba(55, 162, 218, 0.6)", "rgba(55, 162, 218, 0)"],
          },
          linePoint: {
            radius: 4,
            style: {
              fill: "#00db95",
            },
          },
        },
      ],
    };
    return (
      <div className="left-conetnt">
        <BorderBox8 color={["#3f96a5", "#3f8fa5"]} />
        <BorderBox8 color={["#3f96a5", "#3f8fa5"]} />
        <BorderBox8 color={["#3f96a5", "#3f8fa5"]} />
        <CapsuleChart config={config} />
        <Charts option={option} />
      </div>
    );
  };
  const RightContent = () => {
    const config = {
      header: ["时间", "病害信息", "数量"],
      data: [
        ["2019-07-01 19:25:00", "路面危害-松散", "5"],
        ["2019-07-02 17:25:00", "路面危害-路面油污清理", "13"],
        ["2019-07-03 16:25:00", "交安设施-交通标志牌结构", "6"],
        ["2019-07-04 15:25:00", "路基危害-防尘网", "2"],
        ["2019-07-05 14:25:00", "交安设施-交通标志牌结构", "1"],
        ["2019-07-06 13:25:00", "路面危害-松散", "3"],
        ["2019-07-07 12:25:00", "路基危害-防尘网", "4"],
        ["2019-07-08 11:25:00", "路面危害-路面油污清理", "2"],
        ["2019-07-09 10:25:00", "交安设施-交通标志牌结构", "5"],
        ["2019-07-10 09:25:00", "路基危害-防尘网", "3"],
      ],
      index: true, //显示行号
      columnWidth: [10], //列宽度
      align: ["center", "left", "left", "center"],
      rowNum: 7,
      headerHeight: 40,
      headerBGC: "", //表头颜色
      oddRowBGC: "transparent", //奇数颜色
      evenRowBGC: "transparent", //偶数颜色
      //   headerBGC: "", //表头颜色
      //   oddRowBGC: "#3f96a550", //奇数颜色
      //   evenRowBGC: "#3fa58630", //偶数颜色
    };
    let color = [
      "#3f96a5",
      "#3f96a5",
      "#3f96a5",
      "#3f96a5",
      "#3f96a5",
      "#3f96a5",
    ];
    let echartData = [
      {
        name: "光路强度6.2小时",
        value: "28",
      },
      {
        name: "电路强度10.8小时",
        value: "34",
      },
      {
        name: "业务调测2.7小时",
        value: "15",
      },
      {
        name: "开通确认3小时",
        value: "15",
      },
      {
        name: "勘查确认25.1小时",
        value: "40",
      },
      {
        name: "受理与审核10.4小时",
        value: "32",
      },
      {
        name: "方案设计与施工\n56.4小时          ",
        value: "56.4",
      },
      {
        name: "客户侧设备施工0.8小时",
        value: "6",
      },
    ];
    const option = {
      //   backgroundColor: bgColor,
      color: color,
      grid: { bottom: 0 },
      title: [
        {
          text: "{name|" + "各环节统计" + "}",
          top: "center",
          left: "center",
          textStyle: {
            rich: {
              name: {
                fontSize: 14,
                fontWeight: "normal",
                color: "#fff",
                padding: [10, 0],
              },
            },
          },
        },
      ],
      series: [
        {
          type: "pie",
          roseType: "area",
          radius: ["30", "80"],
          center: ["50%", "50%"],
          data: echartData,
          hoverAnimation: false,
          itemStyle: {
            normal: {
              borderColor: "#000",
              borderWidth: 3,
            },
          },
          labelLine: {
            normal: {
              length: 5,
              length2: 5,
            },
          },
          label: {
            normal: {
              formatter: (params) => {
                return "{name|" + params.name + "}";
              },
              rich: {
                name: {
                  fontSize: 12,
                  padding: [0, 0, 10, 10],
                  color: "rgb(134,146,167)",
                },
              },
            },
          },
        },
      ],
    };

    return (
      <div className="right-conetnt">
        <BorderBox11 color={["#3f96a5", "#3f8fa5"]} title="titletitle">
          {/* <Charts option={option}/> */}
          <Echarts
            name="pie"
            style={{ width: "100%", height: "100%" }}
            option={option}
          />
        </BorderBox11>
        <div className="table">
          <BorderBox12 color={["#3f96a5", "#94ced8"]} />
          <ScrollBoard config={config} />
        </div>
      </div>
    );
  };
  const BottomContent = () => {
    const datas = [
      { title: "title" },
      { title: "title" },
      { title: "title" },
      { title: "title" },
    ];
    return (
      <div className="bottom-content">
        {datas.map((item, idx) => (
          <div className="card" key={idx}>
            <BorderBox6 color={["#3f96a5", "#3f8fa5"]}>
              <div className="title">{item.title}</div>
              <WaterLevelPond
                config={{
                  data: [20],
                  waveHeight: [5],
                  waveNum: 2,
                  shape: "round",
                }}
                style={{ width: "5rem", height: "5rem" }}
              />
            </BorderBox6>
          </div>
        ))}
      </div>
    );
  };
  const CenterContent = () => {
    // 注册自定义地图类型, 类型名称, 地图数据
    echarts.registerMap("内蒙古", mapJson);
    // 设置不同区域的背景
    let data = mapJson.features.map((item) => {
      let backgroundColorObj = {
        阿拉善盟: "rgba(19, 111, 120, 0.8)",
        包头市: "rgba(19, 111, 120, 0.8)",
        巴彦淖尔市: "rgba(19, 111, 120, 0.8)",
        呼伦贝尔市: "rgba(19, 111, 120, 0.8)",
        兴安盟: "rgba(19, 111, 120, 0.8)",
        赤峰市: "rgba(19, 111, 120, 0.8)",
        呼和浩特市: "rgba(19, 111, 120, 0.8)",
        通辽市: "rgba(19, 111, 120, 0.8)",
        乌兰察布市: "rgba(19, 111, 120, 0.8)",
        乌海市: "rgba(19, 111, 120, 0.8)",
        鄂尔多斯市: "rgba(19, 111, 120, 0.8)",
        锡林郭勒盟: "rgba(19, 111, 120, 0.8)",
      };
      return {
        name: item.properties.name,
        itemStyle: {
          normal: { areaColor: backgroundColorObj[item.properties.name] }, //区域颜色
        },
      };
    });
    // 配置项
    let option = {
      geo: [
        {
          map: "内蒙古",
          type: "map",
          aspectScale: 1,
          zoom: 0.65,
          regions: data,
          layoutCenter: ["50%", "50%"],
          layoutSize: "180%",
          show: true,
          roam: false,
          label: {
            normal: {
              show: true,
              textStyle: {
                color: "transparent",
                fontSize: "12px",

                textShadowColor: "#fff",
                textShadowBlur: 0.2,
                textShadowOffsetX: -2,
                textShadowOffsetY: 10,
                fontWeight: "bold",
                fontStyle: "italic",
              },
            },
            emphasis: {
              show: false,
            },
          },
          itemStyle: {
            normal: {
              borderColor: "rgb(55, 229, 245)",
              borderWidth: 0.5,
              areaColor: "rgba(255,255,255,0)",
            },
            emphasis: {
              show: false,
              color: "#fff",
              fontWeight: "bold",
              areaColor: "rgba(51, 227, 244, 0.8)",
            },
          },
        },
        // 重影
        {
          type: "map",
          map: "内蒙古",
          zlevel: -1,
          aspectScale: 1,
          zoom: 0.65,
          layoutCenter: ["50%", "51.3%"],
          layoutSize: "180%",
          roam: false,
          silent: true,
          itemStyle: {
            normal: {
              borderColor: "rgb(55, 229, 245)",
              borderWidth: 0.5,
              areaColor: "rgba(255,255,255,0)",
            },
            emphasis: {
              show: false,
              color: "#fff",
              fontWeight: "bold",
              areaColor: "rgba(51, 227, 244, 0.8)",
            },
          },
        },
        {
          type: "map",
          map: "内蒙古",
          zlevel: -2,
          aspectScale: 1,
          zoom: 0.65,
          layoutCenter: ["50%", "51.6%"],
          layoutSize: "180%",
          roam: false,
          silent: true,
          itemStyle: {
            normal: {
              borderColor: "rgb(55, 229, 245)",
              borderWidth: 0.5,
              areaColor: "rgba(255,255,255,0)",
            },
            emphasis: {
              show: false,
              color: "#fff",
              fontWeight: "bold",
              areaColor: "rgba(51, 227, 244, 0.8)",
            },
          },
        },
        {
          type: "map",
          map: "内蒙古",
          zlevel: -3,
          aspectScale: 1,
          zoom: 0.65,
          layoutCenter: ["50%", "53.6%"],
          layoutSize: "180%",
          roam: false,
          silent: true,
          itemStyle: {
            normal: {
              borderColor: "rgb(55, 229, 245)",
              borderWidth: 0.5,
              areaColor: "rgba(255,255,255,0)",
            },
            emphasis: {
              show: false,
              color: "#fff",
              fontWeight: "bold",
              areaColor: "rgba(51, 227, 244, 0.8)",
            },
          },
        },
        {
          type: "map",
          map: "内蒙古",
          zlevel: -4,
          aspectScale: 1,
          zoom: 0.65,
          layoutCenter: ["50%", "53.8%"],
          layoutSize: "180%",
          roam: false,
          silent: true,
          itemStyle: {
            normal: {
              borderColor: "rgb(55, 229, 245)",
              borderWidth: 0.5,
              areaColor: "rgba(255,255,255,0)",
            },
            emphasis: {
              show: false,
              color: "#fff",
              fontWeight: "bold",
              areaColor: "rgba(51, 227, 244, 0.8)",
            },
          },
        },
      ],
      series: [
        {
          name: "内蒙古数据",
          type: "map",
          map: "内蒙古", // 自定义扩展图表类型
          aspectScale: 1,
          zoom: 0.65, // 缩放
          showLegendSymbol: true,
          label: {
            normal: {
              show: true,
              textStyle: {
                color: "transparent",
                fontWeight: "bold",
                fontSize: "12px",
                fontStyle: "italic",
              },
            },
            emphasis: {
              show: true,
              textStyle: {
                color: "#fff",
                fontWeight: "bold",
                fontSize: "12px",
                fontStyle: "italic",
              },
            },
          },
          itemStyle: {
            normal: {
              borderColor: "rgb(55, 229, 245)",
              borderWidth: 0.5,
              areaColor: "rgba(255,255,255,0)",
            },
            emphasis: {
              show: false,
              color: "#fff",
              fontWeight: "bold",
              areaColor: "rgba(51, 227, 244, 0.8)",
            },
          },
          layoutCenter: ["50%", "50%"],
          layoutSize: "180%",
          markPoint: {
            symbol: "none",
          },
          data: data,
        },
      ],
    };
    const onClick = (p) => {
      console.log(p);

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

  return (
    <div className="monitor">
      <FullScreenContainer>
        {/* 标题头部 */}
        <TopContent />
        <LeftContent />
        <RightContent />
        <CenterContent />
        <BottomContent />
      </FullScreenContainer>
    </div>
  );
}
