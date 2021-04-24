import React, { Component } from 'react';
import styled from 'styled-components';
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

const StyledFBButton = styled.button`
    margin:10px auto;
    background-color:#43609C;
    color:white;
    width:300px;
    height:40px;
`;


class LogInWithEmail extends Component {
  render() {
    return (
      <Container>
        <LoginContainer>
          <StyledH1>
            SIGN UP WITH EMAIL
          </StyledH1>
          <StyledFormDiv>
            <StyledForm>
              <StyledInput placeholder="Username" />
              <StyledInput placeholder="Password" />
              <Submit type="submit">
                SUBMIT
              </Submit>
            </StyledForm>
            <p>OR</p>
            <StyledFBButton>
              LOG IN WITH FACEBOOK
            </StyledFBButton>
            <Link to="loginwithphone">
              <Submit>
                LOGIN WITH PHONE(OTP)
              </Submit>
            </Link>
            <p>
              New User
            <Link to="/signin">
                Register
            </Link>
            </p>
          </StyledFormDiv>
        </LoginContainer>
      </Container>
    )
  }
}

export default LogInWithEmail;