import { Form,Button, Input, message, Select } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import ModalContext from '../context/ModalContext';
import { getData } from '../services/getData';
import { setData } from '../services/setData';

const {Option} =  Select; 
const RutasForm = (props) => {
    const {setShowModal} = useContext(ModalContext);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [mensajeros, setMensajeros] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const mensajeros = await getData('mensajeros');
            setMensajeros(mensajeros['hydra:member']);
        }
        fetchData();
    }, []);
    
    
    const addRuta = async (values) => {
        setIsSubmitting(true);
        message.loading( {
            content: 'Guardando los datos de la ruta',
          });
        console.log('Agregando', values);
        const representative = await setData( 'rutas', values);
        console.log(representative);
        setIsSubmitting(false);
        setShowModal(false);
    }

    const editRuta = async (values) => {
        values['status'] = 'C';
        setIsSubmitting(true);
        message.loading( {
            content: 'Editando los datos de la ruta',
          });
        console.log('Editando', values);
        const representative = "await API.put( `/faculties/${props.register.id}`, values)";
        console.log(representative);
        setIsSubmitting(false);
        setShowModal(false);
    }
    return(
        
        
        !props.edit?
        (
        <Form onFinish={addRuta}>
            <Form.Item name="fecha" label="Fecha Ruta">
                <Input />
            </Form.Item>
            <Form.Item name="mensajero" label="Mensajero">
                <Select>
                    {
                        mensajeros.map(mensajero => <Option value={mensajero['@id']}>{mensajero.nombre} {mensajero.apellido}</Option>)
                    }
                </Select>
            </Form.Item>
            <Form.Item name="detalle" label="Detalle">
                <Input />
            </Form.Item>
            <Form.Item name="status" label="Status">
                <Input />
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" loading={ isSubmitting }>Registrar</Button>
            </Form.Item>
        </Form>
        ):
        (
        <Form onFinish={editRuta} initialValues={{ name: props.register.name }}>
            <Form.Item name="name" label="Fecha Ruta">
                <Input />
            </Form.Item>
            <Form.Item name="name" label="Mensajero">
                <Input />
            </Form.Item>
            <Form.Item name="name" label="Detalle">
                <Input />
            </Form.Item>
            <Form.Item name="name" label="Status">
                <Input />
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" loading={ isSubmitting }>Editar</Button>
            </Form.Item>
        </Form>
        )
    
    )
}

export default RutasForm;