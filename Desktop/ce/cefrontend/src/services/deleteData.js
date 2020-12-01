import { message } from "antd";

export const deleteData =  async (resource) => {
    const data = await fetch(`http://localhost:8000/api/${resource}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
      })
        .then(resp => resp.json())
        .then(data => {
            console.log(data); 
            if(data.code==401){
                message.error('Algo salió mal, verifique los datos ingresados');
            }else{
            message.success('Datos eliminados correctamente'); 
            }  
        }
    );
    return data;
  };