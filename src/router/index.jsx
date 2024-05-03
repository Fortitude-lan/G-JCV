/*
 * @Descripttion:
 * @version:
 * @Author: wanghexing
 * @Date: 2024-04-06 22:22:52
 * @LastEditors: wanghexing
 * @LastEditTime: 2024-04-06 22:32:25
 */

import { createHashRouter } from "react-router-dom";
import {RouteList} from './router'
//创建router实例对象 并且配置路由
const router = createHashRouter(RouteList)

export default router;
