import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { DesktopOutlined, UnorderedListOutlined } from "@ant-design/icons";

import "./Layout.less";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import { List, New } from "./pages";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class RebillLayout extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed: any) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["0"]} mode="inline">
            <Menu.Item key="0" icon={<DesktopOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<UnorderedListOutlined />} title="Lists">
              <Menu.Item key="1">
                <Link to="/notes">Notes</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/media">Media</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Routes>
                <Route path="/notes" element={<List />} />
                <Route path="/new" element={<New />} />
                <Route path="/note/:id" element={<New />} />
              </Routes>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default RebillLayout;
