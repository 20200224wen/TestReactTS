import React from "react";
// 引入路由导航栏
import Navbar from "./views/Navbar";
// 引入routes组件
import routes from "./routes";
// 引入包管理工具
import { renderRoutes, RouteConfig } from "react-router-config";
import "./App.css";
 
function App() {
  return (
    <div className="App">
      <Navbar />

      {/* 设置routes的类型为RouteConfig[]，否则报错 */}
      {renderRoutes(routes as RouteConfig[])}
    </div>
  );
}

export default App;