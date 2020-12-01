import { Button } from 'antd';
import React, { useContext } from 'react';
import ModalContext from '../context/ModalContext';

const ActionsMensajeros = (props) => {
    const {setShowModal, setEdit, setRegister, setForm, setTitle, setDetail} = useContext(ModalContext);
    return (
        <Button type="primary" onClick={()=>{setEdit(false); setRegister(''); setShowModal(true); setTitle('Mensajero'); setForm(props.form); setDetail('')}}>Nuevo Mensajero</Button>    
    )
}

export default ActionsMensajeros;