/*
 * @Descripttion:
 * @version:
 * @Author: wanghexing
 * @Date: 2024-04-15 23:17:34
 * @LastEditors: wanghexing
 * @LastEditTime: 2024-05-03 15:22:14
 */
import NoFound from "../pages/noFound";
import LayoutPage from "../components/LayoutPage";
import Home from "../pages/layoutPage/home";
import Article from "../pages/layoutPage/article";
import Monitor from "../pages/monitor";
import HomePage from "../pages/homePage";
import TeZheng from "../pages/teZheng/TeZheng";
import QuShi from "../pages/quShi/QuShi";
import CuoShi from "../pages/cuoShi/CuoShi";
import LeiXing from "../pages/leiXing/LeiXing";
import DiYu from "../pages/diyu/DiYu";

// icon 针对layout里子菜单图标
import { UploadOutlined, UserOutlined } from "@ant-design/icons";

export const RouteList = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/quShi",
    element: <QuShi />,
  },
  {
    path: "/diYu",
    element: <DiYu />,
  },
  {
    path: "/leiXing",
    element: <LeiXing />,
  },
  {
    path: "/cuoShi",
    element: <CuoShi />,
  },
  {
    path: "teZheng",
    element: <TeZheng />,
  },
  {
    path: "monitor",
    element: <Monitor />,
  },
  {
    path: "/layout",
    element: <LayoutPage />,
    children: [
      {
        index: true, //设置默认二级路由
        // path: "home",
        element: <Home />,
        label: "首页",
        icon: <UserOutlined />,
      },
      {
        path: "article",
        element: <Article />,
        label: "文章",
        icon: <UploadOutlined />,
      },
      {
        path: "*",
        element: <NoFound />,
      },
    ],
  },
  {
    path: "*",
    element: <NoFound />,
  },
];
