import { Menu, Row } from "antd";
import React from "react";
import "../App.css";

export default function NavBar() {
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo" >
          <Row>
          <img style={{ width: 50, margin: 10, height: 50 }} src="https://img.icons8.com/plasticine/2x/christmas-ball.png"></img>
          <p style={{ textAlign: "center" }}>filmowy Kalendarz Adwentowy</p>
          </Row>
        </div>
        <Menu className='menuu'mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1"> Home </Menu.Item>
          <Menu.Item key="2">About</Menu.Item>
        </Menu>
      </div>
    </div>
  );
}
