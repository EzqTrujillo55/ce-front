import { Card, Col, Row } from 'antd';
import Form from 'antd/lib/form/Form';
import React from 'react';

const OrdenDetail = (props) => {
    return(
        <>
        <Card>
            <Row>
                <Col span={12}>
                    <h3 style={{display:"inline-flex"}}>Estado: </h3> {props.register[0].status}
                </Col>
                <Col span={12}>
                    <h3 style={{display:"inline-flex"}}>Tipo Servicio: </h3> {props.register[0].tipoServicio}
                </Col>
                <Col span={12}>
                    <h3 style={{display:"inline-flex"}}>Detalle: </h3> {props.register[0].detalle}
                </Col>
            </Row>
        </Card>
        <br/>
        <Card title="Datos Remitente">
        <Row>
            <Col span={12}>
                <h3 style={{display:"inline-flex"}}>Remitente: </h3> {props.register[0].remitente}
            </Col>
            <Col span={12}>
                <h3 style={{display:"inline-flex"}}>Teléfono: </h3> {props.register[0].telRemitente}
            </Col>
            <Col span={12}>
                <h3 style={{display:"inline-flex"}}>Persona o Empresa Origen: </h3> {props.register[0].origen}
            </Col>
            <Col span={12}>
                <h3 style={{display:"inline-flex"}}>Ciudad: </h3> {props.register[0].ciudadOrigen}
            </Col>
            <Col span={12}>
                <h3 style={{display:"inline-flex"}}>Dirección: </h3> {props.register[0].dirOrigen}
            </Col>
            <Col span={12}>
                <a href={"https://wa.me/593" + props.register[0].telRemitente.slice(1)} target="_blank">Whatsapp</a>
            </Col>
        </Row>
        </Card>
        <br/>
        <Card title="Datos Destinatario">
        <Row>
            <Col span={12}>
                <h3 style={{display:"inline-flex"}}>Destinatario: </h3> {props.register[0].destinatario}
            </Col>
            <Col span={12}>
                <h3 style={{display:"inline-flex"}}>Teléfono: </h3> {props.register[0].telDestinatario}
            </Col>
            <Col span={12}>
                <h3 style={{display:"inline-flex"}}>Persona o Empresa Destino: </h3> {props.register[0].destino}
            </Col>
            <Col span={12}>
                <h3 style={{display:"inline-flex"}}>Ciudad: </h3> {props.register[0].ciudadDestino}
            </Col>
            <Col span={12}>
                <h3 style={{display:"inline-flex"}}>Dirección: </h3> {props.register[0].dirDestino}
            </Col>
            <Col span={12}>
                <a href={"https://wa.me/593" + props.register[0].telDestinatario.slice(1)} target="_blank">Whatsapp</a>
            </Col>
        </Row>
        </Card>

        </>



    )
}

export default OrdenDetail;