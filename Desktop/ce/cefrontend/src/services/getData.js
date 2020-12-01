export const getData =  async (resource) => {
    const data = await fetch(`http://localhost:8000/api/${resource}`, {
        headers:{
            mode: 'no-cors'
        }
    });
    return data.json();
  };