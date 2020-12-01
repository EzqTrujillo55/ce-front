import React from 'react';

import './App.css';
import { AuthContextProvider } from './context/AuthContext';
import CargoExpress from './pages/CargoExpress';

function App() {
  //TO DO: ENGLOBAR LO QUE ESTÁ DENTRO DEL PROVIDER EN EL ENRUTADOR
  return (
    <AuthContextProvider>
      <CargoExpress/>
    </AuthContextProvider>
  );
}

export default App;
