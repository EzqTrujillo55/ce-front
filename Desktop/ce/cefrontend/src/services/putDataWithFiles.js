import { message } from "antd";

export const putDataWithFiles =  async (resource, values) => {
    const data = await fetch(`http://localhost:8000/api/${resource}?_method=PUT`, {
        method: "POST",
        body: values,
       
      })
        .then(resp => resp.json())
        .then(data => {
            console.log(data); 
            if(data.code==401){
                message.error('Algo salió mal, verifique los datos ingresados');
            }else{
            message.success('Datos ingresados correctamente'); 
            }  
        }
    );
    return data;
  };