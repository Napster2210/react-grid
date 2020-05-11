import React from 'react';
import Header from './components/Header';
import Container from './components/Container';
import Users from './components/Users';

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Users />
      </Container>
    </>
  );
}

export default App;
