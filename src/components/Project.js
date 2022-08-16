import React from 'react';
import styled from 'styled-components'
import Nav from './Nav'
import IssueCard from './IssueCard';
import IssueFilterBar from './IssueFilterBar';

const Container = styled.div`
height:100vh;
`
const Body = styled.div`
border: 1px solid black;
height:100%;
display:flex;
`
const LeftPanel = styled.div`
display:flex;
flex-direction:column;
width:20%;
border:1px solid black;
height:100%;
padding:15px;

`
const RightPanel = styled.div`
display:flex;
flex-direction:column;
width:100%;
border:1px solid black;
height:100%;

`
const ProjectName = styled.h3``
const ProjectType = styled.h4``
const ProjectPath = styled.span``
const InfoContainer = styled.div`
padding:15px;
`

const IssueList = styled.div``

const Project = () => {
    return (
        <Container>
            <Nav />
            <Body>
                <LeftPanel>
                    <ProjectName>Project Name</ProjectName>
                    <ProjectType>Project Type</ProjectType>
                    <h4>Issues</h4>
                    <h4>Components</h4>
                </LeftPanel>
                <RightPanel>
                    <InfoContainer>
                        <ProjectPath>Path/To/Project</ProjectPath>
                        <h1>Issues</h1>
                    </InfoContainer>
                    <IssueList>
                        <IssueFilterBar />
                        <IssueCard></IssueCard>
                    </IssueList>
                </RightPanel>
            </Body>
        </Container>
    );
};

export default Project;