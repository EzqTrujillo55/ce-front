import { Card, Table } from 'antd';
import React from 'react';
import ActionsRutas from '../components/ActionsRutas';
import RutasList from '../components/RutasList';
import { ModalContextProvider } from '../context/ModalContext';

const Rutas = () => {
    return(
        <ModalContextProvider>
        <Card title={<h1>Rutas</h1>} extra={<ActionsRutas form='RutasForm'/>}>
            <RutasList form='RutasForm'/>
        </Card>
        </ModalContextProvider>
    )
}

export default Rutas; 