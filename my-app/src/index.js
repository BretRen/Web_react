import React from "react";
import ReactDOM from "react-dom/client";
import ChatApp from "./ChatApp";

// 获取 root 元素
const rootElement = document.getElementById("root");

// 创建 React 根节点
const root = ReactDOM.createRoot(rootElement);

// 渲染组件
root.render(
  <React.StrictMode>
    <ChatApp />
  </React.StrictMode>
);
