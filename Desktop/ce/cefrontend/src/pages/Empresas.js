import { Card, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import ActionsEmpresas from '../components/ActionsEmpresas';
import EmpresasList from '../components/EmpresasList';
import MensajerosList from '../components/MensajerosList';
import { ModalContextProvider } from '../context/ModalContext';
import { getData } from '../services/getData';

const Empresas = () => {
    return(
            <ModalContextProvider>
            <Card title={<h1>Empresas</h1>} extra={<ActionsEmpresas form='EmpresasForm'/>}>
                <EmpresasList form='EmpresasForm' />
            </Card>
            </ModalContextProvider>         
    )
}

export default Empresas;