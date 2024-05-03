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
