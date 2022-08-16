import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const Container = styled.div`
background-color:white;
height:10%;
padding:15px 15px;
ul{
    padding:0;
    margin:0;
    
}

`
const Button = styled.button`

border:none;
background-color:transparent;
font-size:1rem;
height:2rem;
margin:0 1rem;
border-radius:10%;
transition:0.3s;
font-weight:900;

&:hover{
    cursor:pointer;
    background-color:#ccffd9;
    color:#0f9932;
}
`
const CreateButton = styled.button`
background-color: #02c733;
font-size:1rem;
font-weight:900;
color:white;
border:none;
width:5rem;
height:2rem;
border-radius:10%;

&:hover{
    cursor:pointer;
}
`

const Nav = () => {
    return (
        <Container>
            <ul>
                <Button>Bug Tracker</Button>
                <Button>Dashboard</Button>
                <Button>Projects</Button>
                <Button>People</Button>
                <CreateButton>Create</CreateButton>
            </ul>
        </Container>
    );
};

export default Nav;