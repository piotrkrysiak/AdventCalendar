import { Button, Drawer, Menu } from "antd";
import React, { useState } from "react";
import "../app/layout/style.css";
import { MenuOutlined } from "@ant-design/icons";

export default function NavBar() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <img src="https://img.icons8.com/plasticine/2x/christmas-ball.png"></img>
          <a href="">Kalendarz Adwentowy</a>
        </div>
        <div className="mobileHidden">
          <Menu mode="horizontal">
            <Menu.Item>Home</Menu.Item>
            <Menu.Item>About</Menu.Item>
          </Menu>
        </div>
        <div className="mobileVisible">
          <Button className='buttonColor' type="primary" onClick={showDrawer}>
            <MenuOutlined  style={{color:"rgb(243, 93, 125)"}}/>
          </Button>
          <Drawer
            title="Kalendarz Adwentowy"
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <p>Home</p>
            <p>About</p>
          </Drawer>
        </div>
      </div>
    </div>
  );
}
