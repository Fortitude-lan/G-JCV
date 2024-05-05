//未成年男女犯罪特征比例
export const nvfzData = [
  { value: 335, name: "男" },
  { value: 310, name: "女" },
  // { value: 274, name: 'Union Ads' },
  // { value: 235, name: 'Video Ads' },
  // { value: 400, name: 'Search Engine' }
];
export const l2Data = {
  xData: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  data: [
    120,
    {
      value: 200,
      itemStyle: {
        color: "#a90000",
      },
    },
    150,
    80,
    70,
    110,
    130,
  ],
};

export const r1Data = {
  xData: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  data: [
    {
      name: "Email",
      type: "line",
      stack: "Total",
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: "Union Ads",
      type: "line",
      stack: "Total",
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: "Video Ads",
      type: "line",
      stack: "Total",
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: "Direct",
      type: "line",
      stack: "Total",
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    // {
    //   name: 'Search Engine',
    //   type: 'line',
    //   stack: 'Total',
    //   data: [820, 932, 901, 934, 1290, 1330, 1320]
    // }
  ],
};

//未成年犯罪家庭因素 Left2option
export const alData = {
  jt: {
    id: "家庭因素",
    name: ["留守儿童", "单亲家庭", "再婚家庭", "孤儿", "其他"],
    value: {
      2021: [1935, 856, 523, 190, 500],
      2022: "",
      2023: "",
      2024: "",
    },
  },
  sh: {
    id: "社会因素",
    name: ["贫困", "失业", "资源匮乏", "心里健康"],
    value: {
      2021: [120, 132, 110, 134],
      2022: [220, 282, 201, 234],
      2023: [450, 432, 420, 454],
      2024: [420, 332, 301, 334],
    },
  },
  xx: {
    id: "学校因素",
    name: ["校园欺凌", "学生攀比", "学生偏见", "老师偏见"],
    value: {
      2021: [120, 132, 101, 134],
      2022: [320, 182, 191, 234],
      2023: [250, 232, 201, 154],
      2024: "",
    },
  },
};

export const l1Data = {
  2017: {
    m: 94.77,
    f: 5.23,
  },
  2018: {
    m: 93.04,
    f: 6.96,
  },
  2019: {
    m: 89.13,
    f: 4.82,
  },
  2020: {
    m: 94.77,
    f: 10.87,
  },
};
