import React from 'react';
import styled from 'styled-components';
import firebase from '../../configs/firebase';

const OuterDiv = styled.div`
`;

class index extends React.Component {

  setUpRecaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.onSignInSubmit();
      }
    });    
  }

  onSignInSubmit = () => {
    
  }

  render() {
    return (
      <OuterDiv>
        
      </OuterDiv>
    )
  }
}

export default index;
