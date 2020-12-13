import { message } from 'antd';
import React,{useState, useEffect} from 'react';
import {setData} from '../services/setData';
import {serviceLogin} from '../services/serviceLogin';
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
     const login = async (values ) => {
        setLoading(true);
        const login_request = await serviceLogin('login', values);
        console.log(login_request);
        if(login_request.error==false){
          localStorage.setItem('token', login_request.token);
          setToken(localStorage.getItem('token'));
        }else{
          message.error(login_request.error);
        }
        setLoading(false);
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
