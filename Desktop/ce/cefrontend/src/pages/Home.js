import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Button } from 'antd';
import CargoExpress from './CargoExpress';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import DashBoard from './DashBoard';
import Ordenes from './Ordenes';
import SignUp from './SignUp';
import Login from './Login';
const Home = () => {
        
    return (
        <Router>
        <div>
          <ul>
            <li>
              <Link to="/login">INGRESO CLIENTES</Link>
            </li>
            <li>
              <Link to="/signup">REGISTRO CLIENTES</Link>
            </li>
          </ul>
  
          <hr />
  
          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <Switch>
            
            <Route path = "/login">
              <Login/>
            </Route>
            <Route path = "/signup">
              <SignUp/>
            </Route>
          </Switch>
        </div>
      </Router>
    )
}

export default Home; 