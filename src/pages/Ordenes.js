import { Card, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import ActionsOrdenes from '../components/ActionsOrdenes';
import ActionsRutas from '../components/ActionsRutas';
import MensajerosList from '../components/MensajerosList';
import OrdenesList from '../components/OrdenesList';
import RutasList from '../components/RutasList';
import { ModalContextProvider } from '../context/ModalContext';
import { getData } from '../services/getData';

const Ordenes = () => {
    const [empresas, setEmpresas] = useState([]);
    const [rutas, setRutas] = useState([]);
    const [ciudades, setCiudades] = useState([]);
    const [direcciones, setDirecciones] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData= async () => {
        const rutas = await getData('rutas');
        setRutas(rutas);
        const empresas = await getData('empresas');
        setEmpresas(empresas);
        /*const rutas = await getData('rutas');
        setRutas(rutas);*/
    }

    return(
        empresas!=[] && ciudades!=[] && direcciones!=[] ?
        (
            <ModalContextProvider>
            <Card title={<h1>Ordenes</h1>} extra={<ActionsOrdenes form='OrdenesForm'/>}>
                <OrdenesList form='OrdenesForm' empresas={empresas} rutas={rutas} ciudades={ciudades} direcciones={direcciones}/>
            </Card>
            </ModalContextProvider>
        ):(<h1>Loading...</h1>)

         
    )
}

export default Ordenes; 