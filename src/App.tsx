import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import React from "react";
import "antd/dist/antd.css";
import Cards from "./page/Card";
import NavBar from "./page/NavBar";

const App = () => {
  return (
    <Layout className="mainLayout">
      <Header>
        <NavBar />
      </Header>
      <Content style={{ padding: "0 50px", background: "#cfe8ff" }}>
        <Cards />
      </Content>
      <Footer style={{ textAlign: "center", background: "white"}}>
        Kalendarz Adwentowy ©2020 Created by PlotrekPL
      </Footer>
    </Layout>
  );
};

export default App;
