/*
 * @Descripttion:
 * @version:
 * @Author: wanghexing
 * @Date: 2024-04-11 22:20:31
 * @LastEditors: wanghexing
 * @LastEditTime: 2024-05-05 17:03:26
 */
import React from "react";
import { Space, Table, Tag } from "antd";
import {
  season,
  leftupData,
  r2Data,
  jjbhData,
  xlData,
} from "../../quShi/datas/data";
export default function QsHome() {
  const datas1 = [
    {
      name: "被告家庭情况",
      yy: season.map((i) => i.name).join("#"),
      dd: season.map((i) => i.value).join("#"),
    },
    {
      name: "学历情况",
      yy: xlData.xAsix.map((i, id) => i).join("#"),
      dd: xlData.data.join("#"),
    },
    {
      name: "家庭环境",
      yy: jjbhData.map((i, id) => i.name).join("#"),
      dd: jjbhData.map((i) => i.value).join("#"),
    },
    {
      name: "人员情况",
      yy: r2Data.map((i, id) => i.name).join("#"),
      dd: r2Data.map((i) => i.value).join("#"),
    },
  ];
  const datas2 = leftupData;
  const columns = [
    {
      title: "趋势类别",
      dataIndex: "name",
      key: "name",
      render: (text) => {
        return <span>{text}</span>;
      },
    },
    {
      title: "背景原因",
      dataIndex: "yy",
      key: "yy",
      render: (text) => {
        let arr = text.split("#");
        return (
          <div>
            {arr.map((i) => {
              return <div>{i}</div>;
            })}
          </div>
        );
      },
    },
    {
      title: "数据",
      dataIndex: "dd",
      key: "dd",
      render: (text) => {
        let arr = text.split("#");
        return (
          <div>
            {arr.map((i) => {
              return <div>{i}</div>;
            })}
          </div>
        );
      },
    },
    // ...getYear([2020, 2021, 2022]),
  ];
  const columns2 = [
    {
      title: "受理情况",
      dataIndex: "name",
      key: "name",
      render: (text) => {
        return <span>{text}</span>;
      },
    },
    {
      title: "2020",
      dataIndex: "2020",
      key: "2020",
      render: (text, record) => {
        return <span>{record.data[0]} %</span>;
      },
    },
    {
      title: "2020",
      dataIndex: "2020",
      key: "2020",
      render: (text, record) => {
        return <span>{record.data[1]}</span>;
      },
    },
    {
      title: "2020",
      dataIndex: "2020",
      key: "2020",
      render: (text, record) => {
        return <span>{record.data[2]}</span>;
      },
    },

    // ...getYear([2020, 2021, 2022]),
  ];
  return (
    <div>
      <div className="tip-title">犯罪趋势-- 2020-2022相关数据</div>
      <Table columns={columns2} dataSource={datas2} pagination={false} />

      <div className="tip-title"> 犯罪趋势</div>

      <Table columns={columns} dataSource={datas1} pagination={false} />
    </div>
  );
}
