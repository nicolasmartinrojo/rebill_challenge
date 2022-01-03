import React from "react";
import { Layout, Menu } from "antd";
import { DesktopOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { PageHeader } from "antd";
import "./Layout.less";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import NewMedia from "./pages/New/NewMedia";
import ListNotes from "./pages/List/ListNotes";
import ListMedia from "./pages/List/ListMedia";
import NewNote from "./pages/New/NewNote";
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
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/media" element={<ListMedia />} />
                <Route path="/notes" element={<ListNotes />} />
                <Route path="/media/new" element={<NewMedia />} />
                <Route path="/notes/new" element={<NewNote />} />
                <Route path="/notes/:id" element={<NewNote />} />
                <Route path="/media/:id" element={<NewMedia />} />
              </Routes>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design 2022 Created by The Saracatunga crew
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

const Home = () => (
  <>
    <PageHeader className="site-page-header" title="Home" />
  </>
);
export default RebillLayout;
