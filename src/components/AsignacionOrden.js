import {Button, Form, Input, message, Select} from 'antd';
import React, { useContext, useState, useEffect } from 'react'; 
import ModalContext from '../context/ModalContext';
import { getData } from '../services/getData';
import { searchData } from '../services/searchData';
import { setData } from '../services/setData';

const {Option} = Select;

const AsignacionOrden = (props) => {
    const {setShowModal} = useContext(ModalContext);
    const [rutas, setRutas] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            const rutas_request = await getData('rutas');
            setRutas(rutas_request);
        }
        fetchData();
    }, []);

    const asignar = async (values) => {
        setLoading(true);
        message.loading( {
            content: 'Asignando orden a la ruta seleccionada',
          });
        const asignacion_request = await setData(`ordenes/asignar/${props.register[0].id}`, values);
        console.log(asignacion_request);
        setLoading(false);
        setShowModal(false);  
    }
    return(
        <Form onFinish={asignar}>
            <Form.Item label="Ruta" name="ruta_id">
                <Select defaultValue={props.register[0].ruta_id}>
                    {rutas.map((ruta)=> 
                    (
                    <Option value={ruta.id}> {ruta.created_at} {ruta.mensajero.nombre}  {ruta.mensajero.apellido}</Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item label="Comentarios" name="detalle">
                        <Input/>
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" type="primary" loading={loading}>Asignar</Button>
            </Form.Item>
        </Form>
    )
}

export default AsignacionOrden; 