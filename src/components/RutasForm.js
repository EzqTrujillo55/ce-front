import { Form,Button, Input, message, Select, DatePicker } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import ModalContext from '../context/ModalContext';
import { getData } from '../services/getData';
import { putData } from '../services/putData';
import { setData } from '../services/setData';

const {Option} =  Select; 
const RutasForm = (props) => {
    const {setShowModal} = useContext(ModalContext);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [mensajeros, setMensajeros] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const mensajeros = await getData('mensajeros');
            setMensajeros(mensajeros);
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
        setIsSubmitting(true);
        message.loading( {
            content: 'Editando los datos de la ruta',
          });
        console.log('Editando', values);
        const representative = await putData( `rutas/${props.register[0].id}`, values);
        console.log(representative);
        setIsSubmitting(false);
        setShowModal(false);
    }
    return(
        
        
        !props.edit?
        (
        <Form onFinish={addRuta}>
            
            <Form.Item name="mensajero_id" label="Mensajero">
                <Select>
                    {
                        mensajeros.map(mensajero => <Option value={mensajero['id']}>{mensajero.nombre} {mensajero.apellido}</Option>)
                    }
                </Select>
            </Form.Item>
            <Form.Item name="status" label="Estado">
                <Select>
                    <Option value="Abierta">Abierta</Option>
                    <Option value="Cerrada">Cerrada</Option>
                </Select>
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" loading={ isSubmitting }>Registrar</Button>
            </Form.Item>
        </Form>
        ):
        (
            
        <Form onFinish={editRuta} 
        initialValues={{ mensajero_id: props.register[0].mensajero.id,
        status: props.register[0].status }}>
            <Form.Item name="mensajero_id" label="Mensajero">
                 <Select>
                    {
                        mensajeros.map(mensajero => <Option value={mensajero['id']}>{mensajero.nombre} {mensajero.apellido}</Option>)
                    }
                </Select>
            </Form.Item>
     
            <Form.Item name="status" label="Estado">
                <Select>
                    <Option value="Abierta">Abierta</Option>
                    <Option value="Cerrada">Cerrada</Option>
                </Select>
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" loading={ isSubmitting }>Editar</Button>
            </Form.Item>
        </Form>
           
        )
    
    )
}

export default RutasForm;