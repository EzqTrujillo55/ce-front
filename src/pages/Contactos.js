import { Card, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import ActionsContactos from '../components/ActionsContactos';
import ActionsEmpresas from '../components/ActionsEmpresas';
import ContactosList from '../components/ContactosList';
import EmpresasList from '../components/EmpresasList';
import MensajerosList from '../components/MensajerosList';
import { ModalContextProvider } from '../context/ModalContext';
import { getData } from '../services/getData';

const Contactos = () => {
    return(
            <ModalContextProvider>
            <Card title={<h1>Contactos</h1>} extra={<ActionsContactos form='ContactosForm'/>}>
                <ContactosList form='ContactosForm' />
            </Card>
            </ModalContextProvider>         
    )
}

export default Contactos;