import React, {useContext, useEffect, useState} from 'react'; 
import {Form, Input, Select, Button, Card, Table, Modal, Row, Col, DatePicker} from 'antd';
import ModalContext from '../context/ModalContext';
import { getData } from '../services/getData';
import { setData } from '../services/setData';
const {Option} = Select;
const RutasList = (props) => {
    const {setShowModal, setEdit, setRegister, setForm} = useContext(ModalContext);
    const [rutas, setRutas] = useState([]);
    const [mensajeros, setMensajeros] = useState([]);

    useEffect(() => {
        const FetchData= async () => {
            const mensajeros = await getData('mensajeros');
            setMensajeros(mensajeros['hydra:member']);
        }
        FetchData();
    }, [rutas]);

    const busqueda = async (values) => {
        console.log(values);
        const resultado = await getData(`busquedaRuta/${values.mensajero}`);
        setRutas(resultado['hydra:member']);
    }

    const columns = [
        {
            title: 'Fecha',
            dataIndex: 'fecha',
            key: 'fecha',
        },
        {
            title: 'Detalle',
            dataIndex: 'detalle',
            key: 'detalle',
        },
        {
            title: 'Mensajero',
            dataIndex: 'mensajero',
            render: mensajero => `${mensajero.nombre} ${mensajero.apellido}`,
            key: 'mensajero',
        },     
        {
            title: 'Acción',
            key: 'action',
            render: (text, record) => (
                <>
                <Button onClick={()=>{setShowModal(true); setEdit(true); setRegister(record); setForm(props.form) }} size="middle">
                  Editar
                </Button>
                <Button size="middle">
                Eliminar
              </Button>
              </>
            ),
        },
    ]
    return (
        <>
        <Form onFinish={busqueda}>
            <Row>
            <Col span={24}>
            <Form.Item label="Palabras Clave" name="palabra">
                <Input/>
            </Form.Item>
            </Col>
            <Col span={6}>
            <Form.Item label="Mensajero" name="mensajero">
                <Select>
                    {   mensajeros.map(mensajero => 
                            <Option value={mensajero['id']}>{mensajero.nombre} {mensajero.apellido}</Option>
                        )
                    }
                </Select>
            </Form.Item>
            </Col>
            <Col offset={1} span={4}>
            <Form.Item label="Fecha" name="fecha">
                <DatePicker/>
            </Form.Item>
            </Col>
            <Col offset = {1} span={5}>
            <Form.Item label="Estado">
                <Select>
                    <Option value="Asignada">Asignada</Option>
                    <Option value="No Asignada">No Asignada</Option>
                    <Option value="Completa">Completa</Option>
                    <Option value="Cancelada">Cancelada</Option>
                </Select>
            </Form.Item>
            </Col>
            <Col offset= {1} span ={4}>
            <Form.Item>
                <Button type="primary" htmlType="submit">Buscar</Button>
                <Button>Limpiar</Button>
            </Form.Item>
            </Col>
             </Row>
        </Form>
        <Table dataSource={rutas} columns={columns}/>
        </>
    )
}

export default RutasList;