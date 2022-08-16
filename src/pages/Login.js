import React from 'react';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
const Container = styled.div`
height:100vh;
width:100%;
display:flex;
justify-content:center;
align-items:center;
`

const LoginPanel = styled.div`
display:flex;
flex-direction:column;
width:30%;
height:30%;
border:1px solid grey;
border-radius:20px;

`
const Title = styled.h1`

`
const Input = styled.input``
const LoginButton = styled.button``
const RegisterButton = styled.button``
const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (type) =>{
        console.log(type)
        if(type === "login"){
            navigate('/');
        }
    }
    return (
        <Container>
            <LoginPanel>
                <Title>Bug Tracker Login</Title>
                <Input placeholder="Enter Username"/>
                <Input type='password' placeholder='Enter Password'/>
                <LoginButton onClick={()=>handleSubmit("login")}>Login</LoginButton>
                <RegisterButton onClick={()=>handleSubmit("register")}>Register</RegisterButton>
            </LoginPanel>
        </Container>
    );
};

export default Login;