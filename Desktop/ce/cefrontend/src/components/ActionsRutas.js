import { Button } from 'antd';
import React, { useContext } from 'react';
import ModalContext from '../context/ModalContext';

const ActionsRutas = (props) => {
    const {setShowModal, setEdit, setRegister, setForm, setTitle} = useContext(ModalContext);
    return (
        <Button type="primary" onClick={()=>{setEdit(false); setRegister(''); setShowModal(true); setTitle('Ruta'); setForm(props.form)}}>Nueva Ruta</Button>    
    )
}

export default ActionsRutas;