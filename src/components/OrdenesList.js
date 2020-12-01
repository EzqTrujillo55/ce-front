import React, {useContext, useEffect, useState} from 'react'; 
import {Form, Input, Select, Button, Card, Table, Modal, Row, Col, DatePicker} from 'antd';
import ModalContext from '../context/ModalContext';
import { getData } from '../services/getData';
import { setData } from '../services/setData';
import { searchData } from '../services/searchData';
import { deleteData } from '../services/deleteData';
import { DeleteTwoTone, DiffTwoTone, EditTwoTone, EyeTwoTone } from '@ant-design/icons';
const {Option} = Select;
const OrdenesList = (props) => {
    const {setShowModal, setTitle, setEdit, setRegister, setForm, setDetail} = useContext(ModalContext);
    const [rutas, setRutas] = useState([]);
    const [fechaInicial, setFechaInicial] = useState('');
    const [fechaFinal, setFechaFinal] = useState('');
    const [loading, setLoading] = useState(false);
    const [ selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [disabledBtnDetail, setDisabledBtnDetail] = useState(true);
    const [disabledBtnEdit, setDisabledBtnEdit] = useState(true);
    const [disabledBtnDelete, setDisabledBtnDelete] = useState(true);
    const  onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        setSelectedRowKeys(selectedRowKeys);
        console.log(rutas);
        if(selectedRowKeys.length===0){
            setDisabledBtnDetail(true);
            setDisabledBtnEdit(true);
            setDisabledBtnDelete(true);
        }
        if(selectedRowKeys.length===1){
            setDisabledBtnDetail(false);
            setDisabledBtnEdit(false);
            setDisabledBtnDelete(false);
        }
        if(selectedRowKeys.length>1){
            setDisabledBtnDetail(true);
            setDisabledBtnEdit(true);
            setDisabledBtnDelete(false);

        }
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
      };

    const busqueda = async (values) => {
        setLoading(true);
        console.log(values);
        const resultado = await searchData('ordenes/search', values);
        for(let i=0; i<resultado.length; i++){

            

            if(resultado[i]['ruta']===null){
                var arr = { "mensajero": { "nombre": "No" , "apellido": "Asignado"} }; 
                resultado[i]['ruta'] = arr;
                resultado[i]['key'] = resultado[i];
                
            }else{
                resultado[i]['key'] = resultado[i];
            }
        }
        setRutas(resultado);
        setLoading(false);
    }

    const deleteRuta=async () => {
        setLoading(true);
        if(selectedRowKeys.length===1){
            const resultado = await deleteData(`ordenes/${selectedRowKeys[0].id}`);
            busqueda({});
            setLoading(false);
        }

        if(selectedRowKeys.length>1){
            for(let i=0; i<selectedRowKeys.length; i++){
                const resultado = await deleteData(`ordenes/${selectedRowKeys[i].id}`);    
            }
            busqueda({});
            setLoading(false);
        }
    }

    const columns = [
        {
            title: 'Código',
            dataIndex: 'codigo',
            key: 'codigo',
        },
        {
            title: 'Persona o Empresa Origen',
            dataIndex: 'origen',
            //render: mensajero => `${mensajero.nombre} ${mensajero.apellido}`,
            key: 'origen',
        },
        {
            title: 'Dirección Origen',
            dataIndex: 'dirOrigen',
            key: 'dirOrigen',
        },     
        {
            title: 'Persona o Empresa Destino',
            dataIndex: 'destino',
            key: 'destino',
        },     
        {
            title: 'Dirección Destino',
            dataIndex: 'dirDestino',
            key: 'dirDestino',
        },     
        {
            title: 'Tipo Servicio',
            dataIndex: 'tipoServicio',
            key: 'tipoServicio',
        },     
        {
            title: 'Fecha Creación',
            dataIndex: 'created_at',
            key: 'created_at',
        },
        {
            title: 'Mensajero',
            dataIndex: 'ruta',
            render: ruta => `${ruta.mensajero.nombre}  ${ruta.mensajero.apellido}`,
            key: 'mensajero',
        },     
        {
            title: 'Estado',
            dataIndex: 'status',
            key: 'estado',
        },     
    ]

    
    return (
        <>
        <Form onFinish={busqueda} initialValues={{
        palabraClave: '',
        codigo: '',
        ruta_id: '',
        empresa:'',
        fechaInicial: '',
        fechaFinal: '',
        tipoServicio: '',
        estado: ''
      }}>
            <Row>
            <Col span={24}>
            <Form.Item label="Palabras Clave" name="palabraClave">
                <Input/>
            </Form.Item>
            </Col>
            <Col span={5} offset={1}>
            <Form.Item label="Código Orden" name="codigo">
                <Input/>
            </Form.Item>
            </Col>
            <Col span={6} offset={1}>
            <Form.Item label="Ruta" name="ruta_id">
                <Select>
                    {  props.rutas.map(ruta => 
                            <Option value={ruta['id']}>{ruta.detalle}</Option>
                        )
                    }
                </Select>
            </Form.Item>
            </Col>
            <Col span={6} offset={1}>
            <Form.Item label="Empresa" name="empresa">
                <Select>
                    {  props.empresas.map(empresa => 
                            <Option value={empresa.nombre}>{empresa.nombre}</Option>
                        )
                    }
                </Select>
            </Form.Item>
            </Col>
            <Col offset={1} span={4}>
            <Form.Item label="Fecha Inicial" name="fechaInicial" >
                <DatePicker/>
            </Form.Item>
            </Col>
            <Col offset={1} span={4}>
            <Form.Item label="Fecha Final" name="fechaFinal">
                <DatePicker/>
            </Form.Item>
            </Col>
            <Col offset = {1} span={5}>
            <Form.Item label="Tipo Servicio" name="tipoServicio">
                <Select>
                    <Option value="Envío Express">Envío Express</Option>
                    <Option value="Envío Básico">Envío Básico</Option>
                    <Option value="Delivery">Delivery</Option>
                </Select>
            </Form.Item>
            </Col>
            <Col offset = {1} span={5}>
            <Form.Item label="Estado" name="estado">
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
            <Col offset= {1} span ={4}>
            <Form.Item>
                <Button type="primary" htmlType="submit">Buscar</Button>
                <Button>Limpiar</Button>
            </Form.Item>
            </Col>
             </Row>
        </Form>
        <Row justify="center">
            <Col span={1}> 
            <Button icon={<EyeTwoTone/>} disabled={disabledBtnDetail} onClick={()=>{setShowModal(true); setEdit(false);  setRegister(selectedRowKeys); setForm(''); setDetail('OrdenDetail'); console.log(selectedRowKeys); setTitle(`Orden ${selectedRowKeys[0].codigo} `) }} size="middle"/>
            </Col>
            <Col span={1}> 
            <Button icon={<EditTwoTone/>} disabled={disabledBtnEdit} onClick={()=>{setShowModal(true); setEdit(true);  setRegister(selectedRowKeys); setForm(props.form); setDetail(''); console.log(selectedRowKeys); setTitle('Orden') }} size="middle"/>
            </Col>
            <Col span={1}> 
            <Button icon={<DeleteTwoTone/>} disabled={disabledBtnDelete} onClick={deleteRuta} size="middle"/>
            </Col>
            <Col span={1}> 
            <Button icon={<DiffTwoTone/>} disabled={disabledBtnDetail} onClick={ () => {setShowModal(true); setEdit(false);  setRegister(selectedRowKeys); setForm('AsignacionOrden'); setDetail(''); console.log(selectedRowKeys); setTitle('Asignación') }} size="middle"/>
            </Col>
        </Row>
        <br/>
        <Table rowSelection={rowSelection}  dataSource={rutas} columns={columns} loading={loading}/>
        </>
    )
}

export default OrdenesList;