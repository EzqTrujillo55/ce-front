import { Button } from 'antd';
import React, { useContext } from 'react';
import ModalContext from '../context/ModalContext';

const ActionsEmpresas = (props) => {
    const {setShowModal, setEdit, setRegister, setForm, setTitle, setDetail} = useContext(ModalContext);
    return (
        <Button type="primary" onClick={()=>{setEdit(false); setRegister(''); setShowModal(true); setTitle('Nueva Empresa'); setForm(props.form); setDetail('')}}>Nueva Empresa</Button>    
    )
}

export default ActionsEmpresas;