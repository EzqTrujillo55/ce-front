export const getData =  async (resource) => {
    const data = await fetch(`http://localhost:8000/api/${resource}`, {
        headers:{
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return data.json();
  };