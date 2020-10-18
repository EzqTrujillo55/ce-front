import { Card, Form, Input, Button } from 'antd';
import React, { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';

const Login = () => {
    const {login, loading} = useContext(AuthContext); 
    return (
    <Card title="Login">
        <Form onFinish={login}>
            <Form.Item name="username" label="Email">
                <Input/>
            </Form.Item>
            <Form.Item name="password" label="Password">
                <Input/>
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" loading={loading}>INGRESAR</Button>
            </Form.Item>
        </Form>
    </Card>
    )
}

export default Login; 