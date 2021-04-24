import React from 'react';
import{
    Container, FormWrap,Icon,FormContent,Form,FormH1,FormLabel,FormInput,FormButton,Text
}from './SignInElement';

export const Signin = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>
                    Dream11
                    </Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlfor='for'>Email</FormLabel>
                            <FormInput type='email' required/>
                            <FormLabel htmlfor='for'>Password</FormLabel>
                            <FormInput type='password' required/>
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot Password</Text>
                            <FormButton type='submit'>Signup</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}
