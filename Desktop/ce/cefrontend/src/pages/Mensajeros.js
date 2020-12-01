import { Card, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import ActionsMensajeros from '../components/ActionsMensajeros';
import ActionsOrdenes from '../components/ActionsOrdenes';
import ActionsRutas from '../components/ActionsRutas';
import MensajerosList from '../components/MensajerosList';
import OrdenesList from '../components/OrdenesList';
import RutasList from '../components/RutasList';
import { ModalContextProvider } from '../context/ModalContext';
import { getData } from '../services/getData';

const Mensajeros = () => {
    return(
        
            <ModalContextProvider>
            <Card title={<h1>Mensajeros</h1>} extra={<ActionsMensajeros form='MensajerosForm'/>}>
                <MensajerosList form='MensajerosForm' />
            </Card>
            </ModalContextProvider>

         
    )
}

export default Mensajeros; 