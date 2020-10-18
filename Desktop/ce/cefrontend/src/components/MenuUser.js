import { Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import {FileOutlined} from '@ant-design/icons';
const MenuUser = () => {
    return(
        <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key="1" icon={<FileOutlined />}><Link to="/rutas">Rutas de Órdenes</Link></Menu.Item>
        <Menu.Item key="2" icon={<FileOutlined />}><Link to="/ordenes">Todas las Órdenes</Link></Menu.Item>
      </Menu>
    )
}

export default MenuUser;