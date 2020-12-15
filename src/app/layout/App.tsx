import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import React from "react";
import "antd/dist/antd.css";
import Cards from "../../features/Card";
import NavBar from "../../features/NavBar";
import "./style.css";
import PageFooter from "../../features/PageFooter";

const App = () => {
  return (
    <Layout className="mainLayout">
      <Header>
        <NavBar />
      </Header>
      <Content style={{marginTop:'70.5px',padding: "0 50px", backgroundImage: 'linear-gradient(to bottom, #ffffff, #f5f7ff, #e5f1ff, #d0edff, #b7e9ff)'}}>
        <Cards />
      </Content>
      <Footer >
        <PageFooter/>
      </Footer>
    </Layout>
  );
};

export default App;
