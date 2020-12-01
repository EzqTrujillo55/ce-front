import { Card, Col, Row } from 'antd';
import React from 'react';

const RutasDetail = (props) => {
    return(
        <Card title="Detalle de Ruta">
            <Row>
                <Col span={4}>
                    <h3>Fecha de creación</h3>
                </Col>
                <Col span={20}>
                    {props.register[0].created_at}
                </Col>
                <Col span={4}>
                    <h3>Mensajero</h3>
                </Col>
                <Col span={20}>
                    {props.register[0].mensajero.nombre} {props.register[0].mensajero.apellido}
                </Col>
                <Col span={4}>
                    <h3>Estado</h3>
                </Col>
                <Col span={20}>
                    {props.register[0].status}
                </Col>
            </Row>
        </Card>



    )
}

export default RutasDetail;