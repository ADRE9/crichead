import React from 'react';
import styled from 'styled-components';
import firebase from '../../configs/firebase';
import { Link } from 'react-router-dom';

const Container = styled.div`
  background-color:aliceblue;
  width:100%;
  height:100%;
  flex-grow:1;
  display:flex;
  align-items:center;
  justify-content:center;
`;

const LoginContainer = styled.div`
  width:80%;
  height:80%;
  box-shadow:0px 0px 10px rgba(0,0,0,0.6);
  background-color:white;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

const StyledH1 = styled.h1`
  margin-top:40px;
  text-align:center;
`;

const StyledFormDiv = styled.div`
    display:flex;
    width:80%;
    height:80%;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const StyledForm = styled.form`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;

const StyledInput = styled.input`
  margin:10px auto;
  width:300px;
  height:40px;
`;

const Submit = styled.button`
    margin:10px auto;
    background-color:black;
    color:white;
    width:300px;
    height:40px;
    border:none;
`;


class index extends React.Component {

  setUpRecaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        console.log("captcha resolved");
        this.onSignInSubmit();
      }
    });    
  }

  onSignInSubmit = (event) => {
    event.preventDefault();
    //getPhoneNumberFromUserInput()
    this.setUpRecaptcha();
    const phoneNumber = "+911234567890";
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      const code = window.prompt("Enter OTP");
      confirmationResult.confirm(code).then((result) => {
        // User signed in successfully.
        const user = result.user;
        // ...
        console.log("User Signed");
      }).catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
      });
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
    });
  }

  render() {
    return (
      <Container>
        <LoginContainer>
          <StyledH1>
            LOGIN WITH PHONE
          </StyledH1>
          <StyledFormDiv>
            <StyledForm onSubmit={this.onSignInSubmit}>
              <StyledInput placeholder="Phone Number" />
              <Submit type="submit">
                REQUEST OTP
              </Submit>
              <div id="recaptcha-container"></div>
            </StyledForm>
            <p>OR</p>
            <Link to="signin">
              <Submit>
                BACK
              </Submit>
            </Link>
          </StyledFormDiv>
        </LoginContainer>
      </Container>
    )
  }
}

export default index;
