import React from "react";
import { useState } from "react";
//引入路由库中跳转路由的方法
import { useNavigate } from "react-router-dom";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

export default function Menu() {
  //  定义跳转导航变量
  const navigate = useNavigate();

  const onClick = (url) => {
    navigate(`/${url}`);
  };
  const [menuBtn, setmenuBtn] = useState(false);
  const items = [
    {
      label: (
        <a
          onClick={() => {
            onClick("diYu");
          }}
        >
          地域
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a
          onClick={() => {
            onClick("LeiXing");
          }}
        >
          类型
        </a>
      ),
      key: "1",
    },
    {
      label: (
        <a
          onClick={() => {
            onClick("teZheng");
          }}
        >
          特征
        </a>
      ),
      key: "2",
    },
    {
      label: (
        <a
          onClick={() => {
            onClick("QuShi");
          }}
        >
          趋势
        </a>
      ),
      key: "3",
    },
    {
      label: (
        <a
          onClick={() => {
            onClick("CuoShi");
          }}
        >
          措施
        </a>
      ),
      key: "4",
    },
    {
      label: (
        <a
          onClick={() => {
            onClick("layout");
          }}
        >
          查看数据
        </a>
      ),
      key: "5",
    },
    {
      label: (
        <a
          onClick={() => {
            onClick("");
          }}
        >
          返回首页
        </a>
      ),
      key: "6",
    },
  ];

  return (
    <>
      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
        onOpenChange={(e) => setmenuBtn(e)}
      >
        <button className="menuBtn">菜单</button>
        {/* <a onClick={(e) => e.preventDefault()}>
            {!menuBtn
              ? <MenuOutlined style={{ fontSize: "2rem", color: "red" }} />
              : <CloseOutlined style={{ fontSize: "2rem" }} />}
          </a> */}
      </Dropdown>
    </>
  );
}
