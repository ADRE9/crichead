import React from 'react';
import './App.css';
import {facebookProvider} from "../configs/firebaseHelper";
import  {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

//pages
import SignUpWithEmailPage from '../Pages/SignUpWithEmailPage';
import LoginWithPhone from '../Pages/LoginPageWithPhone';
import LoginWithEmail from '../Pages/LogInWithEmailPage';

const Container = styled.div`
  height:100vh;
  width:100%;
  display:flex;
  flex-direction:column;
`;

class App extends React.Component {

  render() {
    return (
      <Router>
        <Container>
          <Navbar />
          <Switch>
            <Route path="/signin" exact>
              <SignUpWithEmailPage/>
            </Route>
            <Route path="/loginwithphone" exact>
              <LoginWithPhone/>
            </Route>
            <Route path="/loginwithemail" exact>
              <LoginWithEmail/>
            </Route>
          </Switch>
        </Container>
      </Router>
    )
  }
};

export default App;
