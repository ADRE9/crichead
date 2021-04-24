import React from 'react';
import Navbar from './Navbar';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import {facebookProvider} from "../configs/firebaseHelper";
import  {BrowserRouter as Router} from "react-router-dom";
class App extends React.Component {

  // setUpRecaptcha = () => {
  //   window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
  //     'size': 'invisible',
  //     'callback': (response) => {
  //       // reCAPTCHA solved, allow signInWithPhoneNumber.
  //       this.onSignInSubmit();
  //     }
  //   });    
  // }

  // onSignInSubmit = () => {
    
  // }

  render() {
    return (
      <Router>
        <Navbar/>
      </Router>
      
    )
  }
};

export default App;
