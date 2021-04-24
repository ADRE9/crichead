import React from 'react';
import Navbar from './Navbar';
import './App.css';
import {facebookProvider} from "../configs/firebaseHelper";
import { BrowserRouter as Router } from "react-router-dom";
import { Route,Switch } from "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route>
            
          </Route>
        </Switch>
        
      </Router>
      
    )
  }
};

export default App;
