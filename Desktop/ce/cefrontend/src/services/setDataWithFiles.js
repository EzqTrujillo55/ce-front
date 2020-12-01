import { message } from "antd";

export const setDataWithFiles =  async (resource, values) => {
    console.log('formData desde fetch', Object.fromEntries(values));
    const data = await fetch(`http://localhost:8000/api/${resource}`, {
        method: "POST",
        body: values
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

  