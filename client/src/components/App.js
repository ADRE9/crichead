import React from 'react';
import Navbar from './Navbar';
import './App.css';
import {facebookProvider} from "../configs/firebaseHelper";
import  {BrowserRouter as Router} from "react-router-dom";
class App extends React.Component {

  render() {
    console.log(facebookProvider)
    return (
      <Router>
        <Navbar/>
      </Router>
      
    )
  }
};

export default App;
