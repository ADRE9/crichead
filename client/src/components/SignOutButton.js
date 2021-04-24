import React from 'react';
import styled from "styled-components";
import firebase from "../configs/firebase";

const StyledButton = styled.button`
  width:100px;
  height:40px;
  color:white;
  background-color:red;
`;

const SignOutButton = () => {
  const signOut = () => {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      console.log("Signed out successfully");
    }).catch((error) => {
      // An error happened.
    });
   }
  
  return (
    <StyledButton onClick={()=>signOut()}>
      SIGN OUT
    </StyledButton>
  )
}

export default SignOutButton;
