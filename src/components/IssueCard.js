import React from 'react';
import styled from 'styled-components'
const Container = styled.div`
display:flex;
padding:15px;

&:hover{
    background-color:lightgrey;
}
`
const Title = styled.div`
flex:${props => props.flex};
margin:15px;
overflow:auto;
`
const IssueCard = () => {
    return (
        <Container>
            <Title flex='1'>Bug</Title>
            <Title flex='1'>10213</Title>
            <Title flex='2'>UI needs fixing</Title>
            <Title flex='1'>Reporter</Title>
            <Title flex='1'>Assignee</Title>
            <Title flex='1'>Priority</Title>
            <Title flex='1'>Date Created</Title>
            <Title flex='1'>Date Due</Title>
            <Title flex='1'>Status</Title>
        </Container>
    );
};

export default IssueCard;