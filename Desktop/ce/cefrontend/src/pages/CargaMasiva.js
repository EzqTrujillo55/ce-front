import { UploadOutlined } from '@ant-design/icons';
import { Button, Card, Form, message, Select, Upload} from 'antd';
import React, {useState, useEffect} from 'react'; 
import { getData } from '../services/getData';
import { setData } from '../services/setData';
import { setDataWithFiles } from '../services/setDataWithFiles';

const {Option} = Select; 

const CargaMasiva = () => {
    const [empresas, setEmpresas] = useState([]); 
    const [fileList, setFileList] = useState([]);
    const [submitting, setSubmitting] = useState(false); 
    useEffect(() => {
        const fetchData = async () => {
            const empresas_request = await getData('empresas'); 
            setEmpresas(empresas_request);
        }
        fetchData();  
    }, []);


    //Funciones para la subida del archivo 
    const normFile = e => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
          return e;
        }
        return e && e.fileList;
      };
      
        const beforeUpload = file => {
            console.log(file);
            let extension = file.name.split('.').pop(); 
            if (extension === 'xlsx') {
                  setFileList((prevState)=> 
                  [...prevState, file],
                  );
                  return false;
            }else{
                  message.error(`${file.name} debe ser un archivo de excel (xlsx)`);
            }
        };

          const ejecutarCargaMasiva = async (values) => {
            setSubmitting(true); 
            const formData = new FormData(); 
            Object.keys(values)
            .forEach(function eachKey(key) { 
                formData.append(key, values[key]); 
            });
            
            fileList.forEach(file => {
                //formData.append('files[]', file); 
                formData.append('formato', file);  
            });

            message.loading( {
                content: 'Ejecutando carga masiva, por favor espere un momento..',
              });

            const representative = await setDataWithFiles( 'cargaMasiva', formData);
            console.log(representative);
            setSubmitting(false);
          }
      

    return(
        <Card title={<h4>Carga Masiva</h4>}>
        <Form onFinish={ejecutarCargaMasiva}>
            <Form.Item label="Empresa" name="empresa" rules={[{ required: true, message: 'Este campo es requerido!' }]}>
                <Select>
                    {empresas.map((item)=>(
                        <Option value={item.nombre}>{item.nombre}</Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item
                name="formato"
                label="Archivo"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                rules={[{ required: true, message: 'Este campo es requerido!' }]}
            >
                <Upload name="logo" beforeUpload={beforeUpload} listType="file">
                <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
            </Form.Item>
            <Form.Item>
                <Button loading={submitting} htmlType="submit" type="primary">Enviar</Button>
            </Form.Item>
        </Form>
        <a href="http://localhost:8000/storage/formatos/ordenes.xlsx">Click aquí para descargar formato de carga masiva</a>
        </Card>
    )
}

export default CargaMasiva; 