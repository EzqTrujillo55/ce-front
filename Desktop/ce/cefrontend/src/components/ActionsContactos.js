import { Button } from 'antd';
import React, { useContext } from 'react';
import ModalContext from '../context/ModalContext';

const ActionsContactos = (props) => {
    const {setShowModal, setEdit, setRegister, setForm, setTitle, setDetail} = useContext(ModalContext);
    return (
        <Button type="primary" onClick={()=>{setEdit(false); setRegister(''); setShowModal(true); setTitle('Nuevo Contacto'); setForm(props.form); setDetail('')}}>Nuevo Contacto</Button>    
    )
}

export default ActionsContactos;