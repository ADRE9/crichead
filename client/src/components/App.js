import React from 'react';
import './App.css';
import {facebookProvider} from "../configs/firebaseHelper";
import  {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from '../Pages/LandingPage';
import { SigninPage } from '../Pages/LandingPage/signin/SignIn';
import Navbar from "./Navbar";

class App extends React.Component {

  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/signin" component={SigninPage} exact/>
        </Switch> 
      </Router>
    )
  }
};

export default App;
