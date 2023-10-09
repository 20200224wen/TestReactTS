import React, { Component } from "react";
import "./contact.scss";
//导入要使用的接口
import { getCarList } from "../api/index";

export default class Contact extends Component {
  // 定义方法
  getList() {
    getCarList({ page: "1" }).then((res) => console.log(res));
  }
  render() {
    return (
      <div className="contact">
        <div className="container">
          <h3 className="center"> Contact页面</h3>
          <p>欢迎来到联系我们页面！</p>
          {/* 点击事件调用 */}
          <button onClick={this.getList}>获取数据</button>
        </div>
      </div>
    );
  }
}