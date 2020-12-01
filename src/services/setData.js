import { message } from "antd";

export const setData =  async (resource, values) => {
    const data = await fetch(`http://localhost:8000/api/${resource}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
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

  