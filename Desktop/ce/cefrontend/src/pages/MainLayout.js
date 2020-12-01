import { Button } from 'antd';
import React, {useContext, useState} from 'react';
import AuthContext from '../context/AuthContext';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import MenuUser from '../components/MenuUser';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import DashBoard from './DashBoard';
import Ordenes from './Ordenes';
import Rutas from './Rutas';
import Mensajeros from './Mensajeros';
import Empresas from './Empresas';
import Contactos from './Contactos';
import CargaMasiva from './CargaMasiva';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const MainLayout = () => {
    const {token, logout} = useContext(AuthContext);
    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = (collapsed) => {
        setCollapsed(collapsed);
    }

    return (
    <Router>
    <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Button onClick={logout}>Cerrar</Button>
      </Menu>
    </Header>
    <Layout>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} width={200} className="site-layout-background">
        <MenuUser/>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Switch>
            <Route path = "/rutas">
              <Rutas/>
            </Route>
            <Route path = "/ordenes">
              <Ordenes/>
            </Route>

            <Route path = "/mensajeros">
              <Mensajeros/>
            </Route>

            <Route path = "/empresas">
              <Empresas/>
            </Route>

            <Route path = "/contactos">
              <Contactos/>
            </Route>

            <Route path = "/cargaMasiva">
              <CargaMasiva/>
            </Route>
          </Switch>
        </Content>
      </Layout>
    </Layout>
  </Layout>
  </Router>
        
        
    )
}

export default MainLayout; 