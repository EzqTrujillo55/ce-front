import { Card, Col, Row } from 'antd';
import React from 'react';

const ContactoDetail = (props) => {
    return(
        <>
        <Card>
            <Row>
                <Col span={12}>
                    <h3 style={{display:"inline-flex"}}>Organización: </h3> {props.register[0].organizacion}
                </Col>
                <Col span={12}>
                    <h3 style={{display:"inline-flex"}}>Ciudad: </h3> {props.register[0].ciudad}
                </Col>
                <Col span={12}>
                    <h3 style={{display:"inline-flex"}}>Dirección: </h3> {props.register[0].direccion}
                </Col>
                <Col span={12}>
                    <h3 style={{display:"inline-flex"}}>Identificación: </h3> {props.register[0].identificacion}
                </Col>
                <Col span={12}>
                    <h3 style={{display:"inline-flex"}}>Contacto: </h3> {props.register[0].nombre}
                </Col>
                <Col span={12}>
                    <h3 style={{display:"inline-flex"}}>Teléfono: </h3> {props.register[0].telefono}
                </Col>
                <Col span={12}>
                    <h3 style={{display:"inline-flex"}}>Email: </h3> {props.register[0].email}
                </Col>
                <Col span={12}>
                <h3 style={{display:"inline-flex"}}>Empresa: </h3> {props.register[0].empresa.nombre}
                </Col>
            </Row>
        </Card>
        </>



    )
}

export default ContactoDetail;