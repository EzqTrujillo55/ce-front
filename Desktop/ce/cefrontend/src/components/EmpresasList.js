import React, {useContext, useEffect, useState} from 'react'; 
import {Form, Input, Select, Button, Card, Table, Modal, Row, Col, DatePicker} from 'antd';
import ModalContext from '../context/ModalContext';
import { getData } from '../services/getData';
import { setData } from '../services/setData';
import { searchData } from '../services/searchData';
import { deleteData } from '../services/deleteData';
import { DeleteTwoTone, DiffTwoTone, EditTwoTone, EyeTwoTone } from '@ant-design/icons';
const {Option} = Select;
const EmpresasList = (props) => {
    const {setShowModal, setTitle, setEdit, setRegister, setForm, setDetail} = useContext(ModalContext);
    const [empresas, setEmpresas] = useState([]);
    const [loading, setLoading] = useState(false);
    const [ selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [disabledBtnDetail, setDisabledBtnDetail] = useState(true);
    const [disabledBtnEdit, setDisabledBtnEdit] = useState(true);
    const [disabledBtnDelete, setDisabledBtnDelete] = useState(true);
    const  onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        setSelectedRowKeys(selectedRowKeys);
        console.log(empresas);
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
        const resultado = await searchData('empresas/search', values);
        for(let i=0; i<resultado.length; i++){
            resultado[i]['key'] = resultado[i];
        }
        setEmpresas(resultado);
        setLoading(false);
    }

    const deleteRuta=async () => {
        setLoading(true);
        if(selectedRowKeys.length===1){
            const resultado = await deleteData(`empresas/${selectedRowKeys[0].id}`);
            busqueda({});
            setLoading(false);
        }

        if(selectedRowKeys.length>1){
            for(let i=0; i<selectedRowKeys.length; i++){
                const resultado = await deleteData(`empresas/${selectedRowKeys[i].id}`);    
            }
            busqueda({});
            setLoading(false);
        }
    }

    const columns = [
        {
            title: 'Prefijo',
            dataIndex: 'prefijo', 
            key: 'prefijo',
        },
        {
            title: 'Nombre',
            dataIndex: 'nombreResponsable',
            key: 'nombreResponsable',
        },
        {
            title: 'Apellido',
            dataIndex: 'apellidoResponsable',
            key: 'apellidoResponsable',
        },
        {
            title: 'Empresa',
            dataIndex: 'nombre',
            key: 'nombre',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },     
        {
            title: 'Teléfono',
            dataIndex: 'telefono',
            key: 'telefono',
        },     
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },      
    ]

    
    return (
        <>
        <Form onFinish={busqueda} initialValues={{
        parametro: ''
      }}>
            <Row>
            <Col span={22}>
            <Form.Item label="Search" name="parametro">
                <Input/>
            </Form.Item>
            </Col>
            <Col span={2}>
                <Form.Item>
                    <Button htmlType="submit" type="primary">Buscar</Button>
                </Form.Item>
            </Col>
             </Row>
        </Form>
        <Row justify="center">
            
            <Col span={1}> 
            <Button icon={<EditTwoTone/>} disabled={disabledBtnEdit} onClick={()=>{setShowModal(true); setEdit(true);  setRegister(selectedRowKeys); setForm(props.form); setDetail(''); console.log(selectedRowKeys); setTitle('Mensajero') }} size="middle"/>
            </Col>  
        </Row>
        <br/>
        <Table rowSelection={rowSelection}  dataSource={empresas} columns={columns} loading={loading}/>
        </>
    )
}

export default EmpresasList;