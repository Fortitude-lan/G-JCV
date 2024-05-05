/*
 * @Descripttion:
 * @version:
 * @Author: wanghexing
 * @Date: 2024-04-15 23:17:34
 * @LastEditors: wanghexing
 * @LastEditTime: 2024-05-05 17:27:59
 */
import NoFound from "../pages/noFound";
import LayoutPage from "../components/LayoutPage";
import Home from "../pages/layoutPage/home";
import Monitor from "../pages/monitor";
import HomePage from "../pages/homePage";
import TeZheng from "../pages/teZheng/TeZheng";
import QuShi from "../pages/quShi/QuShi";
import CuoShi from "../pages/cuoShi/CuoShi";
import LeiXing from "../pages/leiXing/LeiXing";
import DiYu from "../pages/diyu/DiYu";
import TzHome from "../pages/layoutPage/tzHome";
import QsHome from "../pages/layoutPage/qsHome";
import LxHome from "../pages/layoutPage/lxHome";

// icon 针对layout里子菜单图标
import {
  PieChartOutlined,
  AreaChartOutlined,
  RadarChartOutlined,
  LineChartOutlined,
} from "@ant-design/icons";

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
        label: "地域分布",
        icon: <PieChartOutlined />,
      },
      {
        path: "crimetype",
        element: <LxHome />,
        label: "犯罪类型",
        icon: <AreaChartOutlined />,
      },
      {
        path: "crimetrait",
        element: <TzHome />,
        label: "犯罪特征",
        icon: <RadarChartOutlined />,
      },
      {
        path: "crimetrend",
        element: <QsHome />,
        label: "犯罪趋势",
        icon: <LineChartOutlined />,
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
