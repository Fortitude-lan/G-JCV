/*
 * @Descripttion:
 * @version:
 * @Author: wanghexing
 * @Date: 2024-04-11 22:20:31
 * @LastEditors: wanghexing
 * @LastEditTime: 2024-05-05 16:17:15
 */
import React from "react";
import { Space, Table, Tag } from "antd";
import { l1Data, alData } from "../../teZheng/datas/data";
export default function TzHome() {
  const datas1 = [
    {
      name: "性别比例",
      ...Object.keys(l1Data)
        .map((i, id) => ({
          name: i,
          value: `男：${l1Data[i].m}`,
          value1: `女：${l1Data[i].f}`,
        }))
        .reduce((acc, curr) => {
          acc[curr.name] = { value: curr.value, value1: curr.value1 };
          return acc;
        }, {}),
    },
  ];
  const datas2 = [
    ...Object.keys(alData).map((i) => ({
      name: alData[i].id,
      lx: alData[i].name,
      value: alData[i].value,
      // .reduce((acc, curr) => {
      //   acc[curr.name] = { value: curr.value};
      //   return acc;
      // }, {}),
      //   value:
      //   ...Object.keys(alData)
      //     .map((i, id) => ({
      //       name: i,
      //       value: `男：${l1Data[i].m}`,
      //       value1: `女：${l1Data[i].f}`,
      //     }))
      // .reduce((acc, curr) => {
      //   acc[curr.name] = { value: curr.value, value1: curr.value1 };
      //   return acc;
      // }, {}),
    })),
  ];
  console.log(datas2);
  const getYear = (year) => {
    let arr = [];
    year.map((i) => {
      arr.push({
        title: i,
        key: i,
        render: (text, record) => {
          let v = record[i];
          return (
            <div>
              {v ? (
                <div>
                  {v.value && <div>{v.value}%</div>}
                  {v.value1 && <div>{v.value1} %</div>}
                  {v.rate && <div>{v.rate} %</div>}
                </div>
              ) : (
                ""
              )}
            </div>
          );
        },
      });
    });
    return arr;
  };
  const getYear1 = (year) => {
    let arr = [];
    year.map((i) => {
      arr.push({
        title: i,
        key: i,
        render: (text, record) => {
          let v = record.value[i];
          console.log(v);

          return (
            <div>
              {v &&
                v.map((i) => {
                  return <div>{i} 个</div>;
                })}
              {/* {v ? (
                <div>
                  {v.value && <div>{v.value}%</div>}
                  {v.value1 && <div>{v.value1} %</div>}
                  {v.rate && <div>{v.rate} %</div>}
                </div>
              ) : (
                ""
              )} */}
            </div>
          );
        },
      });
    });
    return arr;
  };

  const columns = [
    {
      title: "特征因素",
      dataIndex: "name",
      key: "name",
      render: (text) => {
        return <span>{text}</span>;
      },
    },
    ...getYear([2017, 2018, 2019, 2020]),
  ];
  const columns2 = [
    {
      title: "特征因素",
      dataIndex: "name",
      key: "name",
      render: (text) => {
        return <span>{text}</span>;
      },
    },
    {
      title: "类型",
      dataIndex: "lx",
      key: "lx",
      render: (text, record) => {
        return (
          <div>
            {record.lx.map((i) => {
              return <div>{i}</div>;
            })}
          </div>
        );
      },
    },
    ...getYear1([2021, 2022, 2023, 2024]),
  ];

  return (
    <div>
      <div className="tip-title">犯罪特征--性别</div>
      
      <Table columns={columns} dataSource={datas1} pagination={false} />
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div className="tip-title">犯罪特征--多种因素</div>
      
      <Table columns={columns2} dataSource={datas2} pagination={false} />
    </div>
  );
}
