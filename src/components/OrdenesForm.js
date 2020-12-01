import { Form,Button, Input, message, Select, DatePicker, Radio, Col, Row } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import ModalContext from '../context/ModalContext';
import { getData } from '../services/getData';
import { putData } from '../services/putData';
import { setData } from '../services/setData';

const {Option} =  Select; 
const OrdenesForm = (props) => {
    const {setShowModal} = useContext(ModalContext);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [empresas, setEmpresas] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const empresas = await getData('empresas');
            setEmpresas(empresas);
        }
        fetchData();
    }, []);


    const addRuta = async (values) => {
        setIsSubmitting(true);
        message.loading( {
            content: 'Guardando los datos de la orden',
          });
        console.log('Agregando', values);
        const representative = await setData( 'ordenes', values);
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
        const representative = await putData( `ordenes/${props.register[0].id}`, values);
        console.log(representative);
        setIsSubmitting(false);
        setShowModal(false);
    }
    return(
        
        
        !props.edit?
        (
        <Form onFinish={addRuta} 
            initialValues={{ ciudadOrigen: "Quito",
            ciudadDestino: "Quito",
            peso:2.5,
            numGestiones: 1 }}>
            <Row>
            <Col span={24}>
            <Form.Item label="Detalle" name="detalle">
                <Input/>
            </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item label="Empresa" name="empresa">
                <Select>
                    {
                        empresas.map(empresa => <Option value={empresa.nombre}>{empresa.nombre}</Option>)
                    }
                </Select>
            </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item label="Código" name="tipoServicio">
                <Radio.Group>
                    <Radio value="Envío Express">Envío Express</Radio>
                    <Radio value="Envío Básico">Envío Básico</Radio>
                    <Radio value="Delivery">Delivery</Radio>
                </Radio.Group>
            </Form.Item>
            </Col>
            <Col span={24}>
            <h3>Datos Origen</h3>
            </Col>
            <Col span={11}>
            <Form.Item name="peso" label="Peso">
                <Input/>
            </Form.Item>
            </Col>
            <Col span={11} offset={1}>
            <Form.Item name="numGestiones" label="Número Gestiones">
                <Input/>
            </Form.Item>
            </Col>
            <Col span={11}>
            <Form.Item name="origen" label="Origen">
                <Input/>
            </Form.Item>
            </Col>
            <Col span={11} offset={1}>
            <Form.Item name="ciudadOrigen" label="Ciudad Origen">
                <Select>
                    <Option value="Quito">Quito</Option>
                </Select>
            </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item name="dirOrigen" label="Dirección Origen">
                <Input/>
            </Form.Item>
            </Col>
            <Col span={11}>
            <Form.Item name="remitente" label="Remitente">
                <Input/>
            </Form.Item>
            </Col>
            <Col span={11} offset={1}>
            <Form.Item name="telRemitente" label="Teléfono Remitente">
                <Input/>
            </Form.Item>
            </Col>
            <Col span={24}>
            <h3>Datos Destino</h3>
            </Col>
            <Col span={11}>
            <Form.Item name="destino" label="Destino">
                <Input/>
            </Form.Item>
            </Col>
            <Col span={11} offset={1}>
            <Form.Item name="ciudadDestino" label="Ciudad Destino">
                <Select>
                    <Option value="Quito">Quito</Option>
                </Select>
            </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item name="dirDestino" label="Dirección Destino">
                <Input/>
            </Form.Item>
            </Col>
            <Col span={11}>
            <Form.Item name="destinatario" label="Destinatario">
                <Input/>
            </Form.Item>
            </Col>
            <Col span={11} offset={1}>
            <Form.Item name="telDestinatario" label="Teléfono Destinatario">
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
            detalle:  props.register[0].detalle,
            empresa:  props.register[0].empresa,
            tipoServicio:  props.register[0].tipoServicio,
            peso:props.register[0].peso,
            numGestiones: props.register[0].numGestiones, 
            origen: props.register[0].origen,
            ciudadOrigen: props.register[0].ciudadOrigen,
            dirOrigen: props.register[0].dirOrigen,
            remitente: props.register[0].remitente,
            telRemitente: props.register[0].telRemitente, 
            destino: props.register[0].destino,
            ciudadDestino: props.register[0].ciudadDestino,
            dirDestino: props.register[0].dirDestino,
            destinatario: props.register[0].destinatario,
            telDestinatario: props.register[0].telDestinatario,
            status: props.register[0].status
             }}>
            <Row>
            <Col span={24}>
            <Form.Item label="Detalle" name="detalle">
                <Input/>
            </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item label="Empresa" name="empresa">
                <Select>
                    {
                        empresas.map(empresa => <Option value={empresa.nombre}>{empresa.nombre}</Option>)
                    }
                </Select>
            </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item label="Código" name="tipoServicio">
                <Radio.Group>
                    <Radio value="Envío Express">Envío Express</Radio>
                    <Radio value="Envío Básico">Envío Básico</Radio>
                    <Radio value="Delivery">Delivery</Radio>
                </Radio.Group>
            </Form.Item>
            </Col>
            <Col span={24}>
            <h3>Datos Origen</h3>
            </Col>
            <Col span={11}>
            <Form.Item name="peso" label="Peso">
                <Input/>
            </Form.Item>
            </Col>
            <Col span={11} offset={1}>
            <Form.Item name="numGestiones" label="Número Gestiones">
                <Input/>
            </Form.Item>
            </Col>
            <Col span={11}>
            <Form.Item name="origen" label="Origen">
                <Input/>
            </Form.Item>
            </Col>
            <Col span={11} offset={1}>
            <Form.Item name="ciudadOrigen" label="Ciudad Origen">
                <Select>
                    <Option value="Quito">Quito</Option>
                </Select>
            </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item name="dirOrigen" label="Dirección Origen">
                <Input/>
            </Form.Item>
            </Col>
            <Col span={11}>
            <Form.Item name="remitente" label="Remitente">
                <Input/>
            </Form.Item>
            </Col>
            <Col span={11} offset={1}>
            <Form.Item name="telRemitente" label="Teléfono Remitente">
                <Input/>
            </Form.Item>
            </Col>
            <Col span={24}>
            <h3>Datos Destino</h3>
            </Col>
            <Col span={11}>
            <Form.Item name="destino" label="Destino">
                <Input/>
            </Form.Item>
            </Col>
            <Col span={11} offset={1}>
            <Form.Item name="ciudadDestino" label="Ciudad Destino">
                <Select>
                    <Option value="Quito">Quito</Option>
                </Select>
            </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item name="dirDestino" label="Dirección Destino">
                <Input/>
            </Form.Item>
            </Col>
            <Col span={11}>
            <Form.Item name="destinatario" label="Destinatario">
                <Input/>
            </Form.Item>
            </Col>
            <Col span={11} offset={1}>
            <Form.Item name="telDestinatario" label="Teléfono Destinatario">
                <Input/>
            </Form.Item>
            </Col>
            <Col span={11}>
            <Form.Item name="status" label="Estado">
            <Select>
                    <Option value="Nuevo">Nuevo</Option>
                    <Option value="Recolectado">Recolectado</Option>
                    <Option value="En Tránsito">En Tránsito</Option>
                    <Option value="Devuelto">Devuelto</Option>
                    <Option value="Programado">Programado</Option>
                    <Option value="Cancelado">Cancelado</Option>
                    <Option value="Entregado">Entregado</Option>
                    <Option value="Completado">Completado</Option>
                </Select>
            </Form.Item>
            </Col>
            <br/>
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={ isSubmitting }>Editar</Button>
            </Form.Item>
            </Row>
        </Form>
           
        )
    
    )
}

export default OrdenesForm;