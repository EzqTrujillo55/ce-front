import React, {useContext, useEffect, useState} from 'react'; 
import {Form, Input, Select, Button, Card, Table, Modal, Row, Col, DatePicker} from 'antd';
import ModalContext from '../context/ModalContext';
import { getData } from '../services/getData';
import { setData } from '../services/setData';
import { searchData } from '../services/searchData';
import { deleteData } from '../services/deleteData';
import { DeleteTwoTone, EditTwoTone, EyeTwoTone } from '@ant-design/icons';
const {Option} = Select;
const RutasList = (props) => {
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
        const resultado = await searchData('rutas/search', values);
        for(let i=0; i<resultado.length; i++){
            resultado[i]['key'] = resultado[i];
        }
        setRutas(resultado);
        setLoading(false);
    }

    const deleteRuta=async () => {
        setLoading(true);
        if(selectedRowKeys.length===1){
            const resultado = await deleteData(`rutas/${selectedRowKeys[0].id}`);
            busqueda({});
            setLoading(false);
        }

        if(selectedRowKeys.length>1){
            for(let i=0; i<selectedRowKeys.length; i++){
                const resultado = await deleteData(`rutas/${selectedRowKeys[i].id}`);    
            }
            busqueda({});
            setLoading(false);
        }
    }

    const columns = [
        {
            title: 'Fecha',
            dataIndex: 'created_at',
            key: 'fecha',
        },
        {
            title: 'Mensajero',
            dataIndex: 'mensajero',
            render: mensajero => `${mensajero.nombre} ${mensajero.apellido}`,
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
        mensajero: '',
        fechaInicial: '',
        fechaFinal: '',
        estado: ''
      }}>
            <Row>
            <Col span={24}>
            <Form.Item label="Palabras Clave" name="palabraClave">
                <Input/>
            </Form.Item>
            </Col>
            <Col span={6}>
            <Form.Item label="Mensajero" name="mensajero">
                <Select>
                    {  props.mensajeros.map(mensajero => 
                            <Option value={mensajero['id']}>{mensajero.nombre} {mensajero.apellido}</Option>
                        )
                    }
                </Select>
            </Form.Item>
            </Col>
            <Col offset={1} span={4}>
            Fecha de Creación:
            <Form.Item label="Fecha Inicial" name="fechaInicial" >
                <DatePicker/>
            </Form.Item>
            <Form.Item label="Fecha Final" name="fechaFinal">
                <DatePicker/>
            </Form.Item>
            </Col>
            <Col offset = {1} span={5}>
            <Form.Item label="Estado" name="estado">
                <Select>
                    <Option value="Abierta">Abierta</Option>
                    <Option value="Cerrada">Cerrada</Option>
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
            <Button icon={<EyeTwoTone/>} disabled={disabledBtnDetail} onClick={()=>{setShowModal(true); setEdit(false);  setRegister(selectedRowKeys); setForm(''); setDetail('RutasDetail'); console.log(selectedRowKeys); setTitle('Ruta') }} size="middle"/>
            </Col>
            <Col span={1}> 
            <Button icon={<EditTwoTone/>} disabled={disabledBtnEdit} onClick={()=>{setShowModal(true); setEdit(true);  setRegister(selectedRowKeys); setForm(props.form); setDetail(''); console.log(selectedRowKeys); setTitle('Ruta') }} size="middle"/>
            </Col>
            <Col span={1}> 
            <Button icon={<DeleteTwoTone/>} disabled={disabledBtnDelete} onClick={deleteRuta} size="middle"/>
            </Col>
        </Row>
        <br/>
        <Table rowSelection={rowSelection}  dataSource={rutas} columns={columns} loading={loading}/>
        </>
    )
}

export default RutasList;