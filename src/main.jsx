/*
 * @Descripttion: 
 * @version: 
 * @Author: wanghexing
 * @Date: 2024-04-02 22:56:41
 * @LastEditors: wanghexing
 * @LastEditTime: 2024-04-06 22:24:14
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './assets/css/global.less'
import { RouterProvider } from "react-router-dom";
import router from "./router";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
