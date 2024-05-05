/*
 * @Descripttion:
 * @version:
 * @Author: wanghexing
 * @Date: 2024-04-11 22:20:31
 * @LastEditors: wanghexing
 * @LastEditTime: 2024-05-05 15:07:58
 */
import React from "react";
import { Space, Table, Tag } from "antd";
import {
  l1Data,
  l2Data,
  r1Data,
  r2Data,
  bl1Data,
  bl2Data,
  brData,
} from "../../leiXing/datas/data";
import { div } from "three/examples/jsm/nodes/Nodes.js";
export default function LxHome() {
  const datas2 = [
    {
      name: "毒品犯罪",
      ...r1Data.people
        .map((i, id) => ({
          name: r1Data.time[id].slice(0, -1),
          value: i,
          rate: r1Data.proportion[id],
        }))
        .reduce((acc, curr) => {
          acc[curr.name] = { value: curr.value, rate: curr.rate };
          return acc;
        }, {}),
    },
    {
      name: "暴力犯罪",
      ...r2Data.num
        .map((i, id) => ({
          name: r2Data.year[id],
          value: i,
          rate: r2Data.proportionNum[id],
        }))
        .reduce((acc, curr) => {
          acc[curr.name] = { value: curr.value, rate: curr.rate };
          return acc;
        }, {}),
    },
    {
      name: "盗窃",
      ...brData.dqNum
        .map((i, id) => ({
          ...i,
        }))
        .reduce((acc, curr) => {
          acc[curr.name] = { value: curr.value, rate: curr.rate };
          return acc;
        }, {}),
    },
    {
      name: "强奸",
      ...bl2Data.qjNum
        .map((i, id) => ({
          name: bl2Data.year[id],
          value: i,
        }))
        .reduce((acc, curr) => {
          acc[curr.name] = { value: curr.value };
          return acc;
        }, {}),
    },
    {
      name: "猥亵儿童",
      ...bl2Data.wxNum
        .map((i, id) => ({
          name: bl2Data.year[id],
          value: i,
        }))
        .reduce((acc, curr) => {
          acc[curr.name] = { value: curr.value };
          return acc;
        }, {}),
    },
    {
      name: "强制猥亵、侮辱",
      ...bl2Data.qzwrNum
        .map((i, id) => ({
          name: bl2Data.year[id],
          value: i,
        }))
        .reduce((acc, curr) => {
          acc[curr.name] = { value: curr.value };
          return acc;
        }, {}),
    },
    {
      name: "校园欺凌",
      ...bl1Data.dbNum
        .map((i, id) => ({
          name: bl1Data.year[id],
          value: i,
          value1: bl1Data.gsNum[id],
        }))
        .reduce((acc, curr) => {
          acc[curr.name] = { value: curr.value, value1: curr.value1 };
          return acc;
        }, {}),
    },
    // {
    //   name: "同期占比",
    //   ...r2Data.reduce((acc, curr) => {
    //     acc[curr.name] = curr.value;
    //     return acc;
    //   }, {}),
    // },
  ];
  console.log(datas2);
  const getYear1 = () => {
    const year = [2017, 2018, 2019, 2020, 2021];
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
            <div>
              {v.value && (
                <div>
                  {record.name == "校园欺凌" ? "批准逮捕：" + v.value : v.value} 个
                </div>
              )}
              {v.value1 && (
                <div>
                  {record.name == "校园欺凌" ? "提起公诉：" + v.value1 : v.value} 个
                </div>
              )}
              {v.rate && <div>{v.rate} %</div>}
            </div>
          );
        },
      });
    });
    return arr;
  };

  const columns = [
    {
      title: "犯罪类型",
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

  return (
    <div>
      <div className="tip-title">  犯罪类型</div>
     
      <Table
        columns={columns}
        dataSource={datas2}
        pagination={{ pageSize: 8 }}
      />
    </div>
  );
}
