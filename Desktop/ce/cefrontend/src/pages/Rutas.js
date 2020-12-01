import { Card, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import ActionsRutas from '../components/ActionsRutas';
import RutasList from '../components/RutasList';
import { ModalContextProvider } from '../context/ModalContext';
import { getData } from '../services/getData';

const Rutas = () => {
    const [mensajeros, setMensajeros] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData= async () => {
        const mensajeros = await getData('mensajeros');
        setMensajeros(mensajeros);
        /*const rutas = await getData('rutas');
        setRutas(rutas);*/
    }

    return(
        mensajeros!=[]?
        (
        <ModalContextProvider>
        <Card title={<h1>Rutas</h1>} extra={<ActionsRutas form='RutasForm'/>}>
            <RutasList form='RutasForm' mensajeros={mensajeros}/>
        </Card>
        </ModalContextProvider>
        ):(
            <h1>Loading..</h1>
        )
    )
}

export default Rutas; 