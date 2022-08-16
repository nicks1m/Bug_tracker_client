import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    padding:15px;
    border-bottom:1px solid black;
    display:flex;
`

const Title = styled.div`
    flex:${props => props.flex};
    margin:15px;
    font-weight:700;

`

const IssueFIlterBar = () => {
    return (
        <Container>
            <Title flex='1'>Type</Title>
            <Title flex='1'>Id</Title>
            <Title flex='2'>Summary</Title>
            <Title flex='1'>Reporter</Title>
            <Title flex='1'>Assignee</Title>
            <Title flex='1'>Priority</Title>
            <Title flex='1'>Date Created</Title>
            <Title flex='1'>Date Due</Title>
            <Title flex='1'>Status</Title>
        </Container>
    );
};

export default IssueFIlterBar;