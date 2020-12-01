import { Button } from 'antd';
import React, { useContext } from 'react';
import ModalContext from '../context/ModalContext';

const ActionsOrdenes = (props) => {
    const {setShowModal, setEdit, setRegister, setForm, setTitle, setDetail} = useContext(ModalContext);
    return (
        <Button type="primary" onClick={()=>{setEdit(false); setRegister(''); setShowModal(true); setTitle('Orden'); setForm(props.form); setDetail('')}}>Nueva Orden</Button>    
    )
}

export default ActionsOrdenes;