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
const MensajerosForm = (props) => {
    const {setShowModal} = useContext(ModalContext);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [fileList, setFileList] = useState([]);
    const [cvList, setCvList] = useState([]);
  
    const addRuta = async (values) => { 

        setIsSubmitting(true);
        const formData = new FormData(); 
        
        Object.keys(values)
        .forEach(function eachKey(key) { 
            formData.append(key, values[key]); 
        });
        
        fileList.forEach(file => {
            //formData.append('files[]', file); 
            formData.append('foto', file);  
        });

        cvList.forEach(file => {
            //formData.append('files[]', file); 
            formData.append('cv', file);  
        });

    
        message.loading( {
            content: 'Guardando los datos del mensajero',
          });
          
        console.log('Agregando', Object.fromEntries(formData));
        const representative = await setDataWithFiles( 'mensajeros', formData);
        console.log(representative);
        setIsSubmitting(false);
        setShowModal(false);
    }



    const editRuta = async (values) => {
        setIsSubmitting(true);
        const formData = new FormData(); 
        
        Object.keys(values)
        .forEach(function eachKey(key) { 
            formData.append(key, values[key]); 
        });
        
        fileList.forEach(file => {
            //formData.append('files[]', file); 
            formData.append('foto', file);  
        });

        cvList.forEach(file => {
            //formData.append('files[]', file); 
            formData.append('cv', file);  
        });

        message.loading( {
            content: 'Editando los datos del mensajero',
          });
        console.log('Editando', Object.fromEntries(formData));
        const representative = await putDataWithFiles( `mensajeros/${props.register[0].id}`, formData);
        console.log(representative);
        setIsSubmitting(false);
        setShowModal(false);
    }


    const normFile = e => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

    const beforeUpload = file => {
        if (file.type === 'image/png' || file.type === 'image/jpg' || file.type === 'image/jpeg' ) {
            setFileList((prevState)=> 
            [...prevState, file],
            );
            return false;
        }else{
            message.error(`${file.name} debe ser un archivo de imagen (png, jpg, jpeg)`);
        }
    };

    const beforeUploadCv = file => {
        setCvList((prevState)=> 
        [...prevState, file],
        );
        return false;
    }

       
    return(
        
        
        !props.edit?
        (
        <Form onFinish={addRuta} >
            <Row>
            <Col span={24}>
            <Form.Item
        name="foto"
        label="Foto"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        rules={[{ required: true, message: 'Este campo es requerido!' }]}
      >
        <Upload name="logo" beforeUpload={beforeUpload} listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item label="Cédula" name="cedula" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Input/>
            </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item label="Nombre" name="nombre" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Input/>
            </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item label="Apellido" name="apellido" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Input/>
            </Form.Item>
            </Col>
            <Col span={11}>
            <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Input/>
            </Form.Item>
            </Col>
            <Col span={11} offset={1}>
            <Form.Item name="telefono" label="Teléfono" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Input/>
            </Form.Item>
            </Col>
            <Col span={24}>
                <Form.Item name="tipoVehiculo" label="Tipo Vehículo" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Select>
                    <Option value="Camión">Camión</Option>
                    <Option value="Auto">Auto</Option>
                    <Option value="Moto">Moto</Option>
                    <Option value="Bicicleta">Bicicleta</Option>
                </Select>
                </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item name="descripcionVehiculo" label="Descripción Vehículo (Año, modelo, etc)" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Input/>
            </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item name="placaVehiculo" label="Placa" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Input/>
            </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item name="colorVehiculo" label="Color" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Input/>
            </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item
        name="cv"
        label="Hoja de Vida"
        valuePropName="cvList"
        getValueFromEvent={normFile} rules={[{ required: true, message: 'Este campo es requerido!' }]}
      >
        <Upload name="logo" beforeUpload={beforeUploadCv} listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>
            <Form.Item name="status" label="Estado" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Select>
                    <Option value="Activo">Activo</Option>
                    <Option value="Pendiente de aprobación">Pendiente de aprobación</Option>
                    <Option value="Suspendido">Suspendido</Option>
                    <Option value="Desactivado">Desactivado</Option>
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
            cedula:  props.register[0].cedula,
            nombre:  props.register[0].nombre,
            apellido:props.register[0].apellido,
            email: props.register[0].email, 
            telefono: props.register[0].telefono,
            tipoVehiculo: props.register[0].tipoVehiculo,
            descripcionVehiculo: props.register[0].descripcionVehiculo,
            placaVehiculo: props.register[0].placaVehiculo,
            colorVehiculo: props.register[0].colorVehiculo, 
            status: props.register[0].status,
            cv: props.register[0].cv
             }}>
            <Row>
            <Col span={24}>
            <Form.Item
        name="foto"
        label="Foto"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        
      >
        <Upload name="logo" beforeUpload={beforeUpload}  listType="picture" defaultFileList={[
      {
        uid: '-1',
        name: 'foto.png',
        status: 'done',
        url: `http://localhost:8000/${props.register[0].foto.replace('public', 'storage')}` 
        //url: 'data:image/png;base64,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'
      },
    ]}>
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item label="Cédula" name="cedula" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Input/>
            </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item label="Nombre" name="nombre" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Input/>
            </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item label="Apellido" name="apellido" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Input/>
            </Form.Item>
            </Col>
            <Col span={11}>
            <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Input/>
            </Form.Item>
            </Col>
            <Col span={11} offset={1}>
            <Form.Item name="telefono" label="Teléfono" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Input/>
            </Form.Item>
            </Col>
            <Col span={24}>
                <Form.Item name="tipoVehiculo" label="Tipo Vehículo" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Select>
                    <Option value="Camión">Camión</Option>
                    <Option value="Auto">Auto</Option>
                    <Option value="Moto">Moto</Option>
                    <Option value="Bicicleta">Bicicleta</Option>
                </Select>
                </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item name="descripcionVehiculo" label="Descripción Vehículo (Año, modelo, etc)" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Input/>
            </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item name="placaVehiculo" label="Placa" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Input/>
            </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item name="colorVehiculo" label="Color" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Input/>
            </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item
        name="cv"
        label="Hoja de Vida"
        valuePropName="cvList"
        getValueFromEvent={normFile} rules={[{ required: true, message: 'Este campo es requerido!' }]}
      >
        <Upload name="logo" beforeUpload={beforeUploadCv} listType="picture" defaultFileList={[
      {
        uid: '-1',
        //name: 'cv',
        status: 'done',
        url: `http://localhost:8000/${props.register[0].cv.replace('public', 'storage')}` 
        //url: 'data:image/png;base64,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'
      },
    ]}>
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>
            <Form.Item name="status" label="Estado" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Select>
                    <Option value="Activo">Activo</Option>
                    <Option value="Pendiente de aprobación">Pendiente de aprobación</Option>
                    <Option value="Suspendido">Suspendido</Option>
                    <Option value="Desactivado">Desactivado</Option>
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

export default MensajerosForm;