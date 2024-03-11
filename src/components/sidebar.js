import React, { useState } from 'react';
import {
  DesktopOutlined,

  UserOutlined,
  ContactsOutlined
} from '@ant-design/icons';

import {Layout, Menu, theme } from 'antd';

import { NavLink } from 'react-router-dom';

const {  Sider } = Layout;
function getItem(label, key, icon, children, path) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
    getItem('About Me', '1', <UserOutlined />),
  
  getItem('Projects', '2', <DesktopOutlined />,"/projects"),
 
  getItem('Contact', '3', <ContactsOutlined />),
 
];
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        <Menu.Item key={items.key} icon={items.icon}>
          <NavLink to="/">{items.label}</NavLink>
        </Menu.Item>
      </Sider>
      <Layout>
       
      </Layout>
    </Layout>
  );
};
export default Sidebar;