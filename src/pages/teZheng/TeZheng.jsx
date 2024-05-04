import React from "react";
import "./TeZheng.less";
import { BorderBox7 } from "@jiaminghi/data-view-react";
import { Menu, Echarts } from "@/components";
import * as echarts from "echarts";
import bg from "@/assets/images/center1.png";
import Top7 from '@/assets/images/Top7.png'

// import { r1Data, l2Data, nvfzData } from "./datas/data";
import { Carousel } from "antd";
export default function TeZheng() {
  const Center2option = {
    title: {
      text: "未成年犯罪社会因素",
      // left: 'center',
      top: 5,
      textStyle: {
        color: "#fff",
        fontFamily: "font3",
      },
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      top: "12%",
      left: "center",
      textStyle: {
        color: "#fff",
        fontFamily: "font3",
      },
      data: ["2021年", "2022年", "2023年"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "4%",
      containLabel: true,
    },
    // toolbox: {
    //   feature: {
    //     saveAsImage: {}
    //   }
    // },
    xAxis: {
      type: "category",
      data: ["贫困", "失业", "资源匮乏", "心里健康"],
      axisLabel: {
        //坐标轴字体颜色
        textStyle: {
          // color: '#545454'
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
        name: "2021年",
        type: "line",
        step: "start",
        data: [120, 132, 110, 134, 80, 230, 220],
        //渐变色
        // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        //   {
        //     offset: 0.2,
        //     color: "rgba(113, 240, 203, 1)",
        //   },
        //   {
        //     offset: 1,
        //     color: "rgba(113, 240, 203, 0)",
        //   },
        // ]),
        color: "rgba(183, 340, 203)",
      },
      {
        name: "2022年",
        type: "line",
        step: "middle",
        data: [220, 282, 201, 234, 290, 430, 410],
        //渐变色
        // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        //   {
        //     offset: 0.5,
        //     color: "rgba(113, 240, 203, 1)",
        //   },
        //   {
        //     offset: 1,
        //     color: "rgba(113, 240, 203, 0)",
        //   },
        // ]),
        color: "rgba(113, 240, 203, 1)",
      },
      {
        name: "2023年",
        type: "line",
        step: "end",
        data: [450, 432, 420, 454, 590, 530, 510],
        //渐变色
        // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        //   {
        //     offset: 0.8,
        //     color: "rgba(113, 240, 203, 1)",
        //   },
        //   {
        //     offset: 1,
        //     color: "rgba(113, 240, 203, 0)",
        //   },
        // ]),
        color: "#188867",
      },
    ],
  };
  const Left1option = {
    // backgroundColor: '#2c343c',
    title: {
      text: "未成年犯罪男女分布比例",
      // left: 'center',
      top: 5,
      textStyle: {
        color: "#fff",
        fontFamily: "font3",
      },
    },

    tooltip: {
      trigger: "item",
    },
    axisLabel: {
      formatter: "{value} %",
      textStyle: {
        // color: '#545454'
        color: "#fff",
      },
    },

    visualMap: {
      show: false,
      min: 80,
      max: 600,
      //图的颜色
      inRange: {
        color: ["#063f2e", "#188867", "#085b43", "#30ab87", "#71f0cb"],
        colorLightness: [0, 1],
      },
    },

    series: [
      {
        name: "男女比例",
        type: "pie",
        radius: "75%",
        center: ["50%", "60%"],
        data: [
          { value: 300, name: "男性80%" },
          { value: 200, name: "女性20%" },
        ].sort(function (a, b) {
          return a.value - b.value;
        }),
        roseType: "radius",
        label: {
          // color: "rgba(255, 255, 255, 0.3)",
          color: "#fff"
        },
        labelLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, 0.3)",
          },
          smooth: 0.2,
          length: 10,
          length2: 20,
        },
        itemStyle: {
          color: "#c23531",
          shadowBlur: 200,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
        animationType: "scale",
        animationEasing: "elasticOut",
        animationDelay: function (idx) {
          return Math.random() * 200;
        },
      },
    ],
  };
  const Left2option = {
    title: {
      text: "未成年犯罪家庭因素",
      // left: 'center',
      top: 5,
      textStyle: {
        color: "#fff",
        fontFamily: "font3",
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      formatter: function (params) {
        var tar = params[1];
        return tar.name + "<br/>" + tar.seriesName + " : " + tar.value;
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
      splitLine: { show: false },
      data: ["留守儿童", "单亲家庭", "再婚家庭", "孤儿", "其他"],
      axisLabel: {
        //坐标轴字体颜色
        textStyle: {
          // color: '#545454'
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
        name: "Placeholder",
        type: "bar",
        stack: "Total",
        itemStyle: {
          //barBorderRadius: 5,
          //渐变色
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            // {
            //   offset: 0,
            //   color: "#188867",
            // },
            {
              offset: 1,
              color: "rgba(24, 136, 103, 0)",
            },
          ]),
        },
        // emphasis: {
        //   itemStyle: {
        //     borderColor: '',
        //     color: ''
        //   }
        // },
        data: [1, 1, 1, 1, 1],
      },
      {
        name: "数量",
        type: "bar",
        stack: "Total",
        itemStyle: {
          //barBorderRadius: 5,
          //渐变色
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(113, 240, 203, 1)",
            },
            {
              offset: 1,
              color: "rgba(113, 240, 203, 0)",
            },
          ]),
        },
        label: {
          show: true,
          position: "inside",
        },
        data: [1935, 856, 523, 190, 500],
      },
    ],
  };
  const Right1option = {
    title: {
      text: "未成年犯罪年龄比例",
      // left: 'center',
      top: 5,
      textStyle: {
        color: "#fff",
        fontFamily: "font3",
      },
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      textStyle: {
        color: "#fff",
        fontFamily: "font3",
      },
      top: "15%",
      left: "center",
    },
    
    series: [
      {
        name: "年龄比例",
        type: "pie",
        radius: ["40%", "70%"],
        top: 40,
        avoidLabelOverlap: false,
        padAngle: 5,
        itemStyle: {
          borderRadius: 10,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,

        },
        data: [
          { value: 300, name: "~12岁" },
          { value: 484, name: "13岁" },
          { value: 580, name: "14岁" },
          { value: 735, name: "15岁" },
          { value: 1048, name: "16岁" },
        ],
        color: ["#063f2e", "#188867", "#085b43", "#30ab87", "#71f0cb"],
      },
    ],
  };
  const Right2option = {
    title: {
      text: "未成年犯罪学校因素",
      // left: 'center',
      top: 5,
      textStyle: {
        color: "#fff",
        fontFamily: "font3",
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    legend: {
      textStyle: {
        color: "#fff",
        fontFamily: "font3",
      },
      top: "10%",
      data: ["校园欺凌", "学生攀比", "学生偏见", "老师偏见"],
    },
    // toolbox: {
    //   feature: {
    //     saveAsImage: {}
    //   }
    // },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: ["校园欺凌", "学生攀比", "学生偏见", "老师偏见"],
        axisLabel: {
          //坐标轴字体颜色
          textStyle: {
            // color: '#545454'
            color: "#fff",
          },
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          //坐标轴字体颜色
          textStyle: {
            // color: '#545454'
            color: "#fff",
          },
        },
      },
    ],
    series: [
      {
        name: "校园欺凌",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [120, 132, 101, 134, 90, 230, 210],
        color: "rgba(53, 240, 180)",
      },
      {
        name: "学生攀比",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [320, 182, 191, 234, 290, 330, 310],
        color: "rgba(183, 340, 203)",
      },
      {
        name: "学生偏见",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [250, 232, 201, 154, 190, 330, 410],
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0.7,
            color: "rgba(113, 240, 203, 1)",
          },
          {
            offset: 1,
            color: "rgba(113, 240, 203, 0)",
          },
        ]),
      },
      {
        name: "老师偏见",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [420, 332, 301, 334, 390, 330, 320],
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "rgba(113, 240, 203, 1)",
          },
          {
            offset: 1,
            color: "rgba(113, 240, 203, 0)",
          },
        ]),
      },
      // {
      //   name: 'Search Engine',
      //   type: 'line',
      //   stack: 'Total',
      //   label: {
      //     show: true,
      //     position: 'top'
      //   },
      //   areaStyle: {},
      //   emphasis: {
      //     focus: 'series'
      //   },
      //   data: [820, 932, 901, 934, 1290, 1330, 1320]
      // }
    ],
  };
  // 封装组件
  const Section = ({ className, name, option, map, children }) => {
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
            children && children
          )}
        </BorderBox7>
      </div>
    );
  };
  return (
    <div className="TZ">
      <div className="Header">
        <img src={Top7} alt="" />
        <p className="P1">犯罪特征</p>
        <p className="P2">BAO GANG BIG DATA PLATFORM</p>
        <Menu />
      </div>
      <div className="Center">
        <Section className="Center1">
          <Carousel autoplay>
            <div className="c">
              <div className="tt">Ⅰ  未成年犯罪举例</div>
              <img src={bg} style={{ width: "100%", height: "100%" }} />
              <div className="c-c">
                姓名：李某<br />
                性别：男<br />
                年龄:15岁 <br />
                家庭背景：家庭暴力<br />
                学业情况：初中毕业<br />
                犯罪倾向：家庭暴力<br />
              </div>
            </div>
            <div className="c">
              <div className="tt">Ⅱ  未成年犯罪举例</div>
              <img src={bg} alt="" style={{ width: "100%", height: "100%" }} />
              <div className="c-c">
                姓名：吴某<br />
                性别：男<br />
                年龄:12岁 <br />
                家庭背景：再婚家庭<br />
                学业情况：小学毕业<br />
                犯罪倾向：偷窃<br />
              </div>
            </div>
            <div className="c">
              <div className="tt">Ⅲ  未成年犯罪举例</div>
              <img src={bg} alt="" style={{ width: "100%", height: "100%" }} />
              <div className="c-c">
                姓名：王某<br />
                性别：男<br />
                年龄:17岁 <br />
                家庭背景：单亲家庭<br />
                学业情况：高中二年级<br />
                犯罪倾向：校园暴力<br />
              </div>
            </div>
            <div className="c">
              <div className="tt">Ⅳ  未成年犯罪举例</div>
              <img src={bg} alt="" style={{ width: "100%", height: "100%" }} />
              <div className="c-c">
                姓名：蔡某某<br />
                性别：男<br />
                年龄:13岁 <br />
                家庭背景：独生子<br />
                学业情况：初中<br />
                犯罪倾向：强奸未遂<br />
              </div>
            </div>
            <div className="c">
              <div className="tt">Ⅴ  未成年犯罪举例</div>
              <img src={bg} alt="" style={{ width: "100%", height: "100%" }} />
              <div className="c-c">
                姓名：吴某康<br />
                性别：男<br />
                年龄: 12岁<br />
                家庭背景：母亲管理严格<br />
                学业情况：小学六年级<br />
                犯罪倾向：弑母<br />
              </div>
            </div>
            <div className="c">
              <div className="tt">Ⅵ  未成年犯罪举例</div>
              <img src={bg} alt="" style={{ width: "100%", height: "100%" }} />
              <div className="c-c">
                姓名：某某姐妹<br />
                性别：女<br />
                年龄: 15岁<br />
                家庭背景：父母管教严格<br />
                学业情况：初中<br />
                犯罪倾向：毒死父母<br />
              </div>
            </div>
          </Carousel>
        </Section>

        <Section className="Center2" name="xxv" option={Center2option} />
      </div>
      <div className="Left">
        <Section className="Left1" name="xxt" option={Left1option} />
        <Section className="Left2" name="xxy" option={Left2option} />
      </div>
      <div className="Right">
        <Section className="Right1" name="xxs" option={Right1option} />
        <Section className="Right2" name="xxx" option={Right2option} />
      </div>  
    </div>
  );
}
