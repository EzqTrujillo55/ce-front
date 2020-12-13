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
const EmpresasForm = (props) => {
    const {setShowModal} = useContext(ModalContext);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [fileList, setFileList] = useState([]);
    const [cvList, setCvList] = useState([]);

    const addRuta = async (values) => {
        setIsSubmitting(true);
        message.loading( {
            content: 'Guardando los datos de la empresa',
          });
        const representative = await setData( 'empresas', values);
        console.log(representative);
        setIsSubmitting(false);
        setShowModal(false);
    }


    const editRuta = async (values) => {
        setIsSubmitting(true);
        message.loading( {
            content: 'Editando los datos de la empresa',
          });
        const representative = await putData( `empresas/${props.register[0].id}`, values);
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
            <h4>Información de la empresa</h4>
            <hr/>
            </Col>
            <Col span={24}>
            <Form.Item label="Prefijo" name="prefijo" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Input/>
            </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item label="Nombre" name="nombre" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Input/>
            </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item label="Teléfono" name="telefono" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Input/>
            </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item name="status" label="Estado" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Select>
                    <Option value="Activo">Activo</Option>
                    <Option value="Pendiente de aprobación">Inactivo</Option>
                </Select>
            </Form.Item>
            </Col>
            <Col span={24}>
            <h4>Información de acceso</h4>
            <hr/>
            </Col>
            <Col span={24}>
            <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Input/>
            </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item name="password" label="Password" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Input/>
            </Form.Item>
            </Col>

            <Col span={24}>
            <h4>Información del responsable</h4>
            <hr/>
            </Col>
            <Col span={11}>
            <Form.Item name="nombreResponsable" label="Nombre" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Input/>
            </Form.Item>
            </Col>
            <Col span={11} offset={1}>
            <Form.Item name="apellidoResponsable" label="Apellido" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Input/>
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
            prefijo:  props.register[0].prefijo,
            nombre:  props.register[0].nombre,
            nombreResponsable: props.register[0].nombreResponsable,
            apellidoResponsable: props.register[0].apellidoResponsable,
            email: props.register[0].users[0].email,
            telefono: props.register[0].telefono,
            status: props.register[0].status,
             }}>
             <Row>
             <Col span={24}>
             <h4>Información de la empresa</h4>
             <hr/>
             </Col>
             <Col span={24}>
             <Form.Item label="Prefijo" name="prefijo" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                 <Input/>
             </Form.Item>
             </Col>
             <Col span={24}>
             <Form.Item label="Nombre" name="nombre" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                 <Input/>
             </Form.Item>
             </Col>
             <Col span={24}>
             <Form.Item label="Teléfono" name="telefono" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                 <Input/>
             </Form.Item>
             </Col>
             <Col span={24}>
             <Form.Item name="status" label="Estado" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                 <Select>
                     <Option value="Activo">Activo</Option>
                     <Option value="Pendiente de aprobación">Inactivo</Option>
                 </Select>
             </Form.Item>
             </Col>
             <Col span={24}>
             <h4>Información de acceso</h4>
             <hr/>
             </Col>
             <Col span={24}>
             <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                 <Input/>
             </Form.Item>
             </Col>
             <Col span={24}>
             <Form.Item name="password" label="Password" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                 <Input/>
             </Form.Item>
             </Col>

             <Col span={24}>
             <h4>Información del responsable</h4>
             <hr/>
             </Col>
             <Col span={11}>
             <Form.Item name="nombreResponsable" label="Nombre" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                 <Input/>
             </Form.Item>
             </Col>
             <Col span={11} offset={1}>
             <Form.Item name="apellidoResponsable" label="Apellido" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                 <Input/>
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

export default EmpresasForm;
