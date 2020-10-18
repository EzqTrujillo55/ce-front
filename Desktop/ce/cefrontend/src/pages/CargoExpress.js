import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import Home from './Home';
import MainLayout from './MainLayout';

const CargoExpress = () => {
    const {login, logout, token} = useContext(AuthContext);
    if(token===null){
        return <Home/>
    }

    return <MainLayout/>
    
}

export default CargoExpress; 