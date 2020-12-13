import { message } from "antd";

export const serviceLogin =  async (resource, values) => {
  console.log(values);
    const data = await fetch(`http://localhost:8000/api/${resource}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      })
    return data.json();
  };
