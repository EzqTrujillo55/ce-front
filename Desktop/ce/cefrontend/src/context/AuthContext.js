import { message } from 'antd';
import React,{useState, useEffect} from 'react';

const AuthContext = React.createContext({});
 export const AuthContextProvider = ({children}) => {
     const[token, setToken] = useState(null);
     const[loading, setLoading] = useState(false); 
     useEffect(() => {
        console.log(localStorage.getItem('token'));     
        if(localStorage.getItem('token')!= null){
            setToken(localStorage.getItem('token'));
        }
     }, []);
     const login = (values ) => {
        setLoading(true);
        fetch("http://localhost:8000/api/login_check", {
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
                    message.error('Credenciales incorrectas');
                    setLoading(false);
                }else{
                localStorage.setItem('token', data.token); 
                setToken(localStorage.getItem('token')); 
                setLoading(false);
                }  
            }
        );
     }
     
     const logout = () => {
         localStorage.clear();
         setToken(localStorage.getItem('token'));
         console.log('salir');
     }
     
    return (
        <AuthContext.Provider value={{token:localStorage.getItem('token'), login: login, logout: logout, loading: loading}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext; 