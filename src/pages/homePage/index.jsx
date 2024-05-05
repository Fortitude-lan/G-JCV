import React, { useRef, useState, useEffect } from "react";
//引入路由库中跳转路由的方法
import { useNavigate } from "react-router-dom";
import { Carousel, Tooltip } from "antd";
import { Echarts } from "@/components";
import * as echarts from "echarts";
import "./index.less";
import mapJson from "@/utils/China.json";
import { Decoration9 } from "@jiaminghi/data-view-react";

import img006 from "@/assets/images/0061.png";
import title1 from "@/assets/images/title11.png";
import title2 from "@/assets/images/title22.png";
import h11 from "@/assets/images/h11.png";
import h2 from "@/assets/images/h2.png";
import h3 from "@/assets/images/h3.png";
import cybg from "@/assets/images/cybg.png";

export default function HomePage() {
  const [count, setCount] = useState(0);

  //  定义跳转导航变量
  const navigate = useNavigate();
  const onLink = (url) => {
    console.log("点击");
    navigate(url);
  };
  //犯罪列表
  const fzList = [
    {
      date: "2017年2月28日",
      v: "湖南衡阳12岁男孩<br />家庭暴力",
    },
    {
      date: "2017年2月28日",
      v: "北京某职业学院<br />欺凌案",
    },
    {
      date: "2015年11月19日",
      v: "17岁少年陈某某<br />盗窃案",
    },
    {
      date: "2011年9月17日",
      v: "16岁的少年陶汝坤<br />求爱未遂烧伤案",
    },
  ];
  const flowerOption = {
    tooltip: {
      confine: true,
      trigger: "item",
      formatter: "{a}<br/><br/><b>{b}年</b> :   {c}%",
      // borderColor: "red",
      backgroundColor: "rgba(0,0,0,.5)",
      textStyle: {
        color: "rgba(255, 255, 255, 1)",
      },
    },
    // title: {
    //   text: "2014-2021中国未成年重新犯罪情况",
    //   left: "center",
    //   bottom: 0,
    //   textStyle: {
    //     color: "#ccc",
    //   },
    // },
    series: [
      {
        name: "2014-2021中国未成年重新犯罪情况",
        type: "pie",
        radius: ["5%", "100%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 100,
          borderColor: "rgba(0,0,0,.5)",
          borderWidth: 5,
        },
        label: {
          show: false,
          position: "center",
        },
        labelLine: {
          show: true,
        },
        data: [
          {
            value: 3.02,
            name: "2014",
            itemStyle: {
              color: "#33353460",
            },
          },
          {
            value: 3.6,
            name: "2015",
            itemStyle: {
              color: "#49363760",
            },
          },
          {
            value: 3.8,
            name: "2016",
            itemStyle: {
              color: "#5f363960",
            },
          },
          {
            value: 3.25,
            name: "2017",
            itemStyle: {
              color: "#75373c60",
            },
          },
          {
            value: 3.52,
            name: "2018",
            itemStyle: {
              color: "#8c383e60",
            },
          },
          {
            value: 3.83,
            name: "2019",
            itemStyle: {
              color: "#a2394160",
            },
          },
          {
            value: 3.83,
            name: "2020",
            itemStyle: {
              color: "#b8394360",
            },
          },
          {
            value: 2.97,
            name: "2021",
            itemStyle: {
              color: "#ce3a4660",
            },
          },
        ],
        // label: {
        //   show: true,
        //   formatter: function (params) {
        //     var name = params.name;
        //     var percent = params.percent;
        //     return name + "\n" + percent;
        //   },
        // },
      },
    ],
  };

  const MenuDIV = () => {
    return (
      <div className="menu">
        <div
          className="tt"
          onClick={() => {
            onLink("diyu");
          }}
        >
          地域分布
        </div>
        <div
          className="tt"
          onClick={() => {
            onLink("leixing");
          }}
        >
          犯罪类型
        </div>
        <div
          className="tt"
          onClick={() => {
            onLink("tezheng");
          }}
        >
          犯罪特征
        </div>
        <div
          className="tt"
          onClick={() => {
            onLink("qushi");
          }}
        >
          犯罪趋势
        </div>
        <div
          className="tt"
          onClick={() => {
            onLink("cuoshi");
          }}
        >
          预防措施
        </div>
      </div>
    );
  };
  // 地图组件
  const Map = () => {
    // 注册自定义地图类型, 类型名称, 地图数据
    echarts.registerMap("china", mapJson);
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
    // 配置项
    const option = {
      // 映射小图
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
            color: "#666666",
          },
          {
            gte: 30,
            lte: 40,
            label: "30 - 40件",
            color: "#808080",
          },
          {
            gte: 20,
            lt: 30,
            label: "20 - 30件",
            color: "#999999",
          },
          {
            gte: 10,
            lt: 20,
            label: "10 - 20件",
            color: "#B2B2B2",
          },
          {
            gte: 1,
            lt: 10,
            label: "1 - 10件",
            color: "#CCCCCC",
          },
        ],
        show: true,
      },
      tooltip: {
        trigger: "item",
        formatter: `{a}<br/><br/>  <b>{b}</b> :   {c}件`,
      },
      // 地图
      geo: [
        {
          map: "china",
          type: "map",
          zlevel: 2,
          label: {
            // 通常状态下的样式
            normal: {
              show: true,
              textStyle: {
                color: "transparent",
                fontSize: "14",
              },
            },
            // 鼠标放上去的样式
            emphasis: {},
          },
          itemStyle: {
            normal: {
              borderWidth: 1,
              borderColor: "",
              areaColor: "#000",
            },
            // 鼠标点击选中的样式
            emphasis: {
              label: {
                color: "#Fff",
              },
              areaColor: "#fff",
              shadowOffsetX: 6, // 折线的X偏移
              shadowOffsetY: 6, // 折线的Y偏移
              shadowBlur: 6, // 折线模糊
              borderWidth: 0,
            },
          },
        },
        // 重影
        {
          map: "china",
          type: "map",
          zlevel: -1,
          itemStyle: {
            normal: {
              borderWidth: 1,
              borderColor: "rgba(0,0,0,0.1)",
              shadowOffsetX: 12, // 折线的X偏移
              shadowOffsetY: -10, // 折线的Y偏移
              areaColor: "green",
            },
            emphasis: {
              areaColor: "#fff",
              shadowOffsetX: 6, // 折线的X偏移
              shadowOffsetY: 6, // 折线的Y偏移
              shadowBlur: 6, // 折线模糊
              borderWidth: 0,
            },
          },
        },
      ],
      //数据渲染
      series: [
        {
          select: {
            disabled: true,
          },
          name: "2018-至今未成年犯罪案件统计 (港澳台数据暂无)",
          type: "map",
          geoIndex: 0,
          data: dataList,
        },
      ],
    };

    const onClick = (p) => {
      console.log(p);
    };

    return (
      <Echarts
        name="homeMap"
        style={{ width: "100%", height: "100%" }}
        option={option}
        onClick={onClick}
      />
    );
  };

  useEffect(() => {
    setTimeout(() => {
      getCYOption();
    }, 1000);
  }, []);

  const getCYOption = () => {
    console.log("sss");
    const img = new Image();
    img.src = cybg;
    const colorList = [
      "#333534",
      "#493637",
      "#5f3639",
      "#75373c",
      "#8c383e",
      "#a23941",
      "#b83943",
      "#ce3a46",
    ];
    const cyData = [
      {
        name: "同龄群体行为影响",
        value: 120,
      },
      {
        name: "容易受教唆",
        value: 60,
      },
      {
        name: "冲动",
        value: 125,
      },
      {
        name: "文化市场失控",
        value: 122,
      },
      {
        name: "缺少关怀",
        value: 81,
      },
      {
        name: "虚荣心强",
        value: 67,
      },
      {
        name: "攀比心强",
        value: 41,
      },
      {
        name: "待业辍学",
        value: 26,
      },
      {
        name: "社会寻找精神支持",
        value: 170,
      },
      {
        name: "大骂体罚导致心里创伤",
        value: 200,
      },
      {
        name: "缺少情感支持",
        value: 128,
      },
      {
        name: "父母不良言行",
        value: 105,
      },
      {
        name: "放任",
        value: 77,
      },
      {
        name: "不重视",
        value: 22,
      },
      {
        name: "父母缺少可信度",
        value: 190,
      },
      {
        name: "放纵",
        value: 160,
      },
      {
        name: "逆反心理",
        value: 273,
      },
      {
        name: "过渡期待",
        value: 187,
      },
      {
        name: "重组家庭",
        value: 140,
      },
      {
        name: "望子成龙",
        value: 107,
      },
      {
        name: "不重法律",
        value: 47,
      },
      {
        name: "心理教育滞后",
        value: 43,
      },
      {
        name: "疏忽",
        value: 29,
      },
      {
        name: "教育表面化",
        value: 10,
      },
      {
        name: "教师不公平",
        value: 883,
      },
      {
        name: "没有存在感",
        value: 150,
      },
      {
        name: "青春期教育滞后",
        value: 108,
      },
      {
        name: "未满足存在需求",
        value: 49,
      },
      {
        name: "教师职业失德",
        value: 38,
      },
      {
        name: "被忽视诉求",
        value: 37,
      },
      {
        name: "与生活脱节",
        value: 50,
      },
      {
        name: "忽视内向学生",
        value: 80,
      },
      {
        name: "放任不管",
        value: 30,
      },
    ];

    return {
      //数据可以点击
      // tooltip: {},
      series: [
        {
          width: "90%",
          height: "100%",
          maskImage: img,
          //词的类型
          type: "wordCloud",
          //设置字符大小范围
          sizeRange: [5, 60],
          rotationRange: [-45, 90],

          //不要忘记调用数据
          data: cyData,
          textStyle: {
            //生成随机的字体颜色
            fontWeight: 600,
            color: function (params) {
              return colorList[parseInt(Math.random() * 8)];
            },
            textBorderColor: "rgba(255,255,255,.5)",
            textBorderWidth: 1,
            textShadowBlur: 5,
            textShadowColor: "rgba(255,255,255,.5)",
          },
        },
      ],
    };
  };
  return (
    <div className="homePage">
      {/* 标题 */}
      <div className="title">
        <img src={title1} alt="" className="title1" />
        <img src={title2} alt="" className="title2" />
      </div>
      <img src={img006} alt="" className="m m6" />
      {/* 棋盘 */}
      <div className="d-h1">
        <img src={h11} alt="" className="mix-l h11" />
      </div>
      {/* 右边 */}
      <div className="d-h3">
        <Decoration9 color={["#561212", "#a48181"]}>
          <Tooltip title="2014-2021年已满14未满16未成年犯罪占受理审查起诉全部未成年人的平均比例">
            <span style={{ zIndex: 999, cursor: "pointer" }}> 10.3%</span>
          </Tooltip>
        </Decoration9>
        <img src={h2} alt="" className="mix-l h31" />
        <img src={h3} alt="" className="mix-l h32" />
        {/* 词云 */}
        <Echarts name="cy" option={getCYOption()} />
      </div>
      {/* 菜单 */}
      <MenuDIV />
      {/* 地图 */}
      <div className="map">
        <Map />
      </div>

      <div className="lb">
        <Echarts name="flower" option={flowerOption} />
      </div>
      <div className="autoCard">
        <Carousel autoplay>
          {fzList.map((i) => (
            <div key={Date.now()}>
              <h3 className="autoC">
                {i.date}
                <p dangerouslySetInnerHTML={{ __html: i.v }} />
              </h3>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
