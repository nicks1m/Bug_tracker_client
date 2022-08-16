import './App.css';
import styled from 'styled-components'
import Nav from './components/Nav'
import Project from './components/Project'

const Container = styled.div`
background-color:#fafafa;
min-height:100vh;

`

function App() {
  return (
    <Container >
      <Project />
    </Container>
  );
}

export default App;
