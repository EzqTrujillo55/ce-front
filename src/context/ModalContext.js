import React, {useState} from 'react';
import { Button, Col, Modal, Row } from 'antd';
import { EditOutlined, ExclamationCircleOutlined, PlusOutlined } from '@ant-design/icons';
import RutasForm from '../components/RutasForm';
import RutasDetail from '../components/RutasDetail';
import OrdenesForm from '../components/OrdenesForm';
import OrdenDetail from '../components/OrdenDetail';
import AsignacionOrden from '../components/AsignacionOrden';
import MensajerosForm from '../components/MensajerosForm';
import EmpresasForm from '../components/EmpresasForm';
import ContactosForm from '../components/ContactosForm';
import ContactoDetail from '../components/ContactoDetail';

const ModalContext = React.createContext({});
const { confirm } = Modal;
export const ModalContextProvider = ({children}) => {
    const [showModal, setShowModal ] = useState( false );
    const [edit, setEdit ] = useState(false); 
    const [register, setRegister] = useState([]);
    const [title, setTitle] = useState('');
    const [form, setForm] = useState('');
    const [detail, setDetail] = useState(''); 
    const handleCancel = () => {
        confirm( {
          title: '¿Confirmas que deseas cerrar el formulario?',
          icon: <ExclamationCircleOutlined />,
          content: 'Se perderá toda la información ingresada.',
          okText: 'Sí',
          cancelText: 'No',
          onOk() {
            // form.resetFields();
            setShowModal( false );
          },
          onCancel() {},
        } );
      };
    
    const ModalForm = () => {
        let contentForm;
        switch(form){
            case 'RutasForm':
                contentForm = <RutasForm edit={edit} register={register}/>
                break;
            case 'OrdenesForm':
                contentForm = <OrdenesForm edit={edit} register={register}/>
                break;
            case 'AsignacionOrden':
                contentForm = <AsignacionOrden register={register}/> 
                break;
            case 'MensajerosForm': 
                contentForm = <MensajerosForm edit={edit} register={register}/>
                break; 
            case 'EmpresasForm': 
                contentForm = <EmpresasForm edit={edit} register={register}/>
                break;
            case 'ContactosForm':
                contentForm = <ContactosForm  edit={edit} register={register}/>
            default:
                console.log('No se ha enviado un formulario como paráemtro');
                break;
        }
        return contentForm; 
    }

    const ModalDetail = () => {
      let contentDetail;
      switch(detail){
        case 'RutasDetail':
            contentDetail = <RutasDetail register={register} /> 
            break;
        case 'OrdenDetail':
            contentDetail = <OrdenDetail register={register}/>
            break;
        case 'ContactoDetail': 
            contentDetail = <ContactoDetail register={register}/>
        default:
          console.log('No se ha enviado un detalle como parámetro');
          break;
      }
      return contentDetail;
    }
      return(
      <>
      <ModalContext.Provider value= {{setShowModal, setEdit, setRegister, setTitle, setForm, setDetail}}>
      {children}
      <Modal
        title={
          <h3>{title}</h3>
        }
        visible={ showModal }
        // closable={ false }
        maskClosable={ false }
        // confirmLoading={ isSubmitting }
        // okText='Enviar solicitud'
        // cancelText={ 'Cancelar' }
        onCancel={ handleCancel }
        // onOk={ () => form.submit() }
        footer={ null }
        width={ 600 }
        destroyOnClose={ true }>
        
         {form!='' && <ModalForm/>}

         {detail!= '' && <ModalDetail/>} 
           
      </Modal>
      </ModalContext.Provider>
      
      </>
      )
}

export default ModalContext;