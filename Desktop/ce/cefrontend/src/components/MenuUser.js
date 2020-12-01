import { Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
//import {BuildOutlined, FileOutlined, FolderOutlined, SnippetsOutlined, TeamOutlined, UserOutlined} from '@ant-design/icons';
const MenuUser = () => {
    return(
        <Menu
        theme="dark"
        mode="inline"
        //defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key="1" /*icon={<FolderOutlined />}*/><Link to="/rutas">Gestión de Rutas</Link></Menu.Item>
        <Menu.Item key="2" /*icon={<FileOutlined />}*/><Link to="/ordenes">Gestión de Órdenes</Link></Menu.Item>
        <Menu.Item key="3" /*icon={<TeamOutlined />}*/><Link to="/mensajeros">Mensajeros</Link></Menu.Item>
        <Menu.Item key="4" /*icon={<BuildOutlined />}*/><Link to="/empresas">Empresas</Link></Menu.Item>
        <Menu.Item key="5" /*icon={<UserOutlined/>}*/><Link to="/contactos">Contactos</Link></Menu.Item>
        <Menu.Item key="6" /*icon={<SnippetsOutlined/>}*/><Link to="/cargaMasiva">Carga Masiva</Link></Menu.Item>
      </Menu>
    )
}

export default MenuUser;