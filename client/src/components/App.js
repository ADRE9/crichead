import React from 'react';
import './App.css';
import {facebookProvider} from "../configs/firebaseHelper";
import  {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from '../Pages/LandingPage';
import { SigninPage } from '../Pages/LandingPage/signin/signin';

import { BrowserRouter as Router } from "react-router-dom";
import { Route,Switch } from "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <Router>

        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/signin" component={SigninPage} exact/>
        </Switch>
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
