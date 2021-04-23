import React from 'react';
import Navbar from './Navbar';
import './App.css';
import {facebookProvider} from "../configs/firebaseHelper";

class App extends React.Component {

  render() {
    console.log(facebookProvider)
    return (
      <Navbar/>
    )
  }
};

export default App;
