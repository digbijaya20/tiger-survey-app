import React from 'react';
import './App.css';
import Logo from './assets/Logo/logo.png'
import LandingPage from './Components/LandingPage/LandingPage';
import CreateSurvey from './Components/CreateSurvey/CreateSurvey';
import { Route, Switch } from "react-router-dom";




function App() {
  return (

    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <img src={Logo} alt="logo" />

      <Switch>
        <Route path='/create' component={CreateSurvey} />
        <Route path='/' component={LandingPage} />

      </Switch>
    </div>
  );
}

export default App;
