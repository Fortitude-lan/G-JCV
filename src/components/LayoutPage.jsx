/*
 * @Descripttion:
 * @version:
 * @Author: wanghexing
 * @Date: 2024-04-11 22:22:58
 * @LastEditors: wanghexing
 * @LastEditTime: 2024-04-14 07:58:56
 */
import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { RouteList } from "../router/router";
const { Header, Sider, Content } = Layout;

const LayoutPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  //  路由menu跳转
  const navigate = useNavigate();
  const onMenuClick = (route) => {
    console.log("key", route.key);
    navigate(route.key);
  };

  //   反向高亮
  const location = useLocation();
  const selectedKey = location.pathname;
  console.log("selectedKey", location);
  const basePath = "/layout";

  // 遍历路由队列 获取layout里的子路由菜单
  const items = RouteList.find((i) => i.path == "/layout")
    .children.slice(0, -1)
    .map((i) => ({
      key: i.path ? `${basePath}/${i.path}` : `${basePath}`,
      icon: i.icon,
      label: i.label,
    }));
  // console.log(items);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={selectedKey}
          items={items}
          onClick={onMenuClick}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {/* 二级路由出口 */}
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default LayoutPage;
