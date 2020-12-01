export const searchData =  async (resource, values) => {
    const data = await fetch(`http://localhost:8000/api/${resource}`, {
        method : 'POST',
        body: JSON.stringify(values),
        headers:{
            'Content-Type': 'application/json',
            mode: 'no-cors',
        }
    });
    return data.json();
  };