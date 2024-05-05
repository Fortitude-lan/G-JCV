/*
 * @Descripttion:
 * @version:
 * @Author: wanghexing
 * @Date: 2024-04-11 22:20:31
 * @LastEditors: wanghexing
 * @LastEditTime: 2024-05-05 17:31:38
 */
import React from "react";
import { Space, Table, Tag } from "antd";
import { mapCrimeDatas, r1Data, r2Data } from "../../diyu/datas/data";
export default function Home() {
  const datas = Object.keys(mapCrimeDatas).map((i) => ({
    key: i,
    name: i,
    value: mapCrimeDatas[i],
  }));
  datas.shift();
  const datas2 = [
    { name: "犯罪数量", ...r1Data },
    {
      name: "同期占比",
      ...r2Data.reduce((acc, curr) => {
        acc[curr.name] = curr.value;
        return acc;
      }, {}),
    },
  ];
  const getYear = () => {
    const year = [2018, 2019, 2020, 2021, 2022, 2023];
    const color = ["green", "gold", "volcano"];
    let arr = [];
    year.map((i) => {
      arr.push({
        title: i,
        key: i,
        render: (text, record) => {
          let v = record.value[i];
          return <span>{v ? v + " 件" : "--"}</span>;
        },
      });
    });
    arr.push({
      title: `近${year.length}年总`,
      key: "all",
      render: (text, record) => {
        let total = Object.values(record.value).reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          0
        );
        return (
          <Tag
            color={total > 30 ? color[2] : total > 15 ? color[1] : color[0]}
            key={total}
          >
            共{total}件案例
          </Tag>
        );
      },
    });
    return arr;
  };
  const getYear1 = () => {
    const year = [2017, 2018, 2019, 2020, 2021, 2022];
    const color = ["green", "gold", "volcano"];
    let arr = [];

    year.map((i) => {
      arr.push({
        title: i,
        key: i,
        render: (text, record) => {
          console.log(record);
          let v = record[i];
          return (
            <span>
              {v} {record.name == "同期占比" ? "%" : "个"}
            </span>
          );
        },
      });
    });
    return arr;
  };
  const columns = [
    {
      title: "省级",
      dataIndex: "name",
      key: "name",
      render: (text) => {
        return <span>{text}</span>;
      },
    },
    ...getYear(),
    // {
    //   title: "Action",
    //   key: "action",
    //   render: (_, record) => (
    //     <Space size="middle">
    //       <a>Invite {record.name}</a>
    //       <a>Delete</a>
    //     </Space>
    //   ),
    // },
  ];
  const columns2 = [
    {
      title: "类型",
      dataIndex: "name",
      key: "name",
      render: (text) => {
        return <span>{text}</span>;
      },
    },
    ...getYear1(),
    // {
    //   title: "Action",
    //   key: "action",
    //   render: (_, record) => (
    //     <Space size="middle">
    //       <a>Invite {record.name}</a>
    //       <a>Delete</a>
    //     </Space>
    //   ),
    // },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
  return (
    <div>
      <div className="tip-title"> 地域分布--省数据</div>
      <Table
        columns={columns}
        dataSource={datas}
        pagination={{ pageSize: 3 }}
      />
      <div className="tip-title"> 地域分布--数量 占比</div>

      <Table
        columns={columns2}
        dataSource={datas2}
        pagination={{ pageSize: 3 }}
      />
    </div>
  );
}
