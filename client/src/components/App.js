import React from 'react';
import './App.css';
import {facebookProvider} from "../configs/firebaseHelper";
import  {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SignUpWithEmailPage from '../Pages/SignUpWithEmailPage';
import Navbar from "./Navbar";

class App extends React.Component {

  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/signin" component={SignUpWithEmailPage} exact/>
        </Switch> 
      </Router>
    )
  }
};

export default App;
