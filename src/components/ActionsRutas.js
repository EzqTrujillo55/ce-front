import { Button } from 'antd';
import React, { useContext } from 'react';
import ModalContext from '../context/ModalContext';

const ActionsRutas = (props) => {
    const {setShowModal, setEdit, setRegister, setForm, setTitle, setDetail} = useContext(ModalContext);
    return (
        <Button type="primary" onClick={()=>{setEdit(false); setRegister(''); setShowModal(true); setTitle('Ruta'); setForm(props.form); setDetail('')}}>Nueva Ruta</Button>    
    )
}

export default ActionsRutas;