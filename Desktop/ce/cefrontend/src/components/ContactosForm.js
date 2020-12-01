import { UploadOutlined } from '@ant-design/icons';
import { Form,Button, Input, message, Select, DatePicker, Radio, Col, Row, Upload } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import ModalContext from '../context/ModalContext';
import { getData } from '../services/getData';
import { putData } from '../services/putData';
import { putDataWithFiles } from '../services/putDataWithFiles';
import { setData } from '../services/setData';
import {setDataWithFiles} from '../services/setDataWithFiles';
const {Option} =  Select; 
const ContactosForm = (props) => {
    const {setShowModal} = useContext(ModalContext);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [empresas, setEmpresas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const empresas_request = await getData('empresas'); 
            setEmpresas(empresas_request);
        }
        fetchData(); 
    }, []);


    const addRuta = async (values) => { 
        setIsSubmitting(true);
        message.loading( {
            content: 'Guardando los datos del contacto',
          });
        const representative = await setData( 'contactos', values);
        console.log(representative);
        setIsSubmitting(false);
        setShowModal(false);
    }


    const editRuta = async (values) => {
        setIsSubmitting(true);
        message.loading( {
            content: 'Editando los datos del contacto',
          });
        const representative = await putData( `contactos/${props.register[0].id}`, values);
        console.log(representative);
        setIsSubmitting(false);
        setShowModal(false);
    }       
    return(
        
        
        !props.edit?
        (
        <Form onFinish={addRuta} >
            <Row>
            <Col span={24}>
            <Form.Item label="Organización" name="organizacion" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Input/>
            </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item label="Ciudad" name="ciudad" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Select>
                    <Option value="Quito">Quito</Option>
                    <Option value="Guayaquil">Guayaquil</Option>
                    <Option value="Cuenca">Cuenca</Option>
                    <Option value="Ambato">Ambato</Option>
                </Select>
            </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item label="Dirección" name="direccion" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Input/>
            </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item label="Identificación" name="identificacion" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Input/>
            </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item label="Contacto" name="nombre" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Input/>
            </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item label="Teléfono" name="telefono" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Input/>
            </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Input/>
            </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item name="empresa_id" label="Cliente" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Select>
                    {empresas.map((item)=>
                        <Option value={item.id}>{item.nombre}</Option>
                    )}
                </Select>
            </Form.Item>
            </Col>            
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={ isSubmitting }>Registrar</Button>
            </Form.Item>
            </Row>
        </Form>
        ):
        (      
            
            <Form onFinish={editRuta} 
            initialValues={{ 
            organizacion:  props.register[0].organizacion,
            ciudad:  props.register[0].ciudad,
            identificacion: props.register[0].identificacion,
            direccion: props.register[0].direccion,
            nombre: props.register[0].nombre,
            email: props.register[0].email, 
            telefono: props.register[0].telefono,
            empresa_id: props.register[0].cliente,
             }}>
            <Row>
            <Col span={24}>
            <Form.Item label="Organización" name="organizacion" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Input/>
            </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item label="Ciudad" name="ciudad" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Select>
                    <Option value="Quito">Quito</Option>
                    <Option value="Guayaquil">Guayaquil</Option>
                    <Option value="Cuenca">Cuenca</Option>
                    <Option value="Ambato">Ambato</Option>
                </Select>
            </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item label="Dirección" name="direccion" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Input/>
            </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item label="Identificación" name="identificacion" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Input/>
            </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item label="Contacto" name="nombre" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Input/>
            </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item label="Teléfono" name="telefono" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Input/>
            </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Input/>
            </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item name="empresa_id" label="Cliente" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Select>
                    {empresas.map((item)=>
                        <Option value={item.id}>{item.nombre}</Option>
                    )}
                </Select>
            </Form.Item>
            </Col>            
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={ isSubmitting }>Registrar</Button>
            </Form.Item>
            </Row>
        </Form>
           
        )
    
    )
}

export default ContactosForm;